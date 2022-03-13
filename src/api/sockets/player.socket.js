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
    socket.on('player:play', data => emit('play', data));

    socket.on("player:another", (data) => {
            console.log(data.anotherSocketId, data.msg);
            socket.to(data.anotherSocketId).emit("player", socket.id, data.msg);
    });
    socket.on("player:room", (socket) => {
        console.log(socket.rooms); // Set { <socket.id> }
        socket.join("room");
        console.log(socket.rooms); // Set { <socket.id>, "room1" }
    });
}

// Emit events
export function emit(event, data) {
    io.emit(event, data);
}
