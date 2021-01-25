let points = [];
let state = 0;
let previous_point;
let r = 10;
let edges = [];

function mouseReleased() {
  let isInBounds = mouseX > 0 && mouseX < height && mouseY > 0 && mouseY < height;
  switch (state) {
    case 0:
      if (isInBounds) {
        points.push(new Point(generateName(), mouseX, mouseY));
        console.log(points);
      } else {
        console.log('out of canvas');
      }
      break;

    case 1:
      if (isInBounds) {
        let current_point;
        points.forEach((point) => {
          if (Math.sqrt(Math.pow(mouseX - point.x, 2) + Math.pow(mouseY - point.y, 2)) < r) {
            current_point = point;
          }
        });
        if (current_point != undefined) {
          if (previous_point != undefined && previous_point != current_point) {
            edges.push(new Edge(previous_point, current_point));
            previous_point = undefined;
          } else {
            previous_point = current_point;
          }
        }
        console.log(edges);
      } else {
        console.log('out of canvas');
      }
      break;

    case 2:
      AStar(points, edges);
      break;
  }
}

function setup() {
  let parent = { element: document.getElementById('canvas_parent') };
  parent.width = parent.element.clientWidth;
  parent.height = parent.element.clientHeight;
  //console.log(parent);
  console.log('p5.js ready');
  createCanvas(parent.width, parent.height).parent('canvas_parent');
  stroke(255);
  document.getElementById('vertices').addEventListener('click', (e) => {
    state = 0;
  });
  document.getElementById('edges').addEventListener('click', (e) => {
    state = 1;
  });
  document.getElementById('calculate').addEventListener('click', (e) => {
    state = 2;
  });
}

function draw() {
  clear();

  points.forEach((point) => {
    point.show();
  });
  edges.forEach((edge) => {
    edge.show();
  });
}
