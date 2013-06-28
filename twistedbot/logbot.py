
import sys
import os
from datetime import datetime

from twisted.internet import reactor
from twisted.python import log, util


def exit_on_error(_stuff=None, _why=None):
    log.err(_stuff=_stuff, _why=_why)
    try:
        reactor.stop()
    except:
        pass


class MinecraftLogObserver(object):

    def __init__(self, f):
        self.write = f.write
        self.flush = f.flush

    def formatTime(self, when):
        t = datetime.fromtimestamp(when)
        return t.strftime("%H:%M:%S.%f")

    def emit(self, eventDict):
        if "isError" in eventDict and \
                eventDict["isError"] and \
                "header" not in eventDict:
            eventDict["header"] = "-"
        if "header" not in eventDict:
            return
        text = log.textFromEventDict(eventDict)
        if text is None:
            return
        timeStr = self.formatTime(eventDict['time'])
        fmtDict = {'header': eventDict['header'], 'text':
                   text.replace("\n", "\n\t")}
        msgStr = log._safeFormat("[%(header)s] %(text)s\n", fmtDict)
        util.untilConcludes(self.write, timeStr + " " + msgStr)
        util.untilConcludes(self.flush)


class Logger(object):

    def __init__(self, name):
        self.name = name

    def msg(self, *args, **kwargs):
        if "header" not in kwargs:
            kwargs["header"] = self.name
        pass

    def err(self, *args, **kwargs):
        if "header" not in kwargs:
            kwargs["header"] = self.name
        pass


loggers = {}


def getlogger(name):
    if name not in loggers:
        loggers[name] = Logger(name)
    return loggers[name]


def start_filelog(filename=None, kind="other_log"):
    if filename is None:
        filename = "%s.%s.txt" % (kind, datetime.now().strftime("%Y.%m.%d_%H.%M.%S"))
    fullfile = os.getcwd() + filename
    try:
        f = open(filename, "w")
    except IOError as e:
        msg("Cannot open log file %s for writing" % fullfile)
        msg("%s" % e)
        msg("Exiting...")
        sys.exit()
    log.addObserver(MinecraftLogObserver(f).emit)
    msg("Started logging to file %s" % fullfile)


def start_bot_filelog():
    start_filelog(kind="bot_log")


def start_proxy_filelog():
    start_filelog(kind="proxy_log")


log.startLoggingWithObserver(MinecraftLogObserver(sys.stdout).emit, setStdout=0)
default_logger = getlogger("-")
default_logger.msg("Start logging")
msg = default_logger.msg
err = default_logger.err
