//nodejs: single-threaded

function ingoo() {
    console.log('3');
    return 4;
}

function goak() {
    console.log('1');
    return ingoo();
}

function hello(callback){
    goak();
    console.log('5');
    callback('6');
}

const result = ingoo(); //ingoo함수 실행값을 result 변수에 담음 => ingoo() => console.log('3') => return 4 => result = 4
hello(goak); // hello(goak) => goak() => console.log('1') => ingoo() => console.log('3') => return 4 => 함수 종료 => console.log('5') => goak('6') => console.log('1') => console.log('3') => return 4 
console.log(typeof result); //number