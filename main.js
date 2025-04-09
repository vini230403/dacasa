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


/* Modal produtos */
const modal = document.getElementById('productModal')
const modalImg = document.getElementById('modalImage')
const modalTitle = document.getElementById('modalTitle')
const modalDescription = document.getElementById('modalDescription')
const modalSale = document.getElementById('modalSale')


document.querySelectorAll('.produtos img, .produtos .information').forEach(info => {
  info.addEventListener('click', (e) => {
    e.stopPropagation() 

    const item = info.closest('li') 
    const img = item.querySelector('img').src
    const title = item.querySelector('h3').innerHTML
    const desc = item.querySelector('.desc').innerText
    const sale = item.querySelector('.sale').getAttribute('href')

    modalImg.src = img
    modalTitle.innerHTML = title
    modalDescription.innerText = desc
    modalSale.href = sale

    modal.style.display = 'flex'
  })
})

document.querySelectorAll('.icon-close').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'none'
    })
  })

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none'
})

/* Carrosel */
const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
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