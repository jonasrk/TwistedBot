<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/static/psicraft_webinterface.css">
        <script src="/static/psicraft_webinterface.js"></script>
    </head
    <body>
        
        <button onclick="send_command(&quot;http://localhost:8080/button/xp&quot;)">x+</button>
        <button onclick="send_command(&quot;http://localhost:8080/button/xm&quot;)">x-</button>
        <button onclick="send_command(&quot;http://localhost:8080/button/zp&quot;)">z+</button>
        <button onclick="send_command(&quot;http://localhost:8080/button/zm&quot;)">z-</button>
        <button onclick="send_command(&quot;http://localhost:8080/button/pxp&quot;)">peek@x+</button>
        <button onclick="send_command(&quot;http://localhost:8080/button/pxm&quot;)">peek@x-</button>
        <button onclick="query_and_draw_chunk(&quot;http://localhost:8080/query/q9bl&quot;)">draw chunk</button>
        <button onclick="redraw_vis(&quot;http://localhost:8080/query/q9bl&quot;)">draw chunk continuously</button>
        <button onclick="stop_redraw_vis()">stop drawing chunk continuously</button>
        
        <p><textarea id="log_area" cols="70"></textarea></p>
        
        <br>
        x /^<br>
        <br>
        z<br>
        \<br>
        v<br>
        
        <div class="wrapper">
            <canvas id="ChunkCanvas" width="1000" height="600"></canvas>
            <canvas id="BotCanvas" width="1000" height="600"></canvas>
        </div>
    </body>
</html>