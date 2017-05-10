// JavaScript for Ye Heon Shin's Portfolio

function fadeIn() {

	var container, containerJotIt, pageLink;

	containerWork = document.querySelector("#container-work");
	containerJotIt = document.querySelector("#container-jot-it");
	pageLink = document.querySelector(".page-link")

	if (document.title == "Ye Shin | Designer" || document.title == "Ye Shin | Designer | Work") {
		containerWork.className = "fadeInUp";
		pageLink.className += " fadeIn";
	} else {
		containerJotIt.className = "fadeInUp";
		pageLink.className += " fadeIn";
	}

}

window.addEventListener("load", fadeIn, false);
