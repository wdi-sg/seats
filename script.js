var totalSeats = 10
var emptySeats = totalSeats
var percentagePrice = 1.00
var price = 50
var seatsLeft = emptySeats - totalSeats/2 -1



var inputHappened = function(currentInput){
   if (emptySeats == 1) {
    emptySeats -= 1
    return "You paid $91000. You bought the last seat."
  } else if (emptySeats == 0) {
    return "There are no more empty seats!"
  } else if (emptySeats > totalSeats/2 && emptySeats < totalSeats){
      percentagePrice += 0.03
      seatsLeft = emptySeats - totalSeats/2 - 1
  } else if(emptySeats <= totalSeats/2 && emptySeats > 1){
    percentagePrice += 0.05
    seatsLeft = emptySeats - 2
  }
  emptySeats -= 1
  var pricePaid = (percentagePrice*price).toFixed(2)
  console.log(emptySeats)
  return `You paid ${pricePaid}. There are ${seatsLeft} seats left till the next pricing bracket.`

};