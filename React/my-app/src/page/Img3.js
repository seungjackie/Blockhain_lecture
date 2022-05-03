import React from 'react';
import {third} from '../img/index'


function Img3() {

    function imgPage3(e){
        window.location.href = '/main'
    }

    return (
        <div>
                <img src={third} onClick={imgPage3} s></img>
            <TodoList>
            </TodoList>

        </div>
    )
}


class TodoList extends React.Component {
    Add = () => {
        document.getElementById('body').innerHTML += '<div> hi</div>'
    }

    render(){
        return (
            <div>
                <div className="body"></div>
            </div>
        )
    }
}

export default Img3