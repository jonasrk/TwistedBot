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

var int = 0

function redraw_vis(path){
	
	int = self.setInterval(function(){query_to_url(path)},2000);
	
}

function stop_redraw_vis(){

	int=window.clearInterval(int)

}

function query_to_url(path){
	
	var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
	
			console.log(canvas);
				console.log(context);
	
		  //context.beginPath();
		  //context.moveTo(100, 150);
		  //context.lineTo(450, 50);
		  //context.lineWidth = 15;
		  //context.stroke();
		  

		  
		  request=new XMLHttpRequest();
		  request.open("GET",path,true);
		  request.onreadystatechange = function(){
		  if ((request.readyState===4) && (request.status===200)) {
		  
		  			var str = request.responseText;
		  			var str_json = JSON.parse(str);
		  
		  			console.log(str_json);
		  			
		  			var img=new Image() //creates a variable for a new image
		  
		  
		  			for (var i=-7; i < 7; i++){
		  
		  				for (var j=-7; j < 7; j++){
		  
		  					var block_name = str_json[i+7][j+7];
		  
		  					if (block_name == "1"){
		  					  						img.src= "/static/blocks2/1.png";
		  											context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "2"){
		  					  						img.src= "/static/blocks2/2.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "3"){
		  					  						img.src= "/static/blocks2/3.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "4"){
		  					  						img.src= "/static/blocks2/4.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "5"){
		  					  						img.src= "/static/blocks2/5.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "6"){
		  					  						img.src= "/static/blocks2/6.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "7"){
		  					  						img.src= "/static/blocks2/7.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "8"){
		  					  						img.src= "/static/blocks2/8.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "9"){
		  					  						img.src= "/static/blocks2/9.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "10"){
		  					  						img.src= "/static/blocks2/10.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "11"){
		  					  						img.src= "/static/blocks2/11.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "12"){
		  					  						img.src= "/static/blocks2/12.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "13"){
		  					  						img.src= "/static/blocks2/13.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "14"){
		  					  						img.src= "/static/blocks2/14.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "15"){
		  					  						img.src= "/static/blocks2/15.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "16"){
		  					  						img.src= "/static/blocks2/16.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "17"){
		  					  						img.src= "/static/blocks2/17.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "18"){
		  					  						img.src= "/static/blocks2/18.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "19"){
		  					  						img.src= "/static/blocks2/19.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "20"){
		  					  						img.src= "/static/blocks2/20.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "21"){
		  					  						img.src= "/static/blocks2/21.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "22"){
		  					  						img.src= "/static/blocks2/22.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "23"){
		  					  						img.src= "/static/blocks2/23.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "24"){
		  					  						img.src= "/static/blocks2/24.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "25"){
		  					  						img.src= "/static/blocks2/25.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "26"){
		  					  						img.src= "/static/blocks2/26.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "27"){
		  					  						img.src= "/static/blocks2/27.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "28"){
		  					  						img.src= "/static/blocks2/28.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "29"){
		  					  						img.src= "/static/blocks2/29.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "30"){
		  					  						img.src= "/static/blocks2/30.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "31"){
		  					  						img.src= "/static/blocks2/31.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "32"){
		  					  						img.src= "/static/blocks2/32.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "33"){
		  					  						img.src= "/static/blocks2/33.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "34"){
		  					  						img.src= "/static/blocks2/34.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "35"){
		  					  						img.src= "/static/blocks2/35.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "36"){
		  					  						img.src= "/static/blocks2/36.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "37"){
		  					  						img.src= "/static/blocks2/37.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "38"){
		  					  						img.src= "/static/blocks2/38.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "39"){
		  					  						img.src= "/static/blocks2/39.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "40"){
		  					  						img.src= "/static/blocks2/40.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "41"){
		  					  						img.src= "/static/blocks2/41.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "42"){
		  					  						img.src= "/static/blocks2/42.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "43"){
		  					  						img.src= "/static/blocks2/43.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "44"){
		  					  						img.src= "/static/blocks2/44.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "45"){
		  					  						img.src= "/static/blocks2/45.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "46"){
		  					  						img.src= "/static/blocks2/46.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "47"){
		  					  						img.src= "/static/blocks2/47.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "48"){
		  					  						img.src= "/static/blocks2/48.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "49"){
		  					  						img.src= "/static/blocks2/49.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "50"){
		  					  						img.src= "/static/blocks2/50.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "51"){
		  					  						img.src= "/static/blocks2/51.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "52"){
		  					  						img.src= "/static/blocks2/52.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "53"){
		  					  						img.src= "/static/blocks2/53.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "54"){
		  					  						img.src= "/static/blocks2/54.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "55"){
		  					  						img.src= "/static/blocks2/55.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "56"){
		  					  						img.src= "/static/blocks2/56.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "57"){
		  					  						img.src= "/static/blocks2/57.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "58"){
		  					  						img.src= "/static/blocks2/58.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "59"){
		  					  						img.src= "/static/blocks2/59.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "60"){
		  					  						img.src= "/static/blocks2/60.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "61"){
		  					  						img.src= "/static/blocks2/61.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "62"){
		  					  						img.src= "/static/blocks2/62.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "63"){
		  					  						img.src= "/static/blocks2/63.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "64"){
		  					  						img.src= "/static/blocks2/64.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "65"){
		  					  						img.src= "/static/blocks2/65.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "66"){
		  					  						img.src= "/static/blocks2/66.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "67"){
		  					  						img.src= "/static/blocks2/67.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "68"){
		  					  						img.src= "/static/blocks2/68.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "69"){
		  					  						img.src= "/static/blocks2/69.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "70"){
		  					  						img.src= "/static/blocks2/70.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "71"){
		  					  						img.src= "/static/blocks2/71.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "72"){
		  					  						img.src= "/static/blocks2/72.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "73"){
		  					  						img.src= "/static/blocks2/73.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "74"){
		  					  						img.src= "/static/blocks2/74.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "75"){
		  					  						img.src= "/static/blocks2/75.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "76"){
		  					  						img.src= "/static/blocks2/76.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "77"){
		  					  						img.src= "/static/blocks2/77.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "78"){
		  					  						img.src= "/static/blocks2/78.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "79"){
		  					  						img.src= "/static/blocks2/79.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "80"){
		  					  						img.src= "/static/blocks2/80.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "81"){
		  					  						img.src= "/static/blocks2/81.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "82"){
		  					  						img.src= "/static/blocks2/82.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "83"){
		  					  						img.src= "/static/blocks2/83.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "84"){
		  					  						img.src= "/static/blocks2/84.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "85"){
		  					  						img.src= "/static/blocks2/85.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "86"){
		  					  						img.src= "/static/blocks2/86.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "87"){
		  					  						img.src= "/static/blocks2/87.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "88"){
		  					  						img.src= "/static/blocks2/88.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "89"){
		  					  						img.src= "/static/blocks2/89.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "90"){
		  					  						img.src= "/static/blocks2/90.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "91"){
		  					  						img.src= "/static/blocks2/91.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "92"){
		  					  						img.src= "/static/blocks2/92.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "93"){
		  					  						img.src= "/static/blocks2/93.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "94"){
		  					  						img.src= "/static/blocks2/94.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "95"){
		  					  						img.src= "/static/blocks2/95.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "96"){
		  					  						img.src= "/static/blocks2/96.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "97"){
		  					  						img.src= "/static/blocks2/97.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "98"){
		  					  						img.src= "/static/blocks2/98.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "99"){
		  					  						img.src= "/static/blocks2/99.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "100"){
		  					  						img.src= "/static/blocks2/100.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "101"){
		  					  						img.src= "/static/blocks2/101.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "102"){
		  					  						img.src= "/static/blocks2/102.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "103"){
		  					  						img.src= "/static/blocks2/103.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "104"){
		  					  						img.src= "/static/blocks2/104.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "105"){
		  					  						img.src= "/static/blocks2/105.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "106"){
		  					  						img.src= "/static/blocks2/106.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "107"){
		  					  						img.src= "/static/blocks2/107.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "108"){
		  					  						img.src= "/static/blocks2/108.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "109"){
		  					  						img.src= "/static/blocks2/109.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "110"){
		  					  						img.src= "/static/blocks2/110.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "111"){
		  					  						img.src= "/static/blocks2/111.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "112"){
		  					  						img.src= "/static/blocks2/112.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "113"){
		  					  						img.src= "/static/blocks2/113.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "114"){
		  					  						img.src= "/static/blocks2/114.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "115"){
		  					  						img.src= "/static/blocks2/115.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "116"){
		  					  						img.src= "/static/blocks2/116.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "117"){
		  					  						img.src= "/static/blocks2/117.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "118"){
		  					  						img.src= "/static/blocks2/118.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "119"){
		  					  						img.src= "/static/blocks2/119.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "120"){
		  					  						img.src= "/static/blocks2/120.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "121"){
		  					  						img.src= "/static/blocks2/121.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "122"){
		  					  						img.src= "/static/blocks2/122.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "123"){
		  					  						img.src= "/static/blocks2/123.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "124"){
		  					  						img.src= "/static/blocks2/124.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "125"){
		  					  						img.src= "/static/blocks2/125.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "126"){
		  					  						img.src= "/static/blocks2/126.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "127"){
		  					  						img.src= "/static/blocks2/127.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "128"){
		  					  						img.src= "/static/blocks2/128.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "129"){
		  					  						img.src= "/static/blocks2/129.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "130"){
		  					  						img.src= "/static/blocks2/130.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "131"){
		  					  						img.src= "/static/blocks2/131.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "132"){
		  					  						img.src= "/static/blocks2/132.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "133"){
		  					  						img.src= "/static/blocks2/133.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "134"){
		  					  						img.src= "/static/blocks2/134.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "135"){
		  					  						img.src= "/static/blocks2/135.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "136"){
		  					  						img.src= "/static/blocks2/136.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "137"){
		  					  						img.src= "/static/blocks2/137.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "138"){
		  					  						img.src= "/static/blocks2/138.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "139"){
		  					  						img.src= "/static/blocks2/139.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "140"){
		  					  						img.src= "/static/blocks2/140.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "141"){
		  					  						img.src= "/static/blocks2/141.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "142"){
		  					  						img.src= "/static/blocks2/142.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "143"){
		  					  						img.src= "/static/blocks2/143.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "144"){
		  					  						img.src= "/static/blocks2/144.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "145"){
		  					  						img.src= "/static/blocks2/145.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "146"){
		  					  						img.src= "/static/blocks2/146.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "147"){
		  					  						img.src= "/static/blocks2/147.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "148"){
		  					  						img.src= "/static/blocks2/148.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "149"){
		  					  						img.src= "/static/blocks2/149.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "150"){
		  					  						img.src= "/static/blocks2/150.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "151"){
		  					  						img.src= "/static/blocks2/151.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "152"){
		  					  						img.src= "/static/blocks2/152.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "153"){
		  					  						img.src= "/static/blocks2/153.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "154"){
		  					  						img.src= "/static/blocks2/154.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "155"){
		  					  						img.src= "/static/blocks2/155.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "156"){
		  					  						img.src= "/static/blocks2/156.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "157"){
		  					  						img.src= "/static/blocks2/157.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "158"){
		  					  						img.src= "/static/blocks2/158.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "159"){
		  					  						img.src= "/static/blocks2/159.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "170"){
		  					  						img.src= "/static/blocks2/160.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "171"){
		  					  						img.src= "/static/blocks2/161.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else if (block_name == "172"){
		  					  						img.src= "/static/blocks2/162.png";
		  																			context.drawImage(img,40*(i+7),40*(j+7),40,40);
		  					  						}		  
		  					  					else /*(block_name == "173")*/{
		  					  						img.src= "/static/blocks2/163.png>";
		  					  						}
					

			
				}
				
				
				
			
			}	 
   } 
   
   
}
request.send();
}
   
