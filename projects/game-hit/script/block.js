function Block() {
  this.update = function () {
    this.left = this.pos.x - this.w / 2;
    this.right = this.pos.x + this.w / 2;
    this.top = this.pos.y - this.w / 2;
    this.bottom = this.pos.y + this.w / 2;
  }

  this.show = function () {
    noStroke();
    fill(250);
    rectMode(CENTER)
    rect(this.pos.x, this.pos.y, this.w, this.w);
  }
}

//možná připojím časem...