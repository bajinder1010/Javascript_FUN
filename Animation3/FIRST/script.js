function main() {
  const canvas = document.querySelector(".myCanvas");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);
  const ctx = canvas.getContext("2d");
  animate(ctx, width, height);
}

length = 90;
angle = Math.PI / 36;
let angleV = 0;
let angleA = 0.001;
let gravity = 0.001;

function drawBauble(x1, y1, ctx, width, height) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  let force = gravity * Math.sin(angle);
  angleA = (-1 * force) / length;
  angleV += angleA;
  angle += angleV;

  x2 = length * Math.sin(angle) + x1;
  y2 = length * Math.cos(angle) + y1;
  //x2 = x1;
  //y2 = length;
  ctx.lineTo(x2 + 2, y2 - 10);
  ctx.lineWidth = 2.5;
  //ctx.arc(x1, y1, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = "rgba(240, 108, 0)";
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(x2 + 2, y2, 10, 0, 2 * Math.PI);
  ctx.strokeStyle = "rgba(100, 20, 30)";
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "rgba(100, 10, 15)";
  ctx.fillRect(x2 - 10, y2 + 10, 25, 20);
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(x2, y2 + 60, 40, 0, 2 * Math.PI);
  ctx.lineWidth = 30;
  ctx.fillStyle = "rgba(239, 81, 105)";
  ctx.fill();
  ctx.closePath();
  drawcircle(x2, y2, ctx);
  //drawCharacter(x2, y2, ctx, "R");

  // And if we intend to start new things after
  // this, and this is part of an outline,
  // we probably also want a ctx.closePath()
}

function drawcircle(x2, y2, ctx) {
  ctx.beginPath();
  ctx.arc(x2, y2 + 60, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "rgba(100, 20, 30)";
  ctx.fill();
  ctx.closePath();
}

function drawCharacter(x2, y2, ctx, chr) {
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.font = "bold 48px Arial";
  ctx.fillText(chr, x2 - 20, length + 80);
  ctx.closePath();
}

function animate(ctx, width, height) {
  drawBauble(0, 0, ctx, width, height);
  drawBauble(100, 0, ctx, width, height);
  drawBauble(200, 0, ctx, width, height);
  drawBauble(300, 0, ctx, width, height);
  drawBauble(400, 0, ctx, width, height);
  drawBauble(500, 0, ctx, width, height);
  drawBauble(600, 0, ctx, width, height);
  drawBauble(700, 0, ctx, width, height);
  drawBauble(800, 0, ctx, width, height);
  drawBauble(900, 0, ctx, width, height);
  drawBauble(1000, 0, ctx, width, height);
  drawBauble(1100, 0, ctx, width, height);
  drawBauble(1200, 0, ctx, width, height);
  //drawBauble(150, 0, angle);

  requestAnimationFrame(function () {
    //angle += 0.01;
    ctx.clearRect(0, 0, width, height);
    animate(ctx, width, height);
  });
}

window.onload = main;
