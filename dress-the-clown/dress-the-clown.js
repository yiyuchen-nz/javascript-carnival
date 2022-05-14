// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')
//console.log(head, body, shoes)

let headIndex = 0
let bodyIndex = 0
let shoesIndex = 0
let clownBodyParts = 0 //kind of creepy here

// write a function to change the clothes

function toRight() {
  if (clownBodyParts == 0) {
    if (headIndex == 5) {
      headIndex = 0
    } else {
      head.src = 'images/head' + headIndex + '.png'
      headIndex++
    }
  } else if (clownBodyParts == 1) {
    if (bodyIndex == 5) {
      bodyIndex = 0
    } else {
      body.src = 'images/body' + bodyIndex + '.png'
      bodyIndex++
    }
  } else if (clownBodyParts == 2) {
    if (shoesIndex == 5) {
      shoesIndex = 0
    } else {
      shoes.src = 'images/shoes' + shoesIndex + '.png'
      shoesIndex++
    }
  }
}

function toLeft() {
  if (clownBodyParts == 0) {
    if (headIndex == 0) {
      headIndex = 5
    } else {
      head.src = 'images/head' + headIndex + '.png'
      headIndex--
    }
  } else if (clownBodyParts == 1) {
    if (bodyIndex == 0) {
      bodyIndex = 5
    } else {
      body.src = 'images/body' + bodyIndex + '.png'
      bodyIndex--
    }
  } else if (clownBodyParts == 2) {
    if (shoesIndex == 0) {
      shoesIndex = 5
    } else {
      shoes.src = 'images/shoes' + shoesIndex + '.png'
      shoesIndex--
    }
  }
}

// write a function to shift between body parts

function goUp() {
  if (clownBodyParts == 0) {
    clownBodyParts = 2
  } else {
    clownBodyParts--
  }
}
function goDown() {
  if (clownBodyParts == 2) {
    clownBodyParts = 0
  } else {
    clownBodyParts++
  }
}

// write a function to assign functions to arrow keys

document.onkeydown = arrowKeys

function arrowKeys(e) {
  e = e
  if (e.keyCode == '37') {
    toLeft()
  } else if (e.keyCode == '39') {
    toRight()
  } else if (e.keyCode == '38') {
    goUp()
  } else if (e.keyCode == '40') {
    goDown()
  }
}
