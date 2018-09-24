var express = require('express');
var app = express();

var time = 0;

app.post('/time', function(req, res){
	time = req.body; //contains the text fields 
	res.write(time);
	console.log('received time ' + time);
	res.end('OK');
});

var server = app.listen(8081, function () {
	  var host = server.address().address;
	  var port = server.address().port;
	  console.log("Server running at http://%s:%s/", host, port);
	});