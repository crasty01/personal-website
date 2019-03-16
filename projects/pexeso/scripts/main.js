let karty = document.querySelectorAll('.karta');
let blank = document.querySelectorAll('.karta[data-card="blank"]');
let scoreFirst_output = document.querySelector('#scoreFirst');
let scoreSecond_output = document.querySelector('#scoreSecond');
let result_div = document.querySelector('.konecHry');
let resetButton = document.querySelector('#reset_btn');
let numOfReptes = 10;
let random, activeCards, result, kartyOut;
let scoreFirst = 0;
let scoreSecond = 0;
let turnOfFirst = true;
resetButton.onclick = reset;
//-------RANDOM OBRÁZKY-------//
document.addEventListener('DOMContentLoaded', setRandomCards);
function setRandomCards() {
    for (blank; blank.length > 0; blank) {
        let i = 0;
        for (i; i < 2; i++) {
            blank = document.querySelectorAll('.karta[data-card="blank"]');
            random = Math.floor(Math.random() * blank.length);
            blank[random].dataset.card = /*list[numOfReptes];*/ numOfReptes;
            blank[random].firstElementChild.firstElementChild.src = 'https://picsum.photos/200?image=' + numOfReptes;
        }
        blank = document.querySelectorAll('.karta[data-card="blank"]');
        numOfReptes++;
    };
};
//-----------CLICK-----------//
for (let i = 0; i < karty.length; i++) {
    karty[i].onclick = function () {
        clicked(i)
    }
    karty[i].lastElementChild.lastElementChild.src = './backface.jpg';
};

function clicked(e) {
    karty[e].classList.add('active');
    activeCards = document.querySelectorAll('.karta.active');
    if (activeCards.length == 2) {
        konec()
    };
};
//----------2ND CLICK---------//
function konec() {
    for (let i = 0; i < karty.length; i++) {
        karty[i].onclick = null
    }
    activeCards = document.querySelectorAll('.karta.active');
    if (activeCards[0].dataset.card == activeCards[1].dataset.card) {
        if (turnOfFirst == true) {
            setTimeout(function () {
                scoreFirst_output.innerText = ++scoreFirst
            }, 750);
        } else {
            setTimeout(function () {
                scoreSecond_output.innerText = ++scoreSecond
            }, 750);
        }
        setTimeout(function () {
            turnEnd(true)
        }, 1250);
    } else {
        turnOfFirst = !turnOfFirst;
        setTimeout(function () {
            turnEnd(false)
        }, 1250);
    }
};
//--------END OF TURN--------//
function turnEnd(win) {
    for (let i = 0; i < karty.length; i++) {
        karty[i].classList.remove('active');
        karty[i].onclick = function () {
            clicked(i)
        }
    };
    if (win == true) {
        for (let t = 0; t < activeCards.length; t++) {
            activeCards[t].classList.remove('karta');
            activeCards[t].classList.add('karta-out');
        }
    };
    kontrolaOfAllTurns();
};
function kontrolaOfAllTurns() {
    let zbyleKarty = document.querySelectorAll('.karta');
    if (zbyleKarty.length == 0) {
        if (scoreFirst > scoreSecond) {
            result = 'Vyhrává RED!';
        } else if (scoreSecond > scoreFirst) {
            result = 'Vyhrává BLUE!';
        } else if (scoreSecond == scoreFirst) {
            result = 'Nikdo neprohrál ani nevyhrál, je to remíza.'
        } else {
            result = 'Nevim jak ty, ale ja jsem z toho celej rozbitej!'
        };
        result_div.firstElementChild.innerText = result;
        result_div.style.opacity = 1;
        result_div.style.zIndex = 12;
    };
};
//----------RESET----------//
function reset() {
    kartyOut = document.querySelectorAll('karta-out')
    for (let i = 0; i < karty.length; i++) {
        karty[i].classList.remove('karta-out');
        karty[i].classList.add('karta');
        karty[i].dataset.card = "blank";
    };
    blank = document.querySelectorAll('.karta[data-card="blank"]');
    result_div.style.opacity = 0;
    result_div.style.zIndex = 1;
    scoreFirst = 0;
    scoreSecond = 0;
    scoreFirst_output.innerText = 0;
    scoreSecond_output.innerText = 0;
    numOfReptes = 10;
    setTimeout(setRandomCards, 750)
};