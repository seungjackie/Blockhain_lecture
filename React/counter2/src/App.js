import './App.css';
import {useState} from 'react'
import Test from './components/Test.js'

function App() {
  
  const [counterState,setCounterState] = useState(0)

  const buttonA = () => {
    setCounterState( counterState + 1)  
  }

  
  return (
    <div className="App">
      <div>{counterState} </div>
      <button className="" onClick={buttonA}>버튼</button>
      <Test counter={counterState}/>
    </div>
  );
}

export default App;
