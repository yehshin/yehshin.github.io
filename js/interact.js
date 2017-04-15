// JavaScript for Ye Heon Shin's Portfolio

function fadeInEntry() {
	var label;

	label = document.getElementById('label');

	label.className = 'fadeInEntry';
}

function labelThreeD() {
	this.className = 'labelThreeD';
}

function fadeInUp() {
	var about, work, resume, email, smLinks;

	about = document.getElementById('about');
	work = document.getElementById('work');
	resume = document.getElementById('resume');
	email = document.getElementById('email');
	smLinks = document.getElementById('sm-links');

	about.className = 'fadeInUp';
	work.className = 'fadeInUp';
	resume.className = 'fadeInUp';
	email.className = 'fadeInUp';
	smLinks.className = 'fadeInUp';
}

window.addEventListener('load', fadeInEntry, false);
label.addEventListener('click', labelThreeD, false);
label.addEventListener('click', fadeInUp, false);

// var strings, i;

// function expandWeb() {
// 	for (var i = 0; i < strings.length; i++) {
// 		strings[i].className += ' string' + [i + 1];
// 	}
// }

// label.addEventListener('mouseenter', expandWeb, false);

