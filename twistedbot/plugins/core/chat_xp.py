
from twistedbot.plugins.base import PluginChatBase
from twistedbot.behavior_tree import Xplus


class ThisXplus(PluginChatBase):
    @property
    def command_verb(self):
        return "xp"

    @property
    def help(self):
        return "move one block in x direction"

    def command(self, sender, command, args):
        self.world.bot.behavior_tree.new_command(Xplus)


plugin = ThisXplus
