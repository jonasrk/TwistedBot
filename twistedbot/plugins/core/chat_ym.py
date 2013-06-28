
from twistedbot.plugins.base import PluginChatBase
from twistedbot.behavior_tree import Yminus


class ThisYminus(PluginChatBase):
    @property
    def command_verb(self):
        return "ym"

    @property
    def help(self):
        return "move one block against y direction"

    def command(self, sender, command, args):
        self.world.bot.behavior_tree.new_command(Yminus)


plugin = ThisYminus
