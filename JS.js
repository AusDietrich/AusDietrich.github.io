function contact(piece) {
	window.location.href = "/contact";
	setTimeout(otherMethod(piece), 1000);
}
function otherMethod(piece) {
	document.getElementById('contact').innerHTML = "I would be interested in " + piece;
	document.getElementById('custom').checked = true;
}