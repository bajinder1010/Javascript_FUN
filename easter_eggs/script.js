function main() {
  const canvas = document.querySelector(".myCanvas");
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);
  let totalEggs = 0;
  const ctx = canvas.getContext("2d");
  for (let i = 10; i <= width; i += 150) {
    objs[i] = new Egg(
      i,
      height / 2,
      width,
      height,
      "#FFFFFF",
      Math.random() * 100 + 40,
      ctx
    );
    totalEggs += 1;
  }
  Egg.totalEggs = totalEggs;
  animate(ctx, width, height);
  console.log(totalEggs);
}
for (let i = 10; i <= window.innerWidth; i += 150) {
  var objs = new Array();
}

document.addEventListener("mouseup", onMouseUp);

function onMouseUp(event) {
  for (let i = 10; i <= window.innerWidth; i += 150) {
    //console.log("MouseUp");
    objs[i].clicked(event.clientX, event.clientY);
  }

  //document.removeEventListener("mousemove", onMouseMove);
  //document.removeEventListener("mouseup", onMouseUp);
}

function onMouseMove(event) {
  for (let i = 10; i <= window.innerWidth; i += 150) {
    //objs[i].clicked(event.clientX, event.clientY);
  }
}

function onMouseDown(event) {
  //document.body.addEventListener("mouseup", onMouseUp);
  //document.body.addEventListener("mousemove", onMouseMove);
  // move the ball on mousemove
}

function animate(ctx, width, height) {
  for (let i = 10; i <= width; i += 150) {
    objs[i].show(ctx);
  }

  //drawBauble(150, 0, angle);
}

window.onload = main;
