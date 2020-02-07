// load http module
var http = require("http");

// method to create server
http.createServer( function(request, response) {
// send the http header
// http status: 200 : OK
// Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    //send response body as "Hello word"
    response.end('Hello World');
}).listen(8081); // bind it all port 8081 using the listener method

console.log(http);