
$(document).ready(function(){
	
	/* ==========================================================================
	   events: eventTest
	========================================================================== */

	/////////////////////////////////////////////////////////////////////
	// Vars
	/////////////////////////////////////////////////////////////////////

	var btnInscrevaSe = $( "#inscreva-se" ); // Inscreva-se já
	var btnCancelarInscricao = $( "#cancelarInscricao" ); // Cancelar inscrição

	/////////////////////////////////////////////////////////////////////
	// functions
	/////////////////////////////////////////////////////////////////////

	function swipeElements (ev) {
		$( ".contentEvent, .formInscricao" ).toggle( 'fast' );
		ev.preventDefault();
	}

	/////////////////////////////////////////////////////////////////////
	// events
	/////////////////////////////////////////////////////////////////////

	btnInscrevaSe.on( "click", swipeElements );
	btnCancelarInscricao.on( "click", swipeElements );

	// removing iframe while finished enrolment
	// var clear = document.getElementById('DoneButton');
	// clear.addEventListener("click",function(){
	// 	console.log("asss");
	// 	window.open("http://localhost/projetos/","_self");
	// });
	$( "#DoneButton" ).on( "click", function() {
		window.open("http://localhost/projetos/","_self");
	});

});