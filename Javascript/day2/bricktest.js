// 도화지 
const canvas = document.getElementById('myCanvas');
canvas.style.backgroundColor = "lightgrey";
const ctx = canvas.getContext('2d');


let x = canvas.width/2;
let y = canvas.height-30;
// 모든걸 그린후 움직이게 보일려면 2 or -2 ()
let dx = 2;
let dy = -2;

// 공 움직이기
function draw(){
    // drawing
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    // 공이 움직이게 보이도록
    x += dx;
    y += dy;
}
// 갱신 10초에 한번 갱신
setInterval(draw, 10);



