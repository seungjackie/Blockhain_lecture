import express from 'express';
import bodyParser from 'body-parser';
import { getBlocks,createBlock } from './block.js';


const initHttpServer = (myHttpPort) => {
    // 익스프레스를 여기서 줄수 있군.
    const app = express();
    app.use(bodyParser.json());

    app.get('/' , (req,res) => {
        res.send('Hello. world111');
    })

    app.get('/blocks1' , (req,res) => {
        res.send(getBlocks());
    })

    app.post('/createblock', (req, res) => {
        res.send(createBlock(req.body.data));
    })

    app.listen(myHttpPort, () => {
        console.log('Listen htttpServer Port : ' , myHttpPort)
    })
}

export { initHttpServer}