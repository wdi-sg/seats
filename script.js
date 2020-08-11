var emptySeats = 10
var percentagePrice = 1.00
var price = 50

var inputHappened = function(currentInput){
  if (emptySeats > 0){
      emptySeats -= 1
      pricePaid = (price * percentagePrice).toFixed(2)
      percentagePrice += 0.05
      return "you paid " + pricePaid + " dollars for your ticket."
  }
  return "no more empty seats!"

};