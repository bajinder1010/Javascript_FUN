function main() {
  const canvas = document.querySelector(".myCanvas");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);
  const ctx = canvas.getContext("2d");
  for (let i = 10; i <= width; i += 150) {
    objs[i] = new Pendulum(i, 0, Math.floor(Math.random() * 100) + 50);
  }

  document.body.addEventListener("mousedown", onMouseDown);

  function onMouseUp(event) {
    for (let i = 10; i <= width; i += 150) {
      objs[i].stopDragging();
    }

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  function onMouseMove(event) {
    for (let i = 10; i <= width; i += 150) {
      objs[i].clicked(event.clientX, event.clientY);
    }
  }

  function onMouseDown(event) {
    document.body.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    // move the ball on mousemove
  }

  animate(ctx, width, height);
}
for (let i = 10; i <= window.innerWidth; i += 150) {
  var objs = new Array();
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
  for (let i = 10; i <= width; i += 150) {
    objs[i].update();
    objs[i].drag();
    objs[i].show(ctx);
  }

  //drawBauble(150, 0, angle);

  requestAnimationFrame(function () {
    //angle += 0.01;
    ctx.clearRect(0, 0, width, height);
    animate(ctx, width, height);
  });
}

window.onload = main;
