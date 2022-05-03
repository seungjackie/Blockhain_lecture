import React from 'react';
import {first } from '../img/index'

// props app4에 들을 가져올거다
function Main(props) {
    function loginPage(e){
        window.location.href = '/login'
    }

    function imgPage2(e){
        window.location.href = '/Img2'
    }

    function nextImg() {

    }



    return(
        <div>
            <div>
                <p><h1>Main</h1></p>
                <button onClick={loginPage}> 로그인 페이지</button>
                <br />
                <img src={first} onClick={imgPage2}></img>
                <MainMain>
                </MainMain>

                <div className="container">
                <button onClick={loginPage}> 로그인 페이지</button>
                </div>
            </div>
        </div>
    )
}

class MainMain extends React.Component {
    state = {
        count : 0
    }

    Add = () => {
        this.setState(
            {count : this.state.count +1}
        )
    }

    mu = () => {
        this.setState(
            {count : this.state.count -1}
        )
    }

    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.Add}> 이전 이미지 </button>
                <button onClick={this.mu}> 다음 이미지  </button>
            </div>
        )
    }
}

export default Main;