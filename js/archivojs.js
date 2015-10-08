// alert("Holaaaaaaa");

var seleccion = document.getElementById("sel");
seleccion.onchange = function (){
	alert(seleccion.value);
};

function abrePopup() {
	open("http://www.google.es", "Google", "width=800, height=600");
}

var funcionAnonima = function() {
	alert("Funcion anonima");
}

function fLlama (param) {
	param();
	//return function() {
	//	alert("Hey!");
	//}
}

// fLlama(funcionAnonima);

document.getElementById("funcionAnonima").onclick = funcionAnonima;

//document.getElementById("timeOut").onclick = function () {
//	setTimeout(function() {
//		alert("Timeout!");
//	}, 3000);
//};

var temporizador = function() {
	alert("Timeout!");
};

var clickBoton = function() {
	setTimeout(temporizador, 3000)
};

document.getElementById("timeOut").onclick = clickBoton;