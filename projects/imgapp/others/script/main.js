let profily;
let detail;
let close;
let frame;

window.addEventListener("DOMContentLoaded", function () {
  profily = document.querySelectorAll('.profile');
  detail = document.querySelector('.detail');
  img = document.querySelector('.detail>.header');
  desc = document.querySelector('.detail #description');
  close = document.querySelector('.close');
  frame = document.querySelector('.frame');
  profily.forEach(profil => {
    profil.onclick = function () {
      detail.classList.toggle('active');
      frame.classList.toggle('active');
      img.src = profil.firstElementChild.src;
      desc.innerText = getName(img.src);
    }
  });
  close.onclick = function () {
    detail.classList.remove('active');
    frame.classList.remove('active');
    frame.style.overflow = 'scroll';
  }
  frame.addEventListener('scroll', function () {
    if (window.innerWidth > 600) {
      detail.style.transform = 'translateY(' + frame.scrollTop + 'px)';
    }
  })
})

function getName(pic) {
  let tmp = pic.split('');
  tmp.splice(0, 66);
  for (let i = 0; i < 4; i++) {
    tmp.pop()
  }
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i] == '-') {
      tmp[i] = ' ';
    }
  }
  tmp = tmp.join('');
  tmp = tmp.split(' ');
  for (let i = 0; i < tmp.length; i++) {
    tmp[i] = '#' + tmp[i];
  }
  tmp = tmp.join(', ') + tmp.join(', ') + tmp.join(', ');
  console.log(tmp)
  return tmp
}