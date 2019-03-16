let time = 0;
let posuvnikWidth = 0;
let posuvnik = document.getElementById('sliderTime');
let pocetPremnen = 0;
let counter;

setInterval(
    timer,
    5
)

function timer() {
    if (time >= 7) {
        doprava();

        if (counter == true) {
            pocetPremnen += 1;
            console.log(pocetPremnen);
        }
        
        time = 0;
    } else {
        time += 0.006;
        //console.log(time);
    };
}

setInterval(
    sliderChange,
    5
);

function sliderChange() {
    posuvnikWidth = time/7;
    posuvnik.style.transform = 'scaleX(' + posuvnikWidth + ')'
};
function counterfce() {
    if (counter == true) {
        counter = false;
        return('počítadlo vypnuto');
    } else {
        counter = true;        
        return('počítadlo zapnuto');
    }
};
console.log('counterfce()');