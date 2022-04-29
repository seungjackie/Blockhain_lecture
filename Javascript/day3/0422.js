const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
canvas.style.backgroundColor ="lightgrey";
const arcRadius = 20; // 원 반지름



// 프롬프트로 블록 개수 입력받기
// var [columnNum, RowNum] = prompt("두 숫자를 띄어쓰기로 입력하세요 ").split(" ")
var columnNum = 1;
var RowNum = 1;


// 장애물 벽 
let deadBricksCount = 0;

// 클래스로 전체의 설계도를 만든다.
// 명사로 지칭 되는 객체를 설계한다. 자동차(속성과 기능) , 책(속성과 기능) , 몬스터, 사람 ...
// 클래스화 시켜서 기능을 부여하기
class Brick {
    constructor(left, top, right, bottom,color){
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.isAlive = true;
        this.color = color;
    }
    
    // 클래스화 안에 벽돌 그리기 추가
    draw() {
        if(this.isAlive) {
            context.rect(this.left, this.top, brickWidth, brickHeight);
            context.fillStyle = this.color;
            context.fill();
        }
    }
}

class obtBrick {
    constructor(left, top, right, bottom, color){
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.isAlive = true;
        this.color = color;
    }

    draw(){
        context.rect(this.left, this.top, 100, 20);
        context.fillStyle = this.color;
        context.fill();
    }
}


let obt = new obtBrick(200-50, 280-10, 200+50, 280+10, "green");

// 방해 블럭
const obtWidth = 100;
const obtHeight = 20;
let obtPosX = obt.left;
let obtPosY = canvas.height/2 +100;
let obtMoveDirX = -1;
let obtMoveDirY = -1;
let obtMoveSpeed = 2;

let obtPaddle = {
    left: 0, right:0, top:0, bottom:0
}


// 0.01초 마다 부딪힌다
// 변화는 변수로 넣어야 된다
function obtBricks(){
    context.beginPath();    //그리기
    obt.draw()
    context.closePath();
    // obtMoveDirX += obtMoveSpeed;
    // obtPosX += 1;
    // obtMoveDirX += obtMoveSpeed;
    // this.left++;

}



class MovingBrick extends Brick {
    movingAction(){
        this.left++;
    }
}


// 벽돌
const brickCol = columnNum; // 열
const brickRow = RowNum; // 행
const brickWidth = 50; // 간격 10
const brickHeight = 25; // 간격 5
let bricks = [];        //벽돌 전체


// 원 관련 변수
let arcPosX = canvas.width/2 + 120;
let arcPosY = canvas.height/2;
let arcMoveDirX = -1;
let arcMoveDirY = -1;
let arcMoveSpeed = 2;


let ball = {
    left:0, right:0, top:0, bottom:0,
}

// 벽돌
let brick = {
    left:0, right:0, top:0, bottom:0,
    column : 0, row : 0
}

// 패들 관련 변수
const barWidth = 350;
const barHeight = 20;
let barPosX = canvas.width/2 - barWidth/2;
let barPosY =  canvas.height - barHeight;
let barMoveSpeed = 60;

let paddle = {
    left:0, right:0, top:0, bottom:0
}

// game clear 변수
let maxCount = brickRow * brickCol // 전체 벽돌의 개수
let falseCount = 0; // false 벽돌의 개수


// 키 처리 함수 추가
document.addEventListener('keydown', keyDownEventHandler); // keydown이라는 이벤트가 발생하면 함수를 호출한다
// document.addEventListener('keyup', keyUpEventHandler); // keydown이라는 이벤트가 발생하면 함수를 호출한다

// 함수 모음
function keyDownEventHandler(e) { // 무슨키를 눌렀는지 알기 위해 매개변수 e 대입
    
    if (e.key === 'ArrowRight') {
        // 바를 오른쪽으로 이동
        // console.log("ArrowRight 는", e.key)
        if(barPosX + barWidth < canvas.width) {
            barPosX += barMoveSpeed
        }
    }
    else if (e.key === 'ArrowLeft') {
        // 바를 왼쪽으로 이동
        // console.log("ArrowLeft 는", e.key)
        if(barPosX > 0) {
            barPosX -= barMoveSpeed
        }
    }

    paddle.left = barPosX 
    paddle.right = barPosX + barWidth; 

    paddle.top = barPosY 
    paddle.bottom = barPosY + barHeight; 
}


