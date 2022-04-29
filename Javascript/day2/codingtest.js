function primeCount(array) {
    //소수 판별 함수
    //소수: 1과 자기자신 외의 수로 나누어 떨어지지 않는 수 ... ex) 2,3,5,7,11
    function isPrime(n) {
        for (let i = 2; i < n; i++) {
            if (n%i===0) return false
        }
        return true
    }

    let result = []; // 소수를 담을 배열
    
    // 중복되지 않게 array에서 3가지 수를 뽑는 함수
    // ex) arr = [1,2,3,4,5] 
    //  arr[0] + arr[1] + arr[2], 
    //  arr[0] + arr[1] + arr[3], 
    //  arr[0] + arr[1] + arr[4], 
    //  arr[1] + arr[2] + arr[3], 
    //  arr[1] + arr[2] + arr[4], 
    //  arr[2] + arr[3] + arr[4]
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            for (let k = j + 1; k < array.length; k++) {
                let sum = array[i] + array[j] + array[k];
                if (isPrime(sum)) { // 뽑은 세 수의 합이 소수일때
                    if (!result.includes(sum)) result.push(sum) //result 배열에 해당 소수값이 없다면 push
                }
            }
        }
    }

    return result.length    // result의 길이 = 소수의 총 갯수
}

