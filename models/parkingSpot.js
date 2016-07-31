const parkingSpotCreator = (() => {
  let counter = 0
  return ParkingSpot = class {
    constructor(destination, address, distance, price) {
      this.id = ++counter
      this.address = address
      this.distance = distance
      this.price = price
      store.parkingSpots.push(this)
      destination.parkingSpots.push(this)
    }
  }
})()
