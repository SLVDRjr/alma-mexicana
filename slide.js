// Slider
const navDots = document.querySelector('.navigation-dots')
const imgArr = ['images/banner.jpg', 'images/banner-2.jpg', 'images/banner-3.jpg']
const dishes = [
  {
    title: 'Authentic Tacos',
    description: 'All tacos are topped with cilantro and onions, served with lime and a side of your favorite taco salsa! - Taco Salsas: Roja, Habanero, Verde and Piña-Jalapeño. Mix and match your favorite tacos:'
  },
  {
    title: 'Enchiladas',
    description: 'Three warm, soft corn tortillas served with a side salad of lettuce, sour cream and tomato. Accompanied with rice and beans.'
  },
  {
    title: 'Fajitas',
    description: 'Served on a sizzling hot skillet with sautéed bell peppers and onions. Accompanied with rice, beans, tortillas, and side salad (lettuce, tomatoes, guacamole, and sour cream).'
  }
]
const heroSection = document.querySelector('.hero-section')
const heroContent = document.querySelector('.hero-content')
const dishTitle = document.querySelector('#dish-title')
const dishDesc = document.querySelector('#dish-description')
let isAutoSlide = false //auto-slide

dishTitle.innerHTML = dishes[0].title
dishDesc.innerHTML = dishes[0].description
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
      dishTitle.innerHTML = ''
      dishDesc.innerHTML = ''
      heroSection.animate(fadeIn, 400)
      heroSection.style.backgroundImage = `url(${imgArr[i]})`
      heroContent.animate(slideIn, 400)
      dishTitle.innerHTML = `${dishes[i].title}`
      dishDesc.innerHTML = `${dishes[i].description}`
      dot.classList.add('active')
    })
  }
}

createDots()

const dots = document.querySelectorAll('.dot')
dots[0].classList.add('active')
const autoSlide = () => {
  let index = 1
  setInterval(() => {
    dots.forEach(dot => {
      dot.classList.remove('active')
    })
    dishTitle.innerHTML = ''
    dishDesc.innerHTML = ''
    if(index > imgArr.length - 1){
      index = 0
      heroSection.animate(fadeIn, 400)
      heroSection.style.backgroundImage = `url(${imgArr[index]})`
      heroContent.animate(slideIn, 400)
      dishTitle.innerHTML = `${dishes[index].title}`
      dishDesc.innerHTML = `${dishes[index].description}`
      dots[index].classList.add('active')
      index++
    }else{
      heroSection.animate(fadeIn, 400)
      heroSection.style.backgroundImage = `url(${imgArr[index]})`
      heroContent.animate(slideIn, 400)
      dishTitle.innerHTML = `${dishes[index].title}`
      dishDesc.innerHTML = `${dishes[index].description}`
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

const slideIn = [
  { transform: "translateX(-100%)" },
  { transform: "translateX(0)" }
]

