import React  from 'react';

// component형은 객체모델이고 함수형에서 처리할수 없는 부분을 처리할 수 있음. 유지보수를 잘 하기 위해서 component
class App extends React.Component { // component형
    // 상태추가 
    Add = () => {
        document.querySelector('.body').innerHTML += '<div>안녕</div>'
    }
    AddList = () => {
        let day = document.querySelector('.day').value;
        let time = document.querySelector('.time').value;
        let text = document.querySelector('.text').value;
        document.querySelector('.border').innerHTML += '<div>' + day + ' / ' + time + ' / ' + text + '</div>';
    }
    render() {
        return(<div>
            <div className='body'> </div>
            <input className='day'></input>
            <input className='time'></input>
            <input className='text'></input>
            <p className='border'></p>
            <button onClick={this.AddList}>생성</button>
            </div>)
    }
}
export default App;