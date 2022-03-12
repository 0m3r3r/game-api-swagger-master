'use strict';
/* global io, location, alert, document, Vue */

// Config
var host = location.origin;
var url = parseInt(host.split(':').reverse()[0]);
var hostSocket = host.replace(url, 8001);

var socket = io.connect(hostSocket, {
    'transports': ['websocket', 'polling']
});

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/chat.html');
});

var userId = 0;
socket.on('connection', function(socket){
    socket.userId = userId ++;
    console.log('a user connected, user id: ' + socket.userId);

    socket.on('chat', function(msg){
        console.log('message from user#' + socket.userId + ": " + msg);
        io.emit('chat', {
            id: socket.userId,
            msg: msg
        });
    });
});

socket.listen(8001, function(){
    console.log('listening on *:8001');
});

// http.listen(8001, function(){
//     console.log('listening on *:8001');
// });
