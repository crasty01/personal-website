let header;
document.addEventListener('DOMContentLoaded', () => {
  header = document.querySelector('.main-header>nav');
});

function trigger() {
  /*
  if (document.documentElement.scrollTop > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }*/
  //console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop < 400) {
    header.setAttribute('style', 'max-width:' + (1200 + document.documentElement.scrollTop * 2) + 'px;');
  } else {
    header.setAttribute('style', 'max-width:' + 2000 + 'px;');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  trigger();
});
window.addEventListener('scroll', () => {
  trigger();
});
