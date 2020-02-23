
// //method 1: create new uninitiate buffer10 octet
// var buf1 = new BUFF(10);

// // method 2: create new buffer from given array
// var buf2 = new BUFF([10, 20, 30]);

// //method 3: create new buffer from given string and optional encoding type:
// var buf3 = new Buffer("Simply Easy Learning", "utf-8");
// //Though "utf8" is the default encoding, you can use any of the following encodings "ascii", "utf8", "utf16le", "ucs2", "base64" or "hex".

// //write buffer:
// buf1.write();

// buf.write(string[, offset][, length][, encoding])
// Parameters
// Here is the description of the parameters used −
//     string − This is the string data to be written to buffer.
//     offset − This is the index of the buffer to start writing at. Default value is 0.
//     length − This is the number of bytes to write. Defaults to buffer.length.
//     encoding − Encoding to use. 'utf8' is the default encoding.

var buff = new Buffer(256);
len = buff.write("this is an example of buffer");

console.log("log console is: " + len);

//convert to json

var json = buff.toJSON(buff);
console.log(json);

var asscii = new Buffer(26);
for(var i = 0; i < 26; i++)
{
    asscii[i] = i + 97 //a
}

console.log(asscii.toString('ascii'));
console.log(asscii.toString('ascii', 0, 5));

//the method to concatenate nodejs buffer to the single node buffer
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');

var BUFFER = new Buffer.concat([buffer1, buffer2]);
console.log(BUFFER.toString());


// the method to compare buffer: buffer.compare(...)

var result = buffer1.compare(buffer2);

if (result > 0)
{
    console.log(buffer1 + "is come after " + buffer2);
}
else if (result == 0)
{
    console.log(buffer1 + "is same as" + buffer2);
}
else
{
    console.log(buffer1 + "is come before" + buffer2);
}


// the method to coppy buffer:
var cp_buff1 = new Buffer("abcd");
var cp_buff2 = new Buffer(5);

cp_buff1.copy(cp_buff2);
console.log("the copied cp_buff1: " + cp_buff1);
console.log("the copied cp_buff2: " + cp_buff2.toString());

//slice buffer
var slice_buff = buffer1.slice(0, 5);
console.log("the slice slice_buff: " + slice_buff);
console.log("the lenght of slice_buff: " + slice_buff.length);

console.log("End program \n");
