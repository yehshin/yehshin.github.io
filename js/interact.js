// JavaScript for Ye Heon Shin's Portfolio

var aboutLink = document.querySelector('.navAbout');
var aboutBg = document.getElementById('aboutBg');
var aboutText = document.getElementById('aboutText');

var workLink = document.querySelector('.navWork');
var workBg = document.getElementById('workBg');
var workText = document.getElementById('workText');

var contactLink = document.querySelector('.navContact');
var contactBg = document.getElementById('contactBg');
var resume = document.getElementById('resume');
var email = document.getElementById('email');

var stripedBg = document.getElementById('stripedBg');
var aboutStripedBg = document.getElementById('aboutStripedBg');
var workStripedBg = document.getElementById('workStripedBg');
var contactStripedBg = document.getElementById('contactStripedBg');

var platformTextBg = document.getElementById('platformTextBg');

var loadCover = document.getElementById('loadCover');

function loadPage() {

	workBg.id = "workBgTop";
	workText.id = "workBgTop";

	contactBg.id = "contactBgTop";
	resume.id = "hideResume";
	email.id = "hideEmail";

	workStripedBg.id = "workStripedBgTop";
	contactStripedBg.id = "contactStripedBgTop";

	stripedBg.id = "aboutStripedBg";
	platformTextBg.id = "aboutPlatformTextBg";

	loadCover.id = "loadCover";

}

function about() {

	if (workBg.id === "workBg" || contactBg.id === "contactBg") {
		
		aboutBg.id = "aboutBg";
		aboutText.id = "aboutText";

		workBg.id = "workBgTop";

		contactBg.id = "contactBgTop";
		resume.id = "resume";
		email.id = "email";

		aboutStripedBg.id = "aboutStripedBg";
		workStripedBg.id = "workStripedBgTop";
		contactStripedBg.id = "contactStripedBgTop";

		stripedBg.id = "aboutStripedBg";
		platformTextBg.id = "aboutPlatformTextBg";

	}
}

function work() {

	if (aboutBg.id === "aboutBg" || contactBg.id === "contactBg") {

		workBg.id = "workBg";
		workText.id = "workText";

		aboutBg.id = "aboutBgTop";

		contactBg.id = "contactBgTop";
		resume.id = "resume";
		email.id = "email";

		workStripedBg.id = "workStripedBg";
		aboutStripedBg.id = "aboutStripedBgTop";
		contactStripedBg.id = "contactStripedBgTop";

		stripedBg.id = "workStripedBg";
		platformTextBg.id = "workPlatformTextBg";

	}
}

function contact() {
	
	if (aboutBg.id === "aboutBg" || workBg.id === "workBg") {

		contactBg.id = "contactBg";
		resume.id = "resume";
		email.id = "email";

		aboutBg.id = "aboutBgTop";
		workBg.id = "workBgTop";

		contactStripedBg.id = 'contactStripedBg';
		aboutStripedBg.id = "aboutStripedBgTop";
		workStripedBg.id = "workStripedBgTop";

		stripedBg.id = "contactStripedBg";
		platformTextBg.id = "contactPlatformTextBg";

	}
}

window.addEventListener("load", loadPage, false);
aboutLink.addEventListener("click", about, false);
workLink.addEventListener("click", work, false);
contactLink.addEventListener("click", contact, false);