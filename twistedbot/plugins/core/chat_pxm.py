
from twistedbot.plugins.base import PluginChatBase
from twistedbot.behavior_tree import PXminus


class ThisPXminus(PluginChatBase):
    @property
    def command_verb(self):
        return "pxm"

    @property
    def help(self):
        return "peek against x direction"

    def command(self, sender, command, args):
        self.world.bot.behavior_tree.new_command(PXminus)


plugin = ThisPXminus
