//social icon hijinks
let iconBox = document.getElementById('icon-container');

let linkedin = document.getElementById('linkedin');
let github = document.getElementById('github');
let instagram = document.getElementById('instagram');
let email = document.getElementById('email');
let resume = document.getElementById('resume');

iconBox.addEventListener('mouseover', () => {
	linkedin.setAttribute('src', 'images/icons/001-linkedin.png');
	github.setAttribute('src', 'images/icons/github.png');
	instagram.setAttribute('src', 'images/icons/002-instagram.png');
	email.setAttribute('src', 'images/icons/003-gmail.png');
	resume.setAttribute('src', 'images/icons/004-profile.png');
});

iconBox.addEventListener('mouseout', () => {
	linkedin.setAttribute('src', 'images/icons/045-linkedin.png');
	github.setAttribute('src', 'images/icons/038-github.png');
	instagram.setAttribute('src', 'images/icons/025-instagram.png');
	email.setAttribute(
		'src',
		'images/icons/black-back-closed-envelope-shape.png'
	);
	resume.setAttribute('src', 'images/icons/005-profile-1.png');
});
