const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:true,
    // 토큰 ?
    credentials:true
}))

app.get('/' , (req,res) => {
    res.send('서버테스트')
})


app.post("/user/login",(req,res) => {
    const {userid,userpw} = req.body

    console.log(userid,userpw)
    if (userid === 'admin' && userpw === 'admin'){
        // 쿠키 생성
            // payload에 뭘 넣을까
    } else {
        // 쿠키 생성 안해도 되는 구간
    }
    res.send('로그인 테스트')
})

app.post("/user/logout",(req,res) => {
    res.send('로그아웃 테스트')
})

app.listen(3500,
    console.log("server listening on 3500")
);