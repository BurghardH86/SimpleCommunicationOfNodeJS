var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');

var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var logger = require('morgan');
var methodOverride = require('method-override');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(methodOverride());
app.use(app.router);
app.use(errorHandler());

app.post('/upload/:filename', function (req, res) {
  var filename = path.basename(req.params.filename);
  filename = path.resolve(__dirname, filename);
  var dst = fs.createWriteStream(filename);
  req.pipe(dst);
  dst.on('drain', function() {
    console.log('drain', new Date());
    req.resume();
  });
  req.on('end', function () {
    res.send(200);
  });
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});