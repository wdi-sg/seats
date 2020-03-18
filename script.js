
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

const calPercentageOf = (number, percentage) => (number / 100) * percentage
const getCurrentSeatPrice = (seatsSold, basePrice, increaseRate) => {
  const totalPerToIncrease = seatsSold * increaseRate
  const price = basePrice + calPercentageOf(basePrice, totalPerToIncrease)
  return price
}

const processInput = function (currentInput) {
  // [economy | business | first] to [destination] [buy | cancel]
  const commands = currentInput.split(' ')
}
var inputHappened = function (currentInput) {
  seatsSold++
  return getCurrentSeatPrice(seatsSold, 50, 5)

}
