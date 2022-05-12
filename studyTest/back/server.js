const express = require('express');
const app = express();
const cors = require('cors');

port = 3500;

app.use(express.json());
//  Todo 
app.use(express.urlencoded({extended:true}));

app.get('/' , (req,res) => {
    res.render('sever')
})

app.post('/user/login',(req,res) => {
    res.send('로그인페이지')
})

app.post('/user/logout',(req,res) => {
    res.send('로그아웃 페이지')
})

app.listen( () => {
    console.log(`server listening on ${port}`)
})