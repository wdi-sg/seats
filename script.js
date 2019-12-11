let seatsSoldEconomy = 0;
let seatsSoldBusiness = 0;
let seatsSoldFirst = 0;
let ticketPriceEconomy = 50
let ticketPriceBusiness = 50
let ticketPriceFirst = 50

let EconomyTicketPriceCalculation = function(seatsSoldEconomy) {
  if (seatsSoldEconomy > 1 && seatsSoldEconomy < 8 && seatsSoldEconomy < 15) {
    ticketPriceEconomy = ticketPriceEconomy/100*103
  } else if (seatsSoldEconomy >= 8 && seatsSoldEconomy < 15){
    ticketPriceEconomy = ticketPriceEconomy/100*105
  } else if (seatsSoldEconomy === 15){
    ticketPriceEconomy = 91000
  } else if (seatsSoldEconomy >= 16) {
    return "No more seats available"
  }
    return `Your seat costs $${Math.round(ticketPriceEconomy)} - ${15 - seatsSoldEconomy} tickets left`
}

let BusinessTicketPriceCalculation = function(seatsSoldBusiness) {
  if (seatsSoldBusiness > 1 && seatsSoldBusiness < 3 && seatsSoldBusiness < 6) {
    ticketPriceBusiness = ticketPriceBusiness/100*106
  } else if (seatsSoldBusiness >= 3 && seatsSoldBusiness < 6){
    ticketPriceBusiness = ticketPriceBusiness/100*110
  } else if (seatsSoldBusiness === 6){
    ticketPriceBusiness = 91000
  } else if (seatsSoldBusiness >= 7) {
    return "No more seats available"
  }
    return `Your seat costs $${Math.round(ticketPriceBusiness)} - ${6 - seatsSoldBusiness} tickets left`
}

let FirstTicketPriceCalculation = function(seatsSoldFirst) {
  if (seatsSoldFirst > 1 && seatsSoldFirst < 2 && seatsSoldFirst < 4) {
    ticketPriceFirst = ticketPriceFirst/100*115
  } else if (seatsSoldFirst >= 2 && seatsSoldFirst < 4){
    ticketPriceFirst = ticketPriceFirst/100*115
  } else if (seatsSoldFirst === 4){
    ticketPriceFirst = 191000
  } else if (seatsSoldFirst >= 5) {
    return "No more seats available"
  }
    return `Your seat costs $${Math.round(ticketPriceFirst)} - ${4 - seatsSoldFirst} tickets left`
}

var inputHappened = function(currentInput){
  if (currentInput === "buy economy class") {
    seatsSoldEconomy++
    let ticketPrice = EconomyTicketPriceCalculation(seatsSoldEconomy)
    document.querySelector('#input').value = ""
    return ticketPrice
  } else if (currentInput === "buy business class") {
    seatsSoldBusiness++
    let ticketPrice = BusinessTicketPriceCalculation(seatsSoldBusiness)
    document.querySelector('#input').value = ""
    return ticketPrice
  } else if (currentInput === "buy first class") {
    seatsSoldFirst++
    let ticketPrice = FirstTicketPriceCalculation(seatsSoldFirst)
    document.querySelector('#input').value = ""
    return ticketPrice
  }
};
