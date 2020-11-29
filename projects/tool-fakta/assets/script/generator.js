let p,
  lastGenerated = [];
document.addEventListener('DOMContentLoaded', () => {
  p = document.querySelector('#content');
  c = document.querySelector('#copy');
  l = document.querySelector('#copy > label');
  f = document.querySelector('#pocet-faktu');
  f.innerText = facts.length;
  c.addEventListener('click', () => {
    console.log('clicked');
    var text = p.innerText;
    var elem = document.createElement('textarea');
    document.body.appendChild(elem);
    elem.value = 'A věděli jste, že ' + text;
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);

    l.innerText = 'zkopírováno';
  });

  c.addEventListener('mouseleave', () => {
    l.innerText = 'kliknutím zkopíruj';
  });
  vygenerujVeliceZajimavyFaktOAwardWinningKapeleTool();
});
function vygenerujVeliceZajimavyFaktOAwardWinningKapeleTool() {
  vygenerovane = false;
  let randNum;
  while (!vygenerovane) {
    randNum = Math.floor(Math.random() * facts.length);
    vygenerovane = !lastGenerated.includes(randNum);
  }
  lastGenerated.push(randNum);
  if (lastGenerated.length > 6) {
    lastGenerated.shift();
  }
  p.innerText = facts[randNum];
}
