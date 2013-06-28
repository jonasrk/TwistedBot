
from twistedbot.plugins.base import PluginChatBase
from twistedbot.behavior_tree import QBl


class ThisQBl(PluginChatBase):
    @property
    def command_verb(self):
        return "qbl"

    @property
    def help(self):
        return "query the block below"

    def command(self, sender, command, args):
        self.world.bot.behavior_tree.new_command(QBl)


plugin = ThisQBl
