import {useState} from 'react'
import Profile from "./component/Profile";
import Login from "./component/Login";

// 조건부 렌더링
// 특정한 값이 true 일때는 a 컴퍼넌트가 나오고, false b 컴포넌트
// 삼항연산자 조건 ? 진실 : 거짓
function App() {
  const [isLogin, setIsLogin] = useState(false)

  // true 함수, flase 함수, 상태 끌어 올리기
  const clickToggle = () => {
    setIsLogin(!isLogin)      // isLogin true -> false / false -> true
  }


  return (
    <div className="App">
      {
        isLogin 
        ?<Profile onClick={clickToggle} />
        :<Login onClick={clickToggle} />
      }

    </div>
  );
}

export default App;
