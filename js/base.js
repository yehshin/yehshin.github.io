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

				var body;

				body = document.querySelector('body');

				body.style.overflow = "hidden";

			} else if (burgerNav.className === "burger-nav-revealed") {

				burgerNav.setAttribute('class', 'burger-nav');

				var body;

				body = document.querySelector('body');

				body.style.overflow = "visible";

			}

		} 

	}

	burger.addEventListener('click', toggleBurgerNav, false);

	// UNIVERSAL | Fade In Pages

	// Target Next Project Link Separately 

	if (document.title === "Mindfull" || document.title === "Starbucks" || document.title === "UI Concepts") {

		var nextProject;

		nextProject = document.querySelector('a.next-project');

		nextProject.addEventListener('mouseenter', function() {

			this.style.transition = "color 0.3s";
			this.style.color = "#5b5b5b";

		}, false);

		nextProject.addEventListener('mouseleave', function() {

			this.style.transition = "color 0.3s";
			this.style.color = "#243EFF";

		}, false);

	}

	// Target Posters Separately 

	if (document.title === "Posters") {

		var posters, i;

		posters = document.querySelectorAll('img.poster-img');

		for (i=0; i < posters.length; i++) {

			posters[i].addEventListener('mouseenter', function() {

				this.style.transition = "filter 0.3s";
				this.style.filter = "brightness(70%)";

			}, false);

			posters[i].addEventListener('mouseleave', function() {

				this.style.transition = "filter 0.3s";
				this.style.filter = "brightness(100%)";

			}, false);

		}

	}	

	// Everything Else

	function fadeInPages() {

		var headerFrame, footer;

		headerFrame = document.querySelector('div.header-frame');
		footer = document.querySelector('div.footer');

		headerFrame.style.opacity = "1";
		footer.style.opacity = "1";

		if (document.title === "Ye Shin | Designer") { // Home

			var greetingFrame, projectsFrame;

			greetingFrame = document.querySelector('div.greeting-frame');
			projectsFrame = document.querySelector('div.projects-frame');

			greetingFrame.style.opacity = "1";
			projectsFrame.style.opacity = "1";

		} else if (document.title === "Mindfull" || document.title === "Starbucks" || document.title === "UI Concepts" || document.title === "Posters") { // Projects

			var landingImg, landingTitle, nextProject, gallery, headers, text, problems, imgs, videos, i;

			landingImg = document.querySelector('img.landing-img');
			landingTitle = document.querySelector('p.landing-title');
			nextProject = document.querySelector('a.next-project');
			gallery = document.querySelector('div.gallery');
			headers = document.querySelectorAll('p.headers');
			text = document.querySelectorAll('p.text');
			problems = document.querySelectorAll('p.problems');
			imgs = document.querySelectorAll('img');
			videos = document.querySelectorAll('video');

			landingImg.style.opacity = "1";
			landingImg.style.transitionDelay = "0.75s";
			landingTitle.style.opacity = "1";
			landingTitle.style.transitionDelay = "1s";

			if (document.title !== 'Posters') {

				nextProject.style.opacity = "1";
				nextProject.style.transitionDelay = "1.25s";
				nextProject.style.opacity = "1";

			}

			if (document.title === 'UI Concepts' || document.title === "Posters") {

				gallery.style.opacity = "1";
				gallery.style.transitionDelay = '1.25s'

			}

			for (i = 0; i < problems.length; i++) {

				problems[i].style.opacity = "1";

			}

			for (i = 0; i < videos.length; i++) {

				videos[i].style.opacity = "1";

			}

			for (i = 0; i < headers.length; i++) {

				headers[i].style.opacity = "1";

			}

			for (i = 0; i < text.length; i++) {

				text[i].style.opacity = "1";

			}

			for (i = 0; i < imgs.length; i++) {

				imgs[i].style.opacity = "1";

			}

		} else if (document.title === "About Ye" || document.title === "Contact") {

			var headers, text, imgs;

			headers = document.querySelectorAll('p.headers');
			text = document.querySelectorAll('p.text');
			imgs = document.querySelectorAll('img');

			for (i = 0; i < headers.length; i++) {

				headers[i].style.opacity = "1";

			}

			for (i = 0; i < text.length; i++) {

				text[i].style.opacity = "1";

			}

			for (i = 0; i < imgs.length; i++) {

				imgs[i].style.opacity = "1";
				imgs[i].style.transitionDelay = "1.25s";

			}

			if (document.title === "Contact") {

				var socialLinks, i;

				socialLinks = document.querySelectorAll('a.social-links');

				for (i=0; i < socialLinks.length; i++) {

					socialLinks[i].style.opacity = "1"
					socialLinks[i].style.transitionDelay = "1.25s";

				}

			}

		} 

	} 

	window.addEventListener('load', fadeInPages, false);

	// UNIVERSAL | Fade Page Transition on Click

	// Click on logo

	var logo;

	logo = document.querySelector('a.logo');

	if (document.title === "Ye Shin | Designer") {

		logo.addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "./";

			}, 1000);

		}, false);

	} else {

		logo.addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "../";

			}, 1000);

		}, false);

	}

	// Click on Nav Items
	
	var navItem;

	navItem = document.querySelectorAll('a.nav-item');

	if (document.title === "Ye Shin | Designer") {

		navItem[0].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "about/";

			}, 1000);

		}, false);

		navItem[2].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "contact/";

			}, 1000);

		}, false);

	} else {

		navItem[0].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "../about/";

			}, 1000);

		}, false);

		navItem[2].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "../contact/";

			}, 1000);

		}, false);

	}

	// Click on Burger Items
	
	var burgerItem;

	burgerItem = document.querySelectorAll('a.burger-item');

	if (document.title === "Ye Shin | Designer") {

		burgerItem[0].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "about/";

			}, 1000);

		}, false);

		burgerItem[2].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "contact/";

			}, 1000);

		}, false);

	} else {

		burgerItem[0].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "../about/";

			}, 1000);

		}, false);

		burgerItem[2].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "../contact/";

			}, 1000);

		}, false);

	}

	// Click on next project link

	var nextProject;

	nextProject = document.querySelector('a.next-project');

	if (document.title === "Mindfull") {

		nextProject.addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "../starbucks/";

			}, 1000);

		}, false);

	} else if (document.title === "Starbucks") {

		nextProject.addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "../ui/";

			}, 1000);

		}, false);

	} else if (document.title === "UI Concepts") {

		nextProject.addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "../posters/";

			}, 1000);

		}, false);

	}

	// UNIVERSAL | Verify baguettes

	if (document.title === "UI Concepts" || document.title === "Posters") {

		baguetteBox.run('.gallery');

		baguetteBox.run('.gallery', {

			noScrollbars: true

		});

	}

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	// HOME

	// HOME | Hover Thumbnails

	var thumbnailFrame, thumbnailImg, thumbnailCaption, i;

	thumbnailFrame = document.querySelectorAll('a.thumbnail-frame');
	thumbnailImg = document.querySelectorAll('img.thumbnail-img');
	thumbnailCaption = document.querySelectorAll('p.thumbnail-caption');

	function hoverThumbnail() {

		if (window.innerWidth > 736) {

			if (this[i] === this[0]) {

				this.style.filter = "brightness(40%)";

			} else if (this[i] === this[1]) {

				this.style.filter = "brightness(40%)";

			} else if (this[i] === this[2]) {

				this.style.filter = "brightness(40%)";

			} else if (this[i] === this[3]) {

				this.style.filter = "brightness(40%)";

			}

		}

	}

	function unhoverThumbnail() {

		if (window.innerWidth > 736) {

			if (this[i] === this[0]) {

				this.style.filter = "brightness(100%)";

			} else if (this[i] === this[1]) {

				this.style.filter = "brightness(100%)";

			} else if (this[i] === this[2]) {

				this.style.filter = "brightness(100%)";

			} else if (this[i] === this[3]) {

				this.style.filter = "brightness(100%)";

			}

		}

	}

	for (i = 0; i < thumbnailFrame.length; i++) {

		thumbnailFrame[i].addEventListener('mouseenter', hoverThumbnail, false);
		thumbnailFrame[i].addEventListener('mouseleave', unhoverThumbnail, false);

	}

	// HOME

	// Fading Page Transition

	if (document.title === "Ye Shin | Designer") {

		thumbnailFrame[0].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "mindfull/";

			}, 1000);

		}, false);

		thumbnailFrame[1].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "starbucks/";

			}, 1000);

		}, false);

		thumbnailFrame[2].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "ui/";

			}, 1000);

		}, false);

		thumbnailFrame[3].addEventListener('click', function(e) {

			e.preventDefault();

			var body;

			body = document.querySelector('body');

			body.style.opacity = "0";

			setTimeout(function() { 

				window.location = "posters/";

			}, 1000);

		}, false);

	}

}); // closes: document.addEventListener("DOMContentLoaded", function(event) {