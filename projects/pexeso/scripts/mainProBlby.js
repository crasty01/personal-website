let karty = document.querySelectorAll('.karta');//vyhledej všechny karty
let blank = document.querySelectorAll('.karta[data-card="blank"]');//vyhledej všechny karty, jejichž data-card je roven "blank"
let scoreFirst_output = document.querySelector('#scoreFirst');//vyhledej element, kam budu psát skóre prvního hráče
let scoreSecond_output = document.querySelector('#scoreSecond');//vyhledej element, kam budu psát skóre druhého hráče
let result_div = document.querySelector('.konecHry');//vyhledej element, který se ukáže, pokud hra skončí
let resetButton = document.querySelector('#reset_btn');//vyhledej button kterým vše vyresetuji
let numOfReptes = 10;//nastav počáteční hodnotu pro přiřazování obrázků
let random, activeCards, result, kartyOut;//inicializuj hodnoty, ktreré budu potřebovat později
let scoreFirst = 0;//inicializuj scóre prvního hráče a nastav jeho aktuální hodnotu na 0 = počáteční hodnota
let scoreSecond = 0;//inicializuj scóre druhého hráče a nastav jeho aktuální hodnotu na 0 = počáteční hodnota
let turnOfFirst = true;//pokud je na řadě první pak je hodnota true = určuje, kdo hraje
resetButton.onclick = reset;//po kliknutí na tlačítko pro reset resetuj hru
//-------RANDOM OBRÁZKY-------//
document.addEventListener('DOMContentLoaded', setRandomCards);//až se načte DOM spusť funkci setRandomCards
function setRandomCards() {//nastaví náhodně karty
    for (blank; blank.length > 0; numOfReptes++) {//spuť pokud je blank více jak 0 a na konci opakování zvěč aktuélní číslo opakování
        for (let i = 0; i < 2; i++) {//spusť dvakrát totéž
            random = Math.floor(Math.random() * (blank.length - 1));//najdi náhodné celé číslo mezi 0 a počtem blank menším o 1
            blank[random].dataset.card = numOfReptes;//změň hodnotu data-card z blank na počet opakování první ze dvou for-loops
            blank[random].firstElementChild.firstElementChild.src = 'https://picsum.photos/200?image=' + numOfReptes;//podle početu opakování for-loop mu přiřaď obrázek z galerie pipsum
            blank = document.querySelectorAll('.karta[data-card="blank"]');//aktualizuj seznam blank
        }
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