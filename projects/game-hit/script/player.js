function Player() {
  this.w = 20;
  this.pos = createVector(mouseX, mouseY);
  this.pozice = [];
  this.pocetIteraci = 0;
  let tmp;
  for (let i = 0; i < 10; i++) {
    tmp = this.pos.copy()
    this.pozice.push(tmp)
  }

  this.update = function () {
    var vel = createVector(mouseX, mouseY);
    vel.sub(this.pos);
    this.pos.add(vel);

    if (this.pocetIteraci == 2) {
      this.pozice.shift();
      tmp = this.pos.copy()
      this.pozice.push(tmp)
      this.pocetIteraci = 0;
    }
    this.pocetIteraci++;

    this.pos.x = constrain(this.pos.x, this.w / 2, width - this.w / 2)
    this.pos.y = constrain(this.pos.y, this.w / 2, height - this.w / 2)

    this.left = this.pos.x - this.w / 2;
    this.right = this.pos.x + this.w / 2;
    this.top = this.pos.y - this.w / 2;
    this.bottom = this.pos.y + this.w / 2;

  }

  this.show = function () {

    for (let i = 0; i < this.pozice.length; i++) {
      fill(245, 245, 245, 250 / 9 * i - 25);
      rectMode(CENTER);
      rect(this.pozice[i].x, this.pozice[i].y, this.w * i / 10, this.w * i / 10);

    }

    noStroke();
    fill(white);
    rectMode(CENTER)
    rect(this.pos.x, this.pos.y, this.w, this.w);

  }
}