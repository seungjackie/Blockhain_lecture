/* 
    비동기 처리
    promise
    동기 처리
*/

// let a = 0;



async function asyncTimeoutCheckAdult(age, timeout){
    if(age >= 20) {
        setTimeout(() => {
            console.log(`asyncTimeoutCheckAdult()`)
            return age;
        },timeout);                 // 몇초 뒤에 싱행하라
        return age;
    }
    else throw new Error(age);
}


async function asyncCheckAdult(age, timeout){
    if(age >= 20)   return age;
    else throw new Error(age);
}


async function testAsyncAwaitFunc(){

    // 3초 있다가 실행
    await asyncTimeoutCheckAdult(100, 3000);

    const promiseCheckAdult = asyncCheckAdult(10);

    promiseCheckAdult.then ((age) => {
        console.log(`${age} is adult!!`);
    }).catch((age) => {
        console.log(`${age} is not adult!!`);
    });

    const promiseCheckAdult1 = asyncCheckAdult(21);

    promiseCheckAdult1.then((age) => {
        console.log(`${age} is adult!!`);
    }).catch((age) => {
        console.log(`${age} is not adult!!`);
    });

}


testAsyncAwaitFunc();




// const promiseCheckAdult = asyncCheckAdult2(10, 2000);
// promiseCheckAdult.then((age) => {
//     console.log(`${age} is adult!!`);
// }).catch((age) => {
//     console.log(`${age} is not adult!!`);
// });


// awiat : asnyc 함수가 종료 될 때까지 기다린다.

// function asyncCheckAdult(age){
//     return new Promise((reslove, reject) => {
//         if (age >= 20) reslove(age);
//         else    reject(age);
//     })
// }



// 그냥 function함수로 되지만 이게 일반화가 되어있다
// const promise = new Promise((reslove, reject) => {

// });
// const promise = new Promise((reslove, reject) => {
//     reslove();
//     reject();
// });

// promise.then(() => {
//         console.log('promise() then() called');
//     }
// ).catch(() => {
//         console.log('promise() catch() called');
//     }
// );



// const promise = new Promise((reslove, reject) => {
//     /* 
//         시간이 오래 걸리는 실해문 ... 5초
//     */
//     reslove();
//     reject();
// });

// promise.then(() => {
//         console.log('promise() then() called');
//     }
// ).catch(() => {
//         console.log('promise() catch() called');
//     }
// );

// function testFunc1(){
//     console.log('testFunc1()');

//     let startTime = new Date().getTime();
//     // 와일문이 트루일때 반복 됨으로 부등호는  " < "
//     while(new Date().getTime() - startTime < 5000);

//     testFunc2();
// }

// function testFunc2(){
//     console.log("testFunc2()");
// }

// testFunc1();