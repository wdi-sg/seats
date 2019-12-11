let seatsSold = 0;
let ticketPrice = 50

let ticketPriceCalculation = function(seatsSold) {
  if (seatsSold > 0) {
    ticketPrice = ticketPrice/100*105
    return ticketPrice
  }
    return ticketPrice
}

var inputHappened = function(currentInput){
  let ticketPrice = ticketPriceCalculation(seatsSold)
  seatsSold++
  return `Your seat costs ${ticketPrice}`
};
