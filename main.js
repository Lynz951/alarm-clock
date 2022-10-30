/* set variables */

const display = document.getElementById("current-time");
let alarmTime = null;
let alarmTimeout = null;
// console.log(display);

/* display current time */

function updateTime() {
  const date = new Date();

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

    if (hour > 12) {
      hour = hour % 12;  
    }

    document.getElementById("current-time").innerHTML = `${hour} : ${minutes} : ${seconds}`;
}

/* Receive a value and assign to alarm time*/

// function setAlarmTime(value) {
//   const alarmTime = value;
//   // console.log(alarmTime);

//   // let alhour = alarmTime.getHours();
//   // let alminutes = alarmTime.getMinutes();

//   //   if (alhour > 12) {
//   //     alhour = alhour % 12;  
//   //   }
//     document.getElementById("alarm-time").innerHTML = `${alarmTime}`;
//   // document.getElementById("alarm-time").innerHTML = `${alhour} : ${alminutes}`;
// }

/* Set the dang alarm */

function setAlarm(value) {
  const alarmTime = value;
  document.getElementById("alarm-time").innerHTML = `${alarmTime}`;
  console.log("my set alarm function is running");
  console.log(alarmTime);
  if (alarmTime != null) {
    const current = new Date();
    console.log(alarmTime);

    if (alarmTime > current) {
      /*Only sets alarm if time is after current time */
      const timeout = alarmTime.getTime() - current.getTime();
      alarmTimeout = setTimeout(() => timeout);
      alert("Alarm set");
      // console.log(alarmTime)
    }
   
  }
}

/* if there is an alarm time and time equals alarm time, sound the alarm, if not, do nothing */

function compareDate (hour, minutes) {
  // console.log(hour)
    if (
        hour === alarmTime.getHours() &&
        minutes === alarmTime.getMinutes() 
    )
    alert('Wake up');
}

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
