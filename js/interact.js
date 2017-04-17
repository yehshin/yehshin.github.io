// JavaScript for Ye Heon Shin's Portfolio

function fadeInUp() {
	var label, about, work, resume, email, smLinks, contactLine, resumeLine;

	label = document.getElementById('label');
	about = document.getElementById('about');
	work = document.getElementById('work');
	resume = document.getElementById('resume');
	email = document.getElementById('email');
	smLinks = document.getElementById('sm-links');
	contactLine = document.getElementById('contact-line');
	resumeLine = document.getElementById('resume-line');

	label.className = 'fadeInEntry';
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

window.addEventListener('load', fadeInUp, false);
window.addEventListener('load', flashLines, false);

// var strings, i;

// function expandWeb() {
// 	for (var i = 0; i < strings.length; i++) {
// 		strings[i].className += ' string' + [i + 1];
// 	}
// }

// label.addEventListener('mouseenter', expandWeb, false);

