
from twistedbot.plugins.base import PluginChatBase
from twistedbot.behavior_tree import Q9Bl


class ThisQ9Bl(PluginChatBase):
    @property
    def command_verb(self):
        return "q9bl"

    @property
    def help(self):
        return "query the 9 block around"

    def command(self, sender, command, args):
        self.world.bot.behavior_tree.new_command(Q9Bl)


plugin = ThisQ9Bl
