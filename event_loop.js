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

console.log("program end");
