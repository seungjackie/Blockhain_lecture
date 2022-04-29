// 메모리는 call stack, background의 공간 이 두 공간에 저장된다.
// 비동기함수는 background로 던져지고 그 이외의 것들은 call stack이란 곳에서 실행된다. 
function a(callback){
    setTimeout(time2,1000)  //비동기 함수 => background에 던져짐
    console.log('hello world') //먼저 실행
    setTimeout(time,0) //비동기함수
    callback() // hello world 다음으로 call stack에 들어가서 실행됨
}

console.log(3)  // 가장 먼저 실행

function time2(){
    console.log('hi')
}

function time(){
    console.log('5')
}

a(time) // hello world => time() => 5 => setTimeout(time, 0)의 결과 = '5' => setTimeout(time2, 1000)의 결과 

// 비동기 처리 순서

