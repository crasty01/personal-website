const getAllConns = (edges) => {
  let conns = [];
  for (let i = 0; i < edges.length; i++) {
    conns.push([edges[i].pointA.name, edges[i].pointB.name]);
    conns.push([edges[i].pointB.name, edges[i].pointA.name]);
  } /*
  for (let i = 0; i < edges.length; i++) {
    conns.push(conns[i][1] + conns[i][0]);
  }*/
  conns.sort();
  conns = [...new Set(conns)];
  return conns;
};

const backtrack = (c) => {
  let path = [c];
  while (c.parent) {
    path = [c.parent].concat(path);
    c = c.parent;
  }
  return path;
};

const AStar = (points, edges) => {
  let conns = getAllConns(edges);
  //console.log(edges);
  //console.log(conns);
  points.forEach((point) => {
    point.conns = conns.filter((e) => e[0] == point.name).map((e) => points.filter((p) => p.name == e[1])[0]);
  });

  //console.log(points[0]);

  let start = points[0];
  start.g = 0;
  let end = points[points.length - 1];
  let openSet = [start];

  //console.log(start, end, openSet);

  while (openSet.length > 0) {
    let winner = 0;
    for (let i = 0; i < openSet.length; i++) {
      winner = openSet[i].f < openSet[winner].f ? i : winner;
    }
    let current = openSet[winner];
    if (current == end) {
      let b = backtrack(current);
      //console.log('end: ');
      //console.log(b);
      return b;
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
  //console.log(false);
  return false;
};

////console.log(AStar(input, connections));
