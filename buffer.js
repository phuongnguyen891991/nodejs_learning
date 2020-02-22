
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