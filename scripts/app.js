
// Dom Elements 
const gridOne = document.querySelector('.grid-one')
const gridTwo = document.querySelector('.grid-two')
const startBtn = document.querySelector('#start')
// const lilacPaintBlob = document.querySelector('.lilac-blob')
// const pinkPaintBlob = document.querySelector('.pink-blob')
// const bluePaintBlob = document.querySelector('.blue-blob')
// const greenPaintBlob = document.querySelector('.green-blob')
// const orangePaintBlob = document.querySelector('.orange-blob')

// Grid Variables 
const width = 11
const cellCount = width * width
const cells = []

const widthTwo = 6
const cellCountTwo = widthTwo * widthTwo
const cellsTwo = []

// Game Variables
const artistClass = 'artist'
let artistPosition = 115
let isPlaying = false 
const artistHomePosition = [3,7]
// const pinkPaintBrushClass = 'pink'
// const bluePaintBrushClass = 'blue'
// const greenPaintBrushClass = 'green'
// const lilacPaintBrushClass = 'lilac'


// Grid Functions

function createGridOne() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    gridOne.appendChild(cell)
    cells.push(cell)
  }
}

createGridOne()

function createGridTwo() {
  for (let i = 0; i < cellCountTwo; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    gridTwo.appendChild(cell)
    cellsTwo.push(cell)
  }
}

createGridTwo()


// Functions

function addArtist() {
  cells[artistPosition].classList.add(artistClass)
}

function removeArtist() {
  cells[artistPosition].classList.remove(artistClass)
}

function landedHome() {
  if (artistHomePosition.includes(artistPosition)) {
    alert('Yay you win! Check out your amazing artwork')
    window.location.reload()
  } return
}

// Moving block functions

