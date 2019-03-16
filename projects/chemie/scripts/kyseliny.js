let liKys = document.querySelectorAll('.kyseliny-seznam>li');
let seznam = document.querySelector('.kyseliny-zobrazeni>.wrapper');
let kysWidth = document.querySelector('.kyselina').offsetWidth;
let last = 0;

window.onresize = function(){
    setSwitch(i)
}

for (let i = 0; i < liKys.length; i++) {
    liKys[i].addEventListener("click", function () {
        setSwitch(i);
    });
};

function setSwitch(i) {
    let kysWidth = document.querySelector('.kyselina').offsetWidth;
    liKys[last].classList.remove('active');
    liKys[i].classList.add('active');
    seznam.style.transitionDuration = Math.abs(i - last) / 4 + .5 + "s";
    seznam.style.transform = "translateX(" + (-i) * kysWidth + "px)";
    console.log(seznam.style.transform);
    last = i;
};