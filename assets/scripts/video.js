let clickCount = 0;

function displayVideo() {
	clickCount++;

	if (clickCount == 4) {
		document.getElementsByTagName("body")[0].innerHTML += "<video autoplay><source src='./assets/images/video.mp4' type='video/mp4'></video>";
	}
	console.log(clickCount)
}