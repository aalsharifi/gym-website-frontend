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

 //animations
 gsap.registerPlugin(ScrollTrigger)

 gsap.from('.animateServices', {
   ScrollTrigger: '.animateServices',
   duration: 0.5, 
   opacity: 1, 
   x: -150, 
   stagger: 0.12
});

gsap.from('.animateImg', {
   ScrollTrigger: '.animateImg',
   duration: 1.5, 
   opacity: 0, 
   x: -200, 
});

gsap.from('.animateMembership', {
   ScrollTrigger: '.animateMembership',
   duration: 1, 
   opacity: 0, 
   y: -150, 
   stagger: 0.3,
   delay: 0.5
});

gsap.from('.animateCard', {
   ScrollTrigger: '.animateCard',
   duration: 1, 
   opacity: 0, 
   y: -150, 
   stagger: 0.1,
   delay: 0.2
});
 

 
