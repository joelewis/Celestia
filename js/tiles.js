/*TILES*/
tiles = function(){ /*Insert your own tiles here*/
	/* Home */
	tileTitleText(0,0,0,2,2,'','Home','Celestia 12.0','<span style="font-size:14px;"> " Cutting Knots Between Knowledge, Freedom and $$$ " <span>', 'blackGradient');
	tileImageSlider(0,2,0,1,1,'#FF6600','&Technical Events','img/whiteArrow.png',0.5*scale,'Technical Events',0.7);
	tileImageSlider(0,2,1,1,1,'#FF6600','&Non-Technical Events','img/whiteArrow.png',0.5*scale,'<span style="font-size:14px;"> Non-Technical Events <span>',0.7);

	tileLive(0,0,2,3,1,'#669900','external:http://www.w3schools.com/tags/ref_colorpicker.asp','Latest Updates','','','','',3000,'Online Photography guidelines goes public','Rules for Web Designing changes...',"Click here to view full update-log","","");
	
	/*GROUP2: Some tilse */
/*	tileSlideshow(1,0,0,2,2,'','','Slideshow',4000,'img/bg/img1.png','img/bg/img2.jpg','img/bg/img3.jpg','','',"noClick"); // we add a noClick class to let the user know there's no link */
	tileTitleText(1,0,0,2,2,'#336699','Paper Presentation','Paper Presentation','Submit your Papers and Win exciting Prizes');
	tileTitleText(1,2,0,2,1,'#CC3300','Technical Events','TopCoders','Show-Off your coding passion and share our excitement!');
	tileTitleText(1,2,1,2,1,'#FF9900','Technical Events','Web Designing','We Give you the Website Content, You Design the Website with the power of CSS3'); 
	tileTitleText(1,2,2,2,1,'','Technical Events','Technical Quiz',"Talent takes Knowledge to make it of value. Share your knowledge and win Fame and Cash.","blueGradient");
	tileTitleText(1,0,2,2,1,'#336600','Technical Events','Digi-Design',"Let the 'Artist' in you, rhyme with the 'Engineer' in you and design posters for the specified theme");
	
	/*GROUP 3: Another group */
	tileTitleText(2,0,1,3,1,'','Technical Events','Online Events','Submit your entries for Photography and/or Short Film Contests', 'blackGradient');
	tileTitleText(2,1,0,1,1,'green','Technical Events','<span style="font-size:21px;">Marketing Mastermind</span>','');
	tileTitleText(2,2,0,1,1,'','Technical Events','Gaming','','redGradient');
	tileCustom(2,0,0,1,1,"#F90",'&home',"<img src='img/whiteArrow.png' height='64' width='64' style='margin-left:32px;margin-top:16px;'/><div id='title' style='margin-left:15px;margin-top:10px;font-size:13px;'>Go back to Home</div>",'turnedArrow');
    tileTitleText(2,0,2,1,1,'','Technical Events','Dumb-C','','blueGradient');
    tileTitleText(2,1,2,2,1,'','Technical Events','Treasure Hunt','','brownGradient');
    tileTitleText(2,3,0,1,2,'','Technical Events','Surprise Event','','bluelite');
    tileCustom(2,3,2,1,1,"#F90",'&Technical Events',"<img src='img/whiteArrow.png' height='64' width='64' style='margin-left:32px;margin-top:16px;'/><div id='title' style='margin-left:15px;margin-top:10px;font-size:13px;'>Go to Technical Events</div>",'turnedArrow');
    
}

