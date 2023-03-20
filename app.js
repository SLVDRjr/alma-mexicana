// Mobile Menu Navigation
const bars = document.querySelector('.nav-bars')
const mobileNav = document.querySelector('.mobile-nav')

bars.addEventListener('click', () => {
  const visibility = mobileNav.getAttribute('data-visible')

  if(visibility === 'false'){
    mobileNav.setAttribute('data-visible', true)
    bars.setAttribute('aria-expanded', true)
  }else{
    mobileNav.setAttribute('data-visible', false)
    bars.setAttribute('aria-expanded', false)
  }
})

window.addEventListener('resize', () => {
  if(window.innerWidth > 992){
    mobileNav.setAttribute('data-visible', false)
    bars.setAttribute('aria-expanded', false)
  }
})

// Slider
const navDots = document.querySelector('.navigation-dots')
const imgArr = ['images/banner.jpg', 'images/banner-2.jpg', 'images/banner-3.jpg']
const heroSection = document.querySelector('.hero-section')
let isAutoSlide = false

heroSection.style.backgroundImage = `url(${imgArr[0]})`

const createDots = () => {
  for(let i = 0; i < imgArr.length; i++){
    const dot = document.createElement('i')
    dot.setAttribute('class', 'fa-solid fa-circle-dot dot')
    dot.setAttribute('data-index', i)
    navDots.appendChild(dot)
    dot.addEventListener('click', () => {
      const dots = document.querySelectorAll('.dot')
      dots.forEach(dot => {
        dot.classList.remove('active')
      })
      heroSection.animate(fadeIn, 400)
      heroSection.style.backgroundImage = `url(${imgArr[i]})`
      dot.classList.add('active')
    })
  }
}

createDots()

const dots = document.querySelectorAll('.dot')
dots[0].classList.add('active')
const autoSlide = () => {
  let index = 0
  setInterval(() => {
    dots.forEach(dot => {
      dot.classList.remove('active')
    })
    if(index > imgArr.length - 1){
      index = 0
      heroSection.animate(fadeIn, 400)
      heroSection.style.backgroundImage = `url(${imgArr[index]})`
      dots[index].classList.add('active')
      index++
    }else{
      heroSection.animate(fadeIn, 400)
      heroSection.style.backgroundImage = `url(${imgArr[index]})`
      dots[index].classList.add('active')
      index++
    }
  }, 5000)
}

if(isAutoSlide){
  autoSlide()
}

// animation
const fadeIn = [
  { opacity: "0" },
  { opacity: "1" }
]

