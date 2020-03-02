var express = require('express');
var app = express();
var fs = require('fs');
var ip = require('ip');

var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
}

app.post('/addUser', function(req, res){
    //first read the existed user
    fs.readFile(__dirname + "/" + "user.json", 'utf8', function(err, data){
        if(err) {
            console.error(err);
        }
        else {
            data = JSON.parse(data);
            data["user4"] = user["user4"];
            console.log(data);
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
