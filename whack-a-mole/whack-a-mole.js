// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

// 1. need to convert table to an array
// arr[index] are references to the cells

let cellsArr = document.getElementsByTagName('td')

// console.log(cellsArr)

// 2. need to write a function to create random number to select a cell
function createRandomCell() {
  let randomIndex = getRandomInt(0, cellsArr.length - 1)
  let randomCell = cellsArr[randomIndex]
  return randomCell
}
// borrow this from Javascript Cafe
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.ceil(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// 3. need to show the mole when cell is selected
function showTheMole() {
  let cell = createRandomCell()
  let img = document.createElement('img')
  img.id = 'mole'
  img.src = 'mole.PNG'
  cell.appendChild(img)
  img.onclick = whackMole
}
showTheMole()
// 4. onclick() to call a function to remove the mole and add sound effect
// to re-use the code to add the mole to a new random cell

function whackMole(e) {
  let img = e.target
  let mole = document.getElementById('mole')
  mole.remove()
  play()
  anotherMole()
}

function anotherMole() {
  createRandomCell()
  showTheMole()
}

function play() {
  new Audio('whack-Audio.wav').play()
}
