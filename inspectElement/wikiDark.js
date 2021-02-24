//dark mode for wikipedia 
//how to use: paste the below code on the console in inspect element

document.getElementById("content").style.backgroundColor="black";
document.getElementById("content").style.color="white";

document.getElementById("mw-head").style.backgroundColor="black";
document.getElementById("mw-head").style.color="white";

document.getElementById("toc").style.backgroundColor="black";
document.getElementById("toc").style.color="white";

document.getElementById("mw-panel").style.backgroundColor="black";
document.getElementById("mw-panel").style.color="white";

document.body.style.backgroundColor="black";
document.body.style.color="white";

var arr=document.getElementsByTagName("pre");
for (var i = arr.length - 1; i >= 0; i--) {
	arr[i].style.backgroundColor="black";
	arr[i].style.color="white";	

}
