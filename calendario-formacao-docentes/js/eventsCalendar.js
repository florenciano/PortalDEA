/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Eventos para inserir no calendário
    // http://fullcalendar.io/
    
    Códigos de cores para os departamentos
    geral/dea = #ee2a5d;
    pgls      = #646464;
    graduacao = #f58220;
    ed. executiva = #00acc9;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
$(document).ready(function() {
    $( "#calendar" ).fullCalendar({
        lang: "pt-br",
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        weekends: true, // will hide saturdays and sundays
        eventLimit: true, // allow "more" link when too many events
        eventColor: '#ee2a5d',
        eventTextColor: '#fff', // color text default
        eventBorderColor: 'transparent',
        timeFormat: 'H(:mm)',
        events: [
            {
                title: 'Módulo Aprendizado Centrado no Aluno – Turma 3 (Geral)',
                start: '2015-02-25',
                end:   '2015-02-25',   
                backgroundColor: '#ee2a5d',
                url:   'geral/aprendizado-centrado-aluno-turma3.html'
            },
            {
                title: 'Módulo Aprendizado Centrado no Aluno – Turma 4 (Geral)',
                start: '2015-04-08',
                end:   '2015-04-08',   
                backgroundColor: '#ee2a5d',
                url:   'geral/aprendizado-centrado-aluno-turma4.html'
            },
            {
                title: 'Módulo Lecture – Turma 1 \n (Geral)',
                start: '2015-04-01',
                end:   '2015-04-01',   
                backgroundColor: '#ee2a5d',
                url:   'geral/lecture-turma1.html'
            }, //////////////////// GRADUACAO ////////////////////
            {

                title: 'Elaboração de questões de múltipla escolha e sua contribuição para a gestão do aprendizado (Graduação)',
                start: '2015-04-15T09:00:00', //'2015-04-15T12:00:00',
                end: '2015-04-15T12:00:00',
                backgroundColor: '#f58220',
                url:   'graduacao/iniciativa-desenvolvimento-docentes.html'
            },
            {

                title: 'Iniciativa de Desenvolvimento de Docentes (Graduação)',
                start: '2015-10-07',
                end: '2015-10-07',
                backgroundColor: '#f58220',
                url:   'graduacao/iniciativa-desenvolvimento-docentes2.html'
            }, //////////////////// PGLS ////////////////////
            {
                title: 'Workshop de Professores - Plano de Aula 1 (PGLS)',
                start: '2015-04-11T08:30:00',
                end: '2015-04-11T12:00:00',
                backgroundColor: '#646464',
                url:   'pgls/workshop-professores1.html'
            },
            {
                title: 'Workshop de Professores - Plano de Aula 1 (PGLS)',
                start: '2015-05-15T18:00:00',
                end: '2015-05-15T21:00:00',
                backgroundColor: '#646464',
                url:   'pgls/workshop-professores1b.html'
            },
            {
                title: 'Workshop de Professores - Plano de Aula 2 (PGLS)',
                start: '2015-09-11T18:00:00',
                end: '2015-09-11T21:00:00',
                backgroundColor: '#646464',
                url:   'pgls/workshop-professores2.html'
            },
            {
                title: 'Workshop de Professores - Plano de Aula 2 (PGLS)',
                start: '2015-10-17T09:00:00',
                end: '2015-10-17T12:00:00',
                backgroundColor: '#646464',
                url:   'pgls/workshop-professores2b.html'
            } //////////////////// EDUCACAO EXECUTIVA //////////////////// 
        ],
        eventClick: function(event) {
            if( event.url ) {
                window.open(event.url,_self);
                return false;
            }
        }
    });
});