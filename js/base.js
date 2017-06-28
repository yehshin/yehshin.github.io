// // Universal Animations

// // Hamburger Menu Btn

// var hamburgerBtn, hamburgerBtnLineTop, hamburgerBtnLineBottom;

// hamburgerBtn = document.querySelector('div.hamburger-btn');
// hamburgerBtnLineTop = document.querySelector('div.hamburger-btn-line-top');
// hamburgerBtnLineBottom = document.querySelector('div.hamburger-btn-line-bottom');

// function hamburgerBtnTransform() {

// 	if (this.className === "hamburger-btn") {

// 		hamburgerBtnLineTop.style.transition = "transform 0.4s, top 0.4s, background-color 0.4s";
// 		hamburgerBtnLineBottom.style.transition = "transform 0.4s, background-color 0.4s";
// 		hamburgerBtnLineTop.style.transitionTimingFunction = "ease-in";
// 		hamburgerBtnLineBottom.style.transitionTimingFunction = "ease-in";

// 		hamburgerBtnLineTop.style.transform = "rotate(495deg)"; // 135deg // 495
// 		hamburgerBtnLineBottom.style.transform = "rotate(225deg)"; // 45deg // 225

// 		hamburgerBtnLineTop.style.transformOrigin = "40% 50%";
// 		hamburgerBtnLineTop.style.top = "11px";
// 		hamburgerBtnLineTop.style.left = "1px";

// 		hamburgerBtnLineTop.style.backgroundColor = "white";
// 		hamburgerBtnLineBottom.style.backgroundColor = "white";

// 		this.setAttribute('class', 'hamburger-btn-clicked');

// 	} else if (this.className === "hamburger-btn-clicked") {
		
// 		hamburgerBtnLineTop.style.transition = "transform 0.4s, top 0.4s, background-color 0.4s";
// 		hamburgerBtnLineBottom.style.transition = "transform 0.4s, background-color 0.4s";
// 		hamburgerBtnLineTop.style.transitionTimingFunction = "ease-in";
// 		hamburgerBtnLineBottom.style.transitionTimingFunction = "ease-in";

// 		hamburgerBtnLineTop.style.transform = "rotate(0deg)";
// 		hamburgerBtnLineTop.style.top = "4px";
// 		hamburgerBtnLineTop.style.left = "2px";
// 		hamburgerBtnLineBottom.style.transform = "rotate(0deg)";

// 		hamburgerBtnLineTop.style.backgroundColor = "black";
// 		hamburgerBtnLineBottom.style.backgroundColor = "black";

// 		this.setAttribute('class', 'hamburger-btn');

// 	}

// }

// hamburgerBtn.addEventListener('click', hamburgerBtnTransform, false);

// // Hover on/off Hamburger

// function hoverOnHamburger() {

// 	if(this.className === "hamburger-btn") {

// 		hamburgerBtnLineTop.style.animationName = "topLineOn";
// 		hamburgerBtnLineBottom.style.animationName = "bottomLineOn";

// 	}

// }

// function hoverOffHamburger() {


// 	if(this.className === "hamburger-btn") {

// 		hamburgerBtnLineTop.style.animationName = "topLineOff";
// 		hamburgerBtnLineBottom.style.animationName = "bottomLineOff";

// 	}

// }

// hamburgerBtn.addEventListener('mouseenter', hoverOnHamburger, false);
// hamburgerBtn.addEventListener('mouseleave', hoverOffHamburger, false);

// // Reveal Nav Background

// var navMenu = document.querySelector('div.nav-menu');

// function revealNavBackground() {

// 	if (navMenu.className === "nav-menu") {

// 		navMenu.style.position = "fixed";

// 		var body = document.querySelector('body');

// 		body.style.overflow = "hidden";

// 		navMenu.setAttribute('class', 'nav-menu-revealed');

// 	} else if (navMenu.className === 'nav-menu-revealed') {

// 		var body = document.querySelector('body');

// 		body.style.overflow = "visible";

// 		navMenu.setAttribute('class', 'nav-menu');

// 	}

// }

// hamburgerBtn.addEventListener('click', revealNavBackground, false);

// // Hover Nav Items

// var navItem, i;
	
// navItem = document.querySelectorAll('a.nav-item');

// for (i = 0; i < navItem.length; i++) {

// 	navItem[i].addEventListener('mouseenter', function() {

// 		this.style.marginLeft = "110px";
// 		this.style.transition = "margin-left 0.3s";

// 	}, false)

// 	navItem[i].addEventListener('mouseleave', function() {

// 		this.style.marginLeft = "100px";
// 		this.style.transition = "margin-left 0.3s";

// 	}, false)
// }

// // Reveal Nav Items

// function revealNavItems() {

// 	for (i = 0; i < navItem.length; i++) {

// 		if (navItem[i].className === "nav-item") {

// 			var delayCounter = 0.5;

// 			for (i = 0; i < navItem.length; i++) {

// 				navItem[i].style.transition = "opacity 0.7s, visibility 0.7s";

// 				navItem[i].style.transitionDelay = delayCounter + "s";

// 				navItem[i].style.animationDelay = delayCounter + "s";

// 				navItem[i].setAttribute('class', 'nav-item-revealed');

// 				delayCounter = delayCounter += 0.1;

// 			}

// 		} else if (navItem[i].className === "nav-item-revealed") {

// 			navItem[i].style.transition = "opacity 0.2s, visibility 0.2s";

// 			navItem[i].setAttribute('class', 'nav-item');

// 		}

// 	}

// }

// hamburgerBtn.addEventListener('click', revealNavItems, false);


