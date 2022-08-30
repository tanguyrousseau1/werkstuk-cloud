// import http from 'http';
// import * as fs from 'fs';

// let handleRequest = (request, response) => {
//     response.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     fs.readFile('./index.html', null, function (error, data) {
//         if (error) {
//             response.writeHead(404);
//             respone.write('Whoops! File not found!');
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// };

// http.createServer(handleRequest).listen(8000);

var http = require('http'),
 fs = require('fs'),
 path = require('path'),
 express= require('express'),
 index = fs.readFileSync(__dirname + '/index.html');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use('/bower_components', express.static('bower_components'));
app.use(express.static(__dirname, ''))

app.get('/', function(req, res){
   res.writeHead(200, {
      'Content-type': 'text/html'
   });
   res.end(index);
});



server.listen(3000, function() {
   console.log('Server listening on port 3000');
});