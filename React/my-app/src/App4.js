import React from 'react'
import {Login , Main, Img2 , Img3} from './page'
import { BrowserRouter,Routes , Route} from 'react-router-dom' //링크 연결

// 컴포넌트 ,객체모댈 설계 차이 ,처리 할때 
class App extends React.Component {

  
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Img2' element={<Img2 />}></Route>
          <Route path='/Img3' element={<Img3 />}></Route>
          <Route path='*' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
