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
			
			var rows = 11
			
			for (var i=-10; i < rows; i++){
				
				for (var j=-10; j < rows; j++){
					
					var block_name = n[(j+10)*21 + (i+10) + 1]
					
					console.log(document.getElementById("bb" + i + j));
				
					if (block_name == "grass block"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/grass_top.png>";
					}
					
					else if (block_name == "undefined"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/stonebrick.png>";
					}
					
					else if (block_name == "dirt"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/dirt.png>";
					}
					
					else if (block_name == "ice"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/ice.png>";
					}
					
					else if (block_name == "cobblestone"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/stonebrick.png>";
					}
					
					else if (block_name == "stone"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/stonebrick.png>";
					}
					
					else if (block_name == "leaves"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/leaves.png>";
					}
					
					else if (block_name == "sand"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/sand.png>";
					}
					
					else if (block_name == "gravel"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/gravel.png>";
					}
					
					else if (block_name == "gold ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/oreGold.png>";
					}
					
					else if (block_name == "iron ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/oreIron.png>";
					}
					
					else if (block_name == "wood"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/wood.png>";
					}
					
					else if (block_name == "wool"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/sponge.png>";
					}
					
					else if (block_name == "sponge"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/sponge.png>";
					}
					
					else if (block_name == "dandelion"){ //TODO
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/stoneMoss.png>";
					}
					
					else if (block_name == "rose"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/rose.png>";
					}
					
					else if (block_name == "brown mushroom"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/mushroom_brown.png>";
					}
					
					else if (block_name == "red mushroom"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/mushroom_red.png>";
					}
					
					else if (block_name == "moss stone"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/stoneMoss.png>";
					}
					
					else if (block_name == "obsidian"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/obsidian.png>";
					}
					
					else if (block_name == "cactus"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/cactus_top.png>";
					}
					
					else if (block_name == "pumpkin"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/pumpkin_top.png>";
					}
					
					else if (block_name == "netherrack"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/netherBrick.png>";
					}
					
					else if (block_name == "soul sand"){ //TODO
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/sand.png>";
					}
					
					else if (block_name == "mycelium"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/mycel_top.png>";
					}
					
					else if (block_name == "lily pad"){ //TODO
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/stoneMoss.png>";
					}
					
					else if (block_name == "end stone"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/endframe_top.png>";
					}
					
					else if (block_name == "cocoa pod"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/cocoa_2.png>";
					}
					
					else if (block_name == "nether quartz ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/netherquartz.png>";
					}
					
					else if (block_name == "leaves"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/leaves.png>";
					}
					
					else if (block_name == "coal ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/oreCoal.png>";
					}
					
					else if (block_name == "diamond ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/oreDiamond.png>";
					}
					
					else if (block_name == "cobweb"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/web.png>";
					}
					
					else if (block_name == "grass"){ //TODO double?
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/grass_top.png>";
					}
					
					else if (block_name == "wheat crops"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/crop.png>";
					}
					
					else if (block_name == "gravel"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/gravel.png>";
					}
					
					else if (block_name == "still water"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/water.png>";
					}
					
					else if (block_name == "still lava"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/lava.png>";
					}
					
					else if (block_name == "redstone ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/oreRedstone.png>";
					}
					
					else if (block_name == "glowing redstone ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/blockRedstone.png>";
					}
					
					else if (block_name == "glass"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/glass.png>";
					}
										
					else if (block_name == "snow"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/snow_side.png>";
					}
					
					else if (block_name == "snow block"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/snow.png>";
					}
					
					else if (block_name == "clay block"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/clay.png>";
					}
					
					else if (block_name == "sugar cane"){ //TODO
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/stoneMoss.png>";
					}
					
					else if (block_name == "glowstone block"){ //TODO
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/stoneMoss.png>";
					}
					
					else if (block_name == "lapis lazuli ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/oreLapis.png>";
					}
					
					else if (block_name == "melon block"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/melon_top.png>";
					}
					
					else if (block_name == "nether wart block"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/netherStalk_1.png>";
					}
					
					else if (block_name == "emerald ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/oreEmerald.png>";
					}
					
					else if (block_name == "carrots"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/carrots_3.png>";
					}
					
					else if (block_name == "potatoes"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/potatoes_3.png>";
					}
					
					else if (block_name == "nether quartz ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=20 width=20 src=/static/blocks/netherquartz.png>";
					}
					
					
					else{
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = block_name;
					}
					
				}
				
			}
			var modify = document.getElementById("bb00");
			modify.innerHTML = "<img height=20 width=20 src=/static/blocks/pumpkin_face.png>";
	    }
		}
		request.send();
   }