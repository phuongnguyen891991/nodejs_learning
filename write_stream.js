//write stream data
var fs = require('fs');
var data = 'Simply is easy'

// create variable stream
var writeStream = fs.createWriteStream('out_put.txt');

//write data to stream with encoding type is utf8
writeStream.write(data, 'UTF8');

//mark end of file:
writeStream.end();

//handle data finish and error:
writeStream.on('finish', function() {
    console.log("Write complete");
});

writeStream.on('error', function(err){
    console.log(err.stack);
});

console.log('End program');