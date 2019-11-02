let header = document.querySelector('header');

header.addEventListener('click', () => {
	window.location.href = './index.html';
});

//save for later:
// const colors = [
// 	'rgba(255, 191, 0, .1)',
// 	'rgba(0, 128, 255, .1)',
// 	'rgba(1, 223, 58, .1)',
// 	'rgba(255, 0, 128, .1)'
// ];

// randomColor = array => {
// 	backgroundColor = array[Math.floor(Math.random() * array.length)];
// 	return backgroundColor;
// };

// changeBackgroundColor = () => {
// 	const homeDivs = document.getElementsByClassName('home');
// 	let color = randomColor(colors);
// 	for (let i = 0; i < homeDivs.length; i++) {
// 		homeDivs[i].style.backgroundColor = color;
// 	}
// };
// changeBackgroundColor();
