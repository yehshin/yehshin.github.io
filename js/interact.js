// Ye Heon Shin's JavaScript for his Portfolio

var images, introImg1, introImg2, introImg3, introImg4, introImg5, scrollGuide, i;

images = document.querySelectorAll('img');

introImgs = document.querySelectorAll('.introImg');
introImg1 = document.querySelectorAll('.introImg')[0];
introImg2 = document.querySelectorAll('.introImg')[1];
introImg3 = document.querySelectorAll('.introImg')[2];
introImg4 = document.querySelectorAll('.introImg')[3];
introImg5 = document.querySelectorAll('.introImg')[4];

window.addEventListener("scroll", function() {

	if (window.pageYOffset > 600) {

		scrollGuide = document.querySelector('#scrollGuide');
		scrollGuide.style.animationFillMode = "none";

	}

}, false)

for (i = 0; i < images.length; i++) {

	introImgs[i].addEventListener('mouseenter', function() {

		this.style.transition = "opacity 0.3s, transform 0.3s ease-out";
		this.style.opacity = "0.3";
		this.style.transform = "scale(1.1)"

	}, false);

	introImgs[i].addEventListener('mouseleave', function() {

		this.style.opacity = "1";
		this.style.transform = "scale(1)"

	}, false);

}

function displayBreatheText() {

	var projectTitle = document.querySelectorAll('.projectTitle')[0];
	var projectInfo = document.querySelectorAll('.projectInfo')[0];

	projectTitle.style.transition = "opacity 0.2s";
	projectInfo.style.transition = "opacity 0.2s";

	projectTitle.style.opacity = "1";
	projectInfo.style.opacity = "1";

	projectTitle.addEventListener("mouseenter", function() {

		this.style.opacity = "1";
		projectInfo.style.opacity = "1";
		introImg1.style.opacity = "0.3";
		introImg1.style.transform = "scale(1.1)";

	}, false);

	projectInfo.addEventListener("mouseenter", function() {

		this.style.opacity = "1";
		projectTitle.style.opacity = "1";
		introImg1.style.opacity = "0.3";
		introImg1.style.transform = "scale(1.1)";

	}, false);

}

function removeBreatheText() {

	var projectTitle = document.querySelectorAll('.projectTitle')[0];
	var projectInfo = document.querySelectorAll('.projectInfo')[0];

	projectTitle.style.opacity = "0";
	projectInfo.style.opacity = "0";

	projectTitle.addEventListener("mouseleave", function() {

		this.style.opacity = "0";
		projectInfo.style.opacity = "0";
		introImg1.style.opacity = "1";
		introImg1.style.transform = "scale(1)"

	}, false);

	projectInfo.addEventListener("mouseleave", function() {

		this.style.opacity = "0";
		projectTitle.style.opacity = "0";
		introImg1.style.opacity = "1";
		introImg1.style.transform = "scale(1)"

	}, false);

}

function displayRadiusText() {

	var projectTitle = document.querySelectorAll('.projectTitle')[1];
	var projectInfo = document.querySelectorAll('.projectInfo')[1];

	projectTitle.style.transition = "opacity 0.2s";
	projectInfo.style.transition = "opacity 0.2s";

	projectTitle.style.opacity = "1";
	projectInfo.style.opacity = "1";

	projectTitle.addEventListener("mouseenter", function() {

		this.style.opacity = "1";
		projectInfo.style.opacity = "1";
		introImg2.style.opacity = "0.3";
		introImg2.style.transform = "scale(1.1)";

	}, false);

	projectInfo.addEventListener("mouseenter", function() {

		this.style.opacity = "1";
		projectTitle.style.opacity = "1";
		introImg2.style.opacity = "0.3";
		introImg2.style.transform = "scale(1.1)";

	}, false);

}

function removeRadiusText() {

	var projectTitle = document.querySelectorAll('.projectTitle')[1];
	var projectInfo = document.querySelectorAll('.projectInfo')[1];

	projectTitle.style.opacity = "0";
	projectInfo.style.opacity = "0";

	projectTitle.addEventListener("mouseleave", function() {

		this.style.opacity = "0";
		projectInfo.style.opacity = "0";
		introImg2.style.opacity = "1";
		introImg2.style.transform = "scale(1)"

	}, false);

	projectInfo.addEventListener("mouseleave", function() {

		this.style.opacity = "0";
		projectTitle.style.opacity = "0";
		introImg2.style.opacity = "1";
		introImg2.style.transform = "scale(1)"

	}, false);

}

function displayJotItText() {

	var projectTitle = document.querySelectorAll('.projectTitle')[2];
	var projectInfo = document.querySelectorAll('.projectInfo')[2];

	projectTitle.style.transition = "opacity 0.2s";
	projectInfo.style.transition = "opacity 0.2s";

	projectTitle.style.opacity = "1";
	projectInfo.style.opacity = "1";

	projectTitle.addEventListener("mouseenter", function() {

		this.style.opacity = "1";
		projectInfo.style.opacity = "1";
		introImg3.style.opacity = "0.3";
		introImg3.style.transform = "scale(1.1)";

	}, false);

	projectInfo.addEventListener("mouseenter", function() {

		this.style.opacity = "1";
		projectTitle.style.opacity = "1";
		introImg3.style.opacity = "0.3";
		introImg3.style.transform = "scale(1.1)";

	}, false);

}

