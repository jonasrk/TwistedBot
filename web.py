"""
A prototype webinterface for the Minecraft Bot TwistedBot and modified versions.
TODO: replace telnet with something smart.
"""

__author__ = 'jonas'
__date__ = '02.07.13'

from bottle import route, run, template, static_file
import telnetlib
import json


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
    chunk_list = list()
    print "\n\n JSON START \n\n"
    for i in range(0, 16):
        text2 = tel.read_until("\r\n\r")
        text2 = text2.strip()
        chunk_list.extend(json.loads(text2))
        text2 = tel.read_until("\r\n\r")
        text2 = text2.strip()
        chunk_list.extend(json.loads(text2))
        text2 = tel.read_until("\r\n\r")
        text2 = text2.strip()
        chunk_list.extend(json.loads(text2))
        text2 = tel.read_until("\r\n\r")
        text2 = text2.strip()
        chunk_list.extend(json.loads(text2))
        text2 = tel.read_until("\r\n\r")
        text2 = text2.strip()
        chunk_list.extend(json.loads(text2))
        text2 = tel.read_until("\r\n\r")
        text2 = text2.strip()
        chunk_list.extend(json.loads(text2))
        text2 = tel.read_until("\r\n\r")
        text2 = text2.strip()
        chunk_list.extend(json.loads(text2))
        text2 = tel.read_until("\r\n\r")
        text2 = text2.strip()
        chunk_list.extend(json.loads(text2))

    chunk = [[[[0, 0] for i in range(16)] for j in range(256)] for k in range(16)]

    for x in range(16):
        for y in range(256):
            for z in range(16):
                chunk[x][y][z] = chunk_list[y * 16 * 16 + z * 16 + x]

    print "nach array-isierung\n"

    no_block_found = True
    height = 256
    while(no_block_found):
        height = height - 1
        for x in range(16):
            for z in range(16):
                if chunk[x][height][z] != 0:
                    no_block_found = False

    print "nach hoehenfindung\n"

    layers = 21

    chunk_small = [[[[0, 0] for i in range(16)] for j in range(layers)] for k in range(16)]

    for x in range(16):
        for y in range(layers):
            for z in range(16):
                chunk_small[x][y][z] = chunk[x][height-((layers-1)/2)+y][z]



    return_string = ""
    #for result in results:
    #    clean = result.strip('>')
    #    clean = clean.strip('0')
    #    clean = clean.strip()
    #    return_string = return_string + "-" + clean
    return json.dumps(chunk_small)


@route('/static/<filename:path>')
def server_static(filename):
    return static_file(filename, root='./')


run(host='localhost', port=8080, debug=True)