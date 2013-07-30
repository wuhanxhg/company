//图片连续滚动代码
var speed=20
marDiv2.innerHTML=marDiv1.innerHTML
marDiv3.innerHTML=marDiv1.innerHTML
function Marquee(){
	if(marDiv2.offsetWidth-marDiv.scrollLeft<=0)
		marDiv.scrollLeft-=marDiv1.offsetWidth
	else{
		marDiv.scrollLeft++
	}
}
var MyMar=setInterval(Marquee,speed)
marDiv.onmouseover=function() {
	clearInterval(MyMar)
}
marDiv.onmouseout=function() {
	MyMar=setInterval(Marquee,speed)
}
