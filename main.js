/* set variables */
/*
setAlarmBtn = document.querySelector("button");

let date = new Date();
console.log('Date: ', date);

let futureDate= new Date('');
console.log('Date: ', futureDate);

let hour = date.getHours();
let minutes = date.getMinutes(); */

/* display current time */

const display = document.getElementbyID ('clock');

function updateTime() {
    let date = new Date ();
    console.log('Date: ', date);

    let hour = date.getHours();
    let minutes = date.getMinutes();

    display.innerText=`${hour} : ${minutes}`
}
/*
function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}
*/


/* set alarm time */

function setAlarmTime(value) {
    alarmTime = value;
}


/* if time equals alarm time, sound the alarm, if not, do nothing */

function compareDates(one, two) {
    if (
        date.getHours() === futureDate.getHours() &&
        date.getMinutes() === futureDate.getMinutes()
    )
}

/* reset alarm when clear alarm button is pressed */

function clearAlarm() {
    Audio.pause();
    if (alarmTimeout)
}

/* run function every second */

setInterval(updateTime, 1000);


