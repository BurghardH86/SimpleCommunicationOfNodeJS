var http = require('http');
var dt = require('./timeModule');

function publishEvent (req, res){
    res.write("The date and time are currently :" + dt.myDateTime() + "\n");
}

http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    publishEvent(req, res);
    var left = 3;
    var interval = setInterval(function () {
        res.write(Date.now() + " " + "\n");

        left -= 1;
        if (left === 0) {
            clearInterval(interval);
            res.end();
        }
    }, 1000);
    //res.end();
}).listen(8080);
console.log('Server running at http://localhost:8080/');

