
from twistedbot.plugins.base import PluginChatBase
from twistedbot.behavior_tree import Yplus


class ThisYplus(PluginChatBase):
    @property
    def command_verb(self):
        return "yp"

    @property
    def help(self):
        return "move one block in y direction"

    def command(self, sender, command, args):
        self.world.bot.behavior_tree.new_command(Yplus)


plugin = ThisYplus
