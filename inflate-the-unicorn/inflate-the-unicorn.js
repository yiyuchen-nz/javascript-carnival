// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// array AllUnicorns = [0, 1, 2]
let allUnicorns = document.getElementsByClassName('inflate-an-image')
//console.log(allUnicorns)

// set up onclick for each unicorns in the array
for (i = 0; i < allUnicorns.length; i++) {
  allUnicorns[i].onclick = inflating
}

function inflating(e) {
  let allUnicorns = e.target

  if (allUnicorns.src.match('images/unicorn-0.png')) {
    allUnicorns.src = 'images/unicorn-1.png'
  } else if (allUnicorns.src.match('images/unicorn-1.png')) {
    allUnicorns.src = 'images/unicorn-2.png'
  } else if (allUnicorns.src.match('images/unicorn-2.png')) {
    allUnicorns.src = 'images/unicorn-3.png'
  } else if (allUnicorns.src.match('images/unicorn-3.png')) {
    alert('Unicorn Number ' + e.target.id + ' says thank you!')
  } else {
    allUnicorns.src = 'images/unicorn-0.png'
  }
}
