/* ==========================================================================
   Configurando os dados do calendário
========================================================================== */
$(document).ready(function() {
	$( "#calendar" ).fullCalendar({
		lang: "pt-br",
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		weekends: true, // will hide saturdays and sundays
		// editable: true,
		eventLimit: true, // allow "more" link when too many events
		eventColor: '#ee2a5d', // color default: DEA
		eventTextColor: '#fff', // color text default
		eventBorderColor: 'transparent',
		events: [
			{
				title: 'FÓRUM: How Learning Work (capítulo 8)',
				start: '2014-12-10T18:00:00',
				end:   '2014-12-10T20:30:00',	
				url:   'http://insper.edu.br/',
				backgroundColor: '#ee2a5d' // customizando este evento
			},
			{

				title: 'Aula Presencial',
				start: '2014-12-12T12:30:00',
				end: '2014-12-12T13:30:00',
				backgroundColor: '#646464',
				url:   'http://portaldoprofessor.insper.edu.br/'	
			},
			{

				title: 'Workshop blackboard: Boas práticas',
				start: '2014-12-12T10:00:00',
				end: '2014-12-12T12:00:00',
				url:   'http://portaldoprofessor.insper.edu.br/'	
			},
			{

				title: 'Pré-Teste de Conhecimentos Prévios',
				// start: '2014-12-05', // evento dia todo
				start: '2014-12-05T15:00:00',
				end: '2014-12-05T16:45:00',
				backgroundColor: '#f58220',
				url:   'http://insper.blackboard.com/'	
			}
			// {
			// 	id: 999,
			// 	title: 'Repeating Event',
			// 	start: '2014-11-14T16:00:00'
			// },
			// {
			// 	id: 999,
			// 	title: 'Repeating Event',
			// 	start: '2014-11-21T16:00:00'
			// }
		],
		timeFormat: 'H(:mm)',
		eventClick: function(event) {
			if( event.url ) {
				window.open(event.url);
				return false;
			}
		}
	});
});