/*Tile Templates */
tileTitleText = function(group,x,y,width,height,bg,linkPage,title,text,optClass){ /* Tile with only a title and description */
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px; margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	<div id='title'>"+title+"</div>\
	<div id='desc'>"+text+"</div>\
	</a>");
}
tileImage = function(group,x,y,bg,linkPage,img,imgSize,optClass){ /* Tile with only an image */
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+scale+"px; height:"+scale+"px; \
	background:"+bg+";'>\
	<img src='"+img+"' height="+imgSize+" width="+imgSize+" \
	style='margin-left: "+(scale-imgSize)*0.5+"px; margin-top: "+(scale-imgSize)*0.5+"px'/>\
	</a>");
}
tileImageAdvanced = function(group,x,y,width,height,bg,linkPage,img,imgSizeWidth,imgSizeHeight,optClass){
	drawHeight = (imgSizeWidth*scaleSpace-tileSpace)
	drawWidth = (imgSizeHeight*scaleSpace-tileSpace)
	tileContent += ("<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px ;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	<img src='"+img+"' width="+drawWidth+" height="+drawHeight+" \
	style='margin-left: "+((scaleSpace*width-tileSpace-drawWidth)*0.5)+"px; \
	margin-top: "+((scaleSpace*height-tileSpace-drawHeight)*0.5)+"px'/></a>");
}
tileTitleTextImage = function(group,x,y,width,height,bg,linkPage,title,text,img,imgSize,imgToTop,imgToLeft,optClass){ // Tile with an image on the left side, a title, and a description, width is always 2
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	<img style='float:left; margin-top:"+imgToTop+"px;margin-left:"+imgToLeft+"px;' src='"+img+"' height="+imgSize+" width="+imgSize+"/> \
	<div id='title' style='margin-left:"+(imgSize+5+imgToLeft)+"px;'>"+title+"</div>\
	<div id='desc' style='margin-left:"+(imgSize+6+imgToLeft)+"px;'>"+text+"</div>\
	</a>");
}
tileLive = function(group,x,y,width,height,bg,linkPage,title,img,imgSize,imgToTop,imgToLeft,speed,text1,text2,text3,text4,text5,optClass){
	if(img!=''){
		imgInsert = "<img style='float:left; margin-top:"+imgToTop+"px;margin-left:"+imgToLeft+"px;' src='"+img+"' height="+imgSize+" width="+imgSize+"/>"
	}else{
		imgInsert = '';
		imgSize = 0;
		imgToLeft = 0;
	}
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px; margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	"+imgInsert+"\
	<div id='title' style='margin-left:"+(imgSize+5+imgToLeft)+"px;'>"+title+"</div>\
	<div class='livetile' style='margin-left:"+(imgSize+10+imgToLeft)+"px;' id='livetile"+group+''+x+''+y+"' >"+text1+"</div>\
	</a>");
	setTimeout(function(){newLiveTile(("livetile"+group+''+x+''+y),group,new Array(text1,text2,text3,text4,text5),speed,0)},1500); // init this tile
}
tileImageSlider = function(group,x,y,width,height,bg,linkPage,img,imgsize, text,slideDistance,optClass){
	tileContent += ("<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+" tileImageSlider' id='"+slideDistance+" ' style=' \
	margin-top:"+y*scaleSpace+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+"'>\
	<div class='tileSliderWrapper' style='position:absolute;'>\
	<div style='width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px;'>\
	<img src='"+img+"' height="+imgsize+" width="+imgsize+" style='margin-left: "+((scale-imgsize)*0.5)+"px; margin-top: "+((scale-imgsize)*0.5)+"px'/>\
	</div>\
	<div id='tileSliderText'>"+text+"</div>\
	</div>\
	</a>");
	$(document).on("mouseover",'.tileImageSlider',function(){
		$(this).find(".tileSliderWrapper").stop().animate({"margin-top":-$(this).height()*$(this).attr("id")},250,"linear");
	});
	$(document).on("mouseleave",'.tileImageSlider',function(){
		$(this).find(".tileSliderWrapper").stop().animate({'margin-top':0},300,"linear");
	});
}
tileSlideshow = function(group,x,y,width,height,bg,linkPage,title,speed,path1,path2,path3,path4,path5,optClass){
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*(scaleSpace)+"px; margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*(scaleSpace)-tileSpace)+"px; height:"+(height*(scaleSpace)-tileSpace)+"px; \
	background:"+bg+";'>\
	<div class='tileSlideshowTitle'>"+title+"</div>\
	<img class='tileSlideshowImageBack' id='slideshow_"+group+''+x+''+y+"_back' src='"+path1+"'>\
	<img class='tileSlideshowImage' id='slideshow_"+group+''+x+''+y+"' src='"+path1+"' >\
	</a>");
	var images = [path1, path2, path3, path4, path5];
	setTimeout(function(){
		$.each(images, function (i, val) {$('<img/>').attr('src', val)})//start prechaching images;
		newSlideshow(("slideshow_"+group+''+x+''+y),group,images,speed,0)
	},2000); // init this tile	
}
tileCustom = function(group,x,y,width,height,bg,linkPage,content,optClass){ // make your own tiles
	tileContent += (
	"<a "+makeLink(linkPage)+" class='tile group"+group+" "+optClass+"' style=' \
	margin-top:"+y*scaleSpace+"px;margin-left:"+(x*scaleSpace+group*tileGroupSpace)+"px; \
	width: "+(width*scaleSpace-tileSpace)+"px; height:"+(height*scaleSpace-tileSpace)+"px; \
	background:"+bg+";'>\
	"+content+"\
	</a>");
}
