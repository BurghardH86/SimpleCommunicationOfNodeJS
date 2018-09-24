var express = require('express');
var app = express();
var dt = require('./timeModule');
var line = " ";

var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server running at http://%s:%s/', host, port);
});

function publishLine (){
    line = "The date and time are currently :" + dt.myDateTime() + "\n";
    console.log('Line sended');
}

setInterval(function(){
	publishLine();
}, 1000);

app.get('/time', function(req, res){
	res.end(String(line));
});