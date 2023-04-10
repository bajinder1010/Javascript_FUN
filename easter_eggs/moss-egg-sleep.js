var center;
var radius;
var size;
var leftCircleCenter;
var rightCircleCenter;
var diagonalX;
var diagonalY;
var leftLineEnd;
var rightLineEnd;
var initial = true;
var instruction = document.querySelector(".post-meta");

var steps = [
  function () {
    // noop
  },
  function () {
    // draw x-axis
    //line(0, center.y, width, center.y);
  },
  function () {
    // draw y-axis
    //line(center.x, 0, center.x, height);
  },
  function () {
    // draw circle in the center
    //ellipse(center.x, center.y, radius, radius);
  },
  function () {
    // draw left circle
    leftCircleCenter = createVector(center.y - radius / 2, center.x);
    //ellipse(leftCircleCenter.y, leftCircleCenter.x, size, size);
  },
  function () {
    // draw right circle
    rightCircleCenter = createVector(center.y + radius / 2, center.x);
    //ellipse(rightCircleCenter.y, rightCircleCenter.x, size, size);
  },
  function () {
    // draw left diagonal
    diagonalX = radius * cos(QUARTER_PI * 7);
    diagonalY = radius * sin(QUARTER_PI * 7);
    leftLineEnd = createVector(
      leftCircleCenter.x + diagonalX,
      leftCircleCenter.y + diagonalY
    );
    //line(leftCircleCenter.y, leftCircleCenter.x, leftLineEnd.y, leftLineEnd.x);
  },
  function () {
    // draw right diagonal
    rightLineEnd = createVector(
      rightCircleCenter.x - diagonalX,
      rightCircleCenter.y + diagonalY
    );
    //line(
    //rightCircleCenter.y,
    //rightCircleCenter.x,
    //rightLineEnd.y,
    //rightLineEnd.x
    //);
  },
  function () {
    // draw top part of the egg
    stroke("#F2DAAC");
    strokeWeight(2);
    fill("#F2DAAC");

    push();
    var triangleTop = createVector(center.y, center.x - radius / 2);
    var diagonalShortSideLength = leftLineEnd.dist(triangleTop);
    var topArcSize = diagonalShortSideLength * 2;
    translate(triangleTop.y, triangleTop.x);
    arc(0, 0, topArcSize, topArcSize, QUARTER_PI * 3, QUARTER_PI * 5);
    arc(0, 0, topArcSize, QUARTER_PI * 3, QUARTER_PI * 5);
    pop();
    push();
    translate(rightCircleCenter.y, rightCircleCenter.x);
    arc(0, 0, radius * 2, radius * 2, QUARTER_PI * 5, QUARTER_PI * 6);
    pop();
    arc(center.x, center.y, radius, radius, QUARTER_PI * 6, QUARTER_PI * 2);
    push();
    translate(leftCircleCenter.y, leftCircleCenter.x);
    //line(0, leftCircleCenter.x, 100, leftCircleCenter.y);
    arc(0, 0, radius * 2, radius * 2, QUARTER_PI * 2, QUARTER_PI * 3);
    pop();
  },
  function () {
    // draw right side of the egg
  },
  function () {
    // draw bottom of the egg
  },
  function () {
    // draw left side of the egg
  },
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  stroke("#F2DAAC");
  strokeWeight(1);
  noFill();

  center = createVector(width / 4, height / 4);
  radius = height / 7.2;
  size = radius * 5;

  var stepsToDraw = 0;
  if (initial) {
    stepsToDraw = steps.length;
  } else {
    var regionWidth = width / steps.length;
    var cursor = mouseX ? mouseX : touchX;
    for (var i = 1; i <= steps.length; i++) {
      var region = regionWidth * i;
      if (cursor >= region - regionWidth && cursor <= region) {
        stepsToDraw = i;
      }
    }
  }
  for (var i = 0; i < stepsToDraw; i++) {
    steps[i]();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
  initial = false;
  instruction.classList.add("hide");
}

function touchMoved() {
  initial = false;
  instruction.classList.add("hide");
}
