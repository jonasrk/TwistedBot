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
						<br>
						x -><br>
						z<br>
						|<br>
						v<br>
						<table border=1>
							
							%for x in range(-10,11):
								<tr>
								%for y in range (-10,11):
									<td id="bb{{x}}{{y}}"></td>
								%end
							%end
						</table>
						<div id="output"></div>
					</body>
				</html>