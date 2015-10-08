// alert("Holaaaaaaa");

var seleccion = document.getElementById("sel");
seleccion.onchange = function (){
	alert(seleccion.value);
};

function abrePopup() {
	window.open("http://www.google.es", "Google", "width=800, height=600");
}