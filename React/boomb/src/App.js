import {useState , useEffect} from 'react'
import Boom from './component/Boom'

function App() {
  
  const [userState, setUserState] = useState(null);
  // 가상배열
  // 안은 비어있지만 타입은 배열
  // 0이 25개로 잡힌다
  let BoomArr = new Array(25).fill(0);
  console.log(BoomArr);
  const RandomBoom = () => {
    let BoomCount = 5;
    for (let i = 0; i < BoomCount; i++){
      let index = Math.floor(Math.random() * BoomArr.length);
      // 확실한 경우애만 while 문 쓰기.
      while(BoomArr[index] !== 0){
        index = Math.floor(Math.random() * BoomArr.length);
        if(BoomArr[index] === 0){
          BoomArr[index] = 1;
          break;
        }
      }
      if(BoomArr[index] === 0) {
        BoomArr[index] = 1;
      }
      setUserState(BoomArr);
    }
  }

  // RandomBoom()
  // 폭탄 갯수 5
  // 폭탄이 랜덤으로 뿌려진다.
  
  // 클래스 
  useEffect(() => {
    RandomBoom()
  },[])   // 값이라는지 하나가 더 들어오면 처음에 한번?

  return (
    <div className="main">
      {
        userState != null ?
        // 반복해서 돈다
        userState.map((item, index) => {
          // key ={index} 사용하지 말자.
          return <Boom item ={item} key={index}/>
        }):false
      }
    </div>
  );
}

export default App;
