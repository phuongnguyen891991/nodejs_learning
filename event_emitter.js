// import events modules
var events = require('events');

//create event object
eventEmitter = new events.EventEmitter();

// listener #1 function
var listner1 = function listner1() {
    console.log("listner1 executed");
}

// listener #2 function
var listner2 = function listner2() {
    console.log("listner2 executed");
}

// bind the connection event with the listner1
eventEmitter.addListener('connection', listner1);
//eventEmitter.addListener('connection', listner2);

// bind the connection event with the listner2
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

console.log("Program Ended.");