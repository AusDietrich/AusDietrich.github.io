

function contact(piece) {
	window.location.href = "/contact";
	sessionStorage.setItem("checkBox", true);
	sessionstorage.setItem("piece", piece);
	console.log(sessionStorage.getItem("piece"));
	console.log(sessionStorage.getItem("checkBox"));
}
function formFill(){
	console.log(sessionStorage.getItem("piece"));
	console.log(sessionStorage.getItem("checkBox"));
    document.getElementById('contact').value = "I would be interested in " + sessionStorage.getItem("piece");
    document.getElementById('custom').checked = sessionStorage.getItem("checkBox");
}

