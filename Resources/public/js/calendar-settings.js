$(function () {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $('#calendar-holder').fullCalendar({
        header: {
            left: 'prev, next',
            center: 'title',
            right: 'month,basicWeek,basicDay,'
        },
        weekNumbers:true,
        firstDay: 1,
        fixedWeekCount:false,
        lazyFetching:true,
        timeFormat: {
            // for agendaWeek and agendaDay
            agenda: 'h:mmt', // 5:00 - 6:30

            // for all other views
            '': 'h:mmt'            // 7p
        },
        monthNames:['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        dayNames:['Domingo', 'Lunes', 'Martes', 'Miércoles','Jueves', 'Viernes', 'Sábado'],
        monthNamesShort:['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun','Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],


        dayNamesShort:['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb'],
        buttonText: {
            prev:     '&nbsp;&#9668;&nbsp;',  // left triangle
            next:     '&nbsp;&#9658;&nbsp;',  // right triangle
            prevYear: '&nbsp;&lt;&lt;&nbsp;', // <<
            nextYear: '&nbsp;&gt;&gt;&nbsp;', // >>
            today:    'hoy',
            month:    'mes',
            week:     'semana',
            day:      'día'
        },
        eventSources: [
            {
                url: Routing.generate('fullcalendar_loader'),
                type: 'POST',
                data: {
                },
                error: function() {
                    // alert('There was an error while fetching Google Calendar!');
                }
            }
        ]
    });
});
