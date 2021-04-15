setInterval(function missionRemoveAds(argument) {
	var googleAdsIFrame=document.getElementsByTagName("iframe");
	for (var i=0;i<googleAdsIFrame.length; i++) { 
		try{
			var ele=googleAdsIFrame[i];
			ele.remove();
		}
		catch(err){
			continue;
		}
	}
	console.clear();
},800);