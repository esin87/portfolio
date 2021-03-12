//social icon hijinks
const iconBox = document.getElementById('icon-container');
const linkedin = document.getElementById('linkedin');
const github = document.getElementById('github');
const generalAssembly = document.getElementById('generalAssembly');
const instagram = document.getElementById('instagram');
const email = document.getElementById('email');
const resume = document.getElementById('resume');

iconBox.addEventListener('mouseover', () => {
	linkedin.setAttribute('src', 'images/icons/001-linkedin.png');
	github.setAttribute('src', 'images/icons/github.png');
	generalAssembly.setAttribute('src', 'images/icons/ga-logo.png');
	instagram.setAttribute('src', 'images/icons/002-instagram.png');
	email.setAttribute('src', 'images/icons/003-gmail.png');
	resume.setAttribute('src', 'images/icons/004-profile.png');
});

iconBox.addEventListener('mouseout', () => {
	linkedin.setAttribute('src', 'images/icons/045-linkedin.png');
	github.setAttribute('src', 'images/icons/038-github.png');
	generalAssembly.setAttribute('src', 'images/icons/ga-logo-bw.png');

	instagram.setAttribute('src', 'images/icons/025-instagram.png');
	email.setAttribute(
		'src',
		'images/icons/black-back-closed-envelope-shape.png'
	);
	resume.setAttribute('src', 'images/icons/005-profile-1.png');
});
