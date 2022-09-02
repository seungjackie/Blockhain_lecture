
const arr = [1,1,0,0,3,3,4,4,5,66,7,8,8]

function solution(arr) {
    return arr.filter((val,index) => val != arr[index+1])
}

console.log(solution(arr))