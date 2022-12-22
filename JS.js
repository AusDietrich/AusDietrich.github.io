

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
	if(!sessionStorage.getItem("interest") == null){
    document.getElementById("contact").value = "I would be interested in " ;
    document.getElementById("contact2").value = "I would be interested in " ;
	}
	document.getElementById("custom").checked = sessionStorage.getItem("checkBox");
	document.getElementById("custom2").checked = sessionStorage.getItem("checkBox");
}

