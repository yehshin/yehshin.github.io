// Universal Animations

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

		hamburgerBtnLineTop.style.transform = "rotate(495deg)"; // 135deg // 495
		hamburgerBtnLineBottom.style.transform = "rotate(225deg)"; // 45deg // 225

		hamburgerBtnLineTop.style.transformOrigin = "40% 50%";
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

// Hover on/off Hamburger

function hoverOnHamburger() {

	if(this.className === "hamburger-btn") {

		hamburgerBtnLineTop.style.animationName = "topLineOn";
		hamburgerBtnLineBottom.style.animationName = "bottomLineOn";

	}

}

function hoverOffHamburger() {


	if(this.className === "hamburger-btn") {

		hamburgerBtnLineTop.style.animationName = "topLineOff";
		hamburgerBtnLineBottom.style.animationName = "bottomLineOff";

	}

}

hamburgerBtn.addEventListener('mouseenter', hoverOnHamburger, false);
hamburgerBtn.addEventListener('mouseleave', hoverOffHamburger, false);

// Reveal Nav Background

var navMenu = document.querySelector('div.nav-menu');

function revealNavBackground() {

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

hamburgerBtn.addEventListener('click', revealNavBackground, false);

// Hover Nav Items

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

// Reveal Nav Items

function revealNavItems() {

	for (i = 0; i < navItem.length; i++) {

		if (navItem[i].className === "nav-item") {

			var delayCounter = 0.5;

			for (i = 0; i < navItem.length; i++) {

				navItem[i].style.transition = "opacity 0.7s, visibility 0.7s";

				navItem[i].style.transitionDelay = delayCounter + "s";

				navItem[i].style.animationDelay = delayCounter + "s";

				navItem[i].setAttribute('class', 'nav-item-revealed');

				delayCounter = delayCounter += 0.1;

			}

		} else if (navItem[i].className === "nav-item-revealed") {

			navItem[i].style.transition = "opacity 0.2s, visibility 0.2s";

			navItem[i].setAttribute('class', 'nav-item');

		}

	}

}

hamburgerBtn.addEventListener('click', revealNavItems, false);

// Reveal Contact Links

var contactLinks, i;

contactLinks = document.querySelectorAll('a.contact-link');

function revealContactLinks() {

	for (i = 0; i < contactLinks.length; i++) {

		if (contactLinks[i].className === "nav-item") {

			var delayCounter = 0.5;

			for (i = 0; i < contactLinks.length; i++) {

				contactLinks[i].style.transition = "opacity 0.7s, visibility 0.7s";

				contactLinks[i].style.transitionDelay = delayCounter + "s";

				contactLinks[i].style.opacity = "1";

				contactLinks[i].style.visibility = "visible";

				contactLinks[i].style.animationDelay = delayCounter + "s";

				contactLinks[i].setAttribute('class', 'contact-link-revealed');

				delayCounter = delayCounter += 0.1;

			}

		} else if (contactLinks[i].className === "contact-link-revealed") {

			contactLinks[i].style.transition = "opacity 0.2s, visibility 0.2s";

			contactLinks[i].style.opacity = "0";

			contactLinks[i].style.visibility = "hidden";

			contactLinks[i].setAttribute('class', 'nav-item');

		}

	}

}

hamburgerBtn.addEventListener('click', revealContactLinks, false);

// Mobile UI Concept Animations

function checkUiTitle() {

	if (document.title === "Mobile UI Concepts") {

		// Fixed List

		function hideFixedList() {

			if (this.innerWidth < 1349 && this.innerWidth > 1000) {

				if (this.pageYOffset > 22400 || this.pageYOffset < 1399) {

					var fixedListTitle, fixedList;

					fixedListTitle = document.querySelector('p.fixed-ui-list-title');
					fixedList = document.querySelector('ul.fixed-ui-list');

					fixedListTitle.style.transition = 'opacity 0.2s';
					fixedList.style.transition = "opacity 0.2s";

					fixedListTitle.style.opacity = "0";
					fixedList.style.opacity = "0";

				} else {

					var fixedListTitle, fixedList;

					fixedListTitle = document.querySelector('p.fixed-ui-list-title');
					fixedList = document.querySelector('ul.fixed-ui-list');

					fixedListTitle.style.transition = 'opacity 0.5s';
					fixedList.style.transition = "opacity 0.5s";

					fixedListTitle.style.opacity = "1";
					fixedList.style.opacity = "1";

				}

			} else if (this.innerWidth > 1350) {

				if (this.pageYOffset > 24200 || this.pageYOffset < 1399) {

					var fixedListTitle, fixedList;

					fixedListTitle = document.querySelector('p.fixed-ui-list-title');
					fixedList = document.querySelector('ul.fixed-ui-list');

					fixedListTitle.style.transition = 'opacity 0.2s';
					fixedList.style.transition = "opacity 0.2s";

					fixedListTitle.style.opacity = "0";
					fixedList.style.opacity = "0";

				} else {

					var fixedListTitle, fixedList;

					fixedListTitle = document.querySelector('p.fixed-ui-list-title');
					fixedList = document.querySelector('ul.fixed-ui-list');

					fixedListTitle.style.transition = 'opacity 0.5s';
					fixedList.style.transition = "opacity 0.5s";

					fixedListTitle.style.opacity = "1";
					fixedList.style.opacity = "1";

				}

			}

		}

		window.addEventListener('scroll', hideFixedList, false);
		window.addEventListener('resize', hideFixedList, false);

		// Targeting the list items

		function scaleListItem() {

			var fixedUiItem;

			fixedUiItem = document.querySelectorAll('li.fixed-ui-item');


			if (this.innerWidth > 1350) {

				// First Item | News

				if (this.pageYOffset > 1500) {

					fixedUiItem[0].id = "selected";

				} else {

					fixedUiItem[0].id = "";

				}

				// Second Item | Profiles

				if (this.pageYOffset > 4900) {

					fixedUiItem[0].id = "";
					fixedUiItem[1].id = "selected";

				} else {

					fixedUiItem[1].id = "";

				}

				// Third Item | Messaging

				if (this.pageYOffset > 7800) {

					fixedUiItem[1].id = "";
					fixedUiItem[2].id = "selected";

				} else {

					fixedUiItem[2].id = "";

				}

				// Fourth Item | Weather

				if (this.pageYOffset > 9300) {

					fixedUiItem[2].id = "";
					fixedUiItem[3].id = "selected";

				} else {

					fixedUiItem[3].id = "";

				}

				// Fifth Item | Sign Ups

				if (this.pageYOffset > 11400) {

					fixedUiItem[3].id = "";
					fixedUiItem[4].id = "selected";

				} else {

					fixedUiItem[4].id = "";

				}

				// Sixth Item | Paws

				if (this.pageYOffset > 15700) {

					fixedUiItem[4].id = "";
					fixedUiItem[5].id = "selected";

				} else {

					fixedUiItem[5].id = "";

				}

				// Seventh Item | Blogs

				if (this.pageYOffset > 17200) {

					fixedUiItem[5].id = "";
					fixedUiItem[6].id = "selected";

				} else {

					fixedUiItem[6].id = "";

				}

				// Eigth Item | Productivity

				if (this.pageYOffset > 18700) {

					fixedUiItem[6].id = "";
					fixedUiItem[7].id = "selected";

				} else {

					fixedUiItem[7].id = "";

				}

				// Ninth Item | E-Commerce

				if (this.pageYOffset > 20200) {

					fixedUiItem[7].id = "";
					fixedUiItem[8].id = "selected";

				} else {

					fixedUiItem[8].id = "";

				}

				// Tenth Item | Finance

				if (this.pageYOffset > 21700) {

					fixedUiItem[8].id = "";
					fixedUiItem[9].id = "selected";

				} else {

					fixedUiItem[9].id = "";

				}

				// Eleventh | Music

				if (this.pageYOffset > 23200) {

					fixedUiItem[9].id = "";
					fixedUiItem[10].id = "selected";

				} else {

					fixedUiItem[10].id = "";

				}

			} else if (this.innerWidth < 1349 && this.innerWidth > 1000) {

				// First Item | News

				if (this.pageYOffset > 1200) {

					fixedUiItem[0].id = "selected";

				} else {

					fixedUiItem[0].id = "";

				}

				// Second Item | Profiles

				if (this.pageYOffset > 4600) {

					fixedUiItem[0].id = "";
					fixedUiItem[1].id = "selected";

				} else {

					fixedUiItem[1].id = "";

				}

				// Third Item | Messaging

				if (this.pageYOffset > 7200) {

					fixedUiItem[1].id = "";
					fixedUiItem[2].id = "selected";

				} else {

					fixedUiItem[2].id = "";

				}

				// Fourth Item | Weather

				if (this.pageYOffset > 8600) {

					fixedUiItem[2].id = "";
					fixedUiItem[3].id = "selected";

				} else {

					fixedUiItem[3].id = "";

				}

				// Fifth Item | Sign Ups

				if (this.pageYOffset > 10500) {

					fixedUiItem[3].id = "";
					fixedUiItem[4].id = "selected";

				} else {

					fixedUiItem[4].id = "";

				}

				// Sixth Item | Paws

				if (this.pageYOffset > 14300) {

					fixedUiItem[4].id = "";
					fixedUiItem[5].id = "selected";

				} else {

					fixedUiItem[5].id = "";

				}

				// Seventh Item | Blogs

				if (this.pageYOffset > 15800) {

					fixedUiItem[5].id = "";
					fixedUiItem[6].id = "selected";

				} else {

					fixedUiItem[6].id = "";

				}

				// Eigth Item | Productivity

				if (this.pageYOffset > 17200) {

					fixedUiItem[6].id = "";
					fixedUiItem[7].id = "selected";

				} else {

					fixedUiItem[7].id = "";

				}

				// Ninth Item | E-Commerce

				if (this.pageYOffset > 18700) {

					fixedUiItem[7].id = "";
					fixedUiItem[8].id = "selected";

				} else {

					fixedUiItem[8].id = "";

				}

				// Tenth Item | Finance

				if (this.pageYOffset > 20000) {

					fixedUiItem[8].id = "";
					fixedUiItem[9].id = "selected";

				} else {

					fixedUiItem[9].id = "";

				}

				// Eleventh | Music

				if (this.pageYOffset > 21400) {

					fixedUiItem[9].id = "";
					fixedUiItem[10].id = "selected";

				} else {

					fixedUiItem[10].id = "";

				}

			}

		}

		window.addEventListener('scroll', scaleListItem, false);

		// When screen is resized

		function adjustFixedList() {

			if (this.innerWidth < 1349 && this.innerWidth > 1000) {

				var fixedUiItem, i;

				fixedUiItem = document.querySelectorAll('li.fixed-ui-item');

				for (i = 0; i < fixedUiItem.length; i++) {

					fixedUiItem[i].style.marginTop = "10px";

				}

			} else {

				var fixedUiItem, i;

				fixedUiItem = document.querySelectorAll('li.fixed-ui-item');

				for (i = 0; i < fixedUiItem.length; i++) {

					fixedUiItem[i].style.marginTop = "20px";

				}

			}

		}

		window.addEventListener('load', adjustFixedList, false);
		window.addEventListener('resize', adjustFixedList, false);

	}

}

window.addEventListener('load', checkUiTitle, false);


// Poster Design Animations

function checkPosterTitle() {

	if (document.title === "Poster Designs") {

		

	}

}

window.addEventListener('load', checkPosterTitle, false);