function send_command(path) {

    var request = new XMLHttpRequest();
    request.open("GET", path, true);
    request.onreadystatechange = function () {

        if ((request.readyState === 4) && (request.status === 200)) {
            var modify = document.getElementById('log_area');
            modify.innerHTML = request.responseText + "<br>" +  modify.innerHTML;
        }

    };

    request.send();
}

function redraw_vis(path) {

    redraw_interval = setInterval(function () {
        query_chunk(path)
    }, 3000);

}

function stop_redraw_vis() {

    redraw_interval = window.clearInterval(redraw_interval)

}

function query_chunk(path) {

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    canvas.width = canvas.width; //clear canvas

    var request = new XMLHttpRequest();
    request.open("GET", path, true);
    request.onreadystatechange = function () {

        if ((request.readyState === 4) && (request.status === 200)) {

            var blocks_and_botblock_and_layers = JSON.parse(request.responseText);
            var blocks_json = blocks_and_botblock_and_layers[0];
            var bot_block = blocks_and_botblock_and_layers[1];
            var layers = blocks_and_botblock_and_layers[2];
            var canvas_offset = layers * 15;

            var img = new Image();

            for (var layer = 0; layer < layers; layer++) {

                for (var rows = 0; rows < 16; rows++) {

                    for (var cols = 15; cols >= 0; cols--) {

                        var block_name = blocks_json[cols][layer][rows];

                        var x_coord = 18 * (cols + rows);
                        var y_coord = canvas_offset + 9 * (rows - cols) - (layer * 20);

                        if (block_name != "0") {

                            img.src = "/static/blocks2/" + block_name + ".png";
                            context.drawImage(img, x_coord, y_coord, 40, 40);
                        }

                    }

                }

            }

            var x_coord = 18 * (bot_block[0] % 16 + bot_block[2] % 16);
            var y_coord = canvas_offset + 9 * (bot_block[2] % 16 - bot_block[0] % 16) - ((((layers - 1) / 2) + 2) * 20);
            img.src = "/static/blocks2/bot.png";
            context.drawImage(img, x_coord, y_coord, 40, 80);

        }

    };
    request.send();
}