"""
A prototype webinterface for the Minecraft Bot TwistedBot and modified versions.
TODO: replace telnet with something smart.
"""

__author__ = 'jonas'
__date__ = '02.07.13'

from bottle import route, run, template, static_file
import telnetlib
import re

@route('/bot')
def login_form():
    return template('web')

@route('/button/<command>')
def button(command):
    tel = telnetlib.Telnet("localhost", 9393)
    tel.write("%s\r\n" % command)
    text = tel.read_until("\r\n\r")
    print "Bot says: ", text
    return "Bot says: ", text

@route('/query/<command>')
def button(command):
    tel = telnetlib.Telnet("localhost", 9393)
    tel.write("%s\r\n" % command)
    text = tel.read_until("\r\n\r")
    text2 = tel.read_until("\r\n\r")
    regex = re.compile("[a-z]*")
    results = re.findall(">.+?0", text2)
    return_string = ""
    for result in results:
        clean = result.strip('>')
        clean = clean.strip('0')
        clean = clean.strip()
        return_string = return_string + "-" + clean
    return return_string

@route('/static/<filename:path>')
def server_static(filename):
    return static_file(filename, root='./')

run(host='localhost', port=8080, debug=True)