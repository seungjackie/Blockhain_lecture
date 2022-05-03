// 다른 노드와 통신
import WebSocket from 'ws';
import {WebSocketServer} from 'ws'
import {getBlocks, getLatestBlock} from './block.js'

// const MessageType = {
//     RESPONSE_MESSAGE : 0,
//     SENT_MESSAGE : 1
// }



const MessageType ={

    // 모든 블록을 요청한다.
    QUERY_ALL : 1,

    //최신 블록 요청
    QUERY_LIST : 1,

    //마지막 블록
    QUERY_LATEST : 0,

    // 요청한 블록
    RESPONSE_BLOCKCHAIN : 2

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

//
const initConnection = (ws) => {
    sockets.push(ws);
    initMessageHandler(ws);
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

// 상대방이 하는 문자
const initMessageHandler = (ws) => {
    // 메세지 이벤트 발생
    ws.on('message', (data) => {
        const message = JSON.parse(data);
        
        switch(message.type){
            // case MessageType.RESPONSE_MESSAGE:          // 메세지 받앗을때
            //     break;
            case MessageType.SENT_MESSAGE:              // 메세지 보낼때
                // write(ws, message);
                // 상용화된 이벤트 처리
                // console.log(ws._socket.remoteAddress, ':' , message.message);
                // console.log(message.message);
                // break;

                // 보내준다.
                case MessageType.QUERY_LATEST:
                    break;
                // 모든 블록
                case MessageType.QUERY_ALL:
                    break;
                // 내가 요청한 메세지 받기 , 이 메세지 타입으로 받을것이다
                case MessageType.RESPONSE_BLOCKCHAIN:
                    break;
        }
    })
}

const queryLatestMessage = () => {
    return ({   // json 형태의 타입
            "type" : MessageType.QUERY_LATEST,
            // "data" : JSON.stringify(/*내가 가지고 있는 마지막 블록  */) })
            "data" :null })
};

const queryAlltMessage = () => {
    return ({   // json 형태의 타입
            "type" : MessageType.QUERY_ALL,
            // "data" : JSON.stringify(/*내가 가지고 있는 전체블록  */) })
            "data" : null })
};              

const queryListtMessage = () => {
    return ({   // json 형태의 타입
        "type" : MessageType.QUERY_LIST,
        // "data" : JSON.stringify(/*내가 가지고 있는 전체블록  */) })
        "data" : JSON.stringify(getBlocks()) })
};

const responseLatestMessage = () => {
    return ({   // json 형태의 타입
        "type" : MessageType.RESPONSE_BLOCKCHAIN,
        "data" : JSON.stringify(message)  })
};


// 보내는거, 웹소켓, 메세지
const write = (ws,message) => {
    // 웹소켓 상대방의 ㅁ메세지
    // console.log('write()', ':',message);
    console.log('write()', ws._socket.remoteAddress, ':',message);
    // json 형태로 보낼수 없고 하나의 문자열로 바꾼다.
    ws.send(JSON.stringify(message));
}

// 메세지 보내기 
const sendMessage = (message) => {
    // 배열로 추가, socket 하나씩 돌아간다 
    sockets.forEach( (socket) => {
        write(socket,message);
    });
}


export {initP2PServer, connectionToPeer ,getPeers , sendMessage}