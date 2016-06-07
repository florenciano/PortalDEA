
$(document).ready(function(){
	/* ==========================================================================
	   events: pages all
	========================================================================== */

	/* 1. Inscreva-se já e Cancelar inscrição */
	// No momento sem utilidade... algumas páginas
	// tem o iframe do formulário de inscrição 
	// embedados no html, enviabilizando esta fn()
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
		// a] workshop novos professores engenharia
	var listaDate_eng = $( ".datas-eng" ),
		hora = $( "#hora" ),
		horaCafe = $( "#hora-cafe" ),
		sala = $( "#sala" );

		// b] workshop Olin [engenharia]
	var listaDate_Olin = $( "#dates-workshops" );


	/* 6. Efeito tabs */
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
	// a.
	function altText () {
		var value = $(this).val();
		if (value == 1) {
			$(hora).text( "9h às 12h30" );
			$(horaCafe).text( "(café a partir das 8h30)" );
			$(sala).text( "Sala 202 - 2º andar" );
		} else if (value == 2) {
			$(hora).text( "14h às 18h" );
			$(horaCafe).text( "" );
			$(sala).text( "Sala 404 - 4º andar" );
		}
	}

	// b.
	function textEventOlin (text) { $(hora).text( text ); }
	
	function altText_Olin () {
		var v = $(this).val();
		if (v == 0) { textEventOlin( "9h às 17h" ); } 	// dia 14
		if (v == 1) { textEventOlin( "9h às 16h30" ); } // dia 15
		if (v == 2) { textEventOlin( "9h às 15h" ); } 	// dia 16
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

		// b.
	function tabs (btnClick, tabActive, btn1, hideTab1, btn2, hideTab2, listEvents) {
		btnClick.addClass( "active-" + tabActive + "-listEvent" ); 		// add style 'active'
		$( ".listagem-geral" ).hide();									// hide all content
		btn1.removeClass( "active-" + hideTab1 + "-listEvent" ); 		// remove style 'active' item1
		btn2.removeClass( "active-" + hideTab2 + "-listEvent" ); 		// remove style 'active' item2
		listEvents.fadeIn( 400 ); 										// view list of events
	}

	/* 7. Fornecendo mais detalhes no email de contato da página clicada */
	function aboutEvent_mail() {
		var a = document.querySelector("#footer a[href^='mailto:']"),
			t = document.title,
			fras;
		
		a.setAttribute("href", a.getAttribute("href") + "?subject=Informações%20do%20evento:%20" + t_slice());

		function t_slice() { 
			fras = t.substring(t.indexOf("-")+1,t.length);
			return fras = fras.replace(/ +/g,"%20");
		}
	}
	aboutEvent_mail();

	/* 8. Inserindo URL de inscrição do form dos cursos do ACA */
	function getURLFormACA (el) {
		if(document.getElementById(el) !== null) {
			var linkPermanent = "https://insper.eu.qualtrics.com/SE/?SID=SV_af1hqJJ3pr0eYn3";
			document.getElementById(el).setAttribute("href", linkPermanent);
		}
	}
	// Aplicar em todos os elementos que tenham este ID
	getURLFormACA("formQualtrics-aca");

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
	// a]
	$(listaDate_eng).on( "change", altText );

	// b]
	$(listaDate_Olin).on( "change", altText_Olin );

	/* 6. */
	//  a] 
	$(btn_exp_rec).on( "click", function (ev) {
		$(this).parent().next( "ul.events-finished" ).toggle( 400 );
		girarIcone( $(this) );
		ev.preventDefault();
	});

	//  b] effect tabs
	$(btnGeral).on( "click", function (ev) {
		tabs( $(this), "magenta", $(btnGraduacao), "laranja", $(btnPGLS), "cinza", $(listGeral_magenta) );
		ev.preventDefault();
	});

	$(btnGraduacao).on( "click", function (ev) {
		tabs( $(this), "laranja", $(btnGeral), "magenta", $(btnPGLS), "cinza", $(listGeral_laranja) );
		ev.preventDefault();
	});

	$(btnPGLS).on( "click", function (ev) {
		tabs( $(this), "cinza", $(btnGeral), "magenta", $(btnGraduacao), "laranja", $(listGeral_cinza) );
		ev.preventDefault();
	});

});