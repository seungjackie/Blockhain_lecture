import WebSocket from 'ws';
import {WebSocketServer} from 'ws'

const sockets = [];

const getPeers = () => {
    return sockets
}


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

const connectionToPeer = (newPeer) => {
    const ws = new WebSocket(newPeer);
    // peer 접속
    ws.on('open', () => {
        initConnection(ws); console.log('connection peer : ', newPeer)
    })
    // peer 접속 오류
    ws.on('error', () => {
        console.log('Fail to Connection : ' , newPeer)
    })
}


const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        // JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
        const message =JSON.parse(data)

    })
}

export {initP2PServer}