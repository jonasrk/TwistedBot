
from twistedbot.plugins.base import PluginChatBase
from twistedbot.behavior_tree import Xminus


class ThisXminus(PluginChatBase):
    @property
    def command_verb(self):
        return "xm"

    @property
    def help(self):
        return "move one block against x direction"

    def command(self, sender, command, args):
        self.world.bot.behavior_tree.new_command(Xminus)


plugin = ThisXminus
