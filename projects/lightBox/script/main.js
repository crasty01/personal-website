let lightBoxWrapper = document.querySelector('.lightBox-wrapper');
let lightBox = lightBoxWrapper.querySelector('.lightBox');
let description = lightBoxWrapper.querySelector('.description');
let imgBoxInLightBox = lightBox.querySelector('img');
let galleryWrapper = document.querySelector('.wrapper');
let projects = galleryWrapper.querySelectorAll('.project');
let allImages = galleryWrapper.querySelectorAll('.img');
let descriptions = galleryWrapper.querySelectorAll('.description');
let forwardButton = lightBoxWrapper.querySelector('#forward');
let backwardButton = lightBoxWrapper.querySelector('#backward');
let xButton = lightBoxWrapper.querySelector('#xButton');
let img, current;

lightBoxWrapper.style.display = "none";
backwardButton.onclick = backward;
forwardButton.onclick = forward;
xButton.onclick = close;

for (let images = 0; images < allImages.length; images++) {
    allImages[images].addEventListener("click", function() {
        showLightBox(images);
    });
    projects[images].id = 'project-' + images;
      
}
function cl(parametr) {
    console.log(parametr);
}

function showLightBox(e) {
    current = e;
    project = projects[e];
    img = allImages[e].src;
    imgBoxInLightBox.src = img;
    description.innerText = descriptions[e].innerText;
    lightBoxWrapper.style.display = "block";
    xButton.href = '#project-' + current;
}
function backward() {
    if (current > 0) {
        showLightBox(current - 1);
    } else {
        showLightBox(projects.length - 1)
    }
}
function forward() {
    if (current < projects.length - 1) {
        showLightBox(current + 1);
    } else {
        showLightBox(0);
    }
}
function close() {
    lightBoxWrapper.style.display = "none";
}