<?php
	
	//paste the url in the file_get_contents to load the site from your server
	 
	$res=file_get_contents("site-url");   
	
	//by adding below script the google powered iframe ads will also get removed( infact all iframes will get removed)
	$res=$res . "<script>setInterval(function missionRemoveAds(argument) {
	var googleAdsIFrame=document.getElementsByTagName('iframe');
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
	},1000);</script>";

	echo $res;
	//$res will contain the frontend structure of the site only, with this you can only manipulate the DOM elements and nothing else. 
	//
	
	
	?>
