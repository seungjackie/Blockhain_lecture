// class Developer {
// constructor(name){
// this.name = name
// }

// hi(){
//     return " + this.name + "!!"
// }

// }

// const test = new Developer("seoung jae")

// console.log(test.hi())

// let obj = {one : "1", two : "2", three : "3"}

// const {one, two} = obj

// console.log(one)

// let status = true

// const arr = [1, 2,3,4,5]

// const map = arr.map(x => x*2);
// console.log(map)


class Person {
    constructor ( name, age, city) {
        console.log('constructor');
        this.name = name;
        this.age = age;
        this.ciry = city;
    }
    // 매쏘드 생성
    nextYearAge() {
        return Number
    }
}

let kim = new Person('kim' , '17', 'seoul');
console.log(kim);

