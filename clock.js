
/* testing
console.log(1);

setTimeout( () => {             //arrowfunction. millisekunder
    console.log("yoho!");
}, 3000 );      

console.log(2);

let tick = 0;
setInterval( () => {
    tick++;
    console.log("tick", tick);
}, 1000);

console.log("ticker started");
 */


//const now = new Date();     //gets current timestamp when this line was executed

const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minute');
const secondsEl = document.querySelector('#second');

const now = () => {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    //console.log(hours, min, sec);
    hourEl.innerText = `${hours}`;
    minuteEl.innerText = `${min}`;
    secondsEl.innerText = `${sec}`;
};

setInterval("now()", 1000);
