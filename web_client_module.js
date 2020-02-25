var http = require('http');

// create option
var options = {
    host : 'localhost',
    port : '8081',
    path : '/index.htm'
};

// callback function is use to response
var callback = function(response) {
    //continuously update with stream data
    var body = '';
    response.on('data', function(data){
        body += data;
    });

    response.on('end', function(){
        console.log(body);
    });
}

// make the request to the server
var req = http.request(options, callback);
req.end();