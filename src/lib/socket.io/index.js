import Redis from 'socket.io-redis';
import chalk from 'chalk';
import fs from "fs";
import config from '../../config';

const io = require('socket.io')(config['socket.io'].port);
io.adapter(Redis(config['socket.io'].redis));

// Scan events
const pathSocket = `${config.base}/api/sockets`;
let events = [];
fs.readdirSync(pathSocket).forEach(path => {
    events.push(`${pathSocket}/${path}`);
});

// Total socket clients
function total() {
    io.of('/').adapter.clients((err, clients) => {
        console.log(chalk.blueBright(`Socket-> total clients [${clients}]`));
    });
}

// Connect
export async function connect() {


    return await io.on('connection', socket => {

        if (config.log) {
            console.log("socketId", socket.id);
            console.log(chalk.blueBright(`Socket-> connected`));
            total();


            // emit session details
            socket.emit("session", {
                handshake: socket.handshake,
                rooms: socket.rooms,
                acks: socket.acks,
            });
            socket.join(socket.userID);


            // notify existing users
            socket.broadcast.emit("user connected", {
                userID: socket.id,
                username: socket.username,
                connected: true,
                messages: [],
            });
        }



        // inject events to new socket...
        events.forEach(path => require(path).default(socket, io));

        socket.on('disconnect', () => {
            if (config.log) {
                console.log(chalk.blueBright(`Socket-> disconnect`));
                socket.broadcast.emit("user disconnected", socket.id);
                total();
            }
        });

    });
}
