let grid,
  canvas,
  rows,
  columns,
  bomb,
  tails = [],
  game = false,
  globlaDificulty = 10,
  win;
/*
function preload() {
  roboto = loadFont('../style/Roboto-Black.ttf');
}
*/
function setup() {
  createCanvas(constrain(document.getElementById("canvas").offsetWidth, 100, 750), constrain(windowHeight, 100, 750)).parent(document.querySelector('#canvas'));
  document.querySelector('canvas').setAttribute('oncontextmenu', "return false;");
  start();
}

function draw() {
  noLoop()
  push()
  translate((width - (grid * columns)) / 2, (height - (grid * rows)) / 2);
  if (game) {
    background(25);
    let rest = 0;
    for (let j = 0; j < tails.length; j++) {
      for (let i = 0; i < tails[j].length; i++) {
        tails[j][i].show()
        if (!tails[j][i].visited && !tails[j][i].isBomb) {
          rest++
        }
      }
    }
    if (rest <= 0) {
      game = false;
      draw()
    }
  } else {
    background(50, 240)
    push()
    //textFont(roboto)
    translate(width / 2, height / 2)
    textAlign(CENTER);
    fill(250, 100, 100);
    textSize(32);
    if (win) {
      text('YOU WIN', 0, -16);
    } else {
      text('GAME OVER', 0, -16);
    }
    textSize(18);
    fill(250);
    text('CLICK SOMEWHERE', 2, 32);
    pop()
  }
  pop()
}

//-----------ACTION-FUNCTIO-----------

function start(dificulty) {
  if (dificulty !== Number) {
    dificulty = globlaDificulty;
  }
  grid = 25;
  rows = constrain(floor(height / grid), 0, 40);
  columns = constrain(floor(width / grid), 0, 40);
  tails = [];
  for (let j = 0; j < rows; j++) {
    tails.push([])
    for (let i = 0; i < columns; i++) {
      tails[j].push(new Tail(i, j, getBombs(dificulty)))
    }
  }
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < columns; i++) {
      tails[j][i].getBombsAround(i, j)
    }
  }
  win = true;
  game = true;
}

function getBombs(procent) {
  if (random(100) <= procent) {
    return true;
  }
  return false;
}

function mousePressed() {
  if (game) {
    this.pos = {
      x: floor(mouseX / grid),
      y: floor(mouseY / grid)
    }
    if (this.pos.x >= 0 && this.pos.x < columns && this.pos.y >= 0 && this.pos.y < rows) {
      if (mouseButton == RIGHT) {
        tails[this.pos.y][this.pos.x].clicked(false)
      }
      if (mouseButton == LEFT) {
        tails[this.pos.y][this.pos.x].clicked(true)
      }
    }
  } else {
    start()
  }
  draw()
}

//-----------HELP-FUNCTIONS-----------

function countBombs(e) {
  let bombNum = 0,
    num = 0;
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < columns; i++) {
      if (tails[j][i].isBomb) {
        bombNum++
      }
      num++
    }
  }
  if (e) {
    return (num - bombNum)
  }
  console.log(bombNum + ' / ' + num + ' => ' + (num - bombNum))
}

function iWannaSeekThemAll() {
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < columns; i++) {
      if (!tails[j][i].isBomb && !tails[j][i].visited) {
        tails[j][i].clicked(true)
      }
    }
  }
  draw()
}

function cl(e) {
  console.log(e)
}