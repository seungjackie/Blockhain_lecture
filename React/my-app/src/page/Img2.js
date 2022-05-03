import React from 'react';
import {second} from '../img/index'

function Img2() {

    function loginPage(e){
        window.location.href = '/Img3'
    }

    return (
        <div>
            img2
            <img src={second} onClick={loginPage}></img>
        </div>
    )
}

export default Img2