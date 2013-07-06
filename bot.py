import signal
import argparse
import json

import twistedbot.web_comm as web_comm

import syspath_fix

syspath_fix.update_sys_path()

from twisted.internet import reactor
from twisted.protocols import basic
from twisted.protocols.basic import LineReceiver
from twisted.internet.protocol import Factory
from twisted.internet.defer import inlineCallbacks

import twistedbot.factory as factory
import twistedbot.config as config
import twistedbot.logbot as logbot
from twistedbot.world import World


log = logbot.getlogger("MAIN")


class WebProtocol(LineReceiver):
    "Receives commands from the webinterface - currently via telnet."

    def __init__(self, factory, world):
        self.factory = factory
        self.world = world
        self.weblog = logbot.newWebLogger(self)
        self.web_comm = web_comm.WebComm(self, self.weblog)

    def lineReceived(self, line):
        "processes the command"
        self.weblog.sendLine("received command %s\r\n\r" % line)
        self.world.chat.process_command_line(line)
        if line.strip() == "q9bl":
            print "sending webint"
            self.web_comm.send_chunk_to_webinterface()
        else:
            print "process"
            self.world.chat.process_command_line(line)


    def send_chunk_to_webinterface(self):
        blackboard = self.world.bot.behavior_tree.blackboard
        bot_object = blackboard.bot_object
        bot_block = blackboard.bot_standing_on_block(bot_object)

        chunk_x = bot_block.coords.x >> 4
        chunk_z = bot_block.coords.z >> 4

        block_types = self.world.grid.get_chunk((chunk_x, chunk_z)).block_types

        block_types_json = [[0 for i in range(8)] for j in range(16)]

        for i in range(0, 16):
            for j in range(0, 8):
                if block_types[i] != None:
                    block_types_json[i][j] = json.dumps(list(block_types[i][j * 512:j * 512 + 512]))
                else:
                    block_types_json[i][j] = list(0 for k in range(0, 512))

        weblog = logbot.getWebLogger()
        weblog.sendLine("%s\r\n\r" % json.dumps([bot_block.coords.x, bot_block.coords.y, bot_block.coords.z]))

        for i in range(0, 16):
            for j in range(0, 8):
                weblog.sendLine("%s\r\n\r" % block_types_json[i][j])


class WebClientFactory(Factory):
    "Instantiates a connection with the webinterface - currently via telnet."

    def __init__(self, world):
        self.world = world

    def buildProtocol(self, addr):
        return WebProtocol(self, self.world)


class ConsoleChat(basic.LineReceiver):
    from os import linesep as delimiter

    def __init__(self, world):
        self.world = world

    def connectionMade(self):
        log.msg("terminal chat available")

    def lineReceived(self, line):
        try:
            self.world.chat.process_command_line(line)
        except Exception as e:
            logbot.exit_on_error(e)


def start():
    parser = argparse.ArgumentParser(description='Bot arguments.')
    parser.add_argument('--serverhost', default=config.SERVER_HOST,
                        dest='serverhost', help='Minecraft server host')
    parser.add_argument('--serverport', type=int, default=config.SERVER_PORT,
                        dest='serverport', help='Minecraft server port')
    parser.add_argument('--botname', default=config.USERNAME,
                        dest='botname',
                        help='username that will be used by the bot')
    parser.add_argument('--botpass', default=config.PASSWORD,
                        dest='botpass',
                        help='password that will be used by the bot')
    parser.add_argument('--botemail', default=config.EMAIL,
                        dest='botemail',
                        help='email address that will be used by the bot')
    parser.add_argument('--onlinemode',
                        action='store_true',
                        help='Authenticate with Mojang')
    parser.add_argument('--use_encryption',
                        action='store_true',
                        help='use encryption, turned true if onlinemode used')
    parser.add_argument('--commandername', default=config.COMMANDER,
                        dest='commandername',
                        help='your username that you use in Minecraft')
    parser.add_argument('--log2file',
                        action='store_true',
                        help='Save log data to file')
    args = parser.parse_args()
    if args.log2file:
        logbot.start_bot_filelog()
    config.USERNAME = args.botname
    config.PASSWORD = args.botpass
    config.EMAIL = args.botemail
    config.USE_ENCRYPTION = args.use_encryption or args.onlinemode
    config.ONLINE_LOGIN = args.onlinemode
    if config.USE_ENCRYPTION:
        factory.import_encryption()
    config.COMMANDER = args.commandername.lower()
    host = args.serverhost
    port = args.serverport
    world = World(host=host, port=port, commander_name=args.commandername, bot_name=args.botname)
    try:
        from twisted.internet import stdio

        stdio.StandardIO(ConsoleChat(world))
    except ImportError:
        log.msg("no terminal chat available")
    mc_factory = factory.MineCraftFactory(world)

    def customKeyboardInterruptHandler(signum, stackframe):
        log.msg("CTRL-C from user, exiting....")
        mc_factory.log_connection_lost = False
        reactor.callFromThread(reactor.stop)

    @inlineCallbacks
    def connect():
        if config.ONLINE_LOGIN:
            yield mc_factory.online_auth()
        if mc_factory.clean_to_connect:
            reactor.connectTCP(host, port, mc_factory) # connects to the minecraft server

    reactor.listenTCP(9393, WebClientFactory(world)) # listens for incoming connections - currently via telnet
    connect()

    signal.signal(signal.SIGINT, customKeyboardInterruptHandler)
    reactor.addSystemEventTrigger("before", "shutdown", world.on_shutdown)
    reactor.run()


if __name__ == '__main__':
    start()
