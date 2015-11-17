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
            }, 
            {
                title: 'Módulo Avaliações – Turma 1 (Geral)',
                start: '2015-08-05',
                end:   '2015-08-05',   
                backgroundColor: '#ee2a5d',
                url:   'geral/avaliacoes-turma1.html'
            },
            {
                title: 'Módulo Aprendizado Centrado no Aluno – Turma 5 (Geral)',
                start: '2015-08-12',
                end:   '2015-08-12',   
                backgroundColor: '#ee2a5d',
                url:   'geral/aprendizado-centrado-aluno-turma5.html'
            },
            {
                title: 'Módulo Aprendizado Centrado no Aluno – Turma 6 (Geral)',
                start: '2015-09-23',
                end:   '2015-09-23',   
                backgroundColor: '#ee2a5d',
                url:   'geral/aprendizado-centrado-aluno-turma6.html'
            },
            {
                title: 'Módulo Planejamento de Curso – Turma 1 (Geral)',
                start: '2015-08-23',
                end:   '2015-08-23',   
                backgroundColor: '#ee2a5d',
                url:   'geral/planejamento-curso-turma1.html'
            },
            {
                title: 'Workshop: Aprendizado entre Pares (Geral - Público Interno)',
                start: '2015-08-03',
                end:   '2015-08-03',   
                backgroundColor: '#ee2a5d',
                url:   'geral/workshop-aprendizado-entre-pares.html'
            },//////////////////// GRADUACAO ////////////////////
            {

                title: 'Elaboração de questões de múltipla escolha e sua contribuição para a gestão do aprendizado (Graduação)',
                start: '2015-04-15T09:00:00', //'2015-04-15T12:00:00',
                end: '2015-04-15T12:00:00',
                backgroundColor: '#f58220',
                url:   'graduacao/iniciativa-desenvolvimento-docentes.html'
            },
            {

                title: 'Elaboração de questões de múltipla escolha e sua contribuição... (Graduação)',
                start: '2015-10-07T09:00:00',
                end: '2015-10-07T12:00:00',
                backgroundColor: '#f58220',
                url:   'graduacao/iniciativa-desenvolvimento-docentes2.html'
            },
            {

                title: 'Oficina de elaboração de questões de múltipla escolha (Graduação)',
                start: '2015-10-07T14:00:00',
                end: '2015-10-07T16:00:00',
                backgroundColor: '#f58220',
                url:   'graduacao/iniciativa-desenvolvimento-docentes2-oficina.html'
            },
            {
                title: 'Workshop de Novos Professores da Engenharia (Graduação)',
                start: '2015-11-04T09:00:00',
                end:   '2015-11-04T12:30:00',   
                backgroundColor: '#f58220',
                url:   'graduacao/workshop-novos-professores-engenharia.html'
            },
            {
                title: 'Workshop de Novos Professores da Engenharia (Graduação)',
                start: '2015-11-26T14:00:00',
                end:   '2015-11-26T18:00:00',   
                backgroundColor: '#f58220',
                url:   'graduacao/workshop-novos-professores-engenharia.html'
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