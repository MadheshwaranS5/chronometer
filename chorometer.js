let seconds = 0;
let minutes = 25;
let timeout;
let timer_on = 0;
let counter=0;
function timedCount() {
    document.getElementById("seconds-holder").innerText = retsec(seconds);
    document.getElementById("minutes-holder").innerText = minutes;
    timeout = setTimeout(timedCount, 750);
    if (seconds == 0) {
        minutes--; seconds = 60;
    }
    if (minutes == -1) {
        reset();
    }
    seconds--;
}
function start() {
    if (!timer_on) {
        timer_on = 1;
        timedCount();
    }
}
function stop() {
    clearTimeout(timeout);
    timer_on = 0;
}
function reset() {
    clearTimeout(timeout);
    timer_on = 0;
    document.getElementById("minutes-holder").innerText = 25;
    document.getElementById("seconds-holder").innerText = retsec(0);
    seconds = 0; minutes = 25;
    counter++;
    document.getElementById("timer").innerText = counter;
}


function retsec(sec) {
    if(sec<10)
    {
        sec='0'+sec;
    }
    return sec;
}

