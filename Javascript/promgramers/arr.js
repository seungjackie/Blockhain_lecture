function solution(arr) {
    var answer = 0;
    
    let sum = 0;

    for(let i = 0 ; i <arr.length ; i ++) {
        sum += arr[i];
    }
    
    
    return sum / arr.length;
}

let test = [1,2,3,4]

console.log("평균값 " , solution(test))