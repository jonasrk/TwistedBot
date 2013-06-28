
from twistedbot.plugins.base import PluginChatBase
from twistedbot.behavior_tree import Zminus


class ThisZminus(PluginChatBase):
    @property
    def command_verb(self):
        return "zm"

    @property
    def help(self):
        return "move one block against z direction"

    def command(self, sender, command, args):
        self.world.bot.behavior_tree.new_command(Zminus)


plugin = ThisZminus
