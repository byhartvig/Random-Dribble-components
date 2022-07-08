//Document ready
$(document).ready(function() {
    //Add class active on click on color
    $('.color').click(function() {
        $('.color').removeClass('active');
        $(this).addClass('active');
    });

    //Append dates from july with weekdays as header to the #calendar
var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    
    var day = ["","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    
    //Apppend weekdays to .calendar-header
    for (var i = 0; i < weekdays.length; i++) {
        $('#calendar-header').append('<div class="weekday w-[14%]">' + weekdays[i] + '</div>');
    }

    //Append dates to .calendar-body
    for (var i = 0; i < day.length; i++) {
        $('#calendar-body').append('<div class="day w-[14%] h-9 flex items-center justify-center rounded-full bg-white transition-all hover:text-white hover:bg-blue-500 cursor-pointer font-normal dark:bg-gray-800 dark:text-gray-300">' + day[i] + '</div>');
    }

    //Onclick on .day add class active
    $('.day').click(function() {
        $('.day').removeClass('active');
        $(this).addClass('active');
    });

    //Click on #date add class to #calendarComponent 
    $('#date').click(function() {
        $('#calendarComponent').toggleClass('active');
    });
    

    //When click on .day remove class active from #calendarComponent
    $('.day').click(function() {
        $('#calendarComponent').removeClass('active');

        var clickedDay = $(this).text();
        var currentMonth = $('#currentMonth').text();
        
        $("#date").text(clickedDay + ", " + currentMonth);

    }
    );

   

    
    

});