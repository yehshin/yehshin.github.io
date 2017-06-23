// Hamburger Menu Btn

var hamburgerBtn, hamburgerBtnLineTop, hamburgerBtnLineBottom;

hamburgerBtn = document.querySelector('div.hamburger-btn');
hamburgerBtnLineTop = document.querySelector('div.hamburger-btn-line-top');
hamburgerBtnLineBottom = document.querySelector('div.hamburger-btn-line-bottom');

function hamburgerBtnTransform() {

	if (this.className === "hamburger-btn") {

		hamburgerBtnLineTop.style.transition = "transform 0.4s, top 0.4s, background-color 0.4s";
		hamburgerBtnLineBottom.style.transition = "transform 0.4s, background-color 0.4s";
		hamburgerBtnLineTop.style.transitionTimingFunction = "ease-in";
		hamburgerBtnLineBottom.style.transitionTimingFunction = "ease-in";

		hamburgerBtnLineTop.style.transform = "rotate(495deg)"; // 135deg
		hamburgerBtnLineBottom.style.transform = "rotate(225deg)"; // 45deg

		hamburgerBtnLineTop.style.transformOrigin = "50% 80%";
		hamburgerBtnLineTop.style.top = "11px";
		hamburgerBtnLineTop.style.left = "1px";

		hamburgerBtnLineTop.style.backgroundColor = "white";
		hamburgerBtnLineBottom.style.backgroundColor = "white";

		this.setAttribute('class', 'hamburger-btn-clicked');

	} else if (this.className === "hamburger-btn-clicked") {
		
		hamburgerBtnLineTop.style.transition = "transform 0.4s, top 0.4s, background-color 0.4s";
		hamburgerBtnLineBottom.style.transition = "transform 0.4s, background-color 0.4s";
		hamburgerBtnLineTop.style.transitionTimingFunction = "ease-in";
		hamburgerBtnLineBottom.style.transitionTimingFunction = "ease-in";

		hamburgerBtnLineTop.style.transform = "rotate(0deg)";
		hamburgerBtnLineTop.style.top = "4px";
		hamburgerBtnLineTop.style.left = "2px";
		hamburgerBtnLineBottom.style.transform = "rotate(0deg)";

		hamburgerBtnLineTop.style.backgroundColor = "black";
		hamburgerBtnLineBottom.style.backgroundColor = "black";

		this.setAttribute('class', 'hamburger-btn');

	}

}

hamburgerBtn.addEventListener('click', hamburgerBtnTransform, false);

// Reveal Nav Background

var navMenu = document.querySelector('div.nav-menu');

function revealNavBackground() {

	if (navMenu.className === "nav-menu") {

		navMenu.style.opacity = "1";
		navMenu.style.position = "fixed";

		var body = document.querySelector('body');

		body.style.overflow = "hidden";

		navMenu.setAttribute('class', 'nav-menu-revealed');

	} else if (navMenu.className === 'nav-menu-revealed') {

		navMenu.style.opacity = "0";

		var body = document.querySelector('body');

		body.style.overflow = "visible";

		navMenu.setAttribute('class', 'nav-menu');

	}

}

hamburgerBtn.addEventListener('click', revealNavBackground, false);

// Reveal Nav Items

var navItem, i;
	
navItem = document.querySelectorAll('a.nav-item');

for (i = 0; i < navItem.length; i++) {

	navItem[i].addEventListener('mouseenter', function() {

		this.style.marginLeft = "110px";
		this.style.transition = "margin-left 0.3s";

	}, false)

	navItem[i].addEventListener('mouseleave', function() {

		this.style.marginLeft = "100px";
		this.style.transition = "margin-left 0.3s";

	}, false)
}

