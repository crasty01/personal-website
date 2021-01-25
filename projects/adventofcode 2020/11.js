let input_test_raw = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;
let dummy = `...
LLL
.LL`;

function Spot(a, y, x) {
  this.type = a;
  this.pos = {
    x: x,
    y: y,
  };
  this.nextType;

  this.change = function (input) {
    let occ = 0;
    changed = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        console.log(this.pos.x + j, this.pos.y + i);
        if (this.pos.x + j > 0 && this.pos.x + j < input.length && this.pos.y + i > 0 && this.pos.y + i < input.length) {
          console.log(input[this.pos.x + j][this.pos.y + i].type, i, j, !(i == 0 && j == 0));
          if (!(i == 0 && j == 0)) {
            if (input[this.pos.x + j][this.pos.y + i].type == '#') {
              occ++;
              console.log(this.type, this.pos.x, this.pos.y, this.pos.x + j, this.pos.y + i, occ);
            }
          }
        }
      }
    }
    if (occ > 3 && this.type === '#') {
      this.nextType = 'L';
      changed = 1;
    }
    if (occ == 0 && this.type === 'L') {
      this.nextType = '#';
      changed = 1;
    }
    //console.log(occ);
    return changed;
  };

  this.update = function () {
    if (this.nextType != undefined && this.nextType != '') {
      this.type = this.nextType;
    }
  };
}

/*





*/
function clean(input) {
  input = input.split('\n');
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split('');
  }
  return input;
}

function howManyOccupied(input_og) {
  let input = clean(input_og);
  console.log(input);
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      input[i][j] = new Spot(input[i][j], i, j);
    }
  }
  let changes = Infinity;
  while (changes != 0) {
    changes = 0;
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (input[i][j].type != '.') {
          console.log('---------------');
          changes += input[i][j].change(input);
        }
      }
    }
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (input[i][j].type != '.') {
          input[i][j].update();
        }
      }
    }
    for (let i = 0; i < input.length; i++) {
      let view = [];
      for (let j = 0; j < input.length; j++) {
        view[j] = input[i][j].type;
      }
      view = view.join();
      console.log(view);
    }
    console.log();
  }
  return count;
}

console.log(howManyOccupied(dummy));
