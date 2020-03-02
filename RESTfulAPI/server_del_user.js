var express = require('express');
var app = express();
var fs = require('fs');
var ip = require('ip');

var id = 2;

app.delete('/deleteUser', function(req, res){
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err, data) {
        if(err){
            console.error(err);
        }
        else{
            data = JSON.parse(data);
            delete data["user" + 2];

            console.log(user);
            res.end(JSON.stringify(data));
        }
    });
});

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log(ip.address());
    console.log("Example app listening at http://%s:%s", host, port)
});
