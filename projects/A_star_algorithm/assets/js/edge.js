class Edge {
  constructor(a, b) {
    this.pointA = a;
    this.pointB = b;
  }
  show = () => {
    strokeWeight(r / 5);
    line(this.pointA.x, this.pointA.y, this.pointB.x, this.pointB.y);
  };
}
