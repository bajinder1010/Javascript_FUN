class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setAngle(angle) {
    var length = this.getLength();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  getAngle() {
    return Math.atan2(this.y, this.x);
  }

  setLength(length) {
    var angle = this.getAngle();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  getLength() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  add(v2) {
    return this.x + v2.x, this.y + v2.y;
  }

  subtract(v2) {
    return this.x - v2.x, this.y - v2.y;
  }

  multiply(val) {
    return this.x * val, this.y * val;
  }

  divide(val) {
    return this.x / val, this.y / val;
  }

  dist(v2) {
    var a = this.x - v2.x;
    var b = this.y - v2.y;

    return Math.sqrt(a * a + b * b);
  }
}
