const destinationCreator = (() => {
  let counter = 0
  return Destination = class {
    constructor(id, address) {
      this.id = ++counter
      this.address = address
    }
  }
})()
