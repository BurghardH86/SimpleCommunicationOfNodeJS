var express = require('express');
var app = express();
var dt = require('./timeModule');
var line = 0;

var server = app.listen(8080, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server running at http://%s:%s/', host, port);
});

function publishLine (){
    var line = "The date and time are currently :" + dt.myDateTime() + "\n";
    console.log('Line sended');
}

setInterval(function(){
	publishLine();
}, 1000);

app.get('/time', function(req, res){
	res.end(String(line));
});