const destinationCreator = (() => {
  let counter = 0
  return Destination = class {
    constructor(address) {
      this.id = ++counter
      this.address = address
      store.destinations.push(this)
    }
  }
})()
