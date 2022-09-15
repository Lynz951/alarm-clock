/* set variables */

setAlarmBtn = document.querySelector("button");

let date = new Date();
console.log('Date: ', date);

let futureDate= new Date('');
console.log('Date: ', futureDate);

let hour = date.getHours();
let minutes = date.getMinutes();

/* display current time */

/* receive input for alarm time */


/* if time equals alarm time, sound the alarm, if not, do nothing */

function compareDates(one, two) {
    if (
        date.getHours() === futureDate.getHours() &&
        date.getMinutes() === futureDate.getMinutes()
    )
}

/* reset alarm when clear alarm button is pressed */

