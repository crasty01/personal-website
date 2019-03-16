let backward = document.getElementById('btn-backward');
let forward = document.getElementById('btn-forward');
let slider = document.getElementById('sliderImage');
let sliderNext = document.getElementById('sliderImageNext');
let sliderTime = document.getElementById('sliderTime');

let currentPic;
let numberOfPics = 7;
let current = 1;

forward.onclick = doprava;
backward.onclick = doleva;

slider.src = './img/' + current + '.jpg';
sliderNext.src = './img/' + current + '.jpg';




function doleva() {
    backward.onclick = false;
    forward.onclick = false;

    if (current == 1) {
        currentPic = './img/' + numberOfPics + '.jpg';
        current = numberOfPics;
    } else {
        currentPic = './img/' + (current - 1) + '.jpg';
        current -= 1;
    };
    time = -3;
    change();
};

function doprava() {
    backward.onclick = false;
    forward.onclick = false;

    if (current == numberOfPics) {
        currentPic = './img/' + 1 + '.jpg';
        current = 1;
    } else {
        currentPic = './img/' + (current + 1) + '.jpg';
        current += 1;
    };
    time = -3;

    change();
};

function change() {
    sliderNext.src = currentPic;

    sliderNext.style.transition = 'opacity 750ms ease-in-out';
    sliderNext.style.opacity = 1;
    setTimeout(
        helper,
        750
    )
};

function helper() {
    slider.src = currentPic;

    sliderNext.style.transition = 'opacity 0ms ease-in-out';
    sliderNext.style.opacity = 0;

    backward.onclick = doleva;
    forward.onclick = doprava;
};