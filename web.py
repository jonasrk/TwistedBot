"""
A prototype webinterface for the Minecraft Bot TwistedBot and modified versions.
TODO: replace telnet with something smart.
"""

__author__ = 'jonas'
__date__ = '02.07.13'

from bottle import route, run
import telnetlib

@route('/bot')
def login_form():
    return '''<!DOCTYPE html>
                <html>
                    <head>
                        <script>
                           function post_to_url(path) {
                                request=new XMLHttpRequest();
                                request.open("GET",path,true);
                                request.onreadystatechange = function(){

	                            if ((request.readyState===4) && (request.status===200)) {
	                            	var modify = document.getElementById('output');
	                            	modify.innerHTML += "<br>" + request.responseText;
	                            }

                                }

                                request.send();
                            }

                        </script>
                    </head>
                    <body>
                        <button onclick="post_to_url(&quot;http://localhost:8080/button/xp&quot;)">xp</button>
                        <button onclick="post_to_url(&quot;http://localhost:8080/button/xm&quot;)">xm</button>
                        <button onclick="post_to_url(&quot;http://localhost:8080/button/zp&quot;)">zp</button>
                        <button onclick="post_to_url(&quot;http://localhost:8080/button/zm&quot;)">zm</button>
                        <button onclick="post_to_url(&quot;http://localhost:8080/button/pxp&quot;)">pxp</button>
                        <button onclick="post_to_url(&quot;http://localhost:8080/button/pxm&quot;)">pxm</button>
                        <button onclick="post_to_url(&quot;http://localhost:8080/button/qbl&quot;)">qbl</button>
                        <button onclick="post_to_url(&quot;http://localhost:8080/button/q9bl&quot;)">q9bl</button>
                        <div id="output"></div>
                    </body>
                </html>
                '''

@route('/button/<command>')
def button(command):
    tel = telnetlib.Telnet("localhost", 9393)
    tel.write("%s\r\n" % command)
    text = tel.read_until("\r\n")
    print "Bot says: ", text
    return "Bot says: ", text

run(host='localhost', port=8080, debug=True)