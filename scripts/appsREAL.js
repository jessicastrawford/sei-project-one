// Dom Elements 
const gridOne = document.querySelector('.grid-one')
const gridTwo = document.querySelector('.grid-two')
const startBtn = document.querySelector('#start')
const restartBtn = document.querySelector('#restart')
const leftSide = document.querySelector('.left-side')
const winningSide = document.querySelector('.winning-left-side')
const instructions = document.querySelector('.instructions')
const audio = document.querySelector('#audio')
const lostAlert = document.querySelector('.alert-lost')
const tryAgainBtn = document.querySelector('.try-again')

// Grid Variables 
const width = 11
const cellCount = width * width
const cells = []

// const widthTwo = 6
// const cellCountTwo = widthTwo * widthTwo
// const cellsTwo = []


// Game Variables
const artistClass = 'artist'
let artistPosition = 115
let isPlaying = false 
const artistHomePosition = [3,7]

// Audio

function handlePlay() {
  audio.src = './sounds/Bir Poop Splat-SoundBible.com-157212383.mp3'
  audio.play()
}

function handlePlayFinish() {
  audio.src = './sounds/Ta Da-SoundBible.com-1884170640.wav'
  audio.play()
}

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

// function createGridTwo() {
//   for (let i = 0; i < cellCountTwo; i++) {
//     const cell = document.createElement('div')
//     cell.textContent = i
//     gridTwo.appendChild(cell)
//     cellsTwo.push(cell)
//   }
// }

// createGridTwo()

// Blobs

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
cells[12].classList.add('turq-blob')
gridOne.appendChild(turqPaintBlob)

const orangePaintBlob = document.createElement('div')
cells[92].classList.add('orange-blob')
cells[16].classList.add('orange-blob')
gridOne.appendChild(orangePaintBlob)

const lightPinkPaintBlob = document.createElement('div')
cells[67].classList.add('lightPink-blob')
cells[84].classList.add('lightPink-blob')
gridOne.appendChild(lightPinkPaintBlob)

// Functions




function addArtist() {
  cells[artistPosition].classList.add(artistClass)
}

function removeArtist() {
  cells[artistPosition].classList.remove(artistClass)
}

function landedHome() {
  if (artistHomePosition.includes(artistPosition)) {
    leftSide.classList.add('no-show')
    winningSide.classList.remove('no-show')
    restartBtn.addEventListener('click', handleRestart)
    handlePlayFinish()
  } return
}

function handleRestart(){
  winningSide.classList.add('no-show')
  leftSide.classList.remove('no-show')
  window.location.reload()
}

// Moving block functions

