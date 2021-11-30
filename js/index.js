const theme = document.querySelectorAll('.theme');

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