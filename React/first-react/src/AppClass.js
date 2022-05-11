import React, { Component } from 'react'
import BoxClass from './component/BoxClass'

export default class AppClass extends Component {

    consturctor(props) {
        super(props)
        this.state = {
            counter2: 0,
            num : 1,
            value : 0
        };
        console.log("consturctor")
    }

    increase = () => {
        this.setState({
            counter2 : this.state.counter2 + 1 ,
            value : this.state.value + 1
            
        });
        console.log("increase ", this.state)

    }
    componentDidMount = () => {
        // api 콜
        console.log("componentDidMount")
    }

    componentDidUpdate = () => {
        console.log("componentDidUpdate ", this.state)
    }

  render() {
      console.log("render")
    return (
      <div>      
        <div> {counter}</div>
        <div>state : {this.state.counter2}</div>
        <button onClick={this.increase}>클릭 </button>
        {this.state <3 && <  counter2 <BoxClass num={this.state.num}></BoxClass>}
        </div>
    )
  }
}
