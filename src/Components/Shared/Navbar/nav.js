let menuToggle = document.querySelector('.menu-toggle');
let navMenu = document.querySelector('.nav-menu');

menuToggle.onclick = function () {
  navMenu.classList.toggle('nav-open');
};