function handleStart(){
  if (isPlaying) {
    return 
  }
  window.addEventListener('keydown', function(e) {
    if (['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].indexOf(e.code) > -1) {
      e.preventDefault()
    }
  }, false)
  
  instructions.classList.add('no-show')

  let pinkPaintBrushesFront = [85]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('pinkPaintBrushFront'))
    pinkPaintBrushesFront = pinkPaintBrushesFront.map(pinkPaintBrushFront => {
      const newPosition = pinkPaintBrushFront - 1 
      cells[newPosition].classList.add('pinkPaintBrushFront')
      return newPosition
    })
    if (cells[77].classList.contains('pinkPaintBrushFront')){
      pinkPaintBrushesFront = [85]
    }
    if (cells[pinkPaintBrushesFront] === cells[artistPosition]) {
      lost()
    }
    if (cells[84].classList.contains('lightPink-blob' && 'pinkPaintBrushFront')){
      cells[84].classList.remove('lightPink-blob')
    }
    if (cells[pinkPaintBrushesFront ] === cells[artistPosition]) {
      console.log('die')
      lost()
    }

  }, 500)

  let pinkPaintBrushesMiddleOne = [86]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('pinkPaintBrushMiddleOne'))
    pinkPaintBrushesMiddleOne = pinkPaintBrushesMiddleOne.map(pinkPaintBrushMiddleOne => {
      const newPosition = pinkPaintBrushMiddleOne - 1 
      cells[newPosition].classList.add('pinkPaintBrushMiddleOne')
      return newPosition
    })
    if (cells[77].classList.contains('pinkPaintBrushFront')){
      pinkPaintBrushesMiddleOne = [86]
    }

  }, 500)

  let pinkPaintBrushesMiddleTwo = [87]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('pinkPaintBrushMiddleTwo'))
    pinkPaintBrushesMiddleTwo = pinkPaintBrushesMiddleTwo.map(pinkPaintBrushMiddleTwo => {
      const newPosition = pinkPaintBrushMiddleTwo - 1 
      cells[newPosition].classList.add('pinkPaintBrushMiddleTwo')
      return newPosition
    })
    if (cells[77].classList.contains('pinkPaintBrushFront')){
      pinkPaintBrushesMiddleTwo = [87]
    }
    
  }, 500)

  let pinkPaintBrushesEnd = [88]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('pinkPaintBrushEnd'))
    pinkPaintBrushesEnd = pinkPaintBrushesEnd.map(pinkPaintBrushEnd => {
      const newPosition = pinkPaintBrushEnd - 1 
      cells[newPosition].classList.add('pinkPaintBrushEnd')
      return newPosition
    })
    if (cells[77].classList.contains('pinkPaintBrushFront')){
      pinkPaintBrushesEnd = [88]
    }
    if (cells[83].classList.contains('pinkPaintBrushEnd') && !cells[84].classList.contains('eaten-blob')) {
      cells[84].classList.add('lightPink-blob')
    }
  }, 500)

  
  let bluePaintBrushesFront = [56] 
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('bluePaintBrushFront'))
    bluePaintBrushesFront = bluePaintBrushesFront.map(bluePaintBrushFront => {
      const newPosition = bluePaintBrushFront + 1
      cells[newPosition].classList.add('bluePaintBrushFront')
      return newPosition
    })

    if (cells[65].classList.contains('bluePaintBrushFront')){
      bluePaintBrushesFront = [56]
    } 
    if (cells[bluePaintBrushesFront] === cells[artistPosition]) {
      lost()
    }
    if (cells[59].classList.contains('blue-blob' && 'bluePaintBrushFront')){
      cells[59].classList.remove('blue-blob')
    }
    if (cells[63].classList.contains('lilac-blob' && 'bluePaintBrushFront')){
      cells[63].classList.remove('lilac-blob')
    }
  },400)

  let bluePaintBrushesMiddle = [55] 
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('bluePaintBrushMiddle'))
    bluePaintBrushesMiddle = bluePaintBrushesMiddle.map(bluePaintBrushMiddle => {
      const newPosition = bluePaintBrushMiddle + 1
      cells[newPosition].classList.add('bluePaintBrushMiddle')
      return newPosition
    })

    if (cells[65].classList.contains('bluePaintBrushFront')){
      bluePaintBrushesMiddle = [55]
    } 
    if (cells[bluePaintBrushesMiddle] === cells[artistPosition]) {
      lost()
    }
  },400)

  let bluePaintBrushesEnd = [54] 
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('bluePaintBrushEnd'))
    bluePaintBrushesEnd = bluePaintBrushesEnd.map(bluePaintBrushEnd => {
      const newPosition = bluePaintBrushEnd + 1
      cells[newPosition].classList.add('bluePaintBrushEnd')
      return newPosition
    })

    if (cells[65].classList.contains('bluePaintBrushFront')){
      bluePaintBrushesEnd = [54]
    } 
    if (cells[60].classList.contains('bluePaintBrushEnd') && !cells[59].classList.contains('eaten-blob')) {
      cells[59].classList.add('blue-blob')
    }
    if (cells[55].classList.contains('bluePaintBrushEnd') && !cells[63].classList.contains('eaten-blob')) {
      cells[63].classList.add('lilac-blob')
    }
    
  },400)


  let greenPaintBrushesFront = [42]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('greenPaintBrushFront'))
    greenPaintBrushesFront = greenPaintBrushesFront.map(greenPaintBrushFront => {
      const newPosition = greenPaintBrushFront - 1
      cells[newPosition].classList.add('greenPaintBrushFront')
      return newPosition
    })
    
    if (cells[33].classList.contains('greenPaintBrushFront')){
      greenPaintBrushesFront = [42]
    } 
    if (cells[greenPaintBrushesFront] === cells[artistPosition]) {
      lost()
    }
    if (cells[39].classList.contains('pink-blob' && 'greenPaintBrushFront')){
      cells[39].classList.remove('pink-blob')
    }
    if (cells[35].classList.contains('green-blob' && 'greenPaintBrushFront')){
      cells[35].classList.remove('green-blob')
    }
  }, 350)

  let greenPaintBrushesMiddle = [43]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('greenPaintBrushMiddle'))
    greenPaintBrushesMiddle = greenPaintBrushesMiddle.map(greenPaintBrushMiddle => {
      const newPosition = greenPaintBrushMiddle - 1
      cells[newPosition].classList.add('greenPaintBrushMiddle')
      return newPosition
    })
    
    if (cells[33].classList.contains('greenPaintBrushFront')){
      greenPaintBrushesMiddle = [43]
    } 
    if (cells[greenPaintBrushesMiddle] === cells[artistPosition]) {
      lost()
    }
  }, 350)

  let greenPaintBrushesEnd = [44]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('greenPaintBrushEnd'))
    greenPaintBrushesEnd = greenPaintBrushesEnd.map(greenPaintBrushEnd => {
      const newPosition = greenPaintBrushEnd - 1
      cells[newPosition].classList.add('greenPaintBrushEnd')
      return newPosition
    })
    
    if (cells[33].classList.contains('greenPaintBrushFront')){
      greenPaintBrushesEnd = [44]
    } 
    if (cells[38].classList.contains('greenPaintBrushEnd') && !cells[39].classList.contains('eaten-blob')) {
      cells[39].classList.add('pink-blob')
    }
    if (cells[43].classList.contains('greenPaintBrushEnd') && !cells[35].classList.contains('eaten-blob')) {
      cells[35].classList.add('green-blob')
    }

  }, 350)



  let lilacPaintBrushesFront = [12]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('lilacPaintBrushFront'))
    lilacPaintBrushesFront = lilacPaintBrushesFront.map(lilacPaintBrushFront => {
      const newPosition = lilacPaintBrushFront + 1
      cells[newPosition].classList.add('lilacPaintBrushFront')
      return newPosition
    })
    
    if (cells[21].classList.contains('lilacPaintBrushFront')){
      lilacPaintBrushesFront = [12]
    } 
    if (cells[lilacPaintBrushesFront] === cells[artistPosition]) {
      lost()
    }

    if (cells[16].classList.contains('orange-blob' && 'lilacPaintBrushFront')){
      cells[16].classList.remove('orange-blob')
    }
    if (cells[21].classList.contains('green-blob' && 'lilacPaintBrushFront')){
      cells[21].classList.remove('green-blob')
    }

  }, 300)

  let lilacPaintBrushesMiddle = [11]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('lilacPaintBrushMiddle'))
    lilacPaintBrushesMiddle = lilacPaintBrushesMiddle.map(lilacPaintBrushMiddle => {
      const newPosition = lilacPaintBrushMiddle + 1
      cells[newPosition].classList.add('lilacPaintBrushMiddle')
      return newPosition
    })
    
    if (cells[21].classList.contains('lilacPaintBrushFront')){
      lilacPaintBrushesMiddle = [11]
    } 
    if (cells[12].classList.contains('turq-blob' && 'lilacPaintBrushMiddle')){
      cells[12].classList.remove('turq-blob')
    }
    if (cells[lilacPaintBrushesMiddle] === cells[artistPosition]) {
      lost()
    }
  }, 300)

  let lilacPaintBrushesEnd = [10]
  setInterval(() => {
    cells.forEach(cell => cell.classList.remove('lilacPaintBrushEnd'))
    lilacPaintBrushesEnd = lilacPaintBrushesEnd.map(lilacPaintBrushEnd => {
      const newPosition = lilacPaintBrushEnd + 1
      cells[newPosition].classList.add('lilacPaintBrushEnd')
      return newPosition
    })
    
    if (cells[21].classList.contains('lilacPaintBrushFront')){
      lilacPaintBrushesEnd = [10]
    } 

    if (cells[13].classList.contains('lilacPaintBrushEnd') && !cells[12].classList.contains('eaten-blob')) {
      cells[12].classList.add('turq-blob')
    }
    if (cells[17].classList.contains('lilacPaintBrushEnd') && !cells[16].classList.contains('eaten-blob')) {
      cells[16].classList.add('orange-blob')
    }
    if (cells[13].classList.contains('lilacPaintBrushFront') && !cells[21].classList.contains('eaten-blob')) {
      cells[21].classList.add('green-blob')
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
    eatingLightPinkBlob()
    eatingPinkBlob()
    eatingOrangeBlob()
    eatingBlueBlob()
    eatingLilacBlob()
    eatingPurpleBlob()
    eatingGreenBlob()
    eatingTurqBlob()
  }

  function lost() {
    lostAlert.classList.remove('no-show')
    tryAgainBtn.addEventListener('click', handleTryAgain)
    document.removeEventListener('keyup', handleKeyUp)
  }
  
  function handleTryAgain() {
    lostAlert.classList.add('no-show')
    window.location.reload()
  } 

  function collision() {
    if ((cells[artistPosition].classList.contains('pinkPaintBrushFront')) || (cells[artistPosition].classList.contains('pinkPaintBrushMiddleOne')) || (cells[artistPosition].classList.contains('pinkPaintBrushMiddleTwo')) || (cells[artistPosition].classList.contains('pinkPaintBrushEnd')) || (cells[artistPosition].classList.contains('bluePaintBrushFront')) || (cells[artistPosition].classList.contains('bluePaintBrushMiddle')) || (cells[artistPosition].classList.contains('bluePaintBrushEnd')) || (cells[artistPosition].classList.contains('greenPaintBrushFront')) || (cells[artistPosition].classList.contains('greenPaintBrushMiddle')) || (cells[artistPosition].classList.contains('greenPaintBrushEnd')) || (cells[artistPosition].classList.contains('lilacPaintBrushFront')) || (cells[artistPosition].classList.contains('lilacPaintBrushMiddle')) || (cells[artistPosition].classList.contains('lilacPaintBrushEnd'))) {
      lost()
    } return
  
  } 

  document.addEventListener('keyup', handleKeyUp)
  
} 




function eatingLightPinkBlob() {
  if ((cells[artistPosition].classList.contains('lightPink-blob'))) {
    cells[67].classList.remove('lightPink-blob')
    cells[84].classList.remove('lightPink-blob')
    cells[84].classList.add('eaten-blob')
    cells[67].classList.add('eaten-blob')
    const lightPinkSplash = document.createElement('div')
    gridTwo.appendChild(lightPinkSplash)
    lightPinkSplash.classList.add('lightPink')
    handlePlay()
  }
}
function eatingPinkBlob() {
  if ((cells[artistPosition].classList.contains('pink-blob'))) {
    cells[97].classList.remove('pink-blob')
    cells[39].classList.remove('pink-blob')
    cells[97].classList.add('eaten-blob')
    cells[39].classList.add('eaten-blob')
    const pinkSplash = document.createElement('div')
    gridTwo.appendChild(pinkSplash)
    pinkSplash.classList.add('pink')
    handlePlay()
  }
}
function eatingOrangeBlob() {
  if ((cells[artistPosition].classList.contains('orange-blob'))) {
    cells[92].classList.remove('orange-blob')
    cells[16].classList.remove('orange-blob')
    cells[92].classList.add('eaten-blob')
    cells[16].classList.add('eaten-blob')
    const orangeSplash = document.createElement('div')
    gridTwo.appendChild(orangeSplash)
    orangeSplash.classList.add('orange')
    handlePlay()
  }
}
function eatingBlueBlob() {
  if ((cells[artistPosition].classList.contains('blue-blob'))) {
    cells[54].classList.remove('blue-blob')
    cells[59].classList.remove('blue-blob')
    cells[54].classList.add('eaten-blob')
    cells[59].classList.add('eaten-blob')
    const blueSplash = document.createElement('div')
    gridTwo.appendChild(blueSplash)
    blueSplash.classList.add('blue')
    handlePlay()
  }
}
function eatingLilacBlob() {
  if ((cells[artistPosition].classList.contains('lilac-blob'))) {
    cells[63].classList.remove('lilac-blob')
    cells[63].classList.add('eaten-blob')
    const lilacSplash = document.createElement('div')
    gridTwo.appendChild(lilacSplash)
    lilacSplash.classList.add('lilac')
    handlePlay()
  }
}
function eatingPurpleBlob() {
  if ((cells[artistPosition].classList.contains('purple-blob'))) {
    cells[100].classList.remove('purple-blob')
    cells[100].classList.add('eaten-blob')
    const purpleSplash = document.createElement('div')
    gridTwo.appendChild(purpleSplash)
    purpleSplash.classList.add('purple')
    handlePlay()
  }
}
function eatingGreenBlob() {
  if ((cells[artistPosition].classList.contains('green-blob'))) {
    cells[21].classList.remove('green-blob')
    cells[35].classList.remove('green-blob')
    cells[21].classList.add('eaten-blob')
    cells[35].classList.add('eaten-blob')
    const greenSplash = document.createElement('div')
    gridTwo.appendChild(greenSplash)
    greenSplash.classList.add('green')
    handlePlay()
  }
}
function eatingTurqBlob() {
  if ((cells[artistPosition].classList.contains('turq-blob'))) {
    cells[117].classList.remove('turq-blob')
    cells[12].classList.remove('turq-blob')
    cells[117].classList.add('eaten-blob')
    cells[12].classList.add('eaten-blob')
    const turqSplash = document.createElement('div')
    gridTwo.appendChild(turqSplash)
    turqSplash.classList.add('turq')
    handlePlay()
  }
}

startBtn.addEventListener('click', handleStart)

// function eatingOrangeBlob() {
//   if ((cells[artistPosition].classList.contains('orange-blob'))) {
//     gridTwo.classList.add('orange')
//     cells[92].classList.remove('orange-blob')
//     cells[16].classList.remove('orange-blob')
//   }
// }

// function eatingBlueBlob() {
//   if ((cells[artistPosition].classList.contains('blue-blob'))) {
//     gridTwo.classList.add('blue-top')
//   } return

// }

// function eatingTurqBlob() {
//   if ((cells[artistPosition].classList.contains('turq-blob'))) {
//     gridTwo.classList.add('turq-top')
//   } return
// }
// function eatingPurplePaintBlob() {
//   if ((cells[artistPosition].classList.contains('purple-blob'))) {
//     cellsTwo[8].classList.add('purple-splashOne')
//     cellsTwo[9].classList.add('purple-splashTwo')
//     cellsTwo[14].classList.add('purple-splashThree')
//     cellsTwo[15].classList.add('purple-splashFour')
//     cellsTwo[16].classList.add('purple-splashFive')
//   } 
// }

// function eatingGreenPaintBlob() {
//   if ((cells[artistPosition].classList.contains('green-blob'))) {
//     cellsTwo[3].classList.add('green-splashOne')
//     cellsTwo[4].classList.add('green-splashTwo')
//     cellsTwo[5].classList.add('green-splashThree')
//     cellsTwo[9].classList.add('green-splashFour')
//     cellsTwo[10].classList.add('green-splashFive')
//     cellsTwo[11].classList.add('green-splashSix')
//     cellsTwo[15].classList.add('green-splashSeven')
//     cellsTwo[16].classList.add('green-splashEight')
//     cellsTwo[17].classList.add('green-splashNine')
//     cellsTwo[21].classList.add('green-splashTen')
//     cellsTwo[22].classList.add('green-splashEleven')
//     cellsTwo[23].classList.add('green-splashTwelve')
//     cells[21].classList.remove('green-blob')
//     cells[35].classList.remove('green-blob')
//   } 
// }

// function eatingBluePaintBlob() {
//   if ((cells[artistPosition].classList.contains('blue-blob'))) {
//     cellsTwo[1].classList.add('blue-splashOne')
//     cellsTwo[2].classList.add('blue-splashTwo')
//     cellsTwo[6].classList.add('blue-splashThree')
//     cellsTwo[7].classList.add('blue-splashFour')
//     cellsTwo[8].classList.add('blue-splashFive')
//     cellsTwo[12].classList.add('blue-splashSix')
//     cellsTwo[13].classList.add('blue-splashSeven')
//     cellsTwo[14].classList.add('blue-splashEight')
//     cells[54].classList.remove('blue-blob')
//     cells[59].classList.remove('blue-blob')
//   }
// }
// function eatingLightPinkPaintBlob() {
//   if ((cells[artistPosition].classList.contains('lightPink-blob'))) {
//     cellsTwo[0].classList.add('lightPink-splashOne')
//     cellsTwo[1].classList.add('lightPink-splashTwo')
//     cellsTwo[6].classList.add('lightPink-splashFour')
//     cellsTwo[7].classList.add('lightPink-splashFive')
//     cellsTwo[8].classList.add('lightPink-splashSix')
//     cellsTwo[12].classList.add('lightPink-splashSeven')
//     cellsTwo[13].classList.add('lightPink-splashEight')
//     cellsTwo[14].classList.add('lightPink-splashNine')
//     cells[67].classList.remove('lightPink-blob')
//     cells[84].classList.remove('lightPink-blob')
//   }
//   if ((cellsTwo[12].classList.contains('turq-splashOne')) ){
//     cellsTwo[12].classList.remove('lightPink-splashSeven')
//     cellsTwo[12].classList.remove('turq-splashOne')
//     cells[12].classList.add('lightPinkOverTurq-one')
//   }
//   if ((cellsTwo[13].classList.contains('turq-splashTwo'))){
//     cells[12].classList.add('lightPinkOverTurq-two')
//   }
//   if ((cellsTwo[14].classList.contains('turq-splashThree'))){
//     cells[12].classList.add('lightPinkOverTurq-three')
//   }
// }

// function eatingTurqPaintBlob() {
//   if ((cells[artistPosition].classList.contains('turq-blob'))) {
//     cellsTwo[12].classList.add('turq-splashOne')
//     cellsTwo[13].classList.add('turq-splashTwo')
//     cellsTwo[14].classList.add('turq-splashThree')
//     cellsTwo[18].classList.add('turq-splashFour')
//     cellsTwo[19].classList.add('turq-splashFive')
//     cellsTwo[20].classList.add('turq-splashSix')
//   }
// }

// function eatingPinkPaintBlob() {
//   if ((cells[artistPosition].classList.contains('pink-blob'))) {
//     cellsTwo[21].classList.add('pink-splashOne')
//     cellsTwo[22].classList.add('pink-splashTwo')
//     cellsTwo[23].classList.add('pink-splashThree')
//     cellsTwo[27].classList.add('pink-splashFour')
//     cellsTwo[28].classList.add('pink-splashFive')
//     cellsTwo[29].classList.add('pink-splashSix')
//     cellsTwo[33].classList.add('pink-splashSeven')
//     cellsTwo[34].classList.add('pink-splashEight')
//     cellsTwo[35].classList.add('pink-splashNine')
//   }
// }

// function eatingOrangePaintBlob() {
//   if ((cells[artistPosition].classList.contains('orange-blob'))) {
//     cellsTwo[24].classList.add('orange-splashOne')
//     cellsTwo[25].classList.add('orange-splashTwo')
//     cellsTwo[26].classList.add('orange-splashThree')
//     cellsTwo[30].classList.add('orange-splashFour')
//     cellsTwo[31].classList.add('orange-splashFive')
//     cellsTwo[32].classList.add('orange-splashSix')
//   }
// }

// function eatingLilacPaintBlob() {
//   if ((cells[artistPosition].classList.contains('lilac-blob'))) {
//     cellsTwo[15].classList.add('lilac-splashOne')
//     cellsTwo[16].classList.add('lilac-splashTwo')
//     cellsTwo[21].classList.add('lilac-splashThree')
//     cellsTwo[22].classList.add('lilac-splashFour')
//   }
// }


// Events

// Adding paint blobs to playing board

// const canvas = document.createElement('div')
// cells[3].classList.add('canvas')
// cells[7].classList.add('canvas')
// gridOne.appendChild(canvas)

// const lilacPaintBlob = document.createElement('div')
// cells[63].classList.add('lilac-blob')
// gridOne.appendChild(lilacPaintBlob)

// const purplePaintBlob = document.createElement('div')
// cells[100].classList.add('purple-blob')
// gridOne.appendChild(purplePaintBlob)

// const pinkPaintBlob = document.createElement('div')
// cells[39].classList.add('pink-blob')
// cells[97].classList.add('pink-blob')
// cells[12].classList.add('pink-blob')
// gridOne.appendChild(pinkPaintBlob)

// const bluePaintBlob = document.createElement('div')
// cells[59].classList.add('blue-blob')
// cells[54].classList.add('blue-blob')
// gridOne.appendChild(bluePaintBlob)

// const greenPaintBlob = document.createElement('div')
// cells[35].classList.add('green-blob')
// cells[21].classList.add('green-blob')
// gridOne.appendChild(greenPaintBlob)

// const turqPaintBlob = document.createElement('div')
// cells[117].classList.add('turq-blob')
// gridOne.appendChild(turqPaintBlob)

// const orangePaintBlob = document.createElement('div')
// cells[92].classList.add('orange-blob')
// cells[16].classList.add('orange-blob')
// gridOne.appendChild(orangePaintBlob)

// const lightPinkPaintBlob = document.createElement('div')
// cells[67].classList.add('lightPink-blob')
// cells[84].classList.add('lightPink-blob')
// gridOne.appendChild(lightPinkPaintBlob)

// Paint splash on canvas

  // let bluePaintBrushes = [56,55,54]
  // setInterval(() => {
  //   cells.forEach(cell => cell.classList.remove('blue'))
  //   bluePaintBrushes = bluePaintBrushes.map(bluePaintBrush => {
  //     const newPosition = bluePaintBrush + 1
  //     cells[newPosition].classList.add('blue')
  //     return newPosition
  //   })

  //   if (cells[65].classList.contains('blue')){
  //     bluePaintBrushes = [54,55,56]
  //   } 
    // if (cells[59].classList.contains('blue-blob' && 'blue')){
    //   cells[59].classList.remove('blue-blob')
    // }
    // if (!cells[59].classList.contains('blue-blob' && 'blue')){
    //   cells[59].classList.add('blue-blob')
    // }
    // if (cells[63].classList.contains('lilac-blob' && 'blue')){
    //   cells[63].classList.remove('lilac-blob')
    // }
    // if (!cells[63].classList.contains('lilac-blob' && 'blue')){
    //   cells[63].classList.add('lilac-blob')
    // }
  // }, 400)


    // let lilacPaintBrushes = [10,11,12]
  // setInterval(() => {
  //   cells.forEach(cell => cell.classList.remove('lilac'))
  //   lilacPaintBrushes = lilacPaintBrushes.map(lilacPaintBrush => {
  //     const newPosition = lilacPaintBrush + 1
  //     cells[newPosition].classList.add('lilac')
  //     return newPosition
  //   })
    
  //   if (cells[21].classList.contains('lilac')){
  //     lilacPaintBrushes = [10,11,12]
  //   } 
    // if (cells[21].classList.contains('green-blob' && 'lilac')){
    //   cells[21].classList.remove('green-blob')
    // }
    // if (!cells[21].classList.contains('green-blob' && 'lilac')){
    //   cells[21].classList.add('green-blob')
    // }
    // if (cells[12].classList.contains('pink-blob' && 'lilac')){
    //   cells[12].classList.remove('pink-blob')
    // }
    // if (!cells[12].classList.contains('pink-blob' && 'lilac')){
    //   cells[12].classList.add('pink-blob')
    // }
    // if (cells[16].classList.contains('orange-blob' && 'lilac')){
    //   cells[16].classList.remove('orange-blob')
    // }
    // if (!cells[16].classList.contains('orange-blob' && 'lilac')){
    //   cells[16].classList.add('orange-blob')
    // }
  // }, 300)


  // let greenPaintBrushes = [44,43,42]
  // setInterval(() => {
  //   cells.forEach(cell => cell.classList.remove('green'))
  //   greenPaintBrushes = greenPaintBrushes.map(greenPaintBrush => {
  //     const newPosition = greenPaintBrush - 1
  //     cells[newPosition].classList.add('green')
  //     return newPosition
  //   })
    
  //   if (cells[33].classList.contains('green')){
  //     greenPaintBrushes = [44,43,42]
  //   } 
    // if (cells[35].classList.contains('green-blob' && 'green')){
    //   cells[35].classList.remove('green-blob')
    // }
    // if (!cells[35].classList.contains('green-blob' && 'green')){
    //   cells[35].classList.add('green-blob')
    // }
    // if (cells[39].classList.contains('pink-blob' && 'green')){
    //   cells[39].classList.remove('pink-blob')
    // }
    // if (!cells[39].classList.contains('pink-blob' && 'green')){
    //   cells[39].classList.add('pink-blob')
    // }
  // }, 350)

  // let pinkPaintBrushes = [88,87,86,85]
  // setInterval(() => {
  //   cells.forEach(cell => cell.classList.remove('pink'))
  //   pinkPaintBrushes = pinkPaintBrushes.map(pinkPaintBrush => {
  //     const newPosition = pinkPaintBrush - 1
  //     cells[newPosition].classList.add('pink')
  //     return newPosition
  //   })
  //   // console.log(pinkPaintBrushes)
  //   if (cells[77].classList.contains('pink')){
  //     pinkPaintBrushes = [88,87,86,85]
  //   } 
    // if (cells[84].classList.contains('lightPink-blob' && 'pink')){
    //   cells[84].style.display = 'transparent'
    
    // } else if (!cells[84].classList.contains('lightPink-blob' && 'pink')){
    //   cells[84].classList.add('lightPink-blob')
    // } 
    // } else if ((cells[artistPosition].classList.contains('lightPink-blob'))){
    //   cells[67].classList.remove('lightPink-blob')
    //   cells[84].classList.remove('lightPink-blob')
    // } return
  // }, 500)
