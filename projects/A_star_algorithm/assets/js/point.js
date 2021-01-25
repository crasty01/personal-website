class Point {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.f = 0;
    this.g = Infinity;
    this.h = 0;
  }
  show = () => {
    strokeWeight(r);
    point(this.x, this.y);
  };
  evaluateG = (current) => current.g + Math.sqrt(Math.pow(this.x - current.x, 2) + Math.pow(this.y - current.y, 2));
  evaluateH = (end) => {
    this.h = Math.sqrt(Math.pow(this.x - end.x, 2) + Math.pow(this.y - end.y, 2));
  };
}
