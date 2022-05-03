import React  from 'react';

class App extends React.Component { 
    state = {
        count : 0
    }

    TodoList = () => {
        this.setState({
            count : this.state.count +1 ,
        })
        let day = document.querySelector('.day').value;
        let time = document.querySelector('.time').value;
        let text = document.querySelector('.text').value;
        // let todo = document.querySelector('.todo').value;
        // class name = 'border' 에 추가 하겠다.
        document.querySelector('.post').innerHTML += <List count ={this.state.count} day ={day} time = {time} text = {text} />;
    }
    render() {
        return(<div>
            <input className='day'  placeholder='년'></input>
            <input className='time' placeholder='월'></input>
            <input className='text' placeholder='일'></input>
            {/* <input className='todo' placeholder='todo'></input> */}
            <p className='post'></p>
            <button onClick={this.TodoList}>생성</button>
            </div>)
    }
}

class List extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.count}</div>
                <div>{this.props.day}</div>
                <div>{this.props.time}</div>
                <div>{this.props.text}</div>
            </div>
        )
    }
}


export default App;
