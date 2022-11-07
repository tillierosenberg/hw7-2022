

var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay)
	console.log("Looping is set to " + video.loop)
});


document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video")
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= .9
	console.log("Speed is " + video.playbackRate)
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .9
	console.log("Speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	if (video.currentTime < video.duration){
	video.currentTime += 10
	console.log(video.currentTime);}
	else {
		video.currentTime = 0
		video.load()
		console.log("Video current time is " + video.currentTime)
	}
});

document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted === false) {   
		document.querySelector("#mute").innerHTML = "Unmute"
		video.muted = true;
	}
	else {
		document.querySelector("#mute").innerHTML = "Mute"
		video.muted = false
	};
});
document.querySelector("#slider").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML = video.volume
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%"
	console.log(document.querySelector("#slider").value)
	video.volume = document.querySelector("#slider").value / 100;
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
});
document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});
