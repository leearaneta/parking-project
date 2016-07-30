function destinationsListener() {
  $("#destination-form").submit(() => {
    event.preventDefault()
    createDestination()
  })
}

$(document).ready(() => {
  destinationsListener()
})
