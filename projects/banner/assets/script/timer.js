const time = '2021 05 07  21:30:00';
//const time = '2021 05 05  00:20:00';

const oD = 24 * 60 * 60 * 1000;
const oH = 60 * 60 * 1000;
const oM = 60 * 1000;
const oS = 1000;

const getDiffrence = () => {
  const n = new Date();
  const p = new Date(time);

  //console.log('aktuální čas:\n' + n);
  //console.log('pátek, 21:30:\n' + p);

  let diff = p - n;

  let d = Math.floor(diff / oD);
  diff -= d * oD;
  let h = Math.floor(diff / oH);
  diff -= h * oH;
  let m = Math.floor(diff / oM);
  diff -= m * oM;
  let s = Math.floor(diff / oS);
  diff -= s * oS;
  return [d, h, m, s];
};

const d_el = document.querySelector('.d');
const h_el = document.querySelector('.h');
const m_el = document.querySelector('.m');
const s_el = document.querySelector('.s');

const timer_f = () => {
  [d, h, m, s] = getDiffrence();

  if (d * oD + h * oH + m * oM + s * oS <= 0) {
    s_el.innerText = '00';
    m_el.innerText = '00';
    h_el.innerText = '00';
    d_el.innerText = '00';
    clearInterval(timer);
  } else {
    s_el.innerText = ('' + s).padStart(2, '0');
    m_el.innerText = ('' + m).padStart(2, '0');
    h_el.innerText = ('' + h).padStart(2, '0');
    d_el.innerText = ('' + d).padStart(2, '0');
  }
};

timer_f()

const timer = setInterval(timer_f, 1000);
