
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

class Plane {
  constructor (destination, cabins) {
    this.destination = destination
    this.cabins = cabins
  }
}

class Cabin {
  constructor (cabinClassName, capacity, pricingModel) {
    this.cabinClassName = cabinClassName
    this.capacity = capacity
    this.pricingModel = pricingModel
    this.availableSeats = capacity
  }

  get seatsSold () {
    return this.capacity - this.seatsSold
  }
}

const calPercentageOf = (number, percentage) => (number / 100) * percentage
const getPrice = (seatsSold, basePrice, increaseRate) => {
  const totalPerToIncrease = seatsSold * increaseRate
  const price = basePrice + calPercentageOf(basePrice, totalPerToIncrease)
  return price
}

class PricingModel {
  constructor (firstHalfRate, secondHalfRate, basePrice, lastSeatPrice) {
    this.firstHalfRate = firstHalfRate
    this.secondHalfRate = secondHalfRate
    this.basePrice = basePrice
    this.lastSeatPrice = lastSeatPrice
  }
}

const EconomyPricingModel = new PricingModel(3, 5, 50, 91000)
const BusinessPricingModel = new PricingModel(6, 10, 50, 9100)
// for first class all seats go up by 15% over original price, not current price
const FirstPricingModel = new PricingModel(15, 15, 50, 191000)

const economyCabin = new Cabin('economy', 15, EconomyPricingModel)
const businessCabin = new Cabin('business', 6, BusinessPricingModel)
const firstCabin = new Cabin('first', 4, FirstPricingModel)

const isHalfOf = (number) => number > calPercentageOf(number, 50)
const isLast = (total, current) => total === current
// user wants to buy 1 economy ticket, current ticket sold = 2
//    if ( isLast(cabin.seatsSold, cabin.capacity) ) rate = pricingModel.lastSeatPrice
//    else if (isHalfOf(cabin.seatsSold)) rate = pricingModel.firstHalfRate
//    else rate = pricingModel.secondHalfRate
// ...priceHePay = getEnhancedPrice(cabin.seatsSold, 50, )

// user wants to buy 1 business ticket,
// .... same

// user wants to buy 1 first class ticket |first half, second half, last seat
//     first half and second half rate based on basePrice

const getEnhancedPrice = (seatsSold, basePrice, baseIncreRate, additionalRate) => {
  const basicPrice = getPrice(seatsSold, basePrice, baseIncreRate)
  const enhancedPrice = basePrice + calPercentageOf(basicPrice, additionalRate)
  return enhancedPrice
}

const processInput = function (currentInput) {
  // [economy | business | first] to [destination] [buy | cancel]
  const commands = currentInput.split(' ')
}
var inputHappened = function (currentInput) {
  seatsSold++
  return getCurrentSeatPrice(seatsSold, 50, PRICE_INCRE_RATE_PER_SEAT)
}
