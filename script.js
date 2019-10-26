let header = document.querySelector('header');

header.addEventListener('click', () => {
	window.location.href = './index.html';
});

const colors = [
	'rgba(255, 191, 0, .25)',
	'rgba(0, 128, 255, .25)',
	'rgba(1, 223, 58, .25)',
	'rgba(255, 0, 128, .25)'
];

randomColor = array => {
	backgroundColor = array[Math.floor(Math.random() * array.length)];
	return backgroundColor;
};

changeBackgroundColor = () => {
	var homeDivs = document.getElementsByClassName('home');
	for (let i = 0; i < homeDivs.length; i++) {
		homeDivs[i].style.backgroundColor = randomColor(colors);
		homeDivs[i].addEventListener('mouseenter', function(event) {
			console.log(event.target);
			event.target.style.backgroundColor = randomColor(colors);
		});
	}
};

changeBackgroundColor();
