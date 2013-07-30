function marqueeShow(){
	var speed=20;
	demo2.innerHTML=demo1.innerHTML;
	function Marquee(){ 
		if(demo2.offsetTop-proPicShow.scrollTop<=0) 
			proPicShow.scrollTop-=demo1.offsetHeight ;
		else{ 
			proPicShow.scrollTop++ ; 
		} 
	} 
	var MyMar=setInterval(Marquee,speed);
	proPicShow.onmouseover=function() {
		clearInterval(MyMar);
	} 
	proPicShow.onmouseout=function() {
		MyMar=setInterval(Marquee,speed);
	} 		
}
