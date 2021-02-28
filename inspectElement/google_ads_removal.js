
//Removing google ads---

//google renders ads on sites using iframes and below code removes those iframes in regular intervals using setInterval

//how to use:
//just paste the below code on console in inspect element

setInterval(function missionRemoveAds(argument) {
	var googleAdsIFrame=document.getElementsByTagName("iframe");
	console.log(googleAdsIFrame);
	for (var i=0;i<googleAdsIFrame.length; i++) { 
		try{
			var ele=googleAdsIFrame[i];
			ele.remove();

		}
		catch(err){
			continue;
		}
		
}
},1000);

//the interval is set to 1 second, you can decrease it if you want which will help in removing google powered iframes more quickly
