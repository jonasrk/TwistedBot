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

   function query_to_url(path) {
	   request=new XMLHttpRequest();
	   request.open("GET",path,true);
	   request.onreadystatechange = function(){
		if ((request.readyState===4) && (request.status===200)) {
			
			var str = request.responseText;
			var n=str.split("-");
			
			var rows = 3
			
			for (var i=0; i < rows; i++){
				
				for (var j=0; j < rows; j++){
					
					
				
					if (n[i*3 + j + 1] == "grass block"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/grass_top.png>";
					}
					
					else if (n[i*3 + j + 1] == "dirt"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/dirt.png>";
					}
					
					else if (n[i*3 + j + 1] == "cobblestone"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/stonebrick.png>";
					}
					
					else if (n[i*3 + j + 1] == "stone"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/stonebrick.png>";
					}
					
					else if (n[i*3 + j + 1] == "leaves"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/leaves.png>";
					}
					
					else if (n[i*3 + j + 1] == "sand"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/sand.png>";
					}
					
					else if (n[i*3 + j + 1] == "gravel"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/gravel.png>";
					}
					
					else if (n[i*3 + j + 1] == "gold ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/oreGold.png>";
					}
					
					else if (n[i*3 + j + 1] == "iron ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/oreIron.png>";
					}
					
					else if (n[i*3 + j + 1] == "wood"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/wood.png>";
					}
					
					else if (n[i*3 + j + 1] == "wool"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/sponge.png>";
					}
					
					else if (n[i*3 + j + 1] == "sponge"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/sponge.png>";
					}
					
					else if (n[i*3 + j + 1] == "dandelion"){ //TODO
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/stoneMoss.png>";
					}
					
					else if (n[i*3 + j + 1] == "rose"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/rose.png>";
					}
					
					else if (n[i*3 + j + 1] == "brown mushroom"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/mushroom_brown.png>";
					}
					
					else if (n[i*3 + j + 1] == "red mushroom"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/mushroom_red.png>";
					}
					
					else if (n[i*3 + j + 1] == "moss stone"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/stoneMoss.png>";
					}
					
					else if (n[i*3 + j + 1] == "obsidian"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/obsidian.png>";
					}
					
					else if (n[i*3 + j + 1] == "cactus"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/cactus_top.png>";
					}
					
					else if (n[i*3 + j + 1] == "pumpkin"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/pumpkin_top.png>";
					}
					
					else if (n[i*3 + j + 1] == "netherrack"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/netherBrick.png>";
					}
					
					else if (n[i*3 + j + 1] == "soul sand"){ //TODO
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/sand.png>";
					}
					
					else if (n[i*3 + j + 1] == "mycelium"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/mycel_top.png>";
					}
					
					else if (n[i*3 + j + 1] == "lily pad"){ //TODO
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/stoneMoss.png>";
					}
					
					else if (n[i*3 + j + 1] == "end stone"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/endframe_top.png>";
					}
					
					else if (n[i*3 + j + 1] == "cocoa pod"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/cocoa_2.png>";
					}
					
					else if (n[i*3 + j + 1] == "nether quartz ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/netherquartz.png>";
					}
					
					else if (n[i*3 + j + 1] == "leaves"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/leaves.png>";
					}
					
					else if (n[i*3 + j + 1] == "coal ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/oreCoal.png>";
					}
					
					else if (n[i*3 + j + 1] == "diamond ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/oreDiamond.png>";
					}
					
					else if (n[i*3 + j + 1] == "cobweb"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/web.png>";
					}
					
					else if (n[i*3 + j + 1] == "grass"){ //TODO double?
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/grass_top.png>";
					}
					
					else if (n[i*3 + j + 1] == "wheat crops"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/crop.png>";
					}
					
					else if (n[i*3 + j + 1] == "gravel"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/gravel.png>";
					}
					
					else if (n[i*3 + j + 1] == "still water"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/water.png>";
					}
					
					else if (n[i*3 + j + 1] == "still lava"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/lava.png>";
					}
					
					else if (n[i*3 + j + 1] == "redstone ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/oreRedstone.png>";
					}
					
					else if (n[i*3 + j + 1] == "glowing redstone ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/blockRedstone.png>";
					}
					
					else if (n[i*3 + j + 1] == "glass"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/glass.png>";
					}
										
					else if (n[i*3 + j + 1] == "snow"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/snow_side.png>";
					}
					
					else if (n[i*3 + j + 1] == "snow block"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/snow.png>";
					}
					
					else if (n[i*3 + j + 1] == "clay block"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/clay.png>";
					}
					
					else if (n[i*3 + j + 1] == "sugar cane"){ //TODO
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/stoneMoss.png>";
					}
					
					else if (n[i*3 + j + 1] == "glowstone block"){ //TODO
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/stoneMoss.png>";
					}
					
					else if (n[i*3 + j + 1] == "lapis lazuli ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/oreLapis.png>";
					}
					
					else if (n[i*3 + j + 1] == "melon block"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/melon_top.png>";
					}
					
					else if (n[i*3 + j + 1] == "nether wart block"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/netherStalk_1.png>";
					}
					
					else if (n[i*3 + j + 1] == "emerald ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/oreEmerald.png>";
					}
					
					else if (n[i*3 + j + 1] == "carrots"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/carrots_3.png>";
					}
					
					else if (n[i*3 + j + 1] == "potatoes"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/potatoes_3.png>";
					}
					
					else if (n[i*3 + j + 1] == "nether quartz ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/netherquartz.png>";
					}
					
					
					else{
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = n[i*3 + j + 1];
					}
					
				}
				
			}
	    }
		}
		request.send();
   }