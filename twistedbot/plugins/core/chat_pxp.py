
from twistedbot.plugins.base import PluginChatBase
from twistedbot.behavior_tree import PXplus


class ThisPXplus(PluginChatBase):
    @property
    def command_verb(self):
        return "pxp"

    @property
    def help(self):
        return "peek in x direction"

    def command(self, sender, command, args):
        self.world.bot.behavior_tree.new_command(PXplus)


plugin = ThisPXplus
