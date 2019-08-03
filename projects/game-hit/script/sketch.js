let maxScore;
checkCookie()
console.log('try cheat_for_Marria()')


let p,
  e = [],
  speed = 10,
  score = 0,
  level = 1,
  levelUp = 0,
  endGame = true,
  orange = [214, 104, 41],
  dark = [24, 32, 46],
  white = [245, 245, 245],
  skinL,
  cheats = false;

function preload() {
  font = loadFont('./style/blockFont.ttf');
  roboto = loadFont('./style/Roboto-Black.ttf');
  skinL = loadImage('./skin_l.jpg')
  skinS = loadImage('./skin_s.png')
}

function setup() {
  createCanvas(640, 640).parent("canvas");
  p = new Player();
  for (let i = 0; i <= 3; i++) {
    e.push(new Enemy(i));
    e[i].spawn();
  }
}

function draw() {
  background(dark);

  if (levelUp >= 10) {
    e.push(new Enemy(level + 3));
    e[e.length - 1].spawn();
    levelUp = 0;
    level++;
    console.log(level + ' => ' + e.length + ' nepřátel v aréně')
  }
  for (let i = 0; i < e.length; i++) {
    e[i].show();
    e[i].update();
    e[i].show();
    for (let j = 0; j < e.length; j++) {
      if (e[i].hits(e[j]) && e[i].e != e[j].e) {
        e[j].kill();
        e[i].kill();
      }
    }
  }

  if (endGame) {
    background(24, 32, 46, 150);
  }

  p.show();
  p.update();
  p.show();

  if (endGame) {
    if (score > maxScore) {
      maxScore = score;
      setCookie("score", maxScore, 100000);
    }

    push()
    textFont(roboto)
    translate(width / 2, height / 7 * 4)
    textSize(18);
    fill(white);
    textAlign(CENTER);
    text('CLICK SOMEWHERE', 2, 32);
    fill(orange);
    textSize(32);
    text('GAME OVER', 0, -16);
    textSize(128);
    textFont(font)
    text(score, 0, -150);
    fill(white);
    textSize(60);
    text(maxScore, 0, -100);
    pop()
  }

  if (!endGame) {

    e.forEach(enemy => {
      if (enemy.hits(p)) { //endGame
        console.log('you are dead');
        endGame = true;
      }
    });


    push()
    textFont(font)
    textSize(50);
    textWidth(900)
    fill(white);
    textAlign(LEFT);
    text('score: ' + score, 15, 40);
    text('level: ' + level, 15, height - 15);
    pop()
  }
}

function mouseClicked() { //reset
  if (endGame) {
    e = [];
    for (let i = 0; i <= 3; i++) {
      e.push(new Enemy(i));
      e[i].spawn();
    }
    endGame = !endGame;
    score = 0;
    level = 1;
    levelUp = 0;
    endGame = false;
  }
}