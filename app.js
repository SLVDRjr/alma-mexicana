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

