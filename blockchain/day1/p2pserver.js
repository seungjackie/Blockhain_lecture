// 다른 노드와 통신
import WebSocket from 'ws';
import {WebSocketServer} from 'ws'

const sockets = [];




const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({port: p2pPort});
    // 어떤 함수들이 자동으로 호출
    server.on('connection', (ws) => {
        initConnection(ws);
    })
    console.log('listening P2PServer Port : ', p2pPort);
}

const initConnection = (ws) => {
    sockets.push(ws);
}

export {initP2PServer}