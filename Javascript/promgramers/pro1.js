
const array1 = [1, 5, 2, 6, 3, 7, 4]
const commands1 = [4, 4, 1]


function solution(array, commands){

    let answer = [] ;

    array1.sort();
    console.log(array1)

    for(let i = 0; i < commands.length ; i++) {
        let list  = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => { return a-b})

        answer.push(list[commands[i][2]-1]);
    }
    

    // console.log(array.sort((a,b) => a+ b))

    return answer;
};


solution()
// console.log(array)
// console.log(array.sort((a,b) => a+ b))
