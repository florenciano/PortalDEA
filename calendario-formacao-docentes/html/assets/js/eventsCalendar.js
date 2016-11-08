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
    // code color
    var magenta = '#ee2a5d', laranja = '#f58220', cinza = '#646464';

    $( "#calendar" ).fullCalendar({
        lang:               "pt-br",
        header: {
            left:           'prev,next today',
            center:         'title',
            right:          'month,agendaWeek,agendaDay'
        },
        weekends:           true,           // will hide saturdays and sundays
        eventLimit:         true,           // allow "more" link when too many events
        eventColor:         '#000000',
        eventTextColor:     '#fff',         // color text default
        eventBorderColor:   'transparent',
        timeFormat:         'H(:mm)',
        events: [
            { /////////////////////// GERAL ///////////////////////
                title:  'Módulo Aprendizado Centrado no Aluno – Turma 3 (Geral)',
                start:  '2015-02-25',
                end:    '2015-02-25',   
                backgroundColor: magenta,
                url:    'geral/aprendizado-centrado-aluno-turma3.html'
            },
            {
                title:  'Módulo Aprendizado Centrado no Aluno – Turma 4 (Geral)',
                start:  '2015-04-08',
                end:    '2015-04-08',   
                backgroundColor: magenta,
                url:    'geral/aprendizado-centrado-aluno-turma4.html'
            },
            {
                title:  'Módulo Lecture – Turma 1 \n (Geral)',
                start:  '2015-04-01',
                end:    '2015-04-01',   
                backgroundColor: magenta,
                url:    'geral/lecture-turma1.html'
            }, 
            {
                title:  'Módulo Avaliações – Turma 1 (Geral)',
                start:  '2015-08-05',
                end:    '2015-08-05',   
                backgroundColor: magenta,
                url:    'geral/avaliacoes-turma1.html'
            },
            {
                title:  'Módulo Aprendizado Centrado no Aluno – Turma 5 (Geral)',
                start:  '2015-08-12',
                end:    '2015-08-12',   
                backgroundColor: magenta,
                url:    'geral/aprendizado-centrado-aluno-turma5.html'
            },
            {
                title:  'Módulo Aprendizado Centrado no Aluno – Turma 6 (Geral)',
                start:  '2015-09-23',
                end:    '2015-09-23',   
                backgroundColor: magenta,
                url:    'geral/aprendizado-centrado-aluno-turma6.html'
            },
            {
                title:  'Módulo Planejamento de Curso – Turma 1 (Geral)',
                start:  '2015-08-23',
                end:    '2015-08-23',   
                backgroundColor: magenta,
                url:    'geral/planejamento-curso-turma1.html'
            },
            {
                title:  'Workshop: Aprendizado entre Pares (Geral - Público Interno)',
                start:  '2015-08-03',
                end:    '2015-08-03',   
                backgroundColor: magenta,
                url:    'geral/workshop-aprendizado-entre-pares.html'
            }, //// 2016 ////
            {
                title:  'Módulo Aprendizado Centrado no Aluno – Turma 7 (Geral)',
                start:  '2016-02-16',
                end:    '2016-02-16',   
                backgroundColor: magenta,
                url:    'geral/aprendizado-centrado-aluno-turma7.html'
            },
            {
                title:  'Módulo Aprendizado Centrado no Aluno – Turma 8 (Geral)',
                start:  '2016-03-01',
                end:    '2016-03-01',   
                backgroundColor: magenta,
                url:    'geral/aprendizado-centrado-aluno-turma8.html'
            },
            {
                title:  'Módulo Aprendizado Centrado no Aluno – Turma 9 (Geral)',
                start:  '2016-05-03',
                end:    '2016-05-03',   
                backgroundColor: magenta,
                url:    'geral/aprendizado-centrado-aluno-turma9.html'
            },
            {
                title:  'Módulo Aprendizado Centrado no Aluno – Turma 10 (Geral)',
                start:  '2016-08-02',
                end:    '2016-08-02',   
                backgroundColor: magenta,
                url:    'geral/aprendizado-centrado-aluno-turma10.html'
            },
            {
                title:  'Módulo Aprendizado Centrado no Aluno – Turma 11 (Geral)',
                start:  '2016-09-06',
                end:    '2016-09-06',   
                backgroundColor: magenta,
                url:    'geral/aprendizado-centrado-aluno-turma11.html'
            },
            {
                title:  'Módulo Aprendizado Centrado no Aluno – Turma 12 (Geral)',
                start:  '2016-10-04',
                end:    '2016-10-04',   
                backgroundColor: magenta,
                url:    'geral/aprendizado-centrado-aluno-turma12.html'
            },
            { //////////////////// GRADUAÇÃO //////////////////////

                title:  'Elaboração de questões de múltipla escolha e sua contribuição para a gestão do aprendizado (Graduação)',
                start:  '2015-04-15T09:00:00',
                end:    '2015-04-15T12:00:00',
                backgroundColor: laranja,
                url:    'graduacao/iniciativa-desenvolvimento-docentes.html'
            },
            {

                title:  'Elaboração de questões de múltipla escolha e sua contribuição... (Graduação)',
                start:  '2015-10-07T09:00:00',
                end:    '2015-10-07T12:00:00',
                backgroundColor: laranja,
                url:    'graduacao/iniciativa-desenvolvimento-docentes2.html'
            },
            {

                title:  'Oficina de elaboração de questões de múltipla escolha (Graduação)',
                start:  '2015-10-07T14:00:00',
                end:    '2015-10-07T16:00:00',
                backgroundColor: laranja,
                url:    'graduacao/iniciativa-desenvolvimento-docentes2-oficina.html'
            },
            {
                title:  'Workshop de Novos Professores da Engenharia (Graduação)',
                start:  '2015-11-04T09:00:00',
                end:    '2015-11-04T12:30:00',   
                backgroundColor: laranja,
                url:    'graduacao/workshop-novos-professores-engenharia.html'
            },
            {
                title:  'Workshop de Novos Professores da Engenharia (Graduação)',
                start:  '2015-11-26T14:00:00',
                end:    '2015-11-26T18:00:00',   
                backgroundColor: laranja,
                url:    'graduacao/workshop-novos-professores-engenharia.html'
            },
            {
                title:  'Workshop Olin',
                start:  '2015-12-14',
                end:    '2015-12-17',   
                backgroundColor: laranja,
                url:    'graduacao/workshop-olin.html'
            }, //// 2016 ////
            {
                title:  'Planejamento Estratégico: Insper 2016-2020',
                start:  '2016-04-13',
                end:    '2016-04-13',   
                backgroundColor: laranja,
                url:    'graduacao/planejamento-estrategico-insper--2016-2020.html'
            },
            {
                title:  'Design Thinking: cocriando maneiras de motivar nossos alunos',
                start:  '2016-11-29',
                end:    '2016-11-29',   
                backgroundColor: laranja,
                url:    'graduacao/design-thinking.html'
            }, 
            { //////////////////// PGLS ////////////////////// 
                title:  'Workshop de Professores - Plano de Aula 1 (PGLS)',
                start:  '2015-04-11T08:30:00',
                end:    '2015-04-11T12:00:00',
                backgroundColor: cinza,
                url:    'pgls/workshop-professores1.html'
            },
            {
                title:  'Workshop de Professores - Plano de Aula 1 (PGLS)',
                start:  '2015-05-15T18:00:00',
                end:    '2015-05-15T21:00:00',
                backgroundColor: cinza,
                url:    'pgls/workshop-professores1b.html'
            },
            {
                title:  'Workshop de Professores - Plano de Aula 2 (PGLS)',
                start:  '2015-09-11T18:00:00',
                end:    '2015-09-11T21:00:00',
                backgroundColor: cinza,
                url:    'pgls/workshop-professores2.html'
            },
            {
                title:  'Workshop de Professores - Plano de Aula 2 (PGLS)',
                start:  '2015-10-17T09:00:00',
                end:    '2015-10-17T12:00:00',
                backgroundColor: cinza,
                url:    'pgls/workshop-professores2b.html'
            }, //// 2016 ////
            {
                title:  'Workshop de Professores – Motivação dos alunos para a aprendizagem',
                start:  '2016-04-16T08:30:00',
                end:    '2016-04-16T12:00:00',
                backgroundColor: cinza,
                url:    'pgls/workshop-professores1-2016.html'
            },
            {
                title:  'Workshop de Professores – Motivação dos alunos para a aprendizagem',
                start:  '2016-05-13T18:00:00',
                end:    '2016-05-13T21:00:00',
                backgroundColor: cinza,
                url:    'pgls/workshop-professores2-2016.html'
            },
            { 
                title:  'Workshop de Professores',
                start:  '2016-09-09T18:00:00',
                end:    '2016-09-09T21:00:00',
                backgroundColor: cinza,
                url:    'pgls/workshop-professores-combinando-motivacao-extrinseca-e-intrinseca.html'
            },
            {
                title:  'Workshop de Professores',
                start:  '2016-10-15T09:00:00',
                end:    '2016-10-15T012:00:00',
                backgroundColor: cinza,
                url:    'pgls/workshop-professores-combinando-motivacao-extrinseca-e-intrinseca.html'
            } 
        ],
        eventClick: function(event) {
            if( event.url ) {
                window.open(event.url,_self);
                return false;
            }
        }
    });
});