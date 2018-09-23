var http = require('http');
var url = require('url');

// create a server object
http.createServer(function(req, res){
	// The first argument of the res.writeHead() method is the status code, 
	// 200 means that all is OK, the second argument is an object containing the response headers.
	res.writeHead(200,{'Content-Type': 'text/html'});
	var q = url.parse(req.url, true).query;
	var txt = q.year + " " + q.month;
	res.end(txt); //end the response
}).listen(8080); //server listens to port 8080