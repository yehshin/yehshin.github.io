// JavaScript for Ye Heon Shin's Portfolio

function fadeInUp() {
	var label, about, work, resume, email, smLinks;

	label = document.getElementById('label');
	about = document.getElementById('about');
	work = document.getElementById('work');
	resume = document.getElementById('resume');
	email = document.getElementById('email');
	smLinks = document.getElementById('sm-links');

	label.className = 'fadeInEntry';
	about.className = 'fadeInUp';
	work.className = 'fadeInUp';
	resume.className = 'fadeInUp';
	email.className = 'fadeInUp';
	smLinks.className = 'fadeInUp';
	contactLine.className = 'fadeInUp';
	resumeLine.className = 'fadeInUp';
}

window.addEventListener('load', fadeInUp, false);

