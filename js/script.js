//Alerta para numero de telefono

$(document).ready(function() {
	// aca va todo lo ejecutable
	$("#next").on("click", function() {
		var numeroCelular = $("#numero-celular").val();
		if (numeroCelular.length != 8) {
			alert("Your number must contain 8 digits");
			return false;
		}

	});

});

$(document).ready(function() {
	$("#next").on("click", function() {
		var codigoAleatorio = $ ("#codigo1").val();
	alert("LAB - " + Math.floor((Math.random() * 8) + 1) + Math.floor((Math.random() * 8) + 1) + Math.floor((Math.random() * 8) + 1));

	});

});

//Sidebar
$(".button-collapse").sideNav();

//Mostrar sidebar
$('.button-collapse').sideNav('show');
//Ocultar sidebar
$('.button-collapse').sideNav('hide');
/*Destroy sideNav
$('.button-collapse').sideNav('destroy');*/
        