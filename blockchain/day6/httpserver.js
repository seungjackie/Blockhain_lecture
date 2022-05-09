// 웹에 명령어를 입력해서 내 노드를 제어하는 서버
import express from 'express';
import bodyParser from 'body-parser';
import { getBlocks , createBlock} from './block.js';
import { connectionToPeer , getPeers , mineBlock} from './p2pserver.js';
import { getPublicKeyFromWallet } from './wallet.js'
import res from 'express/lib/response';
import req from 'express/lib/request';

const initHttpServer = (myHttpPort) => {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req,res) =>{
        res.send("hello, World");
    })

    app.get('/blocks', (req,res) =>{
        res.send(getBlocks());
    })

    app.get('/peers', (req,res) =>{
        res.send(getPeers());
    })




    app.post('/mineBlock', (req,res) => {
        res.send(mineBlock(req.body.data));
    })

    app.post('/createBlock', (req,res) =>{
        // res.send(req.body.data);
        // stiring
        res.send(createBlock(req.body.data));
    })

    // 자동으로 찾는 기능이 없다
    app.post('/addPeer', (req,res) => {
        console.log(req.body.data)
        res.send(connectionToPeer(req.body.data))
    })

    app.get('/address', (req,res) => {
        const address = getPublicKeyFromWallet();
        res.send( {'address  ' : address});
    })

    // 거래를 한 트랜젝션을 보낸다.
    app.post('/sendTransaction', () => {
        // 코인 양, 주소
        const address = req.body.address;
        const amount = req.body.amount;

        sendTransaction(address,amount);
        
    })

    // //채팅창
    // app.post('/sendMessage', (req,res) => {
    //     res.send(broadcasting(req.body.data))
    // })
    

    app.listen(myHttpPort, () => {
        console.log('listening httpServer Port : ', myHttpPort);
    }) 
}

export {initHttpServer}