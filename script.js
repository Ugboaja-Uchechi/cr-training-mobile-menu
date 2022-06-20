const menuBars = document.querySelector('.menu-bars');
const close = document.querySelector('#close');
const nav = document.querySelector('#desktop-nav');
const logo = document.querySelector('#logo');

menuBars.addEventListener('click', () => {
    nav.style.display = 'block'
    menuBars.style.display = 'none'
    close.style.display = 'block'
})

close.addEventListener(click, () => {
  nav.style.display = 'none'
  menuBars.style.display = 'block'
  logo.style.display = 'block'
})