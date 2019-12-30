//  handle sending error 404 error when files is not existed
function send404(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404: resource not found.');
    response.end();
}

// handle sending the contents of the files.
function sendFile(response, filePath, fileContents) {
    response.writeHead(
        200,
        {"content-type": mime.lookup(path.basename(filePath))}
    );
    response.end(fileContents);
}

// Server static file
function serveStatic(response, cache, absPath) {
    // check if file is cached in memory
    if (cache[absPath]) {
        sendFile(response, absPath, cache[absPath]); //server file from memory
    } else {
        // check if file existed
        fs.exists(absPath, function(exists) {
            if (exists) {
                fs.readFile(absPath, function(error, data) { //readfile from disk
                    if (err) {
                        send404(response);
                    } else {
                        cache[absPath] = data;
                        sendFile(response, absPath, data); //serve file read from disk
                    }
                });
            } else {
                send404(response); // send http 404 response
            }
        });
    }
}

// logic to create a http server

var server = http.createServer(function(request, response) {  // create http server using anonymous function to define per-request beahvior
    var filePath = false;
    if (request.url == '/') {
        filePath = 'public/index.html';
    }
    else {
        filePath =  'request' +  request.url;
    }
    var absPath = '/' + filePath;
    serveStatic(response, cache, absPath); //server static file
});