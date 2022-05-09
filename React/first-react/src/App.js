import './App.css';
import {useState} from 'react'


function App() {
  let counter = 0;                                  // 변수 초기화
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;                          // (재활당) 재랜더린 때문에 값이 남아있다.
    setCounter2(counter2 + 1);                      // 비동기 함수
    console.log("counter 는" , counter , "setcounter2 state는 ", counter2);
  }
  return (
    <div>
      <div> {counter}</div>
      <div>state : {counter2}</div>
      <button onClick={increase}>클릭 </button>
    </div>
  );
}

export default App;
