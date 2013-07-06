__author__ = 'jonas'

import json


class WebComm():

    def __init__(self, webprotocol, weblog):
        self.webprotocol = webprotocol
        self.weblog = weblog

    def parse_command(self, command):
        if command.strip() == "q9bl":
            self.send_chunk_to_webinterface()
        else:
            self.webprotocol.world.chat.process_command_line(command)

    def send_chunk_to_webinterface(self):
        blackboard = self.webprotocol.world.bot.behavior_tree.blackboard
        bot_object = blackboard.bot_object
        bot_block = blackboard.bot_standing_on_block(bot_object)

        chunk_x = bot_block.coords.x >> 4
        chunk_z = bot_block.coords.z >> 4

        block_types = self.webprotocol.world.grid.get_chunk((chunk_x, chunk_z)).block_types

        block_types_json = [[0 for i in range(8)] for j in range(16)]

        for i in range(0, 16):
            for j in range(0, 8):
                if block_types[i] != None:
                    block_types_json[i][j] = json.dumps(list(block_types[i][j * 512:j * 512 + 512]))
                else:
                    block_types_json[i][j] = list(0 for k in range(0, 512))

        self.weblog.sendLine("%s\r\n\r" % json.dumps([bot_block.coords.x, bot_block.coords.y, bot_block.coords.z]))

        for i in range(0, 16):
            for j in range(0, 8):
                self.weblog.sendLine("%s\r\n\r" % block_types_json[i][j])