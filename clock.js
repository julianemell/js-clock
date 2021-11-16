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
