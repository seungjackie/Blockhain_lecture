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

  
  const loginClick = async (req,res) => {
    const email = "로그인 때 입력한 이메일"
    const pwd = "로그인 때 입력한 패스워드"
    console.log("email : ",email,"password: ",pwd)
    try {
        const sql = "select * from where email = ? and password = ?;"
        const [result] = await pool.query(sql,[email,pwd]); 
        if(result.length===0){
          console.log("이메일 비밀번호 불일치")
        }
        else{
          console.log("로그인 완료")
        }
    }
    catch (e) {
        throw e;
    }
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
