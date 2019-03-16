let bodA, bodB, bodC;
let a, b, c;
let alfa, beta, gama;
let cx, cy;
let size = 8;
let canvas = document.getElementById('canvas');
let errorMessage = document.getElementById('error');
let inputs = document.getElementsByTagName('input');
var ctx = canvas.getContext('2d');
let pulSirky, pulVysky;


for (let i = 0; i < inputs.length; i++) {
    inputs[i].oninput = setup;
};
function setup() {
    a = Number(document.getElementById('numA').value);
    b = Number(document.getElementById('numB').value);
    c = Number(document.getElementById('numC').value);
    doesItWork();
};
function doesItWork() {
    if (a + b > c && b + c > a && c + a > b) {
        console.log('existuje');
        error.className = 'disabled';
        whatWillIDraw();
    } else {
        console.log('neexistuje');
        error.className = '';
        whiteCanvas();
    };
};
function whatWillIDraw() {
    alfa = Math.acos((a ** 2 - b ** 2 - c ** 2) / ((-2) * b * c));
    beta = Math.acos((b ** 2 - a ** 2 - c ** 2) / ((-2) * a * c));
    cy = Math.abs(Math.sin(beta) * a);
    cx = (b ** 2 - cy ** 2) ** (1 / 2) * (-1);
    bodA = [0, 0];
    bodB = [c, 0];
    if (alfa > Math.PI / 2) {
        bodC = [cx, -cy];

    } else {
        bodC = [-cx, -cy];
    }
    draw();
};
function draw() {
    whiteCanvas();
    ctx.fillStyle = '#1e1e25';
    najdiStred();
    ctx.beginPath();
    ctx.moveTo(250 - pulSirky * size, 250 + pulVysky * size);
    ctx.lineTo(250 - pulSirky * size + size * bodB[0], 250 + pulVysky * size + size * bodB[1]);
    ctx.lineTo(250 - pulSirky * size + size * bodC[0], 250 + pulVysky * size + size * bodC[1]);
    ctx.fill();
};
function najdiStred() {
    if (alfa > Math.PI / 2) {
        pulSirky = (bodC[0] + bodB[0]) / 2;
    } else if (beta > Math.PI / 2) {
        pulSirky = (bodA[0] + bodC[0]) / 2;
    } else {
        pulSirky = (bodA[0] + bodB[0]) / 2;
    };
    pulVysky = (bodC[1] + bodA[1]) / -2;
    //console.log(pulSirky, pulVysky);
}
function whiteCanvas() {
    ctx.fillStyle = "whitesmoke";
    ctx.fillRect(0, 0, 500, 500);
};
function getBigger() {
    size = size * 2;
    setup();
};
function getSmaller() {
    size = size / 2;
    setup();
};