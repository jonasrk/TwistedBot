<!DOCTYPE html>
				<html>
					<head>
						<script src="/static/script.js"> </script>
					</head
					<body>
						<button onclick="post_to_url(&quot;http://localhost:8080/button/xp&quot;)">xp</button>
						<button onclick="post_to_url(&quot;http://localhost:8080/button/xm&quot;)">xm</button>
						<button onclick="post_to_url(&quot;http://localhost:8080/button/zp&quot;)">zp</button>
						<button onclick="post_to_url(&quot;http://localhost:8080/button/zm&quot;)">zm</button>
						<button onclick="post_to_url(&quot;http://localhost:8080/button/pxp&quot;)">pxp</button>
						<button onclick="post_to_url(&quot;http://localhost:8080/button/pxm&quot;)">pxm</button>
						<!-- <button onclick="query_to_url(&quot;http://localhost:8080/query/qbl&quot;)">qbl</button> -->
						<button onclick="query_to_url(&quot;http://localhost:8080/query/q9bl&quot;)">q9bl</button>
						<button onclick="redraw_vis(&quot;http://localhost:8080/query/q9bl&quot;)">q9bl loop</button>
						<button onclick="stop_redraw_vis()">stop q9bl loop</button>
						<button onclick="draw_canvas()">canvas</button>
						<br>
						x -><br>
						z<br>
						|<br>
						v<br>
						
						<canvas id="myCanvas" width="1000" height="600"></canvas>
						
						<div id="output"></div>
					</body>
				</html>