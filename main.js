/* set variables */

const display = document.getElementById('clock');
/*
const audio = new Audio(assets/01 Back to the Sea.m4a);
audio.loop = true;
let alarmTime = null;
let alarmtimout = null;*/

/* display current time */

function updateTime() {
    console.log('my update time function is running');
    const date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    display.innerText=`${hour} : ${minutes} : ${seconds}`;
}
updateTime();

/* save alarm time 
/* if there is an alarm time and time equals alarm time, sound the alarm, if not, do nothing */
/* reset alarm when clear alarm button is pressed 
/* run function every second */

setInterval(updateTime, 1000);


