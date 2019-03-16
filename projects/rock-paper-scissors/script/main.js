let userScore_div = document.querySelector('#userScore');
let botScore_div = document.querySelector('#botScore');
let userScore = 0;
let botScore = 0;
let result = document.querySelector('.whatHappened');
let figures = document.querySelectorAll('.buttons-wrapper>figure');
let hra, randomNum;

function cl(parametr) {
    console.log(parametr);
};
for (let i = 0; i < figures.length; i++) {
    figures[i].onclick = function () {
        click(i)
    };
};

function convertorFromIToLetter(e) {
    if (e == 0) {
        return 'r';
    } else if (e == 1) {
        return 'p';
    } else if (e == 2) {
        return 's';
    };
};

function generateRandomNumber() {
    randomNum = Math.floor(Math.random() * 3);
    return convertorFromIToLetter(randomNum);
};

function chacker() {
    switch (hra) {
        case 'rs':
        case 'pr':
        case 'sp':
            win()
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose()
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw()
            break;
    }
};

function click(f) {
    hra = convertorFromIToLetter(f);
    hra += generateRandomNumber();
    chacker();
};

function win() {
    userScore++;
    userScore_div.innerText = userScore;
    result.innerText = 'You win, maaaaaan';
};

function lose() {
    botScore++;
    botScore_div.innerText = botScore;
    result.innerText = "It's not your lucky day, boy";
};

function draw() {
    result.innerText = "We're equal, brother";
};