const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navBarMenu');
const navLogo = document.querySelector('#navBarLogo');
const body = document.querySelector('body');

// mobile menu
 const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active');
 }

 menu.addEventListener('click', mobileMenu);