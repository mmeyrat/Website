var clickCount = 0;

function showBorgir() {
	clickCount++;

	if (clickCount == 1) {
		document.getElementById("text-container").innerHTML = "<video controls autoplay><source src='./assets/images/borgir.mp4' type='video/mp4'></video>";
	}
}