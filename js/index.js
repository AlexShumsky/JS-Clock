const theme = document.querySelectorAll('.theme');
const secondHands = document.querySelectorAll('.second-hand');
const minuteHands = document.querySelectorAll('.minute-hand');
const hourHands = document.querySelectorAll('.hour-hand');


theme.forEach(el => el.addEventListener('click', function (e) {
	removeActiveTheme();
	addActiveTheme(this);
	wrapperAddActiveTheme(this);
}))
function removeActiveTheme() {
	theme.forEach(el => el.classList.remove('active-theme'));
};
function addActiveTheme(el) {
	el.classList.add('active-theme');
}
function wrapperAddActiveTheme(el) {
	const wrapper = document.querySelector('body');
	(el.classList.contains('theme-d')) ? wrapper.classList.add('dark') : wrapper.classList.remove('dark');
}
function showTime() {
	const date = new Date();
	showSeconds(date.getSeconds());
	showMinutes(date.getMinutes());
	showHours(date.getHours(), date.getMinutes());
	showDate(date);
}
function showSeconds(seconds) {
	if (seconds == 0) {
		secondHands.forEach(secondHand => secondHand.style.transitionDuration = '0s');
		minuteHands.forEach(minuteHand => minuteHand.style.transitionDuration = '0s');
		hourHands.forEach(hourHand => hourHand.style.transitionDuration = '0s');
	} else {
		secondHands.forEach(secondHand => secondHand.style.transitionDuration = '0.05s');
		minuteHands.forEach(minuteHand => minuteHand.style.transitionDuration = '0.05s');
		hourHands.forEach(hourHand => hourHand.style.transitionDuration = '0.05s');
	}
	const degree = (seconds / 60) * 360 + 90;
	secondHands.forEach(secondHand => secondHand.style.transform = `rotate(${degree}deg)`);
}
function showMinutes(minutes) {
	const degree = (minutes / 60) * 360 + 90;
	minuteHands.forEach(minuteHand => minuteHand.style.transform = `rotate(${degree}deg)`);
}
function showHours(hours, mins) {
	const degrees = [hours, hours - 8, hours - 18, hours - 3].map(hour => hour / 12 * 360 + 90 + (mins / 60) * 30);
	hourHands.forEach((hourHand, city) => hourHand.style.transform = `rotate(${degrees[city]}deg)`);
}
function showDate(date) {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	const footer = document.querySelector('.date__container');
	footer.innerHTML = `${time} ${days[date.getDay()]} ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
}
setInterval(showTime, 1000);