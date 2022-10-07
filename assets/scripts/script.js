let clickCount = 0;

function startEasterEgg() {
	clickCount++;

	if (clickCount == 2) {
		let video = `<video autoplay loop>
						<source src='./assets/images/video.mp4' type='video/mp4'>
					 </video>`
		document.getElementsByTagName("body")[0].innerHTML += video;
	}
}

function hideScrollArrow() {
	let arrow = document.getElementById('title').getElementsByTagName("svg")[0];

	if (window.scrollY == 0) {
		arrow.style.opacity = "1";
	} else {
		arrow.style.opacity = "0";
	}
}

window.addEventListener('scroll', hideScrollArrow);
