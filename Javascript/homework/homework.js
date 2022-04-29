const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.style.backgroundColor ="lightgrey";

// 바닥타일
const tileWidth = 50;
const tileHeight = 50;
var tileRow = 12;
var tileCol = 12;
var tile= [];





// 플레이어 arc 
var arcWidth = 50;
var arcRadius = 25;

var arc = {
    left:0, top : 0, right : 50, bottom : 50
}

//충돌, 그릴때 쓴다.
var gate = {
    left:500, right:550, top:500, bottom:550
}

var monster = {
    left: 250, right: 250, top :300, bottom: 300
}




// 타일 클래스화
class Tile {
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
            ctx.rect(this.left, this.top, tileWidth, tileHeight);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
}

// 정보를 담아놓을 플레이어 클래스를 만들고.
// 골드, hp,를 만들기 
// 값을 저장핮.
class Score{
    constructor(hp, point) {
        this.hp = hp;
        this.point = point;
    }
    victoryScore() {
        // return this.point = Math.floor(Math.random())
        // const randomPoint = Math.floor(Math.random()*100)
        const min =0; 
        const max= 100; 
        let randomNumber = Math.floor(Math.random() * (max-min) + min);
        console.log(randomNumber)
        // 증감 연산자.
        return  this.point += randomNumber;
    }

    loseScore(){
        return --this.hp;
    }
}

var start = new Score ( 5 , 0);

// false 처음에는  컨트롤 버튼을 누르지 않기 때문이다. 키 누름 신호 리스너
// keydown이라는 이벤트가 발생하면 함수를 호출한다
document.addEventListener('keydown', keyDownHandler , false); 


// 키보드 이벤트
function keyDownHandler(e) { // 무슨키를 눌렀는지 알기 위해 매개변수 e 대입
    if (e.key === 'ArrowRight') {
        if(arc.left + arcWidth < canvas.width) {
            arc.left += arcWidth
            arc.right += arcWidth
        }
    }
    else if (e.key === 'ArrowLeft') {
        if(arc.left> 0 ) {
            arc.left -= arcWidth
            arc.right -= arcWidth

        }
    }
    else if (e.key === 'ArrowUp') {
        if(arc.top > 0) {
            arc.top -= arcWidth
            arc.bottom -= arcWidth

        }
    }
    else if (e.key === 'ArrowDown') {
        if(arc.bottom  < canvas.height) {
            arc.top += arcWidth
            arc.bottom += arcWidth

        }
    }

    if (arc.top == gate.top && arc.left == gate.left){
        alert('game clear')
    }   
    if (!flag) flag = true

}



// 변경사항
// 0,0,0,0 체크
let flag = true;
function update () {
    if(arc.top == monster.top && arc.left == monster.left){
        flag = false;
        game();
    }

}

// 그리기
function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    setTile()
    drawArc();
    drawGate();
    drawMonster();
    // scoreData();
}

// 첫번째 바닥 타일
function setTile() {
    tile = [];
    for (let i =0 ; i < tileRow; i++){
        tile[i] = [];
        for(let j =0; j < tileCol; j++){
            let color;
            if (i%2 == 0) {
                if (j%2 ==0) color = 'green'
                else color = 'yellow'
            }
            else {
                if (j%2==0) color = 'yellow'
                else color = 'green'
            }
            ctx.beginPath()

            tile[i][j] = new Tile (
                j * (tileWidth),
                i * (tileWidth),
                j * (tileHeight) + 50,
                i * (tileHeight) + 50,
                color
                // (i%2 == 0) ? (j%2==0) ? 'green' : "yellow" : (j%2 == 0) ? 'yellow' : 'green'
            );
            tile[i][j].draw()
            ctx.closePath()
        }
    }
}


// 플레이어 공 그리기
function drawArc() {
    ctx.beginPath()
    ctx.arc(arc.left+25, arc.top + 25, arcRadius,0, Math.PI*2)
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.closePath();
    // ctx.score();
}


// 탈출구 그리기
function drawGate() {
    ctx.beginPath()
    //매칭이 안된다. 그릴때 같은 값을 쓴다.
    ctx.rect(gate.left, gate.top , tileWidth, tileHeight);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

// 몬스터 그리기
function drawMonster() {
    ctx.beginPath();
    ctx.rect(monster.left ,monster.top , tileWidth,tileHeight);
    // ctx.fillStyle = "navy";
    // ctx.fill();
    ctx.closePath();
    // console.log("monster")
}


//충돌 
function isCollisionRectToRect(rectA, rectB) {
    if(rectA.left > rectB.right || 
        rectA.right < rectB.left  ||
        rectA.top > rectB.bottom ||
        rectA.bottom < rectB.top  )
    { // 이 4가지중 하나라도 만족하면 충돌 X
        return false; // 겹치지 않았다
    }
    return true; // 겹쳤다. 즉, 충돌했다.
}


function game () {
        let inputNum = prompt("가위(0) 바위(1) 보(2)");
        let correctGame = Math.floor((Math.random()*3));        
        console.log(correctGame);
        
        let sHp =  document.getElementById("htmlHp");
        let reward = document.getElementById("htmlScore");


        if(inputNum > correctGame){
            start.victoryScore();
            alert("이겼다.");
            reward.innerHTML = "score : " + start.point ;
        } else if(inputNum == correctGame){
            alert("비겼다.")
        } else if(inputNum < correctGame) {
            start.loseScore();
            console.log(sHp);
            alert("졌다.");
            sHp.innerHTML = "hp : " + start.hp;
        }
}

setTile();
setInterval(() => {
    if (flag) {
        update()
        draw()
        
    }
}, 10);

// 가위바위보 완성
// 몬스터 위치 랜덤
// 보상 이랑
// 전투시 hp 시스템