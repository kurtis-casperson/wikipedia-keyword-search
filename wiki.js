const searchButton = document.querySelector('#search')

searchButton.addEventListener('click', (behavior) => {
  //  Prevent the default behaviour
  behavior.preventDefault()
  console.log('button pressed')
})
