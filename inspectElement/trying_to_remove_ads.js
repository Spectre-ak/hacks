//below approach will remove ads from some websites only where the element containing the ads class name contains ads or ad.

//but this may remove some important contents such as the elements which contains downloads or anything which as ad or ads in their class name.


//how to use:
//just paste the below code on console in inspect element
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

//setInterval will keep removing ads in every 4 seconds

//the solution can be enhanced more by providing more specific searching keywords for ads containers or elements. 



//below code might work on sites which shows ads inside <img> tag
//but this will remove all imnages from the site
var imgs=document.getElementsByTagName("img");
setInterval(function missionRemoveAds(argument) {
	for (var i=0, max=imgs.length; i < max; i++) { 
		try{
			var ele=imgs[i];
			ele.setAttribute('src',null);
		}
		catch(err){
			continue;
		}
		
}
},1000);
