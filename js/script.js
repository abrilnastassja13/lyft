//Alerta para numero de telefono

$(document).ready(function(){
	// aca va todo lo ejecutable
	$("#next").on("click", function(){
		var numeroCelular = $("#numero-celular").val();
		if (numeroCelular.length != 8) {
			alert("Your number must contain 8 digits");
			return false;
		}

	});

});
