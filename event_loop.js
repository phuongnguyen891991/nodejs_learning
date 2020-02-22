// import events modules
var events = require('events');

// create eventEmiter objects
var eventEmitter = new events.EventEmitter();

// create handle as follows:
var eventHandler = function connected() {
    console.log('connection is successfully');

    // fire an event
    eventEmitter.emit('data_received');
}

// bind the connection event with event handler
eventEmitter.on('connection', eventHandler);

// bind data received and envents handle as follows:
eventEmitter.on('data_received', function() {
    console.log('received data successfully');
});

// fire the connection event
eventEmitter.emit('connection');

console.log("program end\n");

//count the number of events
var eventListeners = require('events').EventEmitter.listenerCount
        (eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// readfile systems
var fs = require('fs');
fs.readFile('input.txt', function(err, data) {
    if(err)
    {
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log('Program end \n');
