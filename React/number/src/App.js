import React , {useState} from 'react'
import './App.css';

function App() {


  // const arrayNum = [1,2,3,4]

  // 정수 변환
  const arr = []
  // console.log(typeof(parseInt(arr[1])))
  arr.push(3, "2", "1", 99, 5, 88, 23, 56)
  // console.log(typeof(arr[1]))
  let storeArray = [];
  let minNumber = [];






  for(let i = 0; i < arr.length; i++) {


    let typeCheck = typeof(arr[i])

    if(typeCheck === 'string'){
      let stringToNum = parseInt(arr[i])
      storeArray.push(stringToNum)
    }else{
      storeArray.push(arr[i])
    }

    // 비교 하기 ㄴㄹ
  }

  // 임의의 값을 넣어준 것이다.
  // 초기화 필수
  let min = 0;
  let max = 20;
  
  // 기준값
  min = storeArray[0]
  max = storeArray[0];

  // 조건문
  for(let i=0 ; i<storeArray.length ; i++){
    if(min > storeArray[i]) {
      min = storeArray[i]
    }
  }

  console.log(min,"min")

  for(let i=0 ; i<storeArray.length ; i++){
    if(max < storeArray[i]) {
      max = storeArray[i]
    }
  }

  console.log(max,"max")





  // console.log(storeArray)

  console.log(minNumber)



  // console.log("정수 변환" , parseInt(arr))

  const array = [];

  const number = (event) => {
    let keyword = event.target.value
    console.log(keyword)
    // setNum(num)s
    // console.log(event.target.value.sort((a,b) => b-a))
    array.push(keyword)
    console.log(array)

    console.log(typeof(array.length))

    // 전체의 배열 요소 타입 검사하기

    parseInt(array)
    // console.log(typeof(10));
    // console.log(typeof("박승재"));

    
  }



  // console.log(arrayNum.sort((a,b) => b - a))


  // 어레이 내게 입력 받았고
  /* 
    01234 스트링

    제일 적은 숫자를   
  */






  return (
    <div className="App">
      <input id='num' type="number" onClick={(event) => number(event)}></input>

      <div> 숫자  :  </div>
    </div>
  );
}

export default App;
