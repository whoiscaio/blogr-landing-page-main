const body = document.querySelector('body');
const menuIcon = document.querySelector('.mobile-menu-icon');
const menu = document.querySelector('.menu')
const images = document.getElementsByClassName('change-img');

function toggleanimation() {
  console.log('toggle');

  if(body.classList.contains('menuActive')) {
    menu.classList.remove('animationin');
    menu.classList.add('animationout');
    setTimeout(() => body.classList.remove('menuActive'), 290);
  }else {
    body.classList.add('menuActive');
    menu.classList.contains('animationout') && menu.classList.remove('animationout');
    menu.classList.add('animationin');
  }
}

function verifier() {
  if(window.innerWidth <= 800) {
    images[0].src = "src/assets/illustration-editor-mobile.svg";
    images[1].src = "src/assets/illustration-laptop-mobile.svg";
  }else {
    images[0].src = "src/assets/illustration-editor-desktop.svg";
    images[1].src = "src/assets/illustration-laptop-desktop.svg";
  }

  if(window.innerWidth <= 1000) {
    images[1].src = "src/assets/illustration-laptop-mobile.svg";
  }else {
    images[1].src = "src/assets/illustration-laptop-desktop.svg";
  }
};

verifier();
window.addEventListener('resize', verifier);