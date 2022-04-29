// 다른 노드와 통신
import WebSocket from 'ws';
import {WebSocketServer} from 'ws'

const MessageType = {
    RESPONSE_MESSAGE : 0,
    SEND_MESSAGE : 1
}

const sockets = [];

const getPeers = () => {
    return sockets
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({port: p2pPort});
    // 어떤 함수들이 자동으로 호출
    server.on('connection', (ws) => {
        initConnection(ws);
        initMessageHandler(ws);
    })
    console.log('listening P2PServer Port : ', p2pPort);
}

const initConnection = (ws) => {
    sockets.push(ws);
    initMessageHandler(ws)
}

const connectionToPeer = (newPeer) => {
    const ws = new WebSocket(newPeer);
    ws.on('open', () => {
        initConnection(ws); console.log('connection peer :' , newPeer)
    })
    ws.on('error', () => {
        console.log('Fail to Connection peer : ' , newPeer);
    })
}

const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data);
        
        switch(message.type){
            case MessageType.RESPONSE_MESSAGE:          // 메세지 받앗을때
                break;
            case MessageType.SEND_MESSAGE:              // 메세지 보낼때
                write(ws, message);
                console.log(message.message);
                break;
        }
    })
}

// 보내는거
const write = (ws,message) => {
    console.log('write()',message);
    ws.send(JSON.stringify(message));
}

// ㅁㅔㅅㅔㅈㅣ 
const sendMessage = (message) => {
    // 배열로 추가, socket 하나씩 돌아간다 
    sockets.forEach( (socket) => {
        write(socket,message);
    });
}


export {initP2PServer, connectionToPeer ,getPeers , sendMessage}