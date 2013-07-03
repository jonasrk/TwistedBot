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
					
					
					
					if (n[i*3 + j + 1] == "moss stone"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/stoneMoss.png>";
					}
					if (n[i*3 + j + 1] == "gold ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/oreGold.png>";
					}
					if (n[i*3 + j + 1] == "gold ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/oreGold.png>";
					}
					if (n[i*3 + j + 1] == "gold ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/oreGold.png>";
					}
					if (n[i*3 + j + 1] == "gold ore"){
						var modify = document.getElementById("bb" + i + j);
						modify.innerHTML = "<img height=40 width=40 src=/static/blocks/oreGold.png>";
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