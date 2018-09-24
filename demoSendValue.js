var http = require('http');
var dt = require('./timeModule');
var line = 0;

var server = http.createServer().listen(8080, function(){
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

http.get('/time', function(req, res){
	res.end(String(line));
});