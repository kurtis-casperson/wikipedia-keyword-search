const searchButton = document.querySelector('#search')
const inputWord = document.getElementById('#input-word')
let searchUrl =
  'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch='

searchButton.addEventListener('click', (behavior) => {
  //  Prevent the default behaviour
  behavior.preventDefault()

  console.log(inputWord)
})
