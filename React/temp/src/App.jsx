import React, { useState, useEffect } from 'react'
import Box from './component/Box'

import './assets/app.css'
import Style1 from './assets/app.module.css'
import Style2 from './assets/app2.module.css'

import axios from 'axios';

import styled from 'styled-components'
// const Style3 = styled.div`
//     color:red
//     `;


function App () {
    const [inputData, setInputData] = useState(null);
    // await 를 사용하기 위해 async선언
    async function check() {
        try{
            const res = await axios.get('/api/test');
            setInputData(res.data.user);
        } catch(e){
            console.error(e.message)
        }
    }
    useEffect(() => {
        check();
    },[])

    const add = async() => {
        // delete 버튼 를릭 시 실행
        try{
            // axios.get 은 두번째 매개변수로 config 전달
            const res = await axios.post('/api/add')
            check();
        } catch(e) {
            console.error(e.message)
        }
    }
    return (
      <>
          <div className={Style1.color}>나는 스타일 1 color</div>
          <Box Style ={Style1}/>
          <div className={Style2.color}>나는 스타일 2 color</div>
          <div className='color'>나는 스타일 app.css</div>
          <div className={Style3}>나는 스타일 컴포넌트 Style3</div>
          <button type='button' onClick={add}>add</button>
          {inputData?inputData.map((item,index)=>(
            <div key={index}>{item.nick + " " + item.password}</div>
           )):false}
      </>
    )
}

export default App;