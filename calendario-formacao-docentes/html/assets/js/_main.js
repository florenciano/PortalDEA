
$(document).ready(function(){
	/* ==========================================================================
	   events: pages all
	========================================================================== */

	/* 1. Inscreva-se já e Cancelar inscrição */
	var btnInscrevaSe = $( "#inscreva-se" ), btnCancelarInscricao = $( "#cancelarInscricao" );

	/* 2. Lista das datas dos eventos */
	var listDate = $( ".datas" );

	/* 3. Solicitando novos eventos com o DEA */
	var btnSolicita = $( "#solicita" ), bgModal = $( ".bg-modal" ),
	formEvent = $( ".formSolicitarEvento" ), modais = $( ".modal" ), fechar = $( "#fechar" );

	/* 4. Listagem geral de eventos de todas as áreas */
	var fecharModal = $( ".fecharModal" ), btnOnClickArea = $( ".boxLabel a" );

	/* 5. Alterando o texto dos horários do evento */
	var listaDate_eng = $( ".datas-eng" );
	
	/////////////////////////////////////////////////////////////////////
	// functions
	/////////////////////////////////////////////////////////////////////
	/* 1. */
	function swipeElements (ev) {
		$( ".contentEvent, .formInscricao" ).toggle( 'fast' );
		ev.preventDefault();
	}

	/* 2. */
	function goDate2 () {
		var url = $(this).val();
		if (url) { window.location = url; }
		return false;
	}

	/* 3. */
	function openModal (ev) {
		$([bgModal, formEvent]).each( function () {
			$(this).fadeIn( 400 );
			ev.preventDefault();
		});
	}
	function hideModal (ev) {
		$([bgModal, formEvent, modais]).each( function () {
			$(this).fadeOut( 400 );
			ev.preventDefault();
		});
	}

	/* 4. */
	function openModalArea (event) {
		var a = $(this).attr( "id" );

		switch(a) {
			case "dea":
				$( ".modal-dea" ).add( $(bgModal) ).fadeIn( 400 );
				break;
			case "graduacao":
				$( ".modal-graduacao" ).add( $(bgModal) ).fadeIn( 400 );
				break;
			case "pgls":
				$( ".modal-pgls" ).add( $(bgModal) ).fadeIn( 400 );
				break;
			case "educacaoExecutiva":
				$( ".modal-edExecutiva" ).add( $(bgModal) ).fadeIn( 400 );
				break;
			case "mba":
				$( ".modal-mba" ).add( $(bgModal) ).fadeIn( 400 );
				break;
			case "engenharia":
				$( ".modal-engenharia" ).add( $(bgModal) ).fadeIn( 400 );
				break;
			default:
				break;
		}

		event.preventDefault();
	}

	function hideModalArea (ev) {
		$(this).parent( ".modal" ).fadeOut( 400 );
		$(bgModal).fadeOut( 400 );
		ev.preventDefault();
	}

	/* 5. */
	function altText () {
		var value = $(this).val(),
			hora = $( "#hora" ),
			horaCafe = $( "#hora-cafe" );
		if(value == 1) {
			$(hora).text( "9h às 12h30" );
			$(horaCafe).text( "(café a partir das 8h30)" );
		} else if(value == 2) {
			$(hora).text( "14h às 17h30" );
			$(horaCafe).text( "(café a partir das xhxx)" );
		}
	}


	/////////////////////////////////////////////////////////////////////
	// events
	/////////////////////////////////////////////////////////////////////
	/* 1. */
	btnInscrevaSe.on( "click", swipeElements );
	btnCancelarInscricao.on( "click", swipeElements );

	/* 2. */
	$(listDate).on( "change", goDate2 );

	/* 3. */
	$(btnSolicita).on( "click", openModal );
	$(fechar).on( "click", hideModal );
	$(bgModal).on( "click", hideModal );

	/* 4. */
	$(btnOnClickArea).each( function () {
		$(this).on( "click", openModalArea );
	});
	$(fecharModal).each( function () {
		$(this).on( "click", hideModalArea );
	});

	/* 5. */
	$(listaDate_eng).on( "change", altText );

});