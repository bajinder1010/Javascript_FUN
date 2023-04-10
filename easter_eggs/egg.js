class Egg {
  constructor(x, y, width, height, color, factor, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.factor = factor;
    this.color = color;
    this.leftCircleCenter = 0;
    this.rightCircleCenter = 0;
    this.diagonalX = 0;
    this.diagonalY = 0;
    this.leftLineEnd = 0;
    this.rightLineEnd = 0;
    this.center = 0;
    this.radius = 0;
    this.width = width;
    this.height = height;
    this.found = false;
  }

  static increaseCount() {
    this.count += 1;
  }

  static getCount() {
    return this.count;
  }

  static getTotalCount() {
    return this.totalEggs;
  }

  clicked(mx, my) {
    //console.log("clicked");
    //console.log("radius", this.radius * this.factor);
    this.mx = mx;
    this.my = my;
    var a = this.center.x - this.mx;
    var b = this.center.y - this.my - 20;

    var d = Math.sqrt(a * a + b * b);
    //console.log(d);
    if (d < this.radius / 2 && !this.found) {
      console.log("Hello");
      this.color = this.getRandomColor();
      Egg.increaseCount();
      this.show(this.ctx);
      this.found = true;

      console.log(Egg.getCount());
    } else {
      //this.ctx.fillStyle = "#FFFFFF";
      //this.show(this.ctx);
    }
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  show(ctx) {
    this.center = new Vector(this.x, this.y);
    this.radius = this.factor;
    //this.size = this.radius * 2;

    this.leftCircleCenter = new Vector(
      this.center.x - this.radius / 2,
      this.center.y
    );

    this.rightCircleCenter = new Vector(
      this.center.x + this.radius / 2,
      this.center.y
    );

    this.diagonalX = this.radius * Math.cos((Math.PI / 4) * 7);
    this.diagonalY = this.radius * Math.sin((Math.PI / 4) * 7);
    this.leftLineEnd = new Vector(
      this.leftCircleCenter.x + this.diagonalX,
      this.leftCircleCenter.y + this.diagonalY
    );

    this.rightLineEnd = new Vector(
      this.rightCircleCenter.x - this.diagonalX,
      this.rightCircleCenter.y + this.diagonalY
    );

    var triangleTop = new Vector(
      this.center.x,
      this.center.y - this.radius / 2
    );
    //console.log(triangleTop);
    //console.log(this.center);
    var diagonalShortSideLength = this.leftLineEnd.dist(triangleTop);
    //console.log(diagonalShortSideLength);
    var topArcSize = diagonalShortSideLength * 2;

    // ctx.beginPath();
    // ctx.moveTo(0, this.height / 2);
    // //ctx.lineTo(this.x2 + 2, this.y2 - 10)
    // ctx.lineTo(this.width, this.center.y);
    // ctx.lineWidth = 1;
    // //ctx.arc(x1, y1, 50, 0, 2 * Math.PI);
    // ctx.strokeStyle = this.color;
    // ctx.stroke();
    // ctx.closePath();

    // ctx.beginPath();
    // ctx.moveTo(this.center.x, 0);
    // //ctx.lineTo(this.x2 + 2, this.y2 - 10)
    // ctx.lineTo(this.center.x, this.height);
    // ctx.lineWidth = 1;
    // //ctx.arc(x1, y1, 50, 0, 2 * Math.PI);
    // ctx.strokeStyle = Math.floor(Math.random() * 16777215).toString(16);
    // ctx.stroke();
    // ctx.closePath();

    // ctx.beginPath();
    // ctx.moveTo(this.center.x, this.center.y);
    // ctx.arc(this.center.x, this.center.y, this.radius / 2, 0, 2 * Math.PI);
    // ctx.strokeStyle = "rgba(100, 20, 30)";
    // ctx.stroke();
    // ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(triangleTop.x, triangleTop.y);
    ctx.arc(
      triangleTop.x,
      triangleTop.y,
      topArcSize / 2,
      (Math.PI / 4) * 5,
      (Math.PI / 4) * 7
    );
    //ctx.lineWidth = 2;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.leftCircleCenter.x, this.leftCircleCenter.y);
    //console.log(this.leftCircleCenter);
    ctx.arc(
      this.leftCircleCenter.x,
      this.leftCircleCenter.y,
      this.factor,
      (Math.PI / 4) * 6.99,
      Math.PI * 2
    );
    //ctx.lineWidth = 2;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y - 2, this.radius / 2, 0, Math.PI);
    ctx.lineWidth = 2;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(this.rightCircleCenter.x, this.rightCircleCenter.y);
    ctx.arc(
      this.rightCircleCenter.x,
      this.rightCircleCenter.y - 1,
      this.radius,
      Math.PI,
      (Math.PI / 4) * 5
    );
    //ctx.lineWidth = 2;
    //ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.clearRect(this.width - 100, 0, this.width - 100, 80);
    ctx.font = "bold 48px Arial";
    ctx.fillText(
      Egg.getCount() + "/" + Egg.getTotalCount(),
      this.width - 100,
      80
    );
    ctx.closePath();

    //drawcircle(this.x2, this.y2, ctx)
  }
}

Egg.count = 0;
