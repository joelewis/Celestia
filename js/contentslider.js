
$(document).ready(function(){
	$(".sliderWrapper").each(function(){
		$this = $(this);
		$this.find(".sliderHead").click(function(){
			$this = $(this).parent();
			$content = $this.find(".sliderContent")
			$img = $this.find(".sliderImage");
			if($this.attr("id")=='closeOther'){
				$(".sliderContent").slideUp(500)
				turn(".sliderImage",0);
			}
			if($content.css("display")=='none'){
				$content.slideDown(500);
				r=0;
				turnImageDown();
			}else{
				$content.slideUp(500);
				r=90;
				turnImageRight();
			}
		});
	});
});
turnImageDown= function(){
    $($img).css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation=1)");
    r+=9;
	turn($img,r);
    if(r<90){setTimeout('turnImageDown()',40);}
}
turnImageRight = function(){
    r-=9;
	$($img).css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation=0)")
    turn($img,r);
    if(r>0){setTimeout('turnImageRight()',40);}
}
turn=function(img,r){
    $(img).css("transform","rotate("+r+"deg)")
    	.css("-moz-transform","rotate("+r+"deg)")
    	.css("-webkit-transform","rotate("+r+"deg)")
    	.css("-o-transform","rotate("+r+"deg)")
}
