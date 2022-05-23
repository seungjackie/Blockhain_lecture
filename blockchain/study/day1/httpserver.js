// 웹에 명령어를 입력해서 내 노드를 제어하는 서버
import express from 'express';
import bodyParser from 'body-parser';
import { getBlocks , createBlock } from './block.js';

const initHttpServer = (myHttpPort) => {
    const app = express();
    app.use(bodyParser.json());

    app.get('/', (req,res) =>{
        res.send("hello, World");
    })

    app.get('/blocks', (req,res) =>{
        res.send(getBlocks());
    })

    app.post('/blocks/post', (req,res) =>{
        res.send(createBlock());
    })
    

    app.post('/create', (req,res) =>{
        // res.send(req.body.data);
        // stiring
        res.send(createBlock(req.body.data));
    })
    

    app.listen(myHttpPort, () => {
        console.log('listening httpServer Port : ', myHttpPort);
    }) 
}

export {initHttpServer}