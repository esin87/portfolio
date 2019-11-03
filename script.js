//profile picture switcheroo
let esin = document.getElementById('esin-picture');

esin.addEventListener('mouseover', () => {
	if (esin.getAttribute('src') == 'images/esinbw2.jpeg') {
		esin.setAttribute('src', 'images/esin_bookshelf.jpg');
	} else {
		esin.setAttribute('src', 'images/esinbw2.jpeg');
	}
});

//social icon hijinks
let linkedin = document.getElementById('linkedin');
let github = document.getElementById('github');
let instagram = document.getElementById('instagram');
let email = document.getElementById('email');
let resume = document.getElementById('resume');

linkedin.addEventListener('mouseover', () => {
	if (linkedin.getAttribute('src') == 'images/icons/045-linkedin.png') {
		linkedin.setAttribute('src', 'images/icons/001-linkedin.png');
	} else {
		linkedin.setAttribute('src', 'images/icons/045-linkedin.png');
	}
});

github.addEventListener('mouseover', () => {
	if (github.getAttribute('src') == 'images/icons/038-github.png') {
		github.setAttribute('src', 'images/icons/github.png');
	} else {
		github.setAttribute('src', 'images/icons/038-github.png');
	}
});

instagram.addEventListener('mouseover', () => {
	if (instagram.getAttribute('src') == 'images/icons/025-instagram.png') {
		instagram.setAttribute('src', 'images/icons/002-instagram.png');
	} else {
		instagram.setAttribute('src', 'images/icons/025-instagram.png');
	}
});

email.addEventListener('mouseover', () => {
	if (
		email.getAttribute('src') ==
		'images/icons/black-back-closed-envelope-shape.png'
	) {
		email.setAttribute('src', 'images/icons/003-gmail.png');
	} else {
		email.setAttribute(
			'src',
			'images/icons/black-back-closed-envelope-shape.png'
		);
	}
});

resume.addEventListener('mouseover', () => {
	if (resume.getAttribute('src') == 'images/icons/005-profile-1.png') {
		resume.setAttribute('src', 'images/icons/004-profile.png');
	} else {
		resume.setAttribute('src', 'images/icons/005-profile-1.png');
	}
});
