var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');
var ball = {
  pos: {x: 500,y: 300},
  speed: 5,
};
var FPS = 30;
window.onload = function() {
setInterval(function() {
  gameBack();
}, 1000/FPS);
}
// background code
function gameBack() {
drawRect(0,0,canvas.width,canvas.height, 'white');
colorCircle(ball.pos.x,ball.pos.y,40, 'blue');
}
// Rectangle Code
function drawRect(leftX,topY,width,height, drawColor) {
ctx.fillStyle = drawColor;
ctx.fillRect(leftX,topY,width,height);
}
//Circle Code
function colorCircle(centerX,centerY,radius, drawColor) {
ctx.fillStyle = drawColor;
ctx.beginPath();
ctx.arc(centerX,centerY,radius,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();
}
//Game Controls
document.addEventListener('keydown', event => {
  if (event.keyCode === 65) { //Left
    xBall(-5);
  } else if (event.keyCode === 68) { //Right
    xBall(5);
  } else if (event.keyCode === 87) { //Up
    yBall(-5);
  } else if (event.keyCode === 83) { //Down
    yBall(5);
  }
});
function yBall(offset) {
ball.pos.y += offset;
}
function xBall(offset) {
ball.pos.x += offset;
}