import React from 'react'
import {useState } from 'react'
import { useDispatch } from 'react-redux';


const Counter = () => {

    const [state, setState] = useState(0)
    const dispatch = useDispatch()

    const clickHandler = () => {
      setState(state+1);
    }

  return (
    <div>
        {state}
        <button onClick={clickHandler}>click  asasdf</button>
    </div>
  )
}

export default Counter