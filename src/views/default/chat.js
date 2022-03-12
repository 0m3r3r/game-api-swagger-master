'use strict';
/* global io, location, alert, document, Vue */

// Config
var host = location.origin;
var url = parseInt(host.split(':').reverse()[0]);
var hostSocket = host.replace(url, 8001);

var socket = io.connect(hostSocket, {
    'transports': ['websocket']
});

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/chat.html');
});

$('form').submit(function(){
    socket.emit('chat', $('#m').val());
    $('#m').val('');
    return false;
});
socket.on('chat', function(data){
    $('#messages').append($('<li>').text("user#" + data.id + ": " + data.msg));
});

var userId = 0;

    socket.on('chat', function(msg){
        socket.userId = userId ++;
        console.log('message from user#' + socket.userId + ": " + msg);
        io.emit('chat', {
            id: socket.userId,
            msg: msg
        });
    });

socket.listen(8001, function(){
    console.log('listening on *:8001');
});

// http.listen(8001, function(){
//     console.log('listening on *:8001');
// });
