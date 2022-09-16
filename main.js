

/* set variables */

const display = document.getElementById('current-time');
let alarmTime = null;
let alarmtimout = null;

/* display current time */

function updateTime() {
    const date = new Date();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    // Convert hours off military time

function convertHour(time) {
    if (hour > 12) {
        hour = hour % 12;
    }
    return time;
}
 

    display.innerText=`${hour} : ${minutes} : ${seconds}`;
}

/* Receive a value and assign to alarm time*/

function setAlarmTime(value) {
    alarmTime = value;
    console.log(alarmTime);
}

/* Set the dang alarm */

function setAlarm() {
    console.log('my set alarm function is running');
    if (alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => timeout);
            alert('Alarm set');
        }
    }
}

// function clearAlarm() {
//     Audio.pause();
//     if (alarmTimeout)
// }


updateTime();
setInterval(updateTime, 1000);

/* if there is an alarm time and time equals alarm time, sound the alarm, if not, do nothing */
/* reset alarm when clear alarm button is pressed 
/* run function every second */




