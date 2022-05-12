import React from 'react'
import axios from 'axios'

/* 
    API 설계가 되어있으면 어떠한걸 만들어도 상관없다.
    프론트를 먼저만드는지? 
    id, title, content, date, hit
    백을 먼저 만들어야 하는지?
    idx, subject, memo, regist, hit

*/

const Login = (props) => {
    const {onClick} = props;

    const handleSubmit = async e =>{
        e.preventDefault();             // html 보유기능을 다 안되게 하는것  
        const {userid,userpw} = e.target;
        console.log(userid.value, userpw.value);

        try {
        const result = await axios.post('http://localhost:3500/user/login',{
            userid:userid.value,
            userpw:userpw.value
        },{
            // token
            // withCredentials: true
        })  
        } catch (e) {
            alert('접속 불량~')
        }
        // async await
        // return promise 객체 이다

        onClick();
        

        // props.onClick()    // 백엔드 결과가 도착했을때
    }


    return (
        <>
            <h2>로그인 화면</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userid" />
                <input type="password" name="userpw" />
                <input type="submit" name="로그인"/>
            </form>
        </>
    )
}

export default  Login