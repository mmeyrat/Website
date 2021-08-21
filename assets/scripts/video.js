var clickCount = 0;

function showBorgir() {
	clickCount++;

	if (clickCount == 4) {
		document.getElementById("text-container").innerHTML = "<video autoplay><source src='./assets/images/video.mp4' type='video/mp4'></video>";
	}
}