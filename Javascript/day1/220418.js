// alert("start javaScript");

//숫자형
/* 
    10진수
    255
    2진수(0b 1111 1111), 
        128 64 32 16  8 4 2 1
    179 51 19 3
    2진수(0b 1011 0011 )

    8진수 (0o00)
            64 8 1
    255 - 192 63 - 56 -7 
    8진수 (0o00)
            64 8 1    

    255,
    16진수 (0x00ff)
            256 16 1
*/      
// let num = 255;
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));




// 변뭇명 이름 규칙
/*
    1. 알파벳, _, -, 숫자(한글, 특수문자, 일본어 권장 X)
        1_1. 숫자가 제일 앞에 올수 없다.
    2. camle 표기법
        let myVeryLongLongName;
    3. 대소문자를 구분한다.
        let myVeryLongLongName;
        let MyVeryLongLongName;
*/

// console.log(varName);            // 호이스팅
// var varName = "박승재";            // 가장 오래된 버전에서 사용하는 변수타임
// console.log(varName);

// if(true)
// {
//     // 다른 영역
//     var varName = 'park seung jae';
// }
// console.log(varName);


// let letName = "psj";
// console.log(letName);

// if(true){
//     let letName = "seung jae2"
//     console.log(letName);       //seung jae2
// }
// console.log(letName);           // psj

// // let letName = '박승재';
// console.log(letName);

// const constName = "seung jae";  //값이 수정될 일이 없는 변수
// // 게임에서 1스테이ㅣ 맵의 크기
// // 1 스테이지 보스 이름
// // document 를 변수로 선언할 때
// // 컴파일 은 컴퓨터 언어로 번역  
// constName = 'sjp';


// function outer (){
//     let counter = 0;
//         function incrementCounter(){
//             counter ++;
//         }
//     return incrementCounter;
// }
// const myNewFunction = outer();
// myNewFunction;
// myNewFunction;

// const anotherFunction = outer();
// anotherFunction;
// anotherFunction;


// let randomNum = Math.random() * 10;      //0.0 ~ 1.0 사이의 랜덤한 값 (난수)
// console.log(randomNum);

// console.log(Math.ceil(randomNum));       //올림
// console.log(Math.floor(randomNum));      //버림
// console.log(Math.round(randomNum));      //반올링

// console.log(Math.round())


// let randomNum = Math.random(num);
// let randomNum = Math.random();
// console.log(Math.floor(randomNum));
// console.log(prompt("정답을 말하시오"));

let inputNum = prompt("정답을 입력하세요", 10);

let correctNum = Math.floor((Math.random()*10))%8 + 3;        // 3 + 0 ~ 3 + 7
console.log(correctNum);
if (inputNum == correctNum){
    alert("정답입니다.");
}
else{
    alert("틀렸습니다.");
}   






// /**
//  * 실습.
//  * 프로그램이 3 ~ 10 사이의 랜덤한 값을 지정한다.
//  * 값을 하나 입력 받아서 정답인지 아닌지 출력해준다.
//  */

// while(true){
//     let randNum = Math.random() * 10 ; 
//     let ComInput = Math.floor(randNum); //랜덤 정수 뽑아내기
    
//     if(ComInput<3){ //3이하의 수 나오면 다시 while Loop
//         continue;
//     }
//     else{
//         let UserInput = prompt("3~10 숫자를 맞춰주세요. (종료코드 99)", 10);
//         // console.log(UserInput); console.log(ComInput); //콘솔에 찍어보기
//         if(UserInput==99){break;} //99 입력시 Loop 종료
//         else if(UserInput<3){alert("다시 입력해주세요"); continue;}  //사용자가 3이하의 수를 입력시 다시 Loop
//         else if(UserInput != ComInput){ //두 수가 다른경우 출력해주고 다시  Loop
//             alert("틀렸습니다. User입력값 : " + UserInput+ " 컴퓨터값 : "+ ComInput);
//             continue;
//         }
//         else if(UserInput == ComInput){ //정답시 출력해주고 Loop종료.
//             alert("!!!정답입니다.!!! User입력값 : " + UserInput+ " 컴퓨터값 : "+ ComInput);
//             break;
//         }
//     }
// }

// /* 
//     실습.
//     프로그램이 3 ~ 10 사이의 랜던한 값을 지정한다.
//     값을 하나 입력 받아서 정답인지 아닌지 출력해준다. 정답은 실행 할때마다 바뀐다.
//     프롬프트 숫자 입력 받으면 숫자가 정답입니다 , 아니다
// */

// while(true) {
//     let correctNum = Math.floor((Math.random)) *10 ;

//     if(correctNum < 3){     //3이하의 수 나오면 while loop
//         continue;
//     }
//     else{
//         let UserInput = prompt("3 ~ 10 숫자", 10);
//         console.log(UserInput); console.log * correctNum;
//     }
// }