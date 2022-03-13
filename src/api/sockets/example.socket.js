export let socket = null;
export let io = null;

// Constructor
export default (_socket, _io) => {
    socket = _socket;
    io = _io;
    on();
}

// Here should be all events 'on'
export function on() {
    socket.on('example:play', data => emit('play', data));
    socket.on('example:add', data => emit('add', data));
    socket.on('example:delete', data => emit('delete', data));
    socket.to('example:player', data => emit('player', data));

    socket.on('player:play', data => emit('play', data));
    socket.on("player:another", sock => {
        sock.on("private message", (anotherSocketId, msg) => {
            sock.to(anotherSocketId).emit("private message", sock.id, msg);
        });
    });
    socket.on("player:room", (sck) => {
        console.log(sck.rooms); // Set { <socket.id> }
        sck.join("room");
        console.log(sck.rooms); // Set { <socket.id>, "room1" }
    });
}

// Emit events
export function emit(event, data) {
    io.emit(event, data);
}