function removeJotItText() {

	var projectTitle = document.querySelectorAll('.projectTitle')[2];
	var projectInfo = document.querySelectorAll('.projectInfo')[2];

	projectTitle.style.opacity = "0";
	projectInfo.style.opacity = "0";

	projectTitle.addEventListener("mouseleave", function() {

		this.style.opacity = "0";
		projectInfo.style.opacity = "0";
		introImg3.style.opacity = "1";
		introImg3.style.transform = "scale(1)"

	}, false);

	projectInfo.addEventListener("mouseleave", function() {

		this.style.opacity = "0";
		projectTitle.style.opacity = "0";
		introImg3.style.opacity = "1";
		introImg3.style.transform = "scale(1)"

	}, false);

}

function displayStarbucksText() {

	var projectTitle = document.querySelectorAll('.projectTitle')[3];
	var projectInfo = document.querySelectorAll('.projectInfo')[3];

	projectTitle.style.transition = "opacity 0.2s";
	projectInfo.style.transition = "opacity 0.2s";

	projectTitle.style.opacity = "1";
	projectInfo.style.opacity = "1";

	projectTitle.addEventListener("mouseenter", function() {

		this.style.opacity = "1";
		projectInfo.style.opacity = "1";
		introImg4.style.opacity = "0.3";
		introImg4.style.transform = "scale(1.1)";

	}, false);

	projectInfo.addEventListener("mouseenter", function() {

		this.style.opacity = "1";
		projectTitle.style.opacity = "1";
		introImg4.style.opacity = "0.3";
		introImg4.style.transform = "scale(1.1)";

	}, false);

}

function removeStarbucksText() {

	var projectTitle = document.querySelectorAll('.projectTitle')[3];
	var projectInfo = document.querySelectorAll('.projectInfo')[3];

	projectTitle.style.opacity = "0";
	projectInfo.style.opacity = "0";

	projectTitle.addEventListener("mouseleave", function() {

		this.style.opacity = "0";
		projectInfo.style.opacity = "0";
		introImg4.style.opacity = "1";
		introImg4.style.transform = "scale(1)"

	}, false);

	projectInfo.addEventListener("mouseleave", function() {

		this.style.opacity = "0";
		projectTitle.style.opacity = "0";
		introImg4.style.opacity = "1";
		introImg4.style.transform = "scale(1)"

	}, false);

}

function displayAmazonText() {

	var projectTitle = document.querySelectorAll('.projectTitle')[4];
	var projectInfo = document.querySelectorAll('.projectInfo')[4];

	projectTitle.style.transition = "opacity 0.2s";
	projectInfo.style.transition = "opacity 0.2s";

	projectTitle.style.opacity = "1";
	projectInfo.style.opacity = "1";

	projectTitle.addEventListener("mouseenter", function() {

		this.style.opacity = "1";
		projectInfo.style.opacity = "1";
		introImg5.style.opacity = "0.3";
		introImg5.style.transform = "scale(1.1)";

	}, false);

	projectInfo.addEventListener("mouseenter", function() {

		this.style.opacity = "1";
		projectTitle.style.opacity = "1";
		introImg5.style.opacity = "0.3";
		introImg5.style.transform = "scale(1.1)";

	}, false);

}

function removeAmazonText() {

	var projectTitle = document.querySelectorAll('.projectTitle')[4];
	var projectInfo = document.querySelectorAll('.projectInfo')[4];

	projectTitle.style.opacity = "0";
	projectInfo.style.opacity = "0";

	projectTitle.addEventListener("mouseleave", function() {

		this.style.opacity = "0";
		projectInfo.style.opacity = "0";
		introImg5.style.opacity = "1";
		introImg5.style.transform = "scale(1)"

	}, false);

	projectInfo.addEventListener("mouseleave", function() {

		this.style.opacity = "0";
		projectTitle.style.opacity = "0";
		introImg5.style.opacity = "1";
		introImg5.style.transform = "scale(1)"

	}, false);

}

introImg1.addEventListener("mouseenter", displayBreatheText, false);
introImg1.addEventListener("mouseleave", removeBreatheText, false);

introImg2.addEventListener("mouseenter", displayRadiusText, false);
introImg2.addEventListener("mouseleave", removeRadiusText, false);

introImg3.addEventListener("mouseenter", displayJotItText, false);
introImg3.addEventListener("mouseleave", removeJotItText, false);

introImg4.addEventListener("mouseenter", displayStarbucksText, false);
introImg4.addEventListener("mouseleave", removeStarbucksText, false);

introImg5.addEventListener("mouseenter", displayAmazonText, false);
introImg5.addEventListener("mouseleave", removeAmazonText, false);




if (window.innerWidth <= 375) { // Mobile Query | iPhone 6 | Portrait

	var projectTitle = document.querySelectorAll('.projectTitle');
	var projectInfo = document.querySelectorAll('.projectInfo');

	for (i = 0; i < projectTitle.length; i++) {
		projectTitle[i].style.opacity = "1";
		projectInfo[i].style.opacity = "1";

		images[i].style.opacity = "0.4";
	}

} else if (window.innerWidth >= 376 && window.innerWidth <= 667) { // Mobile Query | iPhone 6 | Landscape

	var projectTitle = document.querySelectorAll('.projectTitle');
	var projectInfo = document.querySelectorAll('.projectInfo');

	for (i = 0; i < projectTitle.length; i++) {
		projectTitle[i].style.opacity = "1";
		projectInfo[i].style.opacity = "1";

		images[i].style.opacity = "0.4";
	}

}