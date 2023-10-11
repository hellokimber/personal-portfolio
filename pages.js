// this is the data for holding which page we're on
let pageNumber = 0

// have the content for these pages
const pages = [
  {copy: 'an Alberta-based designer', background: '#d3c7f3', circle: '#f7fe00'},
  {copy: 'showcasing her <a href="https://drive.google.com/drive/folders/1eM8p6223qS4z54eJyA_99ZvgjkHSs0bj?usp=drive_link">portfolio</a>', background: '#A9FFF7', circle: '#e34a47'},
  {copy: 'creating experiences for print and web', background: '#BBBE64', circle: '#A9FFF7'},
  {copy: `building with code on <a href="https://github.com/hellokimber">GitHub</a>`, background: '#8BC3FF', circle: '#FDE74C'},
  {copy: `sharing her resume on <a href="https://www.linkedin.com/in/kvanderhelm">LinkedIn</a>`, background: '#f18d8c', circle: '#A9FFF7'},
  {copy: 'posting photos on <a href="https://vsco.com/hellokimber">VSCO</a>', background: '#FDE74C', circle: '#b472e6'}
]

// pick the relevant tags
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

// make a next function to increase the pageNumber
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

// make a previous function to decrease the pageNumber
const previous = function() {
  pageNumber = pageNumber - 1
  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

// pick a random slide
const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)

  updateSection()
}

// this will update the section's content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

// on click of nextTag, run this
nextTag.addEventListener('click', function() {
  next()
})

// on click of previousTag, run this
previousTag.addEventListener('click', function() {
  previous()
})

// on click of randomTag, run this
randomTag.addEventListener('click', function() {
  random()
})

// when a user presses a key, check for arrow left or right
// and do next or previous correctly
document.addEventListener('keyup', function(event) {
  console.log(event)

  // if the key being pressed is ArrowRight
  if (event.key == 'ArrowRight') {
    next()
  }
  // if the key being pressed is ArrowLeft
  if (event.key == 'ArrowLeft') {
    previous()
  }
})
