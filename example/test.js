var clndr = {};

if(!window.console) {
    window.console = {
        log: function(whatever) {
            // sad face.
        }
    }
}

var eventsArray = [
    { date: moment().format('YYYY-MM-') + '07', title: 'This is an Event' },
    { date: moment().format('YYYY-MM-') + '23', title: 'Another Event' }
];

// default
// ================================================================================
clndr.defaultSetup = new Clndr(document.querySelectorAll('#default')[0]);


// test showAdjacentMonths and adjacentDaysChangeMonth.
// edges of other months should be visible & clicking them should switch the month.
// ================================================================================
clndr.adjacent = new Clndr(document.querySelectorAll('#adjacent')[0], {
    showAdjacentMonths: true,
    adjacentDaysChangeMonth: true
});


// pass in a template
// ================================================================================
clndr.passInATemplate = new Clndr(document.querySelectorAll('#pass-in-a-template')[0], {
    template: document.querySelectorAll('#clndr-template')[0].innerHTML
});


// pass in events
// ================================================================================
clndr.passInEvents = new Clndr(document.querySelectorAll('#pass-in-events')[0], {
    events: eventsArray
});


// test the clickEvent callbacks
// ================================================================================
clndr.callbacks = new Clndr(document.querySelectorAll('#callbacks')[0], {
    ready: function() {
        console.log('the callbacks calendar just called ready().');
    },
    clickEvents: {
        click:                 function(target) { console.log('click'); },
        nextMonth:         function(month)    { console.log('next month'); },
        previousMonth: function(month)    { console.log('previous month'); },
        nextYear:            function(month)    { console.log('next year'); },
        previousYear:    function(month)    { console.log('previous year'); },
        today:                 function(month)    { console.log('today'); },
        onMonthChange: function(month)    { console.log('on month change'); },
        onYearChange:    function(month)    { console.log('on year change'); }
    },
    doneRendering: function() {
        console.log('the callbacks calendar just called doneRendering().');
    }
});


// test multi-day events
// ================================================================================
var multidayArray = [
    { startDate: moment().format('YYYY-MM-') + '12', endDate: moment().format('YYYY-MM-') + '17', title: 'Multi1' },
    { startDate: moment().format('YYYY-MM-') + '24', endDate: moment().format('YYYY-MM-') + '27', title: 'Multi2' }
];

clndr.multiday = new Clndr(document.querySelectorAll('#multiday')[0], {
    events: multidayArray,
    multiDayEvents: {
        startDate: 'startDate',
        endDate: 'endDate'
    },
    clickEvents: {
        click: function(target) {
            console.log(target);
        }
    }
});

// test really long multi-day events
// ================================================================================
var multidayLongArray = [
    { startDate: moment().subtract('months', 3).format('YYYY-MM-') + '12', endDate: moment().format('YYYY-MM-') + '17', title: 'Multi1' },
    { startDate: moment().format('YYYY-MM-') + '24', endDate: moment().add('months', 4).format('YYYY-MM-') + '27', title: 'Multi2' }
];

clndr.multidayLong = new Clndr(document.querySelectorAll('#multiday-long')[0], {
    events: multidayLongArray,
    multiDayEvents: {
        startDate: 'startDate',
        endDate: 'endDate'
    },
    clickEvents: {
        click: function(target) {
            console.log(target);
        }
    }
});


// test constraints
// (the 4th of this month to the 12th of next month)
// ================================================================================
clndr.constraints = new Clndr(document.querySelectorAll('#constraints')[0], {
    constraints: {
        startDate: moment().format('YYYY-MM-') + '04',
        endDate: moment().add('months', 1).format('YYYY-MM-12')
    },
    clickEvents: {
        click: function(target) {
            if( !$(target.element).hasClass('inactive') ) {
                console.log('You picked a valid date.');
            } else {
                console.log('You can\'t pick that date.');
            }
        }
    }
});


// test the start constraint by itself (4th of this month)
// ================================================================================
clndr.startConstriant = new Clndr(document.querySelectorAll('#start-constraint')[0], {
    constraints: {
        startDate: moment().format('YYYY-MM-') + '04'
    }
});


// test the end constraint by itself (12th of next month)
// ================================================================================
clndr.endConstriant = new Clndr(document.querySelectorAll('#end-constraint')[0], {
    constraints: {
        endDate: moment().add('months', 1).format('YYYY-MM-') + '12'
    }
});


// test api
// (you could do this with any instance but this makes for a nice reminder)
// ================================================================================
clndr.api = new Clndr(document.querySelectorAll('#api')[0], {
    clickEvents: {
        onMonthChange: function(month) {
            console.log('onMonthChange was called.');
        },
        onYearChange: function(month) {
            console.log('onYearChange was called.');
        }
    }
});


// test forceSixRows option
// ================================================================================
clndr.api = new Clndr(document.querySelectorAll('#six-rows')[0], {
    forceSixRows: true
});
