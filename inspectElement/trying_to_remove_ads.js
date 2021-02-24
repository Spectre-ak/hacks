var all = document.getElementsByTagName("*");

setInterval(function missionRemoveAds(argument) {
	for (var i=0, max=all.length; i < max; i++) { 
	var ele=all[i].className;
	ele=ele.toString(); 
	if(ele.includes("ad") || ele.includes("ads")){
		console.log(ele+"       id is - "+all[i].id);
		if(all[i].id=="")continue;
		document.getElementById(all[i].id).remove();
	}
}
},4000);
