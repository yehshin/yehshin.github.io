// JavaScript for Ye Heon Shin's Portfolio

function animeLinks() {

	if (window.innerWidth > 500) {
		var links, i;

		links = document.querySelectorAll('a');

		for (i = 0; i < links.length; i++) {
			links[i].addEventListener("mouseenter", function() {
				this.className = "hovered";
			}, false)

			links[i].addEventListener("mouseleave", function() {
				this.className = "";
			}, false)
		} 
	}

} // closes: function animeLinks()

function flipLanding() {

	var landingText, i;

	landingText = document.querySelectorAll('.landingText');

	for (i = 0; i < landingText.length; i++) {
		landingText[i].className += " flipInX";
	}

} // closes: function flipLanding

function fadeInText() {

	var aboutHead, aboutText, workHead, workText, contactHead, contactText;

	aboutHead = document.querySelector('.aboutHead');
	aboutText = document.querySelectorAll('.aboutText');

	workHead = document.querySelector('.workHead');
	workText = document.querySelectorAll('.workText');

	contactHead = document.querySelector('.contactHead');
	contactText = document.querySelectorAll('.contactText');

	if (window.innerWidth > 667) { // desktop

		if (window.pageYOffset > 350) {
			aboutHead.className += " fadeInUp";
			aboutText[0].className += " fadeInUp";
			aboutText[1].className += " fadeInUp";
			aboutText[2].className += " fadeInUp";
		}

		if (window.pageYOffset > 850) {
			workHead.className += " fadeInUp";
			workText[0].className += " fadeInUp";
			workText[1].className += " fadeInUp";
			workText[2].className += " fadeInUp";
		}

		if (window.pageYOffset > 1100) {
			contactHead.className += " fadeInUp";
			contactText[0].className += " fadeInUp";
			contactText[1].className += " fadeInUp";
			contactText[2].className += " fadeInUp";
			contactText[3].className += " fadeInUp";
			contactText[4].className += " fadeInUp";
		}

	} else if (window.innerWidth <= 375) { // mobile | portrait

		if (window.pageYOffset > 300) {
			aboutHead.className += " fadeInUp";
			aboutText[0].className += " fadeInUp";
			aboutText[1].className += " fadeInUp";
			aboutText[2].className += " fadeInUp";
		}

		if (window.pageYOffset > 700) {
			workHead.className += " fadeInUp";
			workText[0].className += " fadeInUp";
			workText[1].className += " fadeInUp";
			workText[2].className += " fadeInUp";
		}

		if (window.pageYOffset > 1000) {
			contactHead.className += " fadeInUp";
			contactText[0].className += " fadeInUp";
			contactText[1].className += " fadeInUp";
			contactText[2].className += " fadeInUp";
			contactText[3].className += " fadeInUp";
			contactText[4].className += " fadeInUp";
		}

	} else if (window.innerWidth >= 376 && window.innerWidth <= 667) { // mobile | landscape

		if (window.pageYOffset > 250) {
			aboutHead.className += " fadeInUp";
			aboutText[0].className += " fadeInUp";
			aboutText[1].className += " fadeInUp";
			aboutText[2].className += " fadeInUp";
		}

		if (window.pageYOffset > 550) {
			workHead.className += " fadeInUp";
			workText[0].className += " fadeInUp";
			workText[1].className += " fadeInUp";
			workText[2].className += " fadeInUp";
		}

		if (window.pageYOffset > 850) {
			contactHead.className += " fadeInUp";
			contactText[0].className += " fadeInUp";
			contactText[1].className += " fadeInUp";
			contactText[2].className += " fadeInUp";
			contactText[3].className += " fadeInUp";
			contactText[4].className += " fadeInUp";
		}

	}

} // closes: function fadeInText()

window.addEventListener("load", flipLanding, false);
window.addEventListener("load", animeLinks, false);
window.addEventListener("scroll", fadeInText, false);