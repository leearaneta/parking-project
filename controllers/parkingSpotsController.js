function createParkingSpots(destination) {
  parkingSpotsAdapter(destination)
}
function parkingSpotsAdapter(destination) {
  function render(listings) {
    var src = $("#parking-spots-template").html()
    var template = Handlebars.compile(src)
    var newHTML = template(listings)
    $("#parking-spots").empty().append(newHTML)
  }
  var url = "http://api.parkwhiz.com/search/?lat=" + destination.lat + "&lng=" + destination.lng + "&key=e3d5af6bde7dcce0921112e6e07187a2"
  $.ajax({
    method: 'GET',
    url: url
  }).done(response => {
  // fetch(url, {method: 'get'}).then(res => res.json()).then((json) => {
    var listings = response.parking_listings
    listings.forEach((listing) => {
      debugger
      return $.ajax({
        method: 'GET',
        url: `https://maps.googleapis.com/maps/api/directions/json?origin=${listing.address}&destination=${destination.address}&mode=walking&key=AIzaSyA4X16Aq4qYw7WrqcvZGzdKgeeL26E5irc`
      }).done(function(response){
        debugger
      })
    })
    // fix above code!
    var sortedByPrice = listings.sort((a, b) => a.price - b.price)
    var sortedByDistance = listings.sort((a, b) => a.distance - b.distance)
    listings.forEach(listing => new ParkingSpot(destination, listing.address, listing.distance, listing.price))
    render(listings)
  })
}
