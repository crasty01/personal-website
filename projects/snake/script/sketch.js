let s, font;
let grid = 16,
  speedX = 0,
  addBerry = 0,
  berries = [],
  speedY = 0,
  lineGrid = false;

function preload() {
  font = loadFont('./style/blockFont.ttf')
}

function setup() {
  createCanvas(640, 640).parent("canvas");
  s = new Snake;
  frameRate(12)
}

function draw() {
  background(24, 32, 46);
  if (lineGrid) {
    drawgrid()
  }
  s.show();
  s.update();
  if (addBerry % 7 == 0 || (berries.length / 7) < (s.tail.length / 7) && berries.length < 10) {
    berries.push(new Berry);
    berries[berries.length - 1].create()
    addBerry++
  }
  berries.forEach(berry => {
    berry.show()
  });

  textSize(64);
  textFont(font)
  fill(213, 231, 231)
  text(s.tail.length, 10, 42);
}

function drawgrid() {
  stroke(2213, 231, 231, 25)
  for (let i = 0; i < width; i += grid) {
    line(i, height, i, 0)
  }
  for (let i = 0; i < height; i += grid) {
    line(width, i, 0, i)
  }
}

function keyPressed(e) {
  if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
  if (keyCode === UP_ARROW || keyCode == 87) {
    speedX = 0;
    speedY = -1;
  }
  if (keyCode === DOWN_ARROW || keyCode == 83) {
    speedX = 0;
    speedY = 1;
  }
  if (keyCode === LEFT_ARROW || keyCode == 65) {
    speedX = -1;
    speedY = 0;
  }
  if (keyCode === RIGHT_ARROW || keyCode == 68) {
    speedX = 1;
    speedY = 0;
  }
}