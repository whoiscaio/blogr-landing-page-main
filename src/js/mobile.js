const body = document.querySelector('body');
const menuIcon = document.querySelector('.mobile-menu-icon');
const menu = document.querySelector('.menu')

function toggleanimation() {
  console.log('toggle');

  if(body.classList.contains('menuActive')) {

    menu.classList.remove('animationin');
    menu.classList.add('animationout');
    setTimeout(() => body.classList.remove('menuActive'), 290);
  }else {

    body.classList.add('menuActive');
    menu.classList.remove('animationout');
    menu.classList.add('animationin');
  }
}