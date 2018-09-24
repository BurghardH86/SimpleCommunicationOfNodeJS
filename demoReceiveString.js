var http = require('http');

var time = 0;

http.post('/time', function(req, res, next){
	time = req.body; //contains the text fields 
	console.log('received time ' + time);
	res.end('OK')
});