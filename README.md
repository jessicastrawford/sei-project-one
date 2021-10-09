# SEI Project One, Create Your Own Canvas.

# Table of contents 
* [Project Overview](#project-overview)
* [Brief](#brief) 
* [Technologies Used](#technologies-used)
* [Approach Taken](#approach-taken)
* [Wins](#wins)
* [Challenges](#challenges)
* [Bugs](#bugs)
* [Key Learnings](#key-learnings)
* [Future Content](#future-content-what-would-i-like-to-add-if-i-had-more-time) 

# Project Overview

The game has been deployed with GitHub Pages and is available [here](https://jessicastrawford.github.io/sei-project-one/), or you can click on the video below to view a short preview of the game below. 

[<img width="797" alt="Screenshot 2021-10-08 at 11 40 09" src="https://user-images.githubusercontent.com/83759837/136542818-0f0aa0f4-439b-480c-83bb-f15e85a13eda.png" href="https://www.youtube.com/watch?v=TjqANGfr02U">](https://www.youtube.com/watch?v=TjqANGfr02U)

An artist twist on the classic arcade game, Frogger. The aim of the game is to get to the other side of the board, eating the paint blobs as you travel up the board. By eating the coloured paint blobs you create a paint splash on an opposing board of the relevant colour. The player must avoid the moving paintbrushes otherwise they lose the game and the artwork they had created.

# Brief

A solo project to build a functioning browser game with pure JavaScript in 8 days.

Deployed project: [Click here](https://jessicastrawford.github.io/sei-project-one/). 

# Technologies Used

* HTML5 with HTML5 audio
* CSS3
* JavaScript (ES6)
* Git
* GitHub
* VS Code with Eslint
* Firefox Dev Tools
* Exciladraw
* Photoshop
* Slack

# Approach Taken

__Planning:__

I started the project by planning out my MVP and stretch goals, along with a visual sketch of my grids in Exciladraw. 

![Paint Froggie (2)](https://user-images.githubusercontent.com/83759837/136547286-ee21e836-df64-41d0-951c-2f890b51b568.png)

__Stages:__

* The first step was to create keyboard movement for my artist with a switch statement. This was where I came across my first bug, if you clicked the start button twice the artist moved around the board two divs at a time, if you click the button three times, he moves three divs at a time etc. A way around this was to create a boolean for whether the player was playing or not and add this into my switch statement. I declared a let variable for isPlaying to be set to false before the player had clicked the start button. Once the player has then clicked this button this then would change the variable to become true and start the game.

```javascript
function addArtist() {
cells[artistPosition].classList.add(artistClass)
}

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

```

* My next step was to add the paint blobs onto the playing board and to create the moving blocks with collisions. I wanted my moving blocks to sit on top of the paint blobs as they moved over them and I managed this by removing and adding classes as the block moved over it.

```javascript
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
[image:32108741-36CD-4EE1-91A0-A75D85A8746E-575-00000068C83617A0/screenshot_2021-07-19_at_18.23.09.png]
if (cells[63].classList.contains('lilac-blob' && 'blue')){
cells[63].classList.remove('lilac-blob')
}
if (!cells[63].classList.contains('lilac-blob' && 'blue')){
cells[63].classList.add('lilac-blob')
}
}, 400)
```
* The next stage was to then create the paint splashes that occur when you have eaten the paint blob. This was where most of my challenges led.

* I started off with the idea of creating a grid and breaking up each paint splash into squares. For example the green blob covers divs 4, 5, 9, 10, 11, 15, 16 and so on. The idea behind this was that I only needed to worry about the overlay of splashes on certain divs. However this did not work as well as I had hoped and I found it difficult adding the classes onto the divs and overlaying them.

<img width="418" alt="Screenshot 2021-07-19 at 18 23 09" src="https://user-images.githubusercontent.com/83759837/136548272-da3b0e68-607b-47f8-84bc-a995bc870cd6.png">

* What kept happening was that when you added a new class to a div that already had a class, for example in the image below div 12 already had a class of blue but when the class of pink was added to it, the class of blue was removed.

![Screenshot 2021-07-20 at 15 59 47](https://user-images.githubusercontent.com/83759837/136548630-6d4982af-9b25-45f1-9e04-e61932ac3211.png)

*  I then decided to experiment with z-indexes and this worked well however I needed to change my grid from being 35 divs into one single div as this would get very complicated, as there would be lots of different overlaying scenarios for each div. For example div 20 has pink, blue, turquoise and purple overlapping one another, this would have 16 different overlay options.

![Screen Shot 2021-07-20 at 4 18 51 PM](https://user-images.githubusercontent.com/83759837/136548687-577e4eab-0736-4862-b49f-6f46acb4f542.png)

```javascript
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
```
* I then styled each splash in CSS to give it its correct position on the canvas.

# Wins

The biggest win was that this was my first project I have built, and it works! I really enjoyed this project as it helped me to really understand JavaScript and the use of classes and functions. I am really proud of how this project looks visually and I enjoyed working in CSS.

# Challenges

I came across a few challenges in the project, the biggest being the paint splashes. I feel I perhaps rushed into coding and didn’t think hard enough about my planning for how the paint splashes would work. My initial idea of having each splash cut up over multiple divs was a very long winded way around this and perhaps I would have found this out with further planning at the beginning stages.

# Bugs

I do still have a few bugs in this project which I have noticed since deployment. If I leave the game running for a couple of minutes, some of the paintbrushes lose a class in the middle and have a whitespace gap. 

# Key Learnings

It was great fun to put into practice how much I have learnt during the first three weeks of the course. I have learnt alot from this project and the importance of in depth planning. 

# Future Content: What would I like to add if I had more time

* Add a colour selector option where the player can select a colour scheme for the paint blobs, for example a primary colour scheme, pastel colour scheme and a reds/blues/greens etc colour schemes.

* I liked the idea of once the player has completed the game and created their artwork that they were then able to have the option to save it. At this stage of the course I think this would have been a challenge but I really liked the idea.

* Experiment with changing the directions the character is facing when moving across the board. 


