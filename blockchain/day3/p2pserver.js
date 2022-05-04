// pear two pear  > express 가 아닌 웹소켓을 쓴다.
// 블록체인은 중앙서버가 있는것이 아닌 개인과 개인을 통해서 데이터가 이루어짐
// 다른 노드와 통신을 위한 서버 

import WebSocket from 'ws';
import { WebSocketServer } from 'ws';
import { getBlocks, getLatestBlock , createBlock,addBlock , isValidNewBlock , /* blocks */} from './block.js';

const MessageType = {
    // RESPONCE_MESSAGE : 0,
    // SENT_MESSAGE : 1,

    // 최신 블록 요청
    QUERY_LATEST : 0,
    // 모든 블록 요청
    QUERY_ALL : 1,
    // 블록 전달
    RESPONSE_BLOCKCHAIN : 2
}

const sockets = [] ; // 상수로 만들었다. sockets의 메모리 주소 push 들어가는 데이터 값과는 별개이다.
// sockets = 1; // sockets의 값을 바꾸는 것이기 떄문에 안된다.

const getPeers = () => {
    return sockets;
}

const initP2PServer = (p2pPort) => {
    const server = new WebSocketServer({port:p2pPort});
    server.on('connection', (ws) => {  // 웹소켓으로 만든 서버에 호출을 한다.
        initConnection(ws); // 내부 함수가 아닌 만들어 줘야하는 함수
        initMessageHandler(ws);
    })
    console.log('listening P2PServer Port : ', p2pPort);
}

//다른 사람의 Peer 추가했을때 initConnection
const initConnection = (ws) => {
    sockets.push(ws);
    console.log('성공');

    // 가지고 있는거 다 줘봐
    write(ws, responseAllMessage())
    // initMessageHandler(ws);
    // ws.onmessage((e)=> {console.log(e.data)});
}

const connectionToPeer = (newPeer) => { // 새로운 peer주어지면 접속할수 있는 환경을 만든다.
    const ws = new WebSocket(newPeer);
    // ws.on('open', () => { initConnection(ws); return true})
    // ws.on('error', () => { console.log('Fail to Connection peer : ', ws.remoteAddress); return false})
    ws.on('open', () => { initConnection(ws); console.log('Connect peer : ', newPeer);})
    ws.on('error', () => { console.log('Fail to Connection peer : ', newPeer); })
}

const initMessageHandler = (ws) => {
    ws.on('message', (data) => {
        const message = JSON.parse(data);
        // () message.type = 0

        switch(message.type) 
        {
            case MessageType.QUERY_LATEST:  // 응답을 받으면 다시 보내줘야한다.
                break;
            case MessageType.QUERY_ALL: // 블록을 요청
                // 요청 하면보내주면 된다.
                write(ws, responseAllMessage());        // 응답
                break;
            case MessageType.RESPONSE_BLOCKCHAIN:       // 누군가 내가 요청한 블록을 보내주었다. (RESPONSE_BLOCK)
                // 넘어오는 부분
                console.log(ws._socket.remoteAddress, ':' , message.data);
                replaceBlockchain(message.data);
                // handleBlockchainResponse(message)
                break;
        }
    })
}

// const isValidBlockchain = (receiveBlockchain) => {
//     // 제네시스 블록이 일치 하는가?
//     if (JSON.stringify(receiveBlockchain[0] === JSON.stringify(getBlocks()[0])))
//         return false;

//     // 체인 내의 모든 블록을 확인, 바뀌는 block?
//     for (let i =1 ; i< receiveBlockchain.length; i++){
//         if (isValidNewBlock(receiveBlockchain[i], receiveBlockchain[i -1]) == false)
//             return false;
//     }
//     return true;
// }


const replaceBlockchain = (receiveBlockchain) => {
    const newBlocks = JSON.parse(receiveBlockchain);
    console.log(newBlocks)
    if (isValidBlockchain(newBlocks)){
        // 길이
        let blocks = getBlocks();
        if(newBlocks.length > blocks.length){
            console.log('받은 블록체인 길이가 길다');
            blocks = receiveBlockchain;
        }
        else if(newBlocks.length == blocks.length && random.boolean()){
            console.log('받은 블록체인 길이가 같다');
            blocks = newBlocks;
        }
    }
    else {
        console.log("받을 블록 체인에 문제가 있음")
    }
}


const handleBlockchainResponse = (receiveBlockchain) => {
    // 받은 블록체인보다 현재 블록체인이 더 길다.(안 바꿈)

    // 같으면 . (바꾸거나 안 바꿈)

    // 받은 블록체인이 현재 블록체인보다 길면 바꾼다.( 바꿈)

}

const queryLatestMessage = () => { // 다른 노드에게 다른 메세지를 발생시키는 함수
    return ({   
            "type" : MessageType.QUERY_LATEST,
            "data" : null   })
}

// 없다.
const queryAllMessage = () => { // 다른 노드에 전체블록을 메세지를 만드는 함수
    return ({   
            "type" : MessageType.QUERY_ALL,
            "data" : null   })
}

const responseLatestMessage = () => { // 요청을 받았을때 나의 마지막 블럭을 요청한 쪽에 전달을 해주는 함수
    return ({   
        "type" : MessageType.RESPONSE_BLOCKCHAIN,
        "data" : JSON.stringify(getLatestBlock())   })  /* (내가 가지고 있는 체인의 마지막 블록) */
}

const responseAllMessage = () => { 
    return ({   
        "type" : MessageType.RESPONSE_BLOCKCHAIN,
        "data" : JSON.stringify(getBlocks())   }) /* (내가 가지고 있는 전체블록) */
}

const write = (ws, message) => { //JSON TYPE을 하나의 문자열을 바꿔서 보낸다.
    // console.log('write()', ws_socket.remoteAddress, ':', message.message);
    ws.send(JSON.stringify(message)); 
}

// 우리가 등록한 소켓들이 하나씩 들어있는데 0 번 index부터 끝 index 까지 반복이 되는데 우리가 등록댐 것이 호출이 된다.
const broadcasting = (message) => {
    sockets.forEach((socket) => {
        write(socket, message)
    });
}

// 채굴 블록 , 외부에서 가져다 쓰겠다
const mineBlock = (blockData) => {
    const newBlock = createBlock(blockData);
    if(addBlock(newBlock, getLatestBlock())){
        broadcasting(responseLatestMessage());
    }
}


export { initP2PServer, connectionToPeer, getPeers, broadcasting , mineBlock};