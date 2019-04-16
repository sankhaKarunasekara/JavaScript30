const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function tick() {

	const now = new Date();

	//finding out degrees need to rotate for a second.
	const seconds = now.getSeconds() * (360 / 60) + 90;
	const minutes = now.getMinutes() * (360 / 60) + 90;
	const hours = (now.getHours() > 12) ? (now.getHours() + (now.getMinutes() / 60) - 12) * (360 / 12) + 90 : (now.getHours() + (now.getMinutes() / 60)) * (360 / 12) + 90;

	secondHand.style.transform = `rotate(${seconds}deg)`;
	minHand.style.transform = `rotate(${minutes}deg)`;
	hourHand.style.transform = `rotate(${hours}deg)`;
}

setInterval(tick, 1000);
tick();