// Initialize Slick

$(document).ready(function(){

  $('.ui-carousel').slick({ // UI Concepts Page

	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true,

	  autoplay: true,
	  autoplaySpeed: 1500

  });

   $('.poster-carousel').slick({ // Poster Designs Page

	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true,

	  autoplay: true,
	  autoplaySpeed: 1500

  });

});



// Tada 

if (document.title === "Ye Shin // About Me") {

	var tadaLink, tadaContent;

	tadaLink = document.querySelector('p.tada');
	tadaContent = document.querySelector('div.tada-content');

	tadaLink.addEventListener('click', function() {

		this.style.display = "none";

		tadaContent.style.display = "block";
		tadaContent.style.opacity = "1";

		tadaContent.style.animationName = "fadeIn";

	}, false);

}



// Wave Hand 

if (document.title === "Ye Shin // Contact Me") {

	var hand;

	hand = document.querySelector('span.wave-hand');

	hand.addEventListener('mouseenter', function() {

		this.style.animationName = "wave";

	}, false);

	hand.addEventListener('mouseleave', function() {

		this.style.animationName = "none";

	}, false);

}



// Color Party

var homeTitle, titleLetter

homeTitle = document.querySelector('a.home');
titleLetter = document.querySelectorAll('span.letter');

homeTitle.addEventListener('mouseenter', function() {

	var r, g, b;

	for (i = 0; i < titleLetter.length; i++) { 

		r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
		b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

	    titleLetter[i].style.color = "rgb(" + r + "," + g + "," + b + ")";

	}

}, false);

homeTitle.addEventListener('mouseleave', function() {

	var r, g, b;

	r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
	b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;

	for (i = 0; i < titleLetter.length; i++) { 

	    titleLetter[i].style.color = "initial";

	}

}, false);



// Link Effects

var inlineLink;

inlineLink = document.querySelectorAll('a.inline-link');

for (i = 0; i < inlineLink.length; i++) { 

	inlineLink[i].addEventListener('mouseenter', function() {

		this.style.paddingBottom = "5px";
		this.style.borderBottom = "solid 2px rgba(74, 74, 74, 0)";

	}, false);

}

for (i = 0; i < inlineLink.length; i++) { 

	inlineLink[i].addEventListener('mouseleave', function() {

		this.style.paddingBottom = "0px";
		this.style.borderBottom = "solid 2px #4A4A4A";	

	}, false);

}



// Smooth Resize

window.addEventListener('resize', function() {

	var p, h1, h2, a, img, divider, li;

	p = document.querySelectorAll('p');
	h1 = document.querySelectorAll('h1');
	h2 = document.querySelectorAll('h2');
	a = document.querySelectorAll('a');
	img = document.querySelectorAll('img');
	divider = document.querySelectorAll('div.divider');
	li = document.querySelectorAll('li');

	for (i = 0; i < p.length; i++) {

		p[i].style.transition = "font-size 0.125s, line-height 0.125s";

	}

	for (i = 0; i < h1.length; i++) {

		h1[i].style.transition = "font-size 0.125s, line-height 0.125s";

	}

	for (i = 0; i < h2.length; i++) {

		h2[i].style.transition = "font-size 0.125s, line-height 0.125s";

	}

	for (i = 0; i < a.length; i++) {

		a[i].style.transition = "font-size 0.125s, line-height 0.125s, transform 0.125s";

	}

	for (i = 0; i < img.length; i++) {

		img[i].style.transition = "font-size 0.125s, line-height 0.125s, transform 0.125s";

	}

	for (i = 0; i < divider.length; i++) {

		divider[i].style.transition = "width 0.125s";

	}

	for (i = 0; i < li.length; i++) {

		li[i].style.transition = "font-size 0.125s, line-height 0.125s";

	}

}, false);


