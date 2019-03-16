let
  scrollBar,
  casovac,
  increasingNums,
  valuesOfIncreasingNums = [],
  t = 0,
  endOfTheTime = 2,
  landingObjects;


window.addEventListener('DOMContentLoaded', function () {
  landing()
  createScrollBar();
  updateScrollBar();
  window.addEventListener('scroll', updateScrollBar);
  window.addEventListener('resize', updateScrollBar);
})


function createScrollBar() { //creale costume scrollBar a set it up;
  let scrollBarCreated = document.createElement('div');
  scrollBar = document.documentElement.appendChild(scrollBarCreated);
  scrollBar.classList.add('scrollBar');
}


function zapniCasovac() {
  casovac = setInterval(function () {
    if (t < endOfTheTime) {
      ++t;
    } else {
      clearInterval(casovac)
      scrollBar.classList.add('stopped');
    }
  }, 500)
}


function updateScrollBar() {
  let pos = window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100;
  let h = window.innerHeight / document.documentElement.offsetHeight * 100;
  let truePos = pos - (h * pos / 100);
  scrollBar.style.height = h + 'vh';
  scrollBar.style.transform = 'translateY(' + truePos + 'vh)';

  scrollBar.classList.remove('stopped');
  t = 0;
  clearInterval(casovac)
  zapniCasovac()
}


function landing() {
  landingObjects = document.querySelectorAll('.landing');

  increasingNums = document.querySelectorAll('.num-increasing');
  increasingNums.forEach(num => {
    valuesOfIncreasingNums.push(Number(num.innerText))
    num.innerText = '0';
  });
  window.addEventListener('scroll', checkLanding);
  checkLanding()

}

function checkLanding() {
  if (window.innerWidth > 1000) {
    landingObjects.forEach(obj => {
      let pos = obj.getBoundingClientRect();
      if (window.innerHeight - pos.top > pos.height / 5 * 2) {
        obj.classList.add('landing--activated')
      } else if (window.innerHeight < pos.top) {
        obj.classList.remove('landing--activated')
      }
    });
  } else {
    landingObjects.forEach(obj => {
      obj.classList.add('landing--activated')
    })

  }

  for (let num = 0; num < increasingNums.length; num++) {
    let pos = increasingNums[num].getBoundingClientRect();
    if (window.innerHeight > pos.top / 5 * 6) {
      increasingProcess(num);
    } else if (window.innerHeight < pos.top) {
      increasingNums[num].innerText = '0';
    }
  }
}

function increasingProcess(num) {
  setTimeout(() => {
    if (Number(increasingNums[num].innerText) + Number(valuesOfIncreasingNums[num] / 325) < valuesOfIncreasingNums[num]) {
      increasingNums[num].innerText = Math.round(Number(increasingNums[num].innerText) + Number(valuesOfIncreasingNums[num] / 325));
      increasingProcess(num)
    } else {
      increasingNums[num].innerText = valuesOfIncreasingNums[num];
    }
  }, 10);
}