// 도형 움직이기
function update() {
    // 데이터 수정(도형의 위치 이동)
    if(arcPosX - arcRadius < 0) {
        arcMoveDirX = 1
    } else if (arcPosX + arcRadius > canvas.width) {
        arcMoveDirX = -1
    }
    if(arcPosY - arcRadius < 0){
        arcMoveDirY = 1; 
    } 
    else if(arcPosY + arcRadius > canvas.height) {
        document.location.reload()
        alert('game over!')
    }

    arcPosX += arcMoveDirX * arcMoveSpeed; // 원 좌우로 움직이기. 
    arcPosY += arcMoveDirY * arcMoveSpeed; // 원 위아래로 움직이기

    // 방해물 움직일 구간
    if(obt.left < 0) {
        obtMoveDirX = 1
    } else if (obt.right > canvas.width){
        obtMoveDirX = -1
    }

    // 방해물 움직이기
    obt.left += obtMoveDirX * obtMoveSpeed;
    obt.right += obtMoveDirX * obtMoveSpeed;


    ball.left  = arcPosX - (arcRadius)
    ball.right  = arcPosX + (arcRadius)
    ball.top  = arcPosY - (arcRadius)
    ball.bottom  = arcPosY + (arcRadius)


    // 충돌이 되는지 확인
    if(isCollisionRectToRect(ball, paddle)){
        arcMoveDirY = -1;
        arcPosY = paddle.top - arcRadius;
    }

    for(let i = 0; i < brickRow; i ++){
        for(let j = 0; j < brickCol; j ++) {
            //  한번 충돌된 애들은 체크를 안함. false
            if(bricks[i][j].isAlive && isCollisionRectToRect(ball, bricks[i][j])) { 
                // arcMoveDirY *= -1; // 부딪힐때마다 방향이 바뀌어야 하기에 *= 로 적용
                bricks[i][j].isAlive = false; // 여기서 isAlive가 false 바뀜. 충돌한 적 있다고 상태가 바뀐다.
                falseCount++;

                checkToWin()

                arcMoveDirY = -arcMoveDirY
                break;
            }
        }
    }
    
    if(isCollisionRectToRect(ball, obt)){
        arcMoveDirY *= -1;
    }



}

// 게임 이겼는지 체크
function checkToWin() {

    // 1. bricks 배열에 있는 정보로 처리

    // let flatBricks = bricks.flat();// 배열의 모든 요소를 꺼내서 하나하나를 배열로 만듬

    // 2. 카운트를 세는 변수를 만들어서 처리

    // let deadBricks = bricks.filter(brick => brick.isAlive === false);
    // if(deadBricks.length === maxCount) {
    //     document.location.reload()
    //     alert("game clear")
    // }

    //2. 카운트를 세는 변수를 만들어서 처리
    // if(maxCount === falseCount) {
    //     document.location.reload()
    //     alert("game clear")
    // }

    asyncCall();
}


// function asyncTimeoutCheckClear(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         },2000);
//     });
// }

async function asyncTimeoutCheckClear(){
    if(maxCount === falseCount) {
        return new Promise(resolve => {
            setTimeout(() => {
                alert("gameclear")
            },2000);
        })
    }
}

async function asyncCall(){
    console.log('calling');
    const result = await asyncTimeoutCheckClear();
    console.log(result);
}




function isCollisionRectToRect(rectA, rectB) {
    // a의 왼쪽과 b의 오른쪽
    // a의 오른쪽과 b의 왼쪽
    // a의 아래쪽과 b의 위쪽
    // a의 위쪽과 b의 아래쪽
    if(rectA.left > rectB.right || 
        rectA.right < rectB.left ||
        rectA.top > rectB.bottom ||
        rectA.bottom < rectB.top )
    { // 이 4가지중 하나라도 만족하면 충돌 X
        return false; // 겹치지 않았다
    }

    return true; // 겹쳤다. 즉, 충돌했다.
}


// 그리기

function draw() {
    // 화면 클리어
    context.clearRect(0, 0, canvas.width, canvas.height); // 움직이고 이전 상태는 지운다. 아니면 잔상이 남음
    // 다른 도형 그리기
    drawRect();
    drawArc();
    drawBricks();
    // MovingBrick();
    obtBricks();
}

// 사각형 그리는 함수
function drawRect() {
    context.beginPath(); // 그리기 시작


    context.rect(barPosX, barPosY, barWidth, barHeight); // rect는 좌상단 기준으로 그리기
    context.fillStyle = 'red';
    context.fill();

    context.closePath(); // 그리기 종료

}

// 원 그리는 함수
// 공을 변환 값
function drawArc(){
    context.beginPath(); // 그리기 시작
    context.arc(arcPosX, arcPosY, arcRadius, 0, 2 * Math.PI)
    context.fillStyle = 'blue';
    context.fill();
    context.closePath(); // 그리기 종료
}

// 벽돌 생성 함수
function setBricks() {

    bricks = [];

    // brick[i][j]

    for (let i = 0; i < brickRow; i ++) {
        bricks[i] = [];
        for(let j = 0; j < brickCol; j ++) {
            // bricks[i][j] = {
            //     left: 55 + j * (brickWidth + 10), 
            //     right: 55 + j * (brickWidth + 10) + 50, 
            //     top: 30 + i * (brickHeight + 5), 
            //     bottom: 30 + i * (brickHeight + 5) + 25,
            //     column : i, row : j,
            //     isAlive:true
            // };

            bricks[i][j] = new Brick(55 + j * (brickWidth + 10),
                                    30 + i * (brickHeight + 5),
                                    55 + j * (brickWidth + 10)+ 50 ,
                                    30 + i * (brickHeight + 5) + 25, 
                                    'red');
        }
    }


}

function drawBricks(){
    context.beginPath(); // 그리기 시작
    // bricks.draw()
    for (let i = 0; i < brickRow; i ++) {
        for(let j = 0; j < brickCol; j ++) {
            //클래스 화 시킨걸 불러오기.함수()
            bricks[i][j].draw();
        }
    }
    context.closePath(); // 그리기 종료
}




// 지속적인 변화주기 setInterval. 함수이름, 시간, 
setBricks();
setInterval(update, 10);
setInterval(draw, 10);
