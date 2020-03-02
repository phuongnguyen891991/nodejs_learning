var express = require('express');
var app = express();
var fs = require('fs');
var ip = require('ip');

app.get('/listUsers', function(req, res){
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err, data){
        if(err) {
            console.log(err);
        }
        else{
            console.log(data);
            res.end(data);
        }
    });
});

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log(ip.address());
    console.log("Example app listening at http://%s:%s", host, port)
});