function revealNavItems() {

	for (i = 0; i < navItem.length; i++) {

		if (navItem[i].className === "nav-item") {

			var delayCounter = 0.5;

			for (i = 0; i < navItem.length; i++) {

				navItem[i].style.transition = "opacity 0.7s, visibility 0.7s, margin-top 0,7s";

				navItem[i].style.transitionDelay = delayCounter + "s";

				navItem[i].style.opacity = "1";

				navItem[i].style.visibility = "visible";

				navItem[i].style.animationDelay = delayCounter + "s";

				navItem[i].setAttribute('class', 'nav-item-revealed');

				delayCounter = delayCounter += 0.1;

			}

		} else if (navItem[i].className === "nav-item-revealed") {

			navItem[i].style.transition = "opacity 0.7s, visibility 0.7s, margin-top 0.7s";

			navItem[i].style.opacity = "0";

			navItem[i].style.visibility = "hidden";

			navItem[i].setAttribute('class', 'nav-item');

		}

	}

}

hamburgerBtn.addEventListener('click', revealNavItems, false);

// Reveal Contact Links

var i, contactLinks;

contactLinks = document.querySelectorAll('.contact-links');

for (i = 0; i < contactLinks.length; i++) {

	contactLinks[i].addEventListener('mouseenter', function() {

		this.style.marginLeft = "110px";
		this.style.transition = "margin-left 0.3s";

	}, false)

	contactLinks[i].addEventListener('mouseleave', function() {

		this.style.marginLeft = "100px";
		this.style.transition = "margin-left 0.3s";

	}, false)
}

function revealContactLinks() {

	for (i = 0; i < contactLinks.length; i++) {

		if (contactLinks[i].className === "contact-links") {

			var delayCounter = 1;

			for (i = 0; i < contactLinks.length; i++) {

				contactLinks[i].style.transition = "opacity 0.7s, visibility 0.7s, margin-top 0.7s";

				contactLinks[i].style.transitionDelay = delayCounter + "s";

				contactLinks[i].style.opacity = "1";

				// contactLinks[i].style.marginTop = "5%";

				contactLinks[i].style.visibility = "visible";

				contactLinks[i].style.animationDelay = delayCounter + "s";

				contactLinks[i].setAttribute('class', 'contact-links-revealed');

				delayCounter = delayCounter += 0.1;

			}

		} else if (contactLinks[i].className === "contact-links-revealed") {

			contactLinks[i].style.transition = "opacity 0.7s, visibility 0.7s, margin-top 0.7s";

			contactLinks[i].style.opacity = "0";

			contactLinks[i].style.visibility = "hidden";

			contactLinks[i].setAttribute('class', 'contact-links');

		}

	}	

}

hamburgerBtn.addEventListener('click', revealContactLinks, false);

// Thumbnail Img Hover | View Project Btn

var thumbImgs, thumbFrames, viewProjectLink, i;

thumbImgs = document.querySelectorAll('img.thumbnails');
thumbFrames = document.querySelectorAll('.thumbnail-frame');
viewProjectLink = document.querySelectorAll('.view-project-link');

function zoomThumbImg() {

	this.style.transition = "transform 0.5s";
	this.style.transform = "scale(1.1)";

}

function unzoomThumbImg() {

	this.style.transition = "transform 0.5s";
	this.style.transform = "scale(1)";
	
}

function shrinkThumbFrame() {

	this.style.transition = "transform 0.5s";
	this.style.transform = "scaleX(0.95)";
	this.style.transformOrigin = "left";

}

function growThumbFrame() {

	this.style.transition = "transform 0.5s";
	this.style.transform = "scaleX(1)";
	
}

function hoverLink() {

	if (this === viewProjectLink[0]) {

		thumbImgs[0].style.transition = "transform 0.5s";
		thumbImgs[0].style.transform = "scale(1.1)";
		thumbFrames[0].style.transition = "transform 0.5s";
		thumbFrames[0].style.transform = "scaleX(0.95)";
		thumbFrames[0].style.transformOrigin = "left";

	} else if (this === viewProjectLink[1]) {

		thumbImgs[1].style.transition = "transform 0.5s";
		thumbImgs[1].style.transform = "scale(1.1)";
		thumbFrames[1].style.transition = "transform 0.5s";
		thumbFrames[1].style.transform = "scaleX(0.95)";
		thumbFrames[1].style.transformOrigin = "left";

	} else if (this === viewProjectLink[2]) {

		thumbImgs[2].style.transition = "transform 0.5s";
		thumbImgs[2].style.transform = "scale(1.1)";
		thumbFrames[2].style.transition = "transform 0.5s";
		thumbFrames[2].style.transform = "scaleX(0.95)";
		thumbFrames[2].style.transformOrigin = "left";		
	}

}

function unhoverLink() {

	if (this === viewProjectLink[0]) {

		thumbImgs[0].style.transition = "transform 0.5s";
		thumbImgs[0].style.transform = "scale(1)";
		thumbFrames[0].style.transition = "transform 0.5s";
		thumbFrames[0].style.transform = "scaleX(1)";
		thumbFrames[0].style.transformOrigin = "left";

	} else if (this === viewProjectLink[1]) {

		thumbImgs[1].style.transition = "transform 0.5s";
		thumbImgs[1].style.transform = "scale(1)";
		thumbFrames[1].style.transition = "transform 0.5s";
		thumbFrames[1].style.transform = "scaleX(1)";
		thumbFrames[1].style.transformOrigin = "left";

	} else if (this === viewProjectLink[2]) {

		thumbImgs[2].style.transition = "transform 0.5s";
		thumbImgs[2].style.transform = "scale(1)";
		thumbFrames[2].style.transition = "transform 0.5s";
		thumbFrames[2].style.transform = "scaleX(1)";
		thumbFrames[2].style.transformOrigin = "left";		
	}
	
}

for (i = 0; i < thumbImgs.length; i++) {

	thumbImgs[i].addEventListener('mouseenter', zoomThumbImg, false);
	thumbImgs[i].addEventListener('mouseleave', unzoomThumbImg, false);

	thumbFrames[i].addEventListener('mouseenter', shrinkThumbFrame, false);
	thumbFrames[i].addEventListener('mouseleave', growThumbFrame, false);

}

for (i = 0; i < viewProjectLink.length; i++) {
	viewProjectLink[i].addEventListener('mouseenter', hoverLink, false);
	viewProjectLink[i].addEventListener('mouseleave', unhoverLink, false);
	viewProjectLink[i].style.transition = "background-color 0.5s";
}

// Starbucks Page Animation 

function fadeInStarbucksLanding () {

	if (document.title === "Starbucks Redesign") {

		var starbucksWrapper = document.querySelectorAll('.starbucks-wrapper');

		var starbucksLandingTitle;

		starbucksLandingTitle = document.querySelector('h1.starbucks-landing-title');

		starbucksWrapper[0].style.transition = 'opacity 1s, transform 1s';
		starbucksWrapper[0].style.opacity = '1';
		starbucksWrapper[0].style.transform = "scale(1)";

		starbucksLandingTitle.style.transition = 'opacity 1s, transform 1s';
		starbucksLandingTitle.style.opacity = '1';
		starbucksLandingTitle.style.transform = "scale(1)";
		starbucksLandingTitle.style.transitionDelay = "0.5s";

	}

}

window.addEventListener('load', fadeInStarbucksLanding, false);


// UI Page Animation

function fadeInUILanding() {

	if (document.title === "Mobile UI Concepts") {

		var uiHeader, uiSubheader, uiLandingImg;

		uiheader = document.querySelector('.mobile-ui-header');
		uiSubheader = document.querySelector('.mobile-ui-subheader');
		uiLandingImg = document.querySelector('.mobile-ui-landing-img');

		uiheader.style.transition = 'opacity 1s, transform 1s';
		uiheader.style.opacity = '1';
		uiheader.style.transform = "translateX(0px)";

		uiSubheader.style.transition = 'opacity 1s, transform 1s';
		uiSubheader.style.opacity = '1';
		uiSubheader.style.transform = "translateX(0px)";

		uiLandingImg.style.transition = 'opacity 1s, transform 1s';
		uiLandingImg.style.opacity = '1';
		uiLandingImg.style.transform = "translateX(0px)";

	}

}

window.addEventListener('load', fadeInUILanding, false);

function fadeInUIPage() {

	if (document.title === "Mobile UI Concepts") {

		var uiWrapper;

		uiWrapper = document.querySelectorAll('.ui-wrapper');

		if (this.pageYOffset > 900) {
			
			uiWrapper[0].style.transition = 'opacity 1s, transform 1s';
			uiWrapper[0].style.opacity = '1';
			uiWrapper[0].style.transform = "translateX(0px)";

		} 

		if (this.pageYOffset > 2900) {
			
			uiWrapper[1].style.transition = 'opacity 1s, transform 1s';
			uiWrapper[1].style.opacity = '1';
			uiWrapper[1].style.transform = "translateX(0px)";

		} 

		if (this.pageYOffset > 5300) {

			uiWrapper[2].style.transition = 'opacity 1s, transform 1s';
			uiWrapper[2].style.opacity = '1';
			uiWrapper[2].style.transform = "translateX(0px)";
		
		}

		if (this.pageYOffset > 6400) {

			uiWrapper[3].style.transition = 'opacity 1s, transform 1s';
			uiWrapper[3].style.opacity = '1';
			uiWrapper[3].style.transform = "translateX(0px)";
		
		}

		if (this.pageYOffset > 7700) {

			uiWrapper[4].style.transition = 'opacity 1s, transform 1s';
			uiWrapper[4].style.opacity = '1';
			uiWrapper[4].style.transform = "translateX(0px)";
		
		}

		if (this.pageYOffset > 10000) {

			uiWrapper[5].style.transition = 'opacity 1s, transform 1s';
			uiWrapper[5].style.opacity = '1';
			uiWrapper[5].style.transform = "translateX(0px)";
		
		}

		if (this.pageYOffset > 11000) {

			uiWrapper[6].style.transition = 'opacity 1s, transform 1s';
			uiWrapper[6].style.opacity = '1';
			uiWrapper[6].style.transform = "translateX(0px)";
		
		}

		if (this.pageYOffset > 12000) {

			uiWrapper[7].style.transition = 'opacity 1s, transform 1s';
			uiWrapper[7].style.opacity = '1';
			uiWrapper[7].style.transform = "translateX(0px)";
		
		}

		if (this.pageYOffset > 13300) {

			uiWrapper[8].style.transition = 'opacity 1s, transform 1s';
			uiWrapper[8].style.opacity = '1';
			uiWrapper[8].style.transform = "translateX(0px)";
		
		}

		if (this.pageYOffset > 14300) {

			uiWrapper[9].style.transition = 'opacity 1s, transform 1s';
			uiWrapper[9].style.opacity = '1';
			uiWrapper[9].style.transform = "translateX(0px)";
		
		}

	}

}

window.addEventListener('scroll', fadeInUIPage, false);

// Poster Page Animation

function fadeInPosterLanding() {

	if (document.title === "Poster Designs") {

		var posterHeader, posterSubheader, posters;

		posterHeader = document.querySelector('h1.poster-header');
		posterSubheader = document.querySelector('h2.poster-subheader');
		posters = document.querySelectorAll('img.poster');

		posterHeader.style.transition = 'opacity 1s, transform 1s';
		posterHeader.style.opacity = '1';
		posterHeader.style.transform = "translateX(0px)";

		posterSubheader.style.transition = 'opacity 1s, transform 1s';
		posterSubheader.style.opacity = '1';
		posterSubheader.style.transform = "translateX(0px)";

		posters[0].style.transition = 'opacity 1s, transform 1s';
		posters[0].style.opacity = '1';
		posters[0].style.transform = "translateY(0px)";

		posters[1].style.transition = 'opacity 1s, transform 1s';
		posters[1].style.opacity = '1';
		posters[1].style.transform = "translateY(0px)";

	}

}

window.addEventListener('load', fadeInPosterLanding, false);

