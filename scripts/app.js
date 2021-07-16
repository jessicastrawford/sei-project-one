
// Dom Elements 
const gridOne = document.querySelector('.grid-one')
const gridTwo = document.querySelector('.grid-two')
const startBtn = document.querySelector('#start')

// Grid Variables 
const width = 11
const cellCount = width * width
const cells = []

// Game Variables
const artistClass = 'artist'
let artistPosition = 115
let isPlaying = false 

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
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.textContent = i
    gridTwo.appendChild(cell)
    cells.push(cell)
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

function handleStart(){

  let currentIndex = 87
  setInterval(() => {
    cells[currentIndex].classList.add('pink')
    currentIndex --
  }, 500)

  // want to say if the number of cells with a class of pink > 3 then delete the class of pink from the start, do you use a for loop?
  // - Stop adding classes after 1.5 seconds (1500)



  console.log('start')
  addArtist()
  if (isPlaying) return
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



  }
  document.addEventListener('keyup', handleKeyUp)

}




// Events

startBtn.addEventListener('click', handleStart)





// function handlePlay() {
//   if (cells[artistPosition] === 3 || 7){
//     alert('Sorry you got hit, game over!')
//     window.location.reload() 
//   } else {
//     console.log('Keep playing')
//   } 
//   }
//   handlePlay()


// function handleEnd() {
//   if() {
//     cells[artistPosition] === 3 || 7 
//     console.log('You win')
//   }
//   }

//   handleEnd()

// function handleEnd(){
//   if(artistPosition = 0 || 7) {
//     console.log('You Win!!')
//   }
// }
// handleEnd()

  // if (cells[artistPosition] === 3 || 7){
     //   alert('Sorry you got hit, game over!')
      //   window.location.reload() 
      // } else {
      //   console.log('Keep playing')
      // } 
      
      // handlePlay()