/* set variables */

const display = document.getElementById("current-time");
let alarmTime = null;
let alarmTimeout = null;

/* display current time */

function updateTime() {
  const date = new Date();

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Convert hours off military time- Doesn't work!

  // function convertHour(time) {
    if (hour > 12) {
      hour = hour % 12;  /* NOTE REMEMBER! */
    }
  
  display.innerText = `${hour} : ${minutes} : ${seconds}`;
}

/* Receive a value and assign to alarm time*/

function setAlarmTime(value) {
  alarmTime = value;
  console.log(alarmTime);
}

/* Set the dang alarm */

function setAlarm() {
  console.log("my set alarm function is running");
  if (alarmTime) {
    const current = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > current) {
      /*Only sets alarm if time is after current time */
      const timeout = timeToAlarm.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => timeout);
      alert("Alarm set");
    }
  }
}

/* if there is an alarm time and time equals alarm time, sound the alarm, if not, do nothing */

// function compareDate = new Dates(one, two) {
//     if (
//         date.getHours() === futureDate.getHours() &&
//         date.getMinutes() === futureDate.getMinutes();
//         alert('Wake up');
//     )
// }

/* reset alarm when clear alarm button is pressed */

function clearAlarm() {
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("Alarm cleared");
  }
}

/* run updateTime function every second */
updateTime();
setInterval(updateTime, 1000);
