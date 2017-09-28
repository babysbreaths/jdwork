 window.onload = window.onresize = function () {
	var rem = document.getElementsByTagName('body')[0].clientWidth * 100 / 750;
	document.documentElement.style.fontSize = rem + 'px';
};
