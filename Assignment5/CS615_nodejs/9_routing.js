var http = require('http');
var fs = require('fs');
//var server = http.createServer(function(req, res){
//console.log('Request was made: ' + req.url);
//if (req.url === '/home' || req.url === '/'){
//    res.writeHead(200, {'Content-Type' : 'text/html'});
//    fs.createReadStream(__dirname + '/index.html').pipe(res);
//    }
//res.writeHead(200, {'Content-Type' : 'text/plain'});
//res.end('Hello Students!');
//});


var server = http.createServer(function(req, res){
    console.log('Request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    });
server.listen(3000, '127.0.0.1');
console.log('Listening to port 3000...');