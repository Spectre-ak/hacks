alert("As");
console.log("extension working");

setInterval(()=>{
	try{
		document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0].click();
		console.log(document.getElementsByClassName("ytp-ad-skip-button ytp-button")[0]);
	}
	catch(er){
		console.log("err occured");
	}
},500);