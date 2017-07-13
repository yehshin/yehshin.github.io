document.addEventListener("DOMContentLoaded", function(event) {

	// UNIVERSAL

	// UNIVERSAL | Toggle Nav

	function toggleNav () { // toggle nav layout between desktop and mobile

		if (window.innerWidth <= 736) { // if mobile

			var nav, burger;

			nav = document.querySelector('div.nav');
			burger = document.querySelector('div.burger-frame');

			nav.style.display = "none";
			burger.style.display = "block";

		} else { // if desktop

			var nav, burger;

			nav = document.querySelector('div.nav');
			burger = document.querySelector('div.burger-frame');

			burger.style.display = "none";
			nav.style.display = "flex";

		}

	}

	window.addEventListener('resize', toggleNav, false);
	window.addEventListener('load', toggleNav, false);

	// UNIVERSAL | Burger Animation 

	var burger;

	burger = document.querySelector('div.burger-frame');

	function toggleBurger() {

		if (burger.className === "burger-frame") {

			var top, bottom;

			top = document.querySelector('div.burger-top');
			bottom = document.querySelector('div.burger-bottom');

			top.style.animationName = "topClicked";
			top.style.animationDuration = '0.5s';
			top.style.animationFillMode = "forwards";

			bottom.style.animationName = "bottomClicked";
			bottom.style.animationDuration = '0.5s';
			bottom.style.animationFillMode = "forwards";

			burger.setAttribute('class', 'burger-frame-clicked');

		} else if (burger.className === "burger-frame-clicked") {

			var top, bottom;

			top = document.querySelector('div.burger-top');
			bottom = document.querySelector('div.burger-bottom');

			top.style.animationName = "topUnclicked";
			top.style.animationDuration = '0.5s';
			top.style.animationFillMode = "forwards";

			bottom.style.animationName = "bottomUnclicked";
			bottom.style.animationDuration = '0.5s';
			bottom.style.animationFillMode = "forwards";

			burger.setAttribute('class', 'burger-frame');

		}

	}

	burger.addEventListener('click', toggleBurger, false);

	// UNIVERSAL | Burger Nav Menu

	var burgerNav;

	burgerNav = document.querySelector('div.burger-nav');

	function toggleBurgerNav() {

		if (window.innerWidth <= 736) {

			if (burgerNav.className === "burger-nav") {

				burgerNav.setAttribute('class', 'burger-nav-revealed');

			} else if (burgerNav.className === "burger-nav-revealed") {

				burgerNav.setAttribute('class', 'burger-nav');

			}

		} 

	}

	burger.addEventListener('click', toggleBurgerNav, false);

	// UNIVERSAL | Verify baguettes

	if (document.title === "UI Concepts" || document.title === "Posters") {

		baguetteBox.run('.gallery');

		baguetteBox.run('.gallery', {

			noScrollbars: true

		});

	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// HOME


	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// ABOUT


	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// MINDFULL


	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// STARBUCKS


	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// UI 


	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// POSTERS



}); // closes: document.addEventListener("DOMContentLoaded", function(event) {