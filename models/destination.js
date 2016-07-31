const destinationCreator = (() => {
  let counter = 0
  return Destination = class {
    constructor(address, lat, lng) {
      this.id = ++counter
      this.address = address
      this.lat = lat
      this.lng = lng
      this.parkingSpots = []
      store.destinations.push(this)
    }
  }
})()
