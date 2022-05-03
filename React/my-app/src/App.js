import React from 'react'

// 컴포넌트 ,객체모댈 설계 차이 ,처리 할때 
class App extends React.Component {
  state = {
    // 상태관리
    count : 0
  }
  // 상태값으로 함수 실행
  Add = () =>{
    this.setState(
      {count: this.state.count +1 }
    )
  }

  mu = () =>{
    this.setState(
      {count: this.state.count -1 }
    )
  }

  render() {
    return (
      <div className='App'>
        <p>{this.state.count}</p>
        <button onClick={this.Add} > 증가 </button>
        <button onClick={this.mu} > 감소 </button>
        <div>
          <Temp conunt={this.state.count}
                Add ={this.Add}
                mu ={this.mu}
                /> 
        </div>
      </div>
    )
  }
}

// 부모에서 값이 변할때 상속을 시켜 
class Temp extends React.Component {

  render() {
    return (
      <div>
        {/*  */}
        <p>{this.state.count}</p>
        {/* 부모의 상태값 */}
        <p>{this.props.count}</p>
        <button onClick={this.props.Add}> 클릭 </button>
        <button onClick={this.props.mu}> 클릭 </button>
        <button onClick={this.Add}> 자신 증가 </button>
        <button onClick={this.mu}> 자신 감소 </button>
      </div>
    )
  }
}
export default App;
