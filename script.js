const menuBars = document.querySelector('.fa-bars');
const nav = document.querySelector('#desktop-nav');

menuBars.addEventListener('click', () => {
    nav.style.display = 'block'
    menuBars.style.display = 'none'
  console.log('click')
})