import express from 'express';
import bodyParser from 'body-parser';


const initHttpServer = (myHttpPort) => {
    const app = express();
    app.use(bodyParser.json());

    app.get('/' , (req,res) => {
        res.send("hey");
    })

    app.listen(myHttpPort, () => {
        console.log("listen to Port" , myHttpPort)
    })

    app.post('addpeer2peer', (req,res) => {
        console.log(req.body.data)
        // res.send(connection)
    })
}

export {initHttpServer}