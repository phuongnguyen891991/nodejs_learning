//piping stream:
// Piping is a mechanism where we provide the output of one stream as the input to another stream.
// It is normally used to get data from one stream and to pass the output of that stream to another stream.
// There is no limit on piping operations.
// Now we'll show a piping example for reading from one file and writing it to another file.

var fs = require('fs');

//create readable stream
var readerStream = fs.createReadStream('input.txt');

// create writeable stream
var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);

//chainning : is the mechanism
var zlib = require('zlib');

// compress file input.txt to input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('file compressed');


fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .on ('error', function(err) {   //adding for handling error
        console.log("debug: " + err);
    })
    .pipe(fs.createWriteStream('inputtest.txt'));

console.log('File decompressed');