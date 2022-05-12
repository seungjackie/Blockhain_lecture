import { useState } from 'react';
import './App.css';
import Hompage from './page/Hompage';
import Aboutpage from './page/Aboutpage';
import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage'
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';

// React Router libarary 상황에 따라서 여러 상태를 보여준다. npm install react-router-dom@6
// Route는 각각의 페이지를 swith하는 력할
function App() {
    const [authenticate, setAuthenticate] = useState(false) // true면 로그인을 한것 false면 로그인을 해야하는것
    const PrivateRoute = () => { // component
        return authenticate == true ? <UserPage/> : <Navigate to="/login"/> 
    };

    return (
    <div>
        <h1>Welcome to React Router!</h1>
        <Routes> 
            <Route path="/" element={<Hompage />} /> {/* 페이지가 여러개면 주소도 여러개여야함  */}
            <Route path="/about" element={<Aboutpage/> } />
            <Route path="/products" element={<ProductPage/>}/>
            <Route path="/products/:id" element = {<ProductDetailPage/>}/>  {/* 선택한 상품에 따라 페이지가 달라지는데 url디자인에 따라서 restful */}
            {/* 보호해줘야 하는 페이지 ex로그인도 안햇는데 profile페이지를 들어가는 경우  리다이텍트(redirect) */}
            <Route path="/login" element = {<LoginPage/>}/>
            <Route path="/user" element ={<PrivateRoute/>}/>
            <Route path="/*" element ={<PrivateRoute/>}/> {/* 예외처리? */}
        </Routes>
    </div>
    );
}

export default App;
