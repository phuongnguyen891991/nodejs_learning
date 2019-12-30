/*
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000, localhost);

console.log('Server running at http://127.0.0.1:3000/');
*/


/*Create simple web server*/
var http = require('http');
var fs = require('fs');

var server = http.createServer();
//Setting up an event listener for request
server.on('request', function(req, res) {
  res.writeHead(200, {'Content-Type': 'image/ipg'});
  fs.createReadStream('./191010_nature.jpg').pipe(res);
  // res.end('Hello World\n');
})
server.listen(3000);
console.log('Server running at http://localhost:3000/');

/*Streaming data*/
// var stream = fs.createReadStream('./191010_nature.jpg').pipe(res);
// stream.on('data', function (chunk) {
//   console.log(chunk)
// })
// stream.on('end', function () {
// console.log('finished')
// })