

function contact(piece) {
	window.location.href = "/contact";
	sessionStorage.setItem("checkBox", true);
	sessionStorage.setItem("interest", piece);
	console.log(sessionStorage.getItem("interest"));
	console.log(sessionStorage.getItem("checkBox"));
	console.log(piece);
}
function formFill(){
	console.log(sessionStorage.getItem("interest"));
	console.log(sessionStorage.getItem("checkBox"));
    document.getElementById('contact').value = "I would be interested in " + sessionStorage.getItem("interest");
    document.querySelector('custom').checked = sessionStorage.getItem("checkBox");
}

