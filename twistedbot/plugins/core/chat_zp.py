
from twistedbot.plugins.base import PluginChatBase
from twistedbot.behavior_tree import Zplus


class ThisZplus(PluginChatBase):
    @property
    def command_verb(self):
        return "zp"

    @property
    def help(self):
        return "move one block in z direction"

    def command(self, sender, command, args):
        self.world.bot.behavior_tree.new_command(Zplus)


plugin = ThisZplus
