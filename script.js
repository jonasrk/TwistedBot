function post_to_url(path) {
    request = new XMLHttpRequest();
    request.open("GET", path, true);
    request.onreadystatechange = function () {

        if ((request.readyState === 4) && (request.status === 200)) {
            var modify = document.getElementById('output');
            modify.innerHTML += "<br>" + request.responseText;
        }

    }

    request.send();
}

var int = 0

function redraw_vis(path) {

    int = self.setInterval(function () {
        query_to_url(path)
    }, 2000);

}

function stop_redraw_vis() {

    int = window.clearInterval(int)

}

function query_to_url(path) {

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    request = new XMLHttpRequest();
    request.open("GET", path, true);
    request.onreadystatechange = function () {

        if ((request.readyState === 4) && (request.status === 200)) {

            var str = request.responseText;
            var return_stuff = JSON.parse(str);
            var blocks_json = return_stuff[0];
            var bot_block = return_stuff[1];

            var img = new Image();

            var layers = 21;

            for (var y =  0; y < layers; y++) {

                for (var rows = 0; rows < 16; rows++) {

                    for (var cols = 15; cols >= 0; cols--) {

                        var block_name = blocks_json[cols][y][rows];

                        var canvas_offset = layers * 15;

                        var x_coord = 18 * (cols + rows);
                        var y_coord = canvas_offset + 9 * (rows - cols) - (y * 20);

                        if (block_name == "170") {
                            img.src = "/static/blocks2/160.png";
                            context.drawImage(img, x_coord, y_coord, 40, 40);
                        }
                        else if (block_name == "171") {
                            img.src = "/static/blocks2/161.png";
                            context.drawImage(img, x_coord, y_coord, 40, 40);
                        }
                        else if (block_name == "172") {
                            img.src = "/static/blocks2/162.png";
                            context.drawImage(img, x_coord, y_coord, 40, 40);
                        }
                        else if (block_name == "173") {
                            img.src = "/static/blocks2/163.png";
                            context.drawImage(img, x_coord, y_coord, 40, 40);
                        }

                        else if (block_name == "0") {

                        }

                        else {

                            img.src = "/static/blocks2/" + block_name + ".png";
                            context.drawImage(img, x_coord, y_coord, 40, 40);
                        }

                    }

                }

            }

            var x_coord = 18 * (bot_block[0]%16 + bot_block[2]%16);
            var y_coord = canvas_offset + 9 * (bot_block[2]%16 - bot_block[0]%16) - ((((layers-1)/2)+2) * 20);
            img.src = "/static/blocks2/bot.png";
            context.drawImage(img, x_coord, y_coord, 40, 80);

        }

    };
    request.send();
}
   
