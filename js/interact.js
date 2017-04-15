// JavaScript for Ye Heon Shin's Portfolio

function fadeInEntry() {
	var label;

	label = document.getElementById('label');

	label.className = 'fadeInEntry';
}

function labelThreeD() {
	this.className = 'labelThreeD';

	underline.className = '';
}

function flash() {
	var underline = document.getElementById('underline');

	underline.className = 'flash';
}

function fadeInUp() {
	var about, work, resume, email, smLinks, contactLine, resumeLine;

	about = document.getElementById('about');
	work = document.getElementById('work');
	resume = document.getElementById('resume');
	email = document.getElementById('email');
	smLinks = document.getElementById('sm-links');
	contactLine = document.getElementById('contact-line');
	resumeLine = document.getElementById('resume-line');

	about.className = 'fadeInUp';
	work.className = 'fadeInUp';
	resume.className = 'fadeInUp';
	email.className = 'fadeInUp';
	smLinks.className = 'fadeInUp';
	contactLine.className = 'fadeInUp';
	resumeLine.className = 'fadeInUp';
}

function flashLines() {
	contactLine = document.getElementById('contact-line');
	resumeLine = document.getElementById('resume-line');

	contactLine.className = 'flashContactLine';
	resumeLine.className = 'flashResumeLine'
}

window.addEventListener('load', fadeInEntry, false);
window.addEventListener('load', flash, false);
label.addEventListener('click', labelThreeD, false);
label.addEventListener('click', fadeInUp, false);
label.addEventListener('click', flashLines, false);

// var strings, i;

// function expandWeb() {
// 	for (var i = 0; i < strings.length; i++) {
// 		strings[i].className += ' string' + [i + 1];
// 	}
// }

// label.addEventListener('mouseenter', expandWeb, false);

