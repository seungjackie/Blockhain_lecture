import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route   } from "react-router-dom";
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import NavBar from './components/NavBar';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 1-1 naviBar

// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.

// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 3. 상품디테일을 눌렀으나, 로그인이 안되어있을경웅에는 로그인 페이지가 먼저 나온다.
// 4. 로그인이 되어있을경우 해당 상품 디데팅 페이지를 볼 수 있다.
// 5. 로그아웃 버튼 누르면 로그 아웃이 된다.

// 6. 로그 아웃이 되면 상품 디테일 페이지를 볼수없다, 다시 로그인 페이지가 보인다.
// 6. 로그인 하면 로그아웃이 보이고 로그앗울하면 로그인이 보인다.

function App() {
  
  const [authenticate, setAuthenticate] = useState(false) // true면 로그인이 안됌

  useEffect(()=> {
    console.log("aaa", authenticate)
  },[authenticate])

  console.log("authenticate", authenticate)
  return (
    <div >
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login Clickon={setAuthenticate}/>}  />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/> } />
      </Routes>
    </div>
  );
}

export default App;