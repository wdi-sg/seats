let seatsSold = 0;
let maxSeats = 10
let ticketPrice = 50

let ticketPriceCalculation = function(seatsSold) {
  if (seatsSold > 1 && seatsSold < 6 && seatsSold < 10) {
    ticketPrice = ticketPrice/100*103
  } else if (seatsSold >= 6 && seatsSold < 10){
    ticketPrice = ticketPrice/100*105
  } else if (seatsSold === 10){
    ticketPrice = 91000
  } else if (seatsSold >= 11) {
    return "No more seats available"
  }
    return `Your seat costs $${ticketPrice} - ${10 - seatsSold} tickets left`
}

var inputHappened = function(currentInput){
  seatsSold++
  let ticketPrice = ticketPriceCalculation(seatsSold)
  return ticketPrice
};
