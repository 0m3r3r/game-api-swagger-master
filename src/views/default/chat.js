'use strict';
/* global io, location, alert, document, Vue */

// Config
var host = location.origin;
var url = parseInt(host.split(':').reverse()[0]);
var hostSocket = host.replace(url, 8001);

var socket = io.connect(hostSocket, {
    'transports': ['websocket', 'polling']
});


var app = new Vue({
    el: "#app",
    data: {
        logo: 'rubberBand',
        userID: 0,
        imessage: '',
        messages: []
    },
    created: function created() {
        this.getMessages();
    },
    methods: {
        getMessages: function getMessages() {
            var _this = this;
            socket.on('chat', function(data){
                _this.messages = $('#messages').append($('<li>').text("user#" + data.id + ": " + data.msg));
                $('#messages').append($('<li>').text("user#" + data.id + ": " + data.msg));
            });

        },
        addSend: function addSend() {
            var _this2 = this;
            socket.userId = _this2.userID ++;


            socket.emit('chat',{
                id: socket.userId,
                msg: this.imessage
            });
            _this2.imessage = '';
        },
    }
});

socket.on('chat', function(data){
    $('#messages').append($('<li>').text("user#" + data.id + ": " + data.msg));
    app.messages.push($('#messages').append($('<li>').text("user#" + data.id + ": " + data.msg)));
});


socket.on('chat', function (data) {
    console.log('from socket :D', data);
});

var logo = document.getElementById("logo");
logo.addEventListener("animationend", function () {
    app.logo = '';
});

socket.on('animation', function (data) {
    console.log('from socket :D', data);
    app.logo = data;
});


