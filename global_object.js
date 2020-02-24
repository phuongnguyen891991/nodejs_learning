//import { clearInterval } from "timers";

console.log(__filename);
console.log(__dirname);

function printHello(){
    console.log('Hello World \n');
}

//set timeout
setTimeout(printHello, 2000);

//clear timeout
var t = setTimeout(printHello, 2000);
clearTimeout(t);

//set interval
setInterval(printHello, 2000);

var i = setInterval(printHello, 2000);
clearInterval(i);