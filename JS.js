
let textBox = document.getElementById('contact');
let checkedBox = document.getElementById('custom');

function contact(piece) {
//	window.location.href = "/contact";
    textBox.value = "I would be interested in " + piece;
    console.log(textBox)
    checkedBox.checked = true;
}
