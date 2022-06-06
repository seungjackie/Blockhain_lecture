import WebSocket from 'ws';
import {WebSocketServer} from 'ws'

const soceket = [];

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({port: p2pPort});

    server.on('connection', (ws) => {
        initConnection(ws)
    })
    console.log('listening P2PServer : ', p2pPort);

    const initConnection = (ws) => {
        WebSocketServer.push(ws);
    }
}

export {}