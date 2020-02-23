// Reading from the stream data
var fs = require('fs');
var data = '';

// create the readable stream data:
var readerStream  = fs.createReadStream('input.txt');

// set the encoding to the utf8
readerStream.setEncoding('UTF8');

//handle stream event: data, len, error
readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function() {
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log(err.stack);
});


console.log("End program");