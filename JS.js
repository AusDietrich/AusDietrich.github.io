

function contact(piece) {
	window.location.href = "/contact";
	window.sessionStorage.setItem("checkBox", true);
	window.sessionstorage.setItem("interest", piece);
	console.log(window.sessionStorage.getItem("interest"));
	console.log(window.sessionStorage.getItem("checkBox"));
	console.log(piece);
}
function formFill(){
	console.log(window.sessionStorage.getItem("interest"));
	console.log(window.sessionStorage.getItem("checkBox"));
    document.getElementById('contact').value = "I would be interested in " + window.sessionStorage.getItem("interest");
    document.querySelector('custom').checked = window.sessionStorage.getItem("checkBox");
}

