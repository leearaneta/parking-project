function destinationsListener() {
  $("#destination-form").submit(() => {
    debugger
    event.preventDefault()
    createDestination()
  })
}

$(document).ready(() => {
  destinationsListener()
})