function fadeInPosterPage() {

	if (document.title === "Poster Designs") {

		var posters;

		posters = document.querySelectorAll('img.poster');

		if (this.pageYOffset > 600) {
			
			posters[2].style.transition = 'opacity 1s, transform 1s';
			posters[2].style.opacity = '1';
			posters[2].style.transform = "translateY(0px)";

			posters[3].style.transition = 'opacity 1s, transform 1s';
			posters[3].style.opacity = '1';
			posters[3].style.transform = "translateY(0px)";

			console.log('scrolled 300')

		} 

		if (this.pageYOffset > 1400) {

			posters[4].style.transition = 'opacity 1s, transform 1s';
			posters[4].style.opacity = '1';
			posters[4].style.transform = "translateY(0px)";

			posters[5].style.transition = 'opacity 1s, transform 1s';
			posters[5].style.opacity = '1';
			posters[5].style.transform = "translateY(0px)";
		
		}

		if (this.pageYOffset > 2300) {

			posters[6].style.transition = 'opacity 1s, transform 1s';
			posters[6].style.opacity = '1';
			posters[6].style.transform = "translateY(0px)";

			posters[7].style.transition = 'opacity 1s, transform 1s';
			posters[7].style.opacity = '1';
			posters[7].style.transform = "translateY(0px)";
		
		}

		if (this.pageYOffset > 3100) {

			posters[8].style.transition = 'opacity 1s, transform 1s';
			posters[8].style.opacity = '1';
			posters[8].style.transform = "translateY(0px)";

			posters[9].style.transition = 'opacity 1s, transform 1s';
			posters[9].style.opacity = '1';
			posters[9].style.transform = "translateY(0px)";
		
		}

		if (this.pageYOffset > 4000) {

			posters[10].style.transition = 'opacity 1s, transform 1s';
			posters[10].style.opacity = '1';
			posters[10].style.transform = "translateY(0px)";

			posters[11].style.transition = 'opacity 1s, transform 1s';
			posters[11].style.opacity = '1';
			posters[11].style.transform = "translateY(0px)";
		
		}

		if (this.pageYOffset > 4800) {

			posters[12].style.transition = 'opacity 1s, transform 1s';
			posters[12].style.opacity = '1';
			posters[12].style.transform = "translateY(0px)";

			posters[13].style.transition = 'opacity 1s, transform 1s';
			posters[13].style.opacity = '1';
			posters[13].style.transform = "translateY(0px)";
		
		}

		if (this.pageYOffset > 5700) {

			posters[14].style.transition = 'opacity 1s, transform 1s';
			posters[14].style.opacity = '1';
			posters[14].style.transform = "translateY(0px)";

			posters[15].style.transition = 'opacity 1s, transform 1s';
			posters[15].style.opacity = '1';
			posters[15].style.transform = "translateY(0px)";
		
		}

		if (this.pageYOffset > 6500) {

			posters[16].style.transition = 'opacity 1s, transform 1s';
			posters[16].style.opacity = '1';
			posters[16].style.transform = "translateY(0px)";

			posters[17].style.transition = 'opacity 1s, transform 1s';
			posters[17].style.opacity = '1';
			posters[17].style.transform = "translateY(0px)";
		
		}

		if (this.pageYOffset > 7300) {

			posters[18].style.transition = 'opacity 1s, transform 1s';
			posters[18].style.opacity = '1';
			posters[18].style.transform = "translateY(0px)";

			posters[19].style.transition = 'opacity 1s, transform 1s';
			posters[19].style.opacity = '1';
			posters[19].style.transform = "translateY(0px)";
		
		}

		if (this.pageYOffset > 8100) {

			posters[20].style.transition = 'opacity 1s, transform 1s';
			posters[20].style.opacity = '1';
			posters[20].style.transform = "translateY(0px)";

			posters[21].style.transition = 'opacity 1s, transform 1s';
			posters[21].style.opacity = '1';
			posters[21].style.transform = "translateY(0px)";
		
		}

		if (this.pageYOffset > 8900) {

			posters[22].style.transition = 'opacity 1s, transform 1s';
			posters[22].style.opacity = '1';
			posters[22].style.transform = "translateY(0px)";

			posters[23].style.transition = 'opacity 1s, transform 1s';
			posters[23].style.opacity = '1';
			posters[23].style.transform = "translateY(0px)";
		
		}

	}

}

window.addEventListener('scroll', fadeInPosterPage, false);