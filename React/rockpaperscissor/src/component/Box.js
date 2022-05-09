import React from 'react'

const Box = (props) => {
    console.log(props)
    // console.log( Paper, Rock, Scissors); // 이미지 경로 확인하기 위한 콘솔 찍기
    // console.log("props", props); // title과 아이템
    return (
    <div className={'box ' + props.className}>
        <h1>{props.title}</h1> {/* props의 title의 경우에는 조건이 필요없다. */}
            <img className='item-img' src={props.item && props.item.img} />
        <h2>{props.result}</h2>
    </div>
        
    )
}

export default Box