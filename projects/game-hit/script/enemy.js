function Enemy(e) {
  this.e = e;
  this.spawn = function () {
    this.w = random(15, 45);
    this.margin = 3 * this.w;

    this.region = floor(random(4))

    if (this.region == 0 || this.region == 2) {
      this.spawnX = random(-this.margin, 0);
      this.spawnY = random(0, height);
      if (this.region == 2) {
        this.spawnX = random(width, width + this.margin);
      }
    } else {
      this.spawnX = random(0, width);
      this.spawnY = random(-this.margin, 0);
      if (this.region == 3) {
        this.spawnX = random(height, height + this.margin);
      }
    }

    this.pos = createVector(this.spawnX, this.spawnY);
  }


  this.update = function () {
    if (endGame == false) {
      var vel = createVector(p.pos.x, p.pos.y);
      vel.sub(this.pos);
      vel.limit(5 * speed / (this.w + 5));
      this.pos.add(vel);
    }

    this.left = this.pos.x - (this.w + 6) / 2;
    this.right = this.pos.x + (this.w + 6) / 2;
    this.top = this.pos.y - (this.w + 6) / 2;
    this.bottom = this.pos.y + (this.w + 6) / 2;
  }

  this.show = function () {
    if (cheats) {
      imageMode(CENTER)
      if (this.w > 35) {
        image(skinL, this.pos.x, this.pos.y, this.w + 5, this.w + 5)
      } else {
        image(skinS, this.pos.x, this.pos.y, this.w + 5, this.w + 5)
      }
    } else {
      noStroke();
      fill(orange);
      rectMode(CENTER);
      rect(this.pos.x, this.pos.y, this.w + 5, this.w + 5);
    }
  }

  this.hits = function (anotherObject) {
    return (this.left <= anotherObject.right &&
      this.right >= anotherObject.left &&
      this.top <= anotherObject.bottom &&
      this.bottom >= anotherObject.top)
  }

  this.kill = function () {
    for (let i = 0; i < 2; i++) {
      noStroke();
      fill(125, 100, 255);
      fill(214, 104, 41);
      rectMode(CENTER)
      rect(this.pos.x, this.pos.y, this.w * 1.5, this.w);
      rect(this.pos.x, this.pos.y, this.w, this.w * 1.5);
    }

    if (0 < this.pos.x < width && 0 < this.pos.y < height) {
      //.log("kill");
      score++;
      levelUp++;
    }

    this.spawn();
  }
}