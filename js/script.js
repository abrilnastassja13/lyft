/* teclado = function(ev) {
	var ascii = ev.keycode;
	if ((ascii>= 48 && ascii<=57) || ascii==37 || ascii==39 || ascii== 8) {
			return true;
	}	else {
			return false;
	}
}*/

var celular = function() {
	var maximoDigitos = $("#numero-celular").val();
	if (maximoDigitos.length < 8) {
		alert("Debe contener como máximo 8 digitos");
	}
	 return false;
}

var carga = function() {
	$("#numero-celular").focus();
	
}

$(document).ready(carga);