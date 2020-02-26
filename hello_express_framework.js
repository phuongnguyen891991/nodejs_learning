
var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log("Got the GET request \n")
    res.send("Hello world GET");
})

// this reponse the post request for the homepage
app.post('/', function(req, res){
    console.log("Got the POST request \n")
    res.send("Hello world POST");
})

// this reponse the "deleted" request for the homepage
app.delete('/del_user', function(req, res){
    console.log("Got the DELETE request \n")
    res.send("Hello world DELETE");
})

// this reponse the get list user for the homepage
app.get('/list_user', function(req, res){
    console.log("Got the list user request \n")
    res.send("page listing ");
})

// this reponse the "deleted" request for the homepage
app.get('/ab*cd', function(req, res){
    console.log("Got the ab*cd \n")
    res.send("get the ab*cd list");
})

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example of server listening at http://%s:%s \n", host, port);
})