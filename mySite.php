<?php
	
	//paste the url in the file_get_contents to load the site from your server
	 
	$res=file_get_contents("sit-url");   
	echo $res;
	//$res will contain the frontend structure of the site only, with this you can only manipulate the DOM elements and nothing else. 
	
	
	?>
