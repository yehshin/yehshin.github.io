document.addEventListener("DOMContentLoaded", function(event) { 

	// Universal Animations

	// Universal | Hamburger Menu Btn

	var hamburgerBtn, hamburgerBtnLineTop, hamburgerBtnLineBottom;

	hamburgerBtn = document.querySelector('div.hamburger-btn');
	hamburgerBtnLineTop = document.querySelector('div.hamburger-btn-line-top');
	hamburgerBtnLineBottom = document.querySelector('div.hamburger-btn-line-bottom');

	function hamburgerBtnTransform() {

		if (this.className === "hamburger-btn") {

			hamburgerBtnLineTop.style.animationName = "topClicked";
			hamburgerBtnLineBottom.style.animationName = "bottomClicked";

			hamburgerBtnLineTop.style.backgroundColor = "#E54B4B";
			hamburgerBtnLineTop.style.transition = "background-color 0.3s";
			hamburgerBtnLineBottom.style.backgroundColor = "#E54B4B";
			hamburgerBtnLineBottom.style.transition = "background-color 0.3s";

			this.setAttribute('class', 'hamburger-btn-clicked');

		} else if (this.className === "hamburger-btn-clicked") {

			hamburgerBtnLineTop.style.animationName = "topUnclicked";
			hamburgerBtnLineBottom.style.animationName = "bottomUnclicked";

			if (document.title === "Ye Shin | Designer") {

				hamburgerBtnLineTop.style.backgroundColor = "white";
				hamburgerBtnLineBottom.style.backgroundColor = "white";

			} else {

				hamburgerBtnLineTop.style.backgroundColor = "black";
				hamburgerBtnLineBottom.style.backgroundColor = "black";

			}

			this.setAttribute('class', 'hamburger-btn');

		}

	}

	hamburgerBtn.addEventListener('click', hamburgerBtnTransform, false);

	// Universal | Animate the hamburger button into the screen on load only

	function animateHamburgerIn() {

		hamburgerBtn.style.animationName = "appearHamburger"; // this is so it doesn't animate after everytime it is clicked

	}

	window.addEventListener('load', animateHamburgerIn, false);

	// Universal | Reveal Nav Background

	var navMenu = document.querySelector('div.nav-menu');

	function toggleNavBackground() {

		if (navMenu.className === "nav-menu") {

			navMenu.style.position = "fixed";

			var body = document.querySelector('body');

			body.style.overflow = "hidden";

			navMenu.setAttribute('class', 'nav-menu-revealed');

		} else if (navMenu.className === 'nav-menu-revealed') {

			var body = document.querySelector('body');

			body.style.overflow = "visible";

			navMenu.setAttribute('class', 'nav-menu');

		}

	}

	hamburgerBtn.addEventListener('click', toggleNavBackground, false);

	// Universal | Reveal Nav Items

	var navItem, i;
		
	navItem = document.querySelectorAll('a.nav-item');

	if (window.innerWidth > 500) {

		navItem[0].style.marginTop = "10%"; // needs to be mover further down from the top

	} else {

		navItem[0].style.marginTop = "48%"; // needs to be mover further down from the top

	}

	function revealNavItems() {

		if (window.innerWidth > 500) {

			for (i = 0; i < navItem.length; i++) {

				if (navItem[i].className === "nav-item") {

					var delayCounter = 0.5;

					for (i = 0; i < navItem.length; i++) {

						navItem[i].style.transition = "opacity 0.7s, visibility 0.7s, margin-top 0.7s";

						navItem[0].style.marginTop = "8%";

						navItem[i].style.transitionDelay = delayCounter + "s";

						navItem[i].setAttribute('class', 'nav-item-revealed');

						delayCounter = delayCounter += 0.1;

					}

				} else if (navItem[i].className === "nav-item-revealed") {

					navItem[0].style.marginTop = "10%";

					navItem[i].setAttribute('class', 'nav-item');

				}

			}

		} else {

			for (i = 0; i < navItem.length; i++) {

				if (navItem[i].className === "nav-item") {

					var delayCounter = 0.5;

					for (i = 0; i < navItem.length; i++) {

						navItem[i].style.transition = "opacity 0.7s, visibility 0.7s, margin-top 0.7s";

						navItem[0].style.marginTop = "30%";

						navItem[i].style.transitionDelay = delayCounter + "s";

						navItem[i].setAttribute('class', 'nav-item-revealed');

						delayCounter = delayCounter += 0.1;

					}

				} else if (navItem[i].className === "nav-item-revealed") {

					navItem[i].style.transition = "opacity 0.2s, visibility 0.2s, margin-top 0.7s";

					navItem[0].style.marginTop = "48%";

					navItem[i].setAttribute('class', 'nav-item');

				}

			}

		}

	}

	hamburgerBtn.addEventListener('click', revealNavItems, false);

	// Universal | Reveal Contact Links

	var contactLinks, i;

	contactLinks = document.querySelectorAll('a.contact-link');

	function revealContactLinks() {

		for (i = 0; i < contactLinks.length; i++) {

			if (contactLinks[i].className === "contact-link") {

				var delayCounter = 1.1;

				for (i = 0; i < contactLinks.length; i++) {

					contactLinks[i].style.transition = "opacity 0.7s, visibility 0.7s, margin-top 0.7s";

					contactLinks[i].style.transitionDelay = delayCounter + "s";

					contactLinks[i].style.animationDelay = delayCounter + "s";

					contactLinks[i].setAttribute('class', 'contact-link-revealed');

					// delayCounter = delayCounter += 0.1;
					// this will fade in all at once, or you can have it delay on each...your call

				}

			} else if (contactLinks[i].className === "contact-link-revealed") {

				contactLinks[i].style.transition = "opacity 0.2s, visibility 0.2s, margin-top 0.7s";

				contactLinks[i].setAttribute('class', 'contact-link');

			}

		}

	}

	// Universal | Hover Nav Items

	var navItem, i;
		
	navItem = document.querySelectorAll('a.nav-item');

	for (i = 0; i < navItem.length; i++) {

		navItem[i].addEventListener('mouseenter', function() {

			// this.style.transition = "color 0.3s";
			// this.style.color = "white";

			this.style.animationName = "colorChange";
			this.style.animationDuration = "0.3s";
			this.style.animationIterationCount = "infinite";

		}, false);

		navItem[i].addEventListener('mouseleave', function() {

			// this.style.transition = "color 0.3s";
			// this.style.color = "#E54B4B";

			this.style.animationName = "";

		}, false);

	}

	// Universal | Hover Contact Links

	var contactLinks, i;
		
	contactLinks = document.querySelectorAll('a.contact-link');

	for (i = 0; i < contactLinks.length; i++) {

		contactLinks[i].addEventListener('mouseenter', function() {

			// this.style.transition = "color 0.3s";
			// this.style.color = "white";

			this.style.animationName = "colorChange";
			this.style.animationDuration = "0.3s";
			this.style.animationIterationCount = "infinite";
			this.style.animationDelay = "0s";

		}, false);

		contactLinks[i].addEventListener('mouseleave', function() {

			// this.style.transition = "color 0.3s";
			// this.style.color = "#E54B4B";

			this.style.animationName = "";

		}, false);

	}

	// Universal | Toggle Nav Menu Background Img

	var navItem = document.querySelectorAll('a.nav-item');

	var i;

	function revealNavBgImg() {

		var navBgImg = document.querySelector('img.nav-bg-img');

		if (this === navItem[0]) {

			if (document.title === "Ye Shin | Designer") {

				navBgImg.setAttribute('src', 'images/thumbnails/home-nav-menu-bg.png');
				navBgImg.width = "2500px";
				navBgImg.height = "1352px";
				navBgImg.style.animationName = "fadeIn";

			} else {

				navBgImg.setAttribute('src', '../images/thumbnails/home-nav-menu-bg.png');
				navBgImg.style.animationName = "fadeIn";
				navBgImg.width = "2500px";
				navBgImg.height = "1352px";		

			}

		} else if (this === navItem[1]) {

			if (document.title === "Ye Shin | Designer") {

				navBgImg.setAttribute('src', 'images/about/netflix-nav-menu-bg.png');
				navBgImg.style.animationName = "fadeIn";
				navBgImg.width = "2500px";
				navBgImg.height = "1406px";

			} else {

				navBgImg.setAttribute('src', '../images/about/netflix-nav-menu-bg.png');
				navBgImg.style.animationName = "fadeIn";
				navBgImg.width = "2500px";
				navBgImg.height = "1406px";

			}

		} else if (this === navItem[2]) {

			if (document.title === "Ye Shin | Designer") {

				navBgImg.setAttribute('src', 'images/thumbnails/starbucks-nav-menu-bg.png');
				navBgImg.style.animationName = "fadeIn";
				navBgImg.width = "2500x";
				navBgImg.height = "1406px";

			} else {

				navBgImg.setAttribute('src', '../images/thumbnails/starbucks-nav-menu-bg.png');
				navBgImg.style.animationName = "fadeIn";
				navBgImg.width = "2500x";
				navBgImg.height = "1406px";

			}

		} else if (this === navItem[3]) {

			if (document.title === "Ye Shin | Designer") {

				navBgImg.setAttribute('src', 'images/thumbnails/ui-nav-menu-bg.png');
				navBgImg.style.animationName = "fadeIn";
				navBgImg.width = "2500px";
				navBgImg.height = "1806px";

			} else {

				navBgImg.setAttribute('src', '../images/thumbnails/ui-nav-menu-bg.png');
				navBgImg.style.animationName = "fadeIn";
				navBgImg.width = "2500px";
				navBgImg.height = "1806px";

			}

		} else if (this === navItem[4]) {

			if (document.title === "Ye Shin | Designer") {

				navBgImg.setAttribute('src', 'images/thumbnails/poster-nav-menu-bg.png');
				navBgImg.style.animationName = "fadeIn";
				navBgImg.width = "2500px";
				navBgImg.height = "1563px";

			} else {

				navBgImg.setAttribute('src', '../images/thumbnails/poster-nav-menu-bg.png');
				navBgImg.style.animationName = "fadeIn";
				navBgImg.width = "2500px";
				navBgImg.height = "1563px";

			}

		}

	}

	function hideNavBgImg() {

		var navBgImg = document.querySelector('img.nav-bg-img');

		navBgImg.style.animationName = "fadeOut";

	}

	for (i = 0; i < navItem.length; i++) {

		navItem[i].addEventListener('mouseenter', revealNavBgImg, false);
		navItem[i].addEventListener('mouseleave', hideNavBgImg, false);

	}

	hamburgerBtn.addEventListener('click', revealContactLinks, false);

	// Universal | Next Project Links

	function nextProjectLinks() {

		if (document.title === "Starbucks Redesign") {

			var nextProjectLink, nextProjectImg, nextProjectTitle;	

			nextProjectLink = document.querySelector('a.next-project-link');
			nextProjectImg = document.querySelector('img.ui');
			nextProjectTitle = document.querySelector('span.next-project-title');

			if (window.innerWidth > 500) {

				nextProjectLink.addEventListener('mouseenter', function() {

					nextProjectImg.style.transition = "filter 0.3s, transform 0.3s";
					nextProjectImg.style.filter = "brightness(50%)";
					nextProjectImg.style.transform = "scale(1.1)";

					nextProjectTitle.style.transition = "top 0.3s, opacity 0.3s";
					nextProjectTitle.style.transitionDelay = "0.3s";
					nextProjectTitle.style.opacity = "1";
					nextProjectTitle.style.top = "45%";

				}, false);

				nextProjectLink.addEventListener('mouseleave', function() {

					nextProjectImg.style.transition = "filter 0.3s, transform 0.3s";
					nextProjectImg.style.filter = "brightness(100%)";
					nextProjectImg.style.transform = "scale(1)";

					nextProjectTitle.style.transition = "top 0.3s, opacity 0.3s";
					nextProjectTitle.style.transitionDelay = "0s";
					nextProjectTitle.style.opacity = "0";
					nextProjectTitle.style.top = "50%";

				}, false);

			} else {

				nextProjectTitle.style.opacity = "1";
				nextProjectTitle.style.top = "40%";
				nextProjectTitle.style.fontSize = "18px";
				nextProjectTitle.style.width = "90%";
				nextProjectTitle.style.textAlign = "center";

			}

		} else if (document.title === "Mobile UI Concepts") {

			var nextProjectLink, nextProjectImg, nextProjectTitle;	

			nextProjectLink = document.querySelector('a.next-project-link');
			nextProjectImg = document.querySelector('img.posters');
			nextProjectTitle = document.querySelector('span.next-project-title');

			if (window.innerWidth > 500) {

				nextProjectLink.addEventListener('mouseenter', function() {

					nextProjectImg.style.transition = "filter 0.3s, transform 0.3s";
					nextProjectImg.style.filter = "brightness(50%)";
					nextProjectImg.style.transform = "scale(1.1)";

					nextProjectTitle.style.transition = "top 0.3s, opacity 0.3s";
					nextProjectTitle.style.transitionDelay = "0.3s";
					nextProjectTitle.style.opacity = "1";
					nextProjectTitle.style.top = "45%";

				}, false);

					nextProjectLink.addEventListener('mouseleave', function() {

					nextProjectImg.style.transition = "filter 0.3s, transform 0.3s";
					nextProjectImg.style.filter = "brightness(100%)";
					nextProjectImg.style.transform = "scale(1)";

					nextProjectTitle.style.transition = "top 0.3s, opacity 0.3s";
					nextProjectTitle.style.transitionDelay = "0s";
					nextProjectTitle.style.opacity = "0";
					nextProjectTitle.style.top = "50%";

				}, false);

			} else {

				nextProjectTitle.style.opacity = "1";
				nextProjectTitle.style.top = "40%";
				nextProjectTitle.style.fontSize = "18px";
				nextProjectTitle.style.width = "90%";
				nextProjectTitle.style.textAlign = "center";

			}

		} else if (document.title === "Poster Designs") {

			var nextProjectLink, nextProjectImg, nextProjectTitle;	

			nextProjectLink = document.querySelector('a.next-project-link');
			nextProjectImg = document.querySelector('img.starbucks');
			nextProjectTitle = document.querySelector('span.next-project-title');

			if (window.innerWidth > 500) {

				nextProjectLink.addEventListener('mouseenter', function() {

					nextProjectImg.style.transition = "filter 0.3s, transform 0.3s";
					nextProjectImg.style.filter = "brightness(50%)";
					nextProjectImg.style.transform = "scale(1.1)";

					nextProjectTitle.style.transition = "top 0.3s, opacity 0.3s";
					nextProjectTitle.style.transitionDelay = "0.3s";
					nextProjectTitle.style.opacity = "1";
					nextProjectTitle.style.top = "45%";

				}, false);

				nextProjectLink.addEventListener('mouseleave', function() {

					nextProjectImg.style.transition = "filter 0.3s, transform 0.3s";
					nextProjectImg.style.filter = "brightness(100%)";
					nextProjectImg.style.transform = "scale(1)";

					nextProjectTitle.style.transition = "top 0.3s, opacity 0.3s";
					nextProjectTitle.style.transitionDelay = "0s";
					nextProjectTitle.style.opacity = "0";
					nextProjectTitle.style.top = "50%";

				}, false);

			}	else {

				nextProjectTitle.style.opacity = "1";
				nextProjectTitle.style.top = "40%";
				nextProjectTitle.style.fontSize = "18px";
				nextProjectTitle.style.width = "90%";
				nextProjectTitle.style.textAlign = "center";

			}

		}

	}

	window.addEventListener('load', nextProjectLinks, false);

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Home Page Animations

	// Home | Toggle Home Page Body's Overflow

	function toggleBodyOverflow() { // this is so on the load the overflow is hidden but once the load is done, it toggles to visible so you can scroll

		var body, navMenu;

		body = document.querySelector('body');

		setTimeout(function(){ 

			body.style.overflow = "visible";
			body.style.overflowX = "hidden"; 		

		}, 3000);

	}

	// Make sure home page is scrolled to top on refresh

	function refreshToTop() {

		if (document.title === "Ye Shin | Designer") {

			window.scrollTo(0,0);
			
		}

	}

	window.addEventListener('beforeunload', refreshToTop, false);

	// Home | Fade in BG color

	window.addEventListener('load', toggleBodyOverflow, false);

	function fadeInBody() { // might be uneccessary...possibly take out...

		if (document.title === "Ye Shin | Designer") {

			var homeBody;

			homeBody = document.querySelector('body.home-body');

			homeBody.style.transition = "background-color 0.3s";

			homeBody.style.backgroundColor = "#E54B4B";

		}

	}

	window.addEventListener('load', fadeInBody, false);

	// Home | Hover on Project Thumbnails

	var projectFrame, i;

	projectFrame = document.querySelectorAll('div.project-frame');

	function hoverThumbnails() {

		var thumbnailImg, thumbnailHeader, thumbnailSubheader;

		thumbnailImg = document.querySelectorAll('img.thumbnail-imgs');
		thumbnailHeader = document.querySelectorAll('p.thumbnail-caption-header');
		thumbnailSubheader = document.querySelectorAll('p.thumbnail-caption-subheader');

		for (i = 0; i < thumbnailHeader.length; i++) {

			thumbnailHeader[i].style.transitionDelay = "0.2s";
			thumbnailSubheader[i].style.transitionDelay = "0.3s";			
			// thumbnailHeader[i].style.transitionTimingFunction = "cubic-bezier(0.68, -0.55, 0.265, 1.55)";
			// thumbnailSubheader[i].style.transitionTimingFunction = "cubic-bezier(0.68, -0.55, 0.265, 1.55)";

		}

		if (window.innerWidth > 500) { // desktop

			if (this === projectFrame[0]) {

				thumbnailImg[0].style.filter = "brightness(50%)";
				thumbnailImg[0].style.transform = "scale(1.1)";

				thumbnailHeader[0].style.opacity = "1";
				thumbnailSubheader[0].style.opacity = "1";

				thumbnailHeader[0].style.top = "50px";
				thumbnailSubheader[0].style.top = "100px";

			} else if (this === projectFrame[1]) {

				thumbnailImg[1].style.filter = "brightness(50%)";
				thumbnailImg[1].style.transform = "scale(1.1)";

				thumbnailHeader[1].style.opacity = "1";
				thumbnailSubheader[1].style.opacity = "1";

				thumbnailHeader[1].style.top = "50px";
				thumbnailSubheader[1].style.top = "100px";


			} else if (this === projectFrame[2]) {

				thumbnailImg[2].style.filter = "brightness(50%)";
				thumbnailImg[2].style.transform = "scale(1.1)";

				thumbnailHeader[2].style.opacity = "1";
				thumbnailSubheader[2].style.opacity = "1";

				thumbnailHeader[2].style.top = "50px";
				thumbnailSubheader[2].style.top = "100px";
				
			}

		} else { // mobile

			if (this === projectFrame[0]) {

				thumbnailImg[0].style.filter = "brightness(50%)";
				thumbnailImg[0].style.transform = "scale(1.1)";

				thumbnailHeader[0].style.opacity = "1";
				thumbnailSubheader[0].style.opacity = "1";

				thumbnailHeader[0].style.top = "50px";
				thumbnailSubheader[0].style.top = "100px";

			} else if (this === projectFrame[1]) {

				thumbnailImg[1].style.filter = "brightness(50%)";
				thumbnailImg[1].style.transform = "scale(1.1)";

				thumbnailHeader[1].style.opacity = "1";
				thumbnailSubheader[1].style.opacity = "1";

				thumbnailHeader[1].style.top = "50px";
				thumbnailSubheader[1].style.top = "100px";


			} else if (this === projectFrame[2]) {

				thumbnailImg[2].style.filter = "brightness(50%)";
				thumbnailImg[2].style.transform = "scale(1.1)";

				thumbnailHeader[2].style.opacity = "1";
				thumbnailSubheader[2].style.opacity = "1";

				thumbnailHeader[2].style.top = "50px";
				thumbnailSubheader[2].style.top = "100px";
				
			}

		}

	}

	function unhoverThumbnails() {

		var thumbnailImg, thumbnailHeader, thumbnailSubheader;

		thumbnailImg = document.querySelectorAll('img.thumbnail-imgs');
		thumbnailHeader = document.querySelectorAll('p.thumbnail-caption-header');
		thumbnailSubheader = document.querySelectorAll('p.thumbnail-caption-subheader');

		for (i = 0; i < thumbnailHeader.length; i++) {

			thumbnailHeader[i].style.transitionDelay = "0s";
			thumbnailSubheader[i].style.transitionDelay = "0s";

		}

		if (window.innerWidth > 500) { // desktop

			if (this === projectFrame[0]) {

				thumbnailImg[0].style.filter = "brightness(100%)";
				thumbnailImg[0].style.transform = "scale(1)";

				thumbnailHeader[0].style.opacity = "0";
				thumbnailSubheader[0].style.opacity = "0";

				thumbnailHeader[0].style.top = "70px";
				thumbnailSubheader[0].style.top = "120px";

			} else if (this === projectFrame[1]) {

				thumbnailImg[1].style.filter = "brightness(100%)";
				thumbnailImg[1].style.transform = "scale(1)";

				thumbnailHeader[1].style.opacity = "0";
				thumbnailSubheader[1].style.opacity = "0";

				thumbnailHeader[1].style.top = "70px";
				thumbnailSubheader[1].style.top = "120px";

			} else if (this === projectFrame[2]) {

				thumbnailImg[2].style.filter = "brightness(100%)";
				thumbnailImg[2].style.transform = "scale(1)";

				thumbnailHeader[2].style.opacity = "0";
				thumbnailSubheader[2].style.opacity = "0";

				thumbnailHeader[2].style.top = "70px";
				thumbnailSubheader[2].style.top = "120px";
				
			} 

		} else { // mobile

			// code goes here

		}	

	}

	for (var i = 0; i < projectFrame.length; i++) {

		projectFrame[i].addEventListener('mouseenter', hoverThumbnails, false);
		projectFrame[i].addEventListener('mouseleave', unhoverThumbnails, false);

	}

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// About Page Animation

	// About | Fade in entry

	function fadeInAbout() {

		if (document.title === "About Ye") {

			var header, text, landingImg, delayCounter, i;

			header = document.querySelector('h1.about-header');
			text = document.querySelectorAll('p.about-text');
			landingImg = document.querySelector('img.netflix-me');

			header.style.top = "225px";
			header.style.opacity = "1";
			header.style.transitionDelay = "0.6s";

			delayCounter = 0.7;

			for (i = 0; i < text.length; i++) {

				text[i].style.marginTop = "30px";

				text[i].style.opacity = "1";

				text[i].style.transitionDelay = delayCounter + "s";

				delayCounter = delayCounter += 0.1;

			}

			text[0].style.marginTop = "275px";
			text[0].style.opacity = "1";

			landingImg.style.marginTop = "30px";
			landingImg.style.opacity = "1";
			landingImg.style.transitionDelay = "1s";

		}

	}

	window.addEventListener('load', fadeInAbout, false);

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Starbucks Redesign

	// Starbucks | Toggle Logo and Hamburger Color

	function toggleColor() {

		var logo, hamburgerBtnLineTop, hamburgerBtnLineBottom;

		logo = document.querySelector('a.logo');
		hamburgerBtnLineTop = document.querySelector('div.hamburger-btn-line-top');
		hamburgerBtnLineBottom = document.querySelector('div.hamburger-btn-line-bottom');

		if (document.title !== "Ye Shin | Designer") {
			
			logo.style.color = "black";

			hamburgerBtnLineTop.style.backgroundColor = "black";
			hamburgerBtnLineBottom.style.backgroundColor = "black";

		} 
	}

	window.addEventListener('load', toggleColor, false);

	// Starbucks | Play Video Button / Progress Bar

	function checkStarbucks() {

		if (document.title === "Starbucks Redesign") {

			var playBtn;

			playBtn = document.querySelector(".play-vid-btn");

			function toggleVid () {

				var starbucksVid, vidProgressBar

				starbucksVid = document.querySelector('video.starbucks-vid');
				vidProgressBar = document.querySelector('div.vid-progress-bar');

			  if (starbucksVid.paused == true) {

					starbucksVid.play();

					vidProgressBar.style.animationPlayState = "running";

					starbucksVid.style.transition = "filter 0.3s";

					starbucksVid.style.filter = "brightness(100%)"

					playBtn.innerHTML = "Pause";

					playBtn.style.color = "lightgray";

			  } else {

				    starbucksVid.pause();

					vidProgressBar.style.animationPlayState = "paused";

				  	starbucksVid.style.transition = "filter 0.3s";
				  	
				  	starbucksVid.style.filter = "brightness(50%)"

				    playBtn.innerHTML = "Play";

				    playBtn.style.color = "white";

			  	}

			}

			playBtn.addEventListener('click', toggleVid, false);

		}

	}

	window.addEventListener('load', checkStarbucks, false);

	// Starbucks | Fade in entry

	function fadeInStarbucks() {

		if (document.title === "Starbucks Redesign") {

			if (window.innerWidth > 500) {

				var title, infoHeader, infoData, infoDataLink, landingImg, delayCounter, i;

				title = document.querySelector('h1.starbucks-landing-title');
				infoHeader = document.querySelectorAll('p.project-info-header');
				infoData = document.querySelectorAll('p.project-info-data');
				infoDataLink = document.querySelector('a.project-info-data');
				landingImg = document.querySelector('img.starbucks-landing-img');

				title.style.top = "150px";
				title.style.opacity = "1";
				title.style.transitionDelay = "0.4s";

				landingImg.style.marginTop = "75px";
				landingImg.style.opacity = "1";
				landingImg.style.transitionDelay = "1.5s";

				delayCounter = 0.5;

				for (i = 0; i < infoHeader.length; i++) {

					infoHeader[i].style.marginTop = "200px";

					infoHeader[i].style.opacity = "1";

					infoHeader[i].style.transitionDelay = delayCounter + "s";

					delayCounter = delayCounter += 0.1;

				}

				for (i = 0; i < infoData.length; i++) {

					infoData[i].style.marginTop = "200px";
					infoDataLink.style.marginTop = "200px";

					infoData[i].style.opacity = "1";
					infoDataLink.style.opacity = "1";

					infoData[i].style.transitionDelay = delayCounter + "s";
					infoDataLink.style.transitionDelay = "1.4s";

					delayCounter = delayCounter += 0.1;

				}

				infoDataLink.addEventListener('mouseenter', function() {

					infoDataLink.style.color = "black";
					infoDataLink.style.transition = "color 0.3s";
					infoDataLink.style.transitionDelay = "0s";

				}, false);

				infoDataLink.addEventListener('mouseleave', function() {

					infoDataLink.style.color = "#E54B4B";
					infoDataLink.style.transition = "color 0.3s";
					infoDataLink.style.transitionDelay = "0s";

				}, false);

			} else {

				var title, infoHeader, infoData, infoDataLink, landingImg;

				title = document.querySelector('h1.starbucks-landing-title');
				infoHeader = document.querySelectorAll('p.project-info-header');
				infoData = document.querySelectorAll('p.project-info-data');
				infoDataLink = document.querySelector('a.project-info-data');
				landingImg = document.querySelector('img.starbucks-landing-img');

				title.style.top = "150px";
				title.style.opacity = "1";
				title.style.transitionDelay = "0.4s";

				landingImg.style.marginTop = "75px";
				landingImg.style.opacity = "1";
				landingImg.style.transitionDelay = "1.5s";

				infoHeader[0].style.marginTop = "200px";
				infoHeader[0].style.opacity = "1";
				infoHeader[0].style.transitionDelay = "0.5s";

				infoData[0].style.marginTop = "200px";
				infoData[0].style.opacity = "1";
				infoData[0].style.transitionDelay = "0.6s";


				infoHeader[1].style.marginTop = "30px";
				infoHeader[1].style.opacity = "1";
				infoHeader[1].style.transitionDelay = "0.7s";
				infoHeader[1].style.clear = "left";

				infoData[1].style.marginTop = "30px";
				infoData[1].style.opacity = "1";
				infoData[1].style.transitionDelay = "0.8s";


				infoHeader[2].style.marginTop = "30px";
				infoHeader[2].style.opacity = "1";
				infoHeader[2].style.transitionDelay = "0.9s";
				infoHeader[2].style.clear = "left";

				infoData[2].style.marginTop = "30px";
				infoData[2].style.opacity = "1";
				infoData[2].style.transitionDelay = "1s";


				infoHeader[3].style.marginTop = "30px";
				infoHeader[3].style.opacity = "1";
				infoHeader[3].style.transitionDelay = "1.1s";

				infoData[3].style.marginTop = "30px";
				infoData[3].style.opacity = "1";
				infoData[3].style.transitionDelay = "1.2s";

				infoData[4].style.marginTop = "30px";
				infoData[4].style.opacity = "1";
				infoData[4].style.transitionDelay = "1.3s";

				infoDataLink.style.marginTop = "30px";
				infoDataLink.style.opacity = "1";
				infoDataLink.style.transitionDelay = "1.4s";

			}

		}

	}


	window.addEventListener('load', fadeInStarbucks, false);

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Mobile UI Concepts Page Animation

	// UI | Fade in entry

	function fadeInUi() {

		if (document.title === "Mobile UI Concepts") {

			var header, subHeader, landingImg;

			header = document.querySelector('h1.ui-landing-header');
			subHeader = document.querySelector('p.ui-landing-subheader');
			landingImg = document.querySelector('img.ui-landing-img');

			header.style.top = "225px";
			header.style.opacity = "1";
			header.style.transitionDelay = "0.6s";

			subHeader.style.marginTop = "275px";
			subHeader.style.opacity = "1";
			subHeader.style.transitionDelay = "0.8s";

			landingImg.style.marginTop = "75px";
			landingImg.style.opacity = "1";
			landingImg.style.transitionDelay = "1s";

		}

	}

	window.addEventListener('load', fadeInUi, false);

	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// Poster Designs Page Animation

	// Posters | Fade in entry

	function fadeInPosters() {

		if (document.title === "Poster Designs") {

			var header, text, landingImg;

			header = document.querySelector('h1.poster-landing-header');
			text = document.querySelectorAll('p.poster-text');
			landingImg = document.querySelector('img.poster-landing-img');

			header.style.top = "225px";
			header.style.opacity = "1";
			header.style.transitionDelay = "0.6s";

			text[0].style.top = "275px";
			text[0].style.opacity = "1";
			text[0].style.transitionDelay = "0.7s";

			text[1].style.top = "275px";
			text[1].style.opacity = "1";
			text[1].style.transitionDelay = "0.8s";

			landingImg.style.marginTop = "300px";
			landingImg.style.opacity = "1";
			landingImg.style.transitionDelay = "1s";

		}

	}

	window.addEventListener('load', fadeInPosters, false);

});