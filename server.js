var express = require('express');
var app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

// Serve css/js/images from the /assets directory
app.use("/assets", express.static(__dirname + "/assets"));

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

app.use(function(req, res, next) {
	res.send(404, '404 - Not Found. :(');
})


var chat = io.of('/chat').on('connection', function(socket) {
	socket.on('chat', function(data) {
		chat.emit('chat', data);
	});
});

if (process.argv.length < 3)
	console.error("Please specify a port number to listen on.");

var port = parseInt(process.argv[2]);
if (port === NaN || port < 0 || port > 65535)
	console.error("Invalid port number. Port must be between 0 and 65535.");

server.listen(port);