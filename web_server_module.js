// Node.js provides an http module which can be used to create an HTTP client of a server.
// Following is the bare minimum structure of the HTTP server which listens at 8081 port.

var http = require('http');
var fs = require('fs');
var url = require('url');

// create web server
http.createServer(function(request, response){
    console.log("Already have created server \n");
    // parse request and server path
    var pathname = url.parse(request.url).pathname;

    //print the name of the file name
    console.log("the file name: " + pathname + " received");

    //read the request file content from file systems
    fs.readFile(pathname.substr(1), function(err, data){
        if (err)
        {
            console.error(err);
            // HTTP status : 404 Not found
            // Content type: text/plain
            response.writeHead(404, {'Content-Type': 'text/html'});
        }
        else
        {
            // Page found
            // HTTP status: 200 OK
            // Content-type: text plain
            response.writeHead(200, {'Content-Type': 'text/html'});

            // write the content of file to response body
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8081);

console.log("End program \n");