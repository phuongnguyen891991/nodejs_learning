var fs = require('fs');

//check open file
fs.open('input.txt', 'a+', function(err, fd) {
    if(err)
        return console.error(err);
    console.log("Open file is ok \n");

    // truncate file
    fs.ftruncate(fd, 10, function(err){
        if(err)
            console.log(err);

        console.log("Truncate file is successfully ");
        //read file
        var buf1 = new Buffer(1024);
        fs.read(fd, buf1, 0, buf1.length, 0, function(err, bytes) {
            if(err)
                console.error(err);

            console.log(bytes + " byte read");
            if(bytes > 0)
                console.log(buf1.slice(0, bytes).toString());
        });

        fs.close(fd, function(err, data) {
            if(err)
                return console.error(err);

            console.log("close file successfully \n");
        });
    });

    // // read file
    // var buf = new Buffer(1024);
    // fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
    //     if(err)
    //         console.error(err);

    //     console.log(bytes + " byte read");
    //     if(bytes > 0)
    //         console.log(buf.slice(0, bytes).toString());
    // });

    // fs.close(fd, function(err, data) {
    //     if(err)
    //         return console.error(err);

    //     console.log("close file successfully \n");
    // });
});

//check status file
fs.stat('input.txt', function(err, stats) {
    if(err)
        return console.error(err);

    console.log(stats);
    console.log("get state of file successfull \n");

    console.log("file type is: " + stats.isFile());
    console.log("directory file: " + stats.isDirectory());
});

// asynchronous read
fs.readFile('input.txt', function(err, data)
{
    if(err)
        return console.error(err);
    console.log("data string: " + data.toString());
});

// //synchronous read
// var data = fs.readFileSync('input.txt');
// console.log("data strings: " + data.toString());


//delete file
fs.unlink('input.txt', function(err){
    if(err)
        console.error(err);

    console.log("remove file successfully");
});

// create the dir
console.log ("Create the directory");
fs.mkdir('./test/', function(err) {
    if(err)
        console.error(err);
    console.log("Create directory successfull \n");
});

// read dir
console.log("Read directory \n");
fs.readdir('./test', function(err, files){
    if(err)
        console.error(err);
    console.log("Read directory successfull \n");
    files.forEach(function(file){
        console.log(file);
    });
});

// remove dir
console.log("Remove dir \n");
fs.rmdir('./test/', function(err){
    if(err)
        console.error(err);

    console.log("Read dir \n");
    fs.readdir('./test/', function(err, files){
        if(err)
            console.log(err);

        files.forEach(function(file){
            console.log(file);
        });
    });
});


console.log("End program ");
