import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route   } from "react-router-dom";
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import NavBar from './components/NavBar';
import PrivateRoute from './route/PrivateRoute';
import {useSelector} from 'react-redux'


function App() {
  
  const [authenticate, setAuthenticate] = useState(false) // true면 로그인이 안됌
  const selector = useSelector((state) => state.auth.authenticate )


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
        <Route path="/product/:id" element={<PrivateRoute authenticate={selector}/> } />
      </Routes>
    </div>
  );
}

export default App;