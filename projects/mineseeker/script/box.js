function Tail(x, y, bomb) {
  this.pos = {
    x: x,
    y: y
  }
  this.isBomb = bomb;
  this.bombsAround = 0;
  this.visited = false;
  this.selected = false;

  this.draw = {
    x: this.pos.x * grid,
    y: this.pos.y * grid
  }

  this.show = function () {
    noStroke()
    if (!this.visited) {
      fill(175)
      rect(this.draw.x + grid / 5 / 2, this.draw.y + grid / 5 / 2, grid / 5 * 4, grid / 5 * 4)
      fill(125)
      if (this.selected) {
        fill(200, 100, 100)
      }
      rect(this.draw.x + grid / 5, this.draw.y + grid / 5, grid / 5 * 3, grid / 5 * 3)
      this.drawThoseShits()
    } else {
      if (this.isBomb) {
        fill(25)
        rect(this.draw.x, this.draw.y, grid, grid)
      } else {
        fill(250)
        rect(this.draw.x + 1, this.draw.y + 1, grid - 2, grid - 2)
        textSize(grid / 5 * 4);
        fill(50)
        textAlign(CENTER);
        text(this.bombsAround, this.draw.x + grid / 5 / 2, this.draw.y + grid / 5 / 5 * 4, grid, grid);
      }
    }
  }
  this.getBombsAround = function (x, y) {
    for (let ioff = -1; ioff <= 1; ioff++) {
      for (let joff = -1; joff <= 1; joff++) {
        let i = x + ioff;
        let j = y + joff;
        if (i > -1 && i < columns && j > -1 && j < rows) {
          if (tails[j][i].isBomb) {
            this.bombsAround++;
          }
        }
      }
    }
  }

  this.clicked = function (isLeft) {
    //cl(this.pos)
    if (!isLeft) {
      this.selected = !this.selected
    } else if (!this.visited && !this.selected) {
      this.visited = true;
      if (this.bombsAround == 0) {
        for (let ioff = -1; ioff <= 1; ioff++) {
          for (let joff = -1; joff <= 1; joff++) {
            let i = x + ioff;
            let j = y + joff;
            if (i > -1 && i < columns && j > -1 && j < rows) {
              tails[j][i].clicked(true)
            }
          }
        }
      }
      if (this.isBomb) {
        game = false;
        win = false;
        cl('GAME OVER')
      }
    }
  }




  this.drawThoseShits = function () {
    beginShape()
    fill(175)
    vertex(this.draw.x, this.draw.y + grid);
    vertex(this.draw.x + grid / 5, this.draw.y + grid / 5 * 4);
    vertex(this.draw.x + grid / 5, this.draw.y + grid / 5);
    vertex(this.draw.x + grid / 5 * 4, this.draw.y + grid / 5);
    vertex(this.draw.x + grid / 5 * 4, this.draw.y + grid / 5);
    vertex(this.draw.x + grid, this.draw.y);
    vertex(this.draw.x, this.draw.y);
    endShape()

    beginShape()
    fill(75)
    vertex(this.draw.x, this.draw.y + grid);
    vertex(this.draw.x + grid / 5, this.draw.y + grid / 5 * 4);
    vertex(this.draw.x + grid / 5 * 4, this.draw.y + grid / 5 * 4);
    vertex(this.draw.x + grid / 5 * 4, this.draw.y + grid / 5);
    vertex(this.draw.x + grid / 5 * 4, this.draw.y + grid / 5);
    vertex(this.draw.x + grid, this.draw.y);
    vertex(this.draw.x + grid, this.draw.y + grid);
    endShape()
  }
}