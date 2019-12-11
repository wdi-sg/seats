let seatsSold = 0;
let maxSeats = 10
let ticketPrice = 50

let ticketPriceCalculation = function(seatsSold) {
  if (seatsSold > 0 && seatsSold < 5 && seatsSold < 9) {
    ticketPrice = ticketPrice/100*103
  } else if (seatsSold >= 5 && seatsSold < 9){
    ticketPrice = ticketPrice/100*105
  } else if (seatsSold === 9){
    ticketPrice = 91000
  } else if (seatsSold >= 10) {
    return "No more seats available"
  }
    return `Your seat costs $${ticketPrice}`
}

var inputHappened = function(currentInput){
  let ticketPrice = ticketPriceCalculation(seatsSold)
  seatsSold++
  return ticketPrice
};