function handleStart(){
  if (isPlaying) {
    return 
  }
  
  let pinkPaintBrushes = [88,87,86,85]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('pink'))
    pinkPaintBrushes = pinkPaintBrushes.map(pinkPaintBrush => {
      const newPosition = pinkPaintBrush - 1
      cells[newPosition].classList.add('pink')
      return newPosition
    })
    // console.log(pinkPaintBrushes)
    if (cells[77].classList.contains('pink')){
      pinkPaintBrushes = [88,87,86,85]
    } 
    if (cells[84].classList.contains('lightPink-blob' && 'pink')){
      cells[84].classList.remove('lightPink-blob')
    }
    if (!cells[84].classList.contains('lightPink-blob' && 'pink')){
      cells[84].classList.add('lightPink-blob')
    }
  }, 500)

  let bluePaintBrushes = [56,55,54]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('blue'))
    bluePaintBrushes = bluePaintBrushes.map(bluePaintBrush => {
      const newPosition = bluePaintBrush + 1
      cells[newPosition].classList.add('blue')
      return newPosition
    })

    if (cells[65].classList.contains('blue')){
      bluePaintBrushes = [54,55,56]
    } 
    if (cells[59].classList.contains('blue-blob' && 'blue')){
      cells[59].classList.remove('blue-blob')
    }
    if (!cells[59].classList.contains('blue-blob' && 'blue')){
      cells[59].classList.add('blue-blob')
    }
    if (cells[63].classList.contains('lilac-blob' && 'blue')){
      cells[63].classList.remove('lilac-blob')
    }
    if (!cells[63].classList.contains('lilac-blob' && 'blue')){
      cells[63].classList.add('lilac-blob')
    }
  }, 400)

  let greenPaintBrushes = [44,43,42]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('green'))
    greenPaintBrushes = greenPaintBrushes.map(greenPaintBrush => {
      const newPosition = greenPaintBrush - 1
      cells[newPosition].classList.add('green')
      return newPosition
    })
    
    if (cells[33].classList.contains('green')){
      greenPaintBrushes = [44,43,42]
    } 
    if (cells[35].classList.contains('green-blob' && 'green')){
      cells[35].classList.remove('green-blob')
    }
    if (!cells[35].classList.contains('green-blob' && 'green')){
      cells[35].classList.add('green-blob')
    }
    if (cells[39].classList.contains('pink-blob' && 'green')){
      cells[39].classList.remove('pink-blob')
    }
    if (!cells[39].classList.contains('pink-blob' && 'green')){
      cells[39].classList.add('pink-blob')
    }
  }, 350)

  let lilacPaintBrushes = [10,11,12]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('lilac'))
    lilacPaintBrushes = lilacPaintBrushes.map(lilacPaintBrush => {
      const newPosition = lilacPaintBrush + 1
      cells[newPosition].classList.add('lilac')
      return newPosition
    })
    
    if (cells[21].classList.contains('lilac')){
      lilacPaintBrushes = [10,11,12]
    } 
    if (cells[21].classList.contains('green-blob' && 'lilac')){
      cells[21].classList.remove('green-blob')
    }
    if (!cells[21].classList.contains('green-blob' && 'lilac')){
      cells[21].classList.add('green-blob')
    }
    if (cells[12].classList.contains('pink-blob' && 'lilac')){
      cells[12].classList.remove('pink-blob')
    }
    if (!cells[12].classList.contains('pink-blob' && 'lilac')){
      cells[12].classList.add('pink-blob')
    }
    if (cells[16].classList.contains('orange-blob' && 'lilac')){
      cells[16].classList.remove('orange-blob')
    }
    if (!cells[16].classList.contains('orange-blob' && 'lilac')){
      cells[16].classList.add('orange-blob')
    }
  }, 300)

  console.log('start')
  addArtist()
  if (isPlaying) {
    return 
  }
  isPlaying = true 
  function handleKeyUp(event) {
    removeArtist(artistPosition) 

    const x = artistPosition % width
    const y = Math.floor(artistPosition / width)

    switch (event.keyCode) {
      case 39:
        if (x < width - 1) 
          artistPosition ++
        break
      case 37:
        if (x > 0) artistPosition --
        break
      case 38:
        if (y > 0) artistPosition -= width
        break
      case 40:
        if (y < width - 1) artistPosition += width
        break
      default:
        console.log('invalid key do nothing')
    }
    addArtist(artistPosition)

    landedHome()
    collision()
    // collisionTwo()
    eatingLilacPaintBlob()
    eatingGreenPaintBlob()
    eatingBluePaintBlob()
    eatingLightPinkPaintBlob()
    eatingTurqPaintBlob()

  }

  document.addEventListener('keyup', handleKeyUp)
  // function collisionTwo() {
  //   if ((cells[bluePaintBrushes].contains(artistClass))) {
  //     alert('Game Over')
  //     window.location.reload()
  //   } return
  // }

} 

function collision() {
  if ((cells[artistPosition].classList.contains('pink')) || (cells[artistPosition].classList.contains('blue')) || (cells[artistPosition].classList.contains('green')) || (cells[artistPosition].classList.contains('lilac'))) {
    alert('Game Over')
    window.location.reload()
  } return

} 

// function collisionTwo() {
//   if (cells.classList.contains(artistClass) && cells.classList.contains('blue')) {
//     alert('Game Over')
//     window.location.reload()
//   } return
// }



function eatingLilacPaintBlob() {
  if ((cells[artistPosition].classList.contains('lilac-blob'))) {
    cellsTwo[8].classList.add('lilac-splashTopLeft')
    cellsTwo[9].classList.add('lilac-splashTopRight')
    cellsTwo[14].classList.add('lilac-splashBottomLeft')
    cellsTwo[15].classList.add('lilac-splashBottomRight')
    // cells.classList.remove('lilac')
  } 
}

function eatingGreenPaintBlob() {
  if ((cells[artistPosition].classList.contains('green-blob'))) {
    cellsTwo[3].classList.add('green-splashOne')
    cellsTwo[4].classList.add('green-splashTwo')
    cellsTwo[5].classList.add('green-splashThree')
    cellsTwo[9].classList.add('green-splashFour')
    cellsTwo[10].classList.add('green-splashFive')
    cellsTwo[11].classList.add('green-splashSix')
    cellsTwo[15].classList.add('green-splashSeven')
    cellsTwo[16].classList.add('green-splashEight')
    cellsTwo[17].classList.add('green-splashNine')
    cellsTwo[21].classList.add('green-splashTen')
    cellsTwo[22].classList.add('green-splashEleven')
    cellsTwo[23].classList.add('green-splashTwelve')
    cells[21].classList.remove('green-blob')
    cells[35].classList.remove('green-blob')
  } 
}

function eatingBluePaintBlob() {
  if ((cells[artistPosition].classList.contains('blue-blob'))) {
    cellsTwo[1].classList.add('blue-splashOne')
    cellsTwo[2].classList.add('blue-splashTwo')
    cellsTwo[6].classList.add('blue-splashThree')
    cellsTwo[7].classList.add('blue-splashFour')
    cellsTwo[8].classList.add('blue-splashFive')
    cellsTwo[12].classList.add('blue-splashSix')
    cellsTwo[13].classList.add('blue-splashSeven')
    cellsTwo[14].classList.add('blue-splashEight')
    cells[54].classList.remove('blue-blob')
    cells[59].classList.remove('blue-blob')
  }
}
function eatingLightPinkPaintBlob() {
  if ((cells[artistPosition].classList.contains('lightPink-blob'))) {
    cellsTwo[0].classList.add('lightPink-splashOne')
    cellsTwo[1].classList.add('lightPink-splashTwo')
    cellsTwo[6].classList.add('lightPink-splashFour')
    cellsTwo[7].classList.add('lightPink-splashFive')
    cellsTwo[8].classList.add('lightPink-splashSix')
    cellsTwo[12].classList.add('lightPink-splashSeven')
    cellsTwo[13].classList.add('lightPink-splashEight')
    cellsTwo[14].classList.add('lightPink-splashNine')
    cells[67].classList.remove('lightPink-blob')
    cells[84].classList.remove('lightPink-blob')
  }
}

function eatingTurqPaintBlob() {
  if ((cells[artistPosition].classList.contains('turq-blob'))) {
    cellsTwo[0].classList.add('lightPink-splashOne')
  }
}


// function collision() {
//   if (artistPosition === pinkPaintBrushes || bluePaintBrushes || greenPaintBrushes || lilacPaintBrushes) {
//     alert('Game Over!')
//   } return
// }
// collision()


// Events

startBtn.addEventListener('click', handleStart)

// Adding paint blobs to playing board

const canvas = document.createElement('div')
cells[3].classList.add('canvas')
cells[7].classList.add('canvas')
gridOne.appendChild(canvas)

const lilacPaintBlob = document.createElement('div')
cells[63].classList.add('lilac-blob')
gridOne.appendChild(lilacPaintBlob)

const purplePaintBlob = document.createElement('div')
cells[100].classList.add('purple-blob')
gridOne.appendChild(purplePaintBlob)

const pinkPaintBlob = document.createElement('div')
cells[39].classList.add('pink-blob')
cells[97].classList.add('pink-blob')
cells[12].classList.add('pink-blob')
gridOne.appendChild(pinkPaintBlob)

const bluePaintBlob = document.createElement('div')
cells[59].classList.add('blue-blob')
cells[54].classList.add('blue-blob')
gridOne.appendChild(bluePaintBlob)

const greenPaintBlob = document.createElement('div')
cells[35].classList.add('green-blob')
cells[21].classList.add('green-blob')
gridOne.appendChild(greenPaintBlob)

const turqPaintBlob = document.createElement('div')
cells[117].classList.add('turq-blob')
gridOne.appendChild(turqPaintBlob)

const orangePaintBlob = document.createElement('div')
cells[92].classList.add('orange-blob')
cells[16].classList.add('orange-blob')
gridOne.appendChild(orangePaintBlob)

const lightPinkPaintBlob = document.createElement('div')
cells[67].classList.add('lightPink-blob')
cells[84].classList.add('lightPink-blob')
gridOne.appendChild(lightPinkPaintBlob)

// Paint splash on canvas

const lilacPaintSplash = document.createElement('div')
