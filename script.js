var showdays = document.getElementById('day');
var showhours = document.getElementById('hour');
var showmins = document.getElementById('min');
var showsecs = document.getElementById('sec');

var newyear = '1 Jan 2022';

function countdown() {
    var newdate = new Date(newyear);
    var curdate = new Date();
    
    var tsec = (newdate - curdate) / 1000;

    var day = Math.floor(tsec / 3600 / 24);
    var hrs = Math.floor(tsec / 3600) % 24;
    var min = Math.floor(tsec / 60) % 60;
    var sec = Math.floor(tsec) % 60;

    // console.log(day, hrs, min, sec);

    showdays.innerHTML = day;
    showhours.innerHTML = hrs;
    showmins.innerHTML = min;
    showsecs.innerHTML = sec;
}

function formattime(time) {
    
}

countdown();

setInterval(countdown, 1000);