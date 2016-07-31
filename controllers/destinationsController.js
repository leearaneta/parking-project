function createDestination() {
  var address = $("#destination").val()
  destinationsAdapter(address).done(() => {
    var destination = store.destinations[store.destinations.length - 1]
    // the above needs to be fixed.  destinationsAdapter(address) needs to return destination as opposed to response object
    createParkingSpots(destination)
  })
}

function destinationsAdapter(address) {
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDEsYgk8H0XMACDf4Wk4SxW4P05UQkZmXY"
  return $.ajax({
    method: "GET",
    url: url
  }).done(response => {
    var location = response.results[0].geometry.location
    new Destination(address, location.lat, location.lng)
  })
}
