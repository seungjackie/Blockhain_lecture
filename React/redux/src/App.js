import './App.css';
import { useState } from 'react'
import { useDispatch , useSelector} from 'react-redux';
import Box from './components/Box'

function App() {

  let id = useSelector(state=> state.id)
  let password = useSelector(state=> state.password)

  // state 값 가져오기
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const clickHandler = () => {
    // 타입이 필여하다, type: 이름이다.
    // payload 필요한 정보를 보내보자.필요한 값을 전달 한다
    dispatch({type: "INCREMENT" , payload: {num : 5}});
  }

  const clickDecrementHandler = () => {
    dispatch({type: "DECREMENT" });
  }

  const login = () => {
    dispatch({type: "LOGIN" , payload: {id:"seug" , password:"123"}})
  }

  return (
    <div className="App">
        <h1>id: {id},pw: {password}</h1>
        <h2>{count}</h2>
        <button onClick={clickHandler}>증가 </button>
        <button onClick={clickDecrementHandler}> 감소 </button>
        <br />
        <button onClick={login}> login</button>
        <Box />
    </div>
  );
}

export default App;
