// the content of input file are:
// Tutorials Point is giving self learning content to teach the world in simple and easy wayecho Tutorials Point is giving self learning content Tutorials Point is giving self learning contentecho Tutorials Point is giving self learning content Tutorials Point is giving self learning content!

//The first example shows that the program blocks until it reads the file and then only it proceeds to end the program.
// load module file systems
var fs = require('fs');
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log('Program end \n');

// The second example shows that the program does not wait for file reading and proceeds to print "Program Ended" and at the same time,
// the program without blocking continues reading the file.
var fs = require('fs');
fs.readFile('input.txt', function(err, data){
    if(err)
        return console.error(err);
    console.log(data.toString());
});

console.log('Program end \n');