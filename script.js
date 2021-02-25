const start_btn = document.getElementById("start-btn")

const screens = document.querySelectorAll(".screen")

const choose_fruit_btns = document.querySelectorAll(".choose-fruit-btn")


const game_container = document.getElementById("game-container")

const timeEl = document.getElementById("time")
const scoreEl = document.getElementById("score")
const massageEl = document.getElementById("massage")

let seconds = 0
let score = 0
let selected_fruit = {}

start_btn.addEventListener("click", () => {
  screens[0].classList.add("up")
})

choose_fruit_btns.forEach(btn => {
  
  btn.addEventListener("click", () => {
    
    const img = btn.querySelector("img")
    const src = img.getAttribute("src")
    const alt = img.getAttribute("alt")

    selected_fruit = { src, alt }

    screens[1].classList.add("up")

    setTimeout(createFruit, 1000)
    startGame()
  })
})

function createFruit () {
  const fruit = document.createElement("div")
  fruit.classList.add("fruit")

  const { x, y } = getRendomLocation()

  fruit.style.top = `${y}px`
  fruit.style.left = `${x}px`
  fruit.innerHTML = `<img src="${selected_fruit.src}" alt="${selected_fruit.alt} style="transform: rotate(${Math.random() * 360}deg" /">`

  fruit.addEventListener("click", catchFruit)
  game_container.appendChild(fruit)
}

function getRendomLocation () {
  const width = window.innerWidth
  const heigth = window.innerHeight

  const x = Math.rendom() * (width -200) + 100
  const y = Math.rendom() * (heigth -200) + 100

  return {x, y}
}