
// there are two types of plane, one 10 seater, another have 3 cabins
// for each seat sold the ticket price goes up by 5% over original price
// tell user how many tickets are left before price bracket goes up
//

// calculate economy cabin price
// first half price goes up 3
// firstHalfPrice =

// seecond half goes up 5

// last seat 91000

let seatsSold = 0
const PRICE_INCRE_RATE_PER_SEAT = 5

class Cabin {
  constructor (cabinClass, capacity, pricingModel) {
    this.cabinClass = cabinClass
    this.capacity = capacity
    this.pricingModel = pricingModel
    this.availableSeats = capacity
  }
}

const calPercentageOf = (number, percentage) => (number / 100) * percentage
const getPrice = (seatsSold, basePrice, increaseRate) => {
  const totalPerToIncrease = seatsSold * increaseRate
  const price = basePrice + calPercentageOf(basePrice, totalPerToIncrease)
  return price
}

const EconomyPricingModel = new PricingModel(3, 5, 50, 91000)

class PricingModel {
  constructor (firstHalfRate, secondHalfRate, basePrice, lastSeatPrice) {
    this.firstHalfRate = firstHalfRate
    this.secondHalfRate = secondHalfRate
    this.basePrice = basePrice
    this.lastSeatPrice = lastSeatPrice
  }
}

firsthalf = getPrice(seatsSold, basePrice, PRICE_INCRE_RATE_PER_SEAT) + additional 3% of <=


const getEnhancedPrice = (seatsSold, basePrice, increaseRate) => {

}

const processInput = function (currentInput) {
  // [economy | business | first] to [destination] [buy | cancel]
  const commands = currentInput.split(' ')
}
var inputHappened = function (currentInput) {
  seatsSold++
  return getCurrentSeatPrice(seatsSold, 50, PRICE_INCRE_RATE_PER_SEAT)
}
