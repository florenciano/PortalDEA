
$(document).ready(function(){
	/* ==========================================================================
	   events: pages all
	========================================================================== */

	/* 1. Inscreva-se já e Cancelar inscrição */
	var btnInscrevaSe = $( "#inscreva-se" ),
		btnCancelarInscricao = $( "#cancelarInscricao" );

	/* 2. Lista das datas dos eventos */
	var listDate = $( ".datas" );

	/* 3. Solicitando novos eventos com o DEA */
	var btnSolicita = $( "#solicita" ),
		bgModal = $( ".bg-modal" ),
		formEvent = $( ".formSolicitarEvento" ),
		modais = $( ".modal" ),
		fechar = $( "#fechar" );

	/* 4. Listagem geral de eventos de todas as áreas */
	var fecharModal = $( ".fecharModal" ),
		btnOnClickArea = $( ".boxLabel a" );

	/* 5. Alterando o texto dos horários do evento */
	var listaDate_eng = $( ".datas-eng" );

	/* 6 */
	
	// a] Toggle eventos concluídos
	var btn_exp_rec = $( ".concluido" );

	// b] Toggle área
	var btnGeral, btnGraduacao, btnPGLS;
		btnGeral = $( "#geral" ),
		btnGraduacao = $( "#graduacao" ),
		btnPGLS = $( "#pgls" );
	var listGeral_magenta, listGeral_laranja, listGeral_cinza;
		listGeral_magenta = $( "#listagem-geral-magenta" ),
		listGeral_laranja = $( "#listagem-geral-laranja" ),
		listGeral_cinza = $( "#listagem-geral-cinza" );
	
	/////////////////////////////////////////////////////////////////////
	// functions
	/////////////////////////////////////////////////////////////////////
	/* 1. */
	function swipeElements (ev) {
		$( ".contentEvent, .formInscricao" ).toggle( 400 );
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

	/* 4.
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
	*/

	/* 5. */
	function altText () {
		var value = $(this).val(),
			hora = $( "#hora" ),
			horaCafe = $( "#hora-cafe" ),
			sala = $( "#sala" );
		if(value == 1) {
			$(hora).text( "9h às 12h30" );
			$(horaCafe).text( "(café a partir das 8h30)" );
			$(sala).text( "Sala 202 - 2º andar" );
		} else if(value == 2) {
			$(hora).text( "14h às 18h" );
			$(horaCafe).text( "" );
			$(sala).text( "Sala 404 - 4º andar" );
		}
	}

	/* 6. */
	// a.
	function girarIcone (el) {
		var i = el.children( "img" );
		if (i.attr( "data-rotate" ) == "0") {
			i.css({
    			"-webkit-transform": "rotate(90deg)",
				"-ms-transform": "rotate(90deg)",
    			"-0-transform": "rotate(90deg)",
    			transform: "rotate(90deg)"
    		});
    		i.attr( "data-rotate", "90" );
		} else {
			i.css({
    			"-webkit-transform": "rotate(0deg)",
				"-ms-transform": "rotate(0deg)",
    			"-0-transform": "rotate(0deg)",
    			transform: "rotate(0deg)"
    		});
    		i.attr( "data-rotate", "0" );
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

	/* 4. 
	$(btnOnClickArea).each( function () {
		$(this).on( "click", openModalArea );
	});
	$(fecharModal).each( function () {
		$(this).on( "click", hideModalArea );
	});
	*/

	/* 5. */
	$(listaDate_eng).on( "change", altText );

	/* 6. */
	//  a.
	$(btn_exp_rec).on( "click", function (ev) {
		$(this).parent().next( "ul.events-finished" ).toggle( 400 );
		girarIcone( $(this) );
		ev.preventDefault();
	});

	//  b.
	$(btnGeral).on( "click", function (ev) {
		$(this).toggleClass( "active-magenta-listEvent" ); // add style 'active'
		$( ".listagem-geral" ).hide();
		$(btnGraduacao).removeClass( "active-laranja-listEvent" ); // remove style 'active' graduacao
		$(btnPGLS).removeClass( "active-cinza-listEvent" ); // remove style 'active' pgls
		$(listGeral_magenta).fadeIn( 400 ); // toggle view content
		ev.preventDefault();
	});

	$(btnGraduacao).on( "click", function (ev) {
		$(this).toggleClass( "active-laranja-listEvent" );
		$( ".listagem-geral" ).hide();
		$(btnGeral).removeClass( "active-magenta-listEvent" );
		$(btnPGLS).removeClass( "active-cinza-listEvent" );
		$(listGeral_laranja).fadeIn( 400 );
		ev.preventDefault();
	});

	$(btnPGLS).on( "click", function (ev) {
		$(this).toggleClass( "active-cinza-listEvent" );
		$( ".listagem-geral" ).hide();
		$(btnGeral).removeClass( "active-magenta-listEvent" );
		$(btnGraduacao).removeClass( "active-laranja-listEvent" );
		$(listGeral_cinza).fadeIn( 400 );
		ev.preventDefault();
	});
});