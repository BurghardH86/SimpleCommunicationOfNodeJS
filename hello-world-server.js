// To include a module, use the require() function with the name of the module:
var http = require('http');
var dt = require('./myfirstmodule');
// Now your application has access to the HTTP module, and is able to create a server:
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("The date and time are currently :" + dt.myDateTime() + "/n");
    res.end();
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
