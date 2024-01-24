const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

if (navToggle && navMain) {
  navMain.classList.remove('main-nav--nojs');
  navToggle.addEventListener('click', () => {
    navMain.classList.toggle('main-nav--closed');
    navMain.classList.toggle('main-nav--opened');
  });
}
