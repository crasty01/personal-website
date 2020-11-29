function triggerBtn(e) {
  let target = btns[0];
  e.path.forEach((a1) => {
    btns.forEach((a2) => {
      a2.classList.remove('copied');
      if (a1 == a2) {
        target = a1;
      }
    });
  });
  target.classList.add('copied');
}

document.addEventListener('DOMContentLoaded', () => {
  btns = document.querySelectorAll('.card>.copy');
  btns.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', triggerBtn, false);
  });
});
