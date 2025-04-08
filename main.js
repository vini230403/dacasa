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
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .subtitle, #home .home,
    #home .center, #products .subtitle,
    #products .produtos li, #about .subtitle,
    #about .text, #contact .subtitle, 
    #contact .contact-section, #contact .whatsapp` 
    , {interval: 100}
)