

var video = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false;
});


document.querySelector("#play").addEventListener("click", function() {
	video.play();
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%"	// need to update volumne information
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= .1
	console.log(video.playbackRate)
});


document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += .1
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {

	if (video.currentTime < video.duration){
	video.currentTime += 10
	console.log(video.currentTime);}
	else {
		video.currentTime = 0
		video.load()
		console.log(video.currentTime)
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
