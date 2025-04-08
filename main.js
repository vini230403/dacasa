/* Abre e fecha menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* Esconde menu ao clicar em link */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* Carrosel */
const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    mousewheel: true,
    keyboard: true,
})

/* scrollRevel */
const isMobile = window.innerWidth <= 768;

ScrollReveal().reveal(
  `#home .subtitle, #home .home,
   #home .center, #products .subtitle,
   #products .produtos li, #about .subtitle,
   #about .text, #contact .subtitle, 
   #contact .contact-section, #contact .whatsapp`, 
  {
    origin: 'top',
    distance: '20px',
    duration: 500,
    reset: false,
    viewFactor: isMobile ? 0.1 : 0.2,
    interval: 100
  }
);

/* button back */
const backToTopButton = document.querySelector('.back-to-top')

function arrowUpWhenScroll() {

    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }

}

window.addEventListener('scroll', function() {
    arrowUpWhenScroll()
})