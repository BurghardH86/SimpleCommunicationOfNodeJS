var express = require('express');
var app = express();

var time = 0;

//just use raw body data
var bodyParser = require('body-parser');
var options = {
  inflate: true,
  limit: '10kb',
  type: 'text/xml'
};
app.use( bodyParser.raw(options) );

//Start Endpoint
app.post('/time', function(req, res){
	time = req.body; //contains the text fields
	console.log('received time ' + time);
	res.end('OK');
});

//Start web page /
app.get('/', function (req, res, next) {
  try {
    var html = '<html><body><h1>'+ String(time) +'</h1><script>function refresh () {window.location.reload(true);}; window.setTimeout(refresh, 1000);</script></body></html>';
    res.send(html);
  } catch (e) {
    next(e);
  }
});

var server = app.listen(8081, function () {
	  var host = server.address().address;
	  var port = server.address().port;
	  console.log("Server running at http://%s:%s/", host, port);
	});