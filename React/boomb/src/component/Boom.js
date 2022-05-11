import React, {useState} from 'react'
import { BoomIng } from '../img'


const Boom = (props) => {
    // 초기값을 false
    const [clickState, setClickState] = useState(false)
    // 자신이 바뀔 예정
    const click = () => {
        setClickState(true)
    }

  return (
    <div className="Boom" onClick={() => click()}>
        {clickState ? false : <div className="dim"> </div> } 
        {/* <div className="dim"> </div> */}
        {/* 1일때만 보이고 아닐때는 안보인다. */}
        {/* 숫자값으로 바꿀수있다. */}
        {props.item === 1 ? <img src={BoomIng} alt=''></img> : false } 
    </div>
  )
}

export default Boom