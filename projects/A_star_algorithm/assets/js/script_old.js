let input = `***A******
******B***
**C*D*****
E*******F*
*****G****
*******H**
*I*J******
*****K****
***L***M**
******N***`;

let connections = ['AC', 'AB', 'BD', 'BH', 'BF', 'CE', 'CI', 'CL', 'DI', 'DG', 'EJ', 'FG', 'FH', 'GL', 'GM', 'HK', 'JK', 'KN', 'LN', 'MN'];

console.log(input);

class Cell {
  constructor(name, x, y) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.f = 0;
    this.g = Infinity;
    this.h = 0;

    this.evaluateG = (current) => current.g + Math.sqrt(Math.pow(this.x - current.x, 2) + Math.pow(this.y - current.y, 2));

    this.evaluateH = (end) => {
      this.h = Math.sqrt(Math.pow(this.x - end.x, 2) + Math.pow(this.y - end.y, 2));
    };
  }
}

const getPoints = (input) => {
  input = input.split('\n');
  let points = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] != '*') {
        points.push(new Cell(input[i][j], j, i));
      }
    }
  }
  points.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  return points;
};

const getAllConns = (conns) => {
  let limit = conns.length;
  for (let i = 0; i < limit; i++) {
    conns.push(conns[i][1] + conns[i][0]);
  }
  conns.sort();
  return conns;
};

const backtrack = (c) => {
  let path = [c.name];
  while (c.parent) {
    path = [c.parent.name].concat(path);
    c = c.parent;
  }
  return path;
};

const AStar = (input, conns) => {
  let points = getPoints(input);
  conns = getAllConns(conns);
  points.forEach((point) => {
    point.conns = conns.filter((e) => e[0] == point.name).map((e) => points.filter((p) => p.name == e[1])[0]);
  });

  console.log(points[0]);

  let start = points[0];
  start.g = 0;
  let end = points[points.length - 1];
  let openSet = [start];

  while (openSet.length > 0) {
    let winner = 0;
    for (let i = 0; i < openSet.length; i++) {
      winner = openSet[i].f < openSet[winner].f ? i : winner;
    }
    let current = openSet[winner];
    if (current == end) {
      return backtrack(current);
    }

    openSet.splice(openSet.indexOf(current), 1);

    current.conns.forEach((neighbor) => {
      tempG = neighbor.evaluateG(current);
      if (tempG < neighbor.g) {
        neighbor.parent = current;
        neighbor.g = tempG;
        neighbor.evaluateH(end);
        neighbor.f = neighbor.g + neighbor.h;
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    });
  }
  return false;
};

console.log(AStar(input, connections));
