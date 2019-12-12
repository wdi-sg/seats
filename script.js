let seatsSoldEconomy = 0;
let seatsSoldBusiness = 0;
let seatsSoldFirst = 0;
let seatsSoldTenSeat = 0

let ticketPriceEconomy = 50
let ticketPriceBusiness = 50
let ticketPriceFirst = 50
let ticketPriceTenSeat = 50

let input = 0
let firstInput

// four functions: check if seat available, if yes, display paid amount
let TenSeatPurchase = function (seatsSoldTenSeat) {
  if (seatsSoldTenSeat >= 11) {
    return "No more seats available"
  }
  return `Your seat cost $${Math.round(ticketPriceTenSeat)} - ${10 - seatsSoldTenSeat} tickets left`
}

let EconomySeatPurchase = function (seatsSoldEconomy) {
  if (seatsSoldEconomy >= 16) {
    return "No more seats available"
  }
  return `Your seat cost $${Math.round(ticketPriceEconomy)} - ${15 - seatsSoldEconomy} tickets left`
}

let BusinessSeatPurchase = function (seatsSoldBusiness) {
  if (seatsSoldBusiness >= 7) {
    return "No more seats available"
  }
  return `Your seat cost $${Math.round(ticketPriceBusiness)} - ${6 - seatsSoldBusiness} tickets left`
}

let FirstSeatPurchase = function (seatsSoldFirst) {
  if (seatsSoldFirst >= 5) {
    return "No more seats available"
  }
  return `Your seat cost $${Math.round(ticketPriceFirst)} - ${4 - seatsSoldFirst} tickets left`
}

// four functions: update ticket cost after purchase
let TenSeatPriceUpdate = function () {
  if (seatsSoldTenSeat >= 1 && seatsSoldTenSeat < 10) {
    ticketPriceTenSeat = ticketPriceTenSeat / 100 * 103
  }
}

let EconomyPriceUpdate = function () {
  if (seatsSoldEconomy === 15) {
    ticketPriceEconomy = 91000
  } else if (seatsSoldEconomy >= 1 && seatsSoldEconomy < 8 && seatsSoldEconomy < 15) {
    ticketPriceEconomy = ticketPriceEconomy / 100 * 103
  } else if (seatsSoldEconomy >= 8 && seatsSoldEconomy < 15) {
    ticketPriceEconomy = ticketPriceEconomy / 100 * 105
  }
}

let BusinessPriceUpdate = function () {
  if (seatsSoldBusiness === 5) {
    ticketPriceBusiness = 91000
  } else if (seatsSoldBusiness >= 1 && seatsSoldBusiness < 3 && seatsSoldBusiness < 6) {
    ticketPriceBusiness = ticketPriceBusiness / 100 * 106
  } else if (seatsSoldBusiness >= 3 && seatsSoldBusiness < 6) {
    ticketPriceBusiness = ticketPriceBusiness / 100 * 110
  }
}

let FirstPriceUpdate = function () {
  if (seatsSoldFirst === 3) {
    ticketPriceFirst = 191000
  } else if (seatsSoldFirst >= 1 && seatsSoldFirst < 4) {
    ticketPriceFirst = ticketPriceFirst / 100 * 115
  }
}

var inputHappened = function (currentInput) {
  // selecting destination
  if (currentInput === "KL" && input === 0) {
    input++
    firstInput = currentInput
    document.querySelector('#input').value = ""
    return `Your ticket costs $${Math.round(ticketPriceTenSeat)} - buy or cancel?`
  } else if (currentInput === "Bali" && input === 0) {
    input++
    firstInput = currentInput
    document.querySelector('#input').value = ""
    return `economy class $${Math.round(ticketPriceEconomy)}, business class $${Math.round(ticketPriceBusiness)}, first class $${Math.round(ticketPriceFirst)} - buy or cancel?`
  }
  // KL and buy
  if (currentInput === "buy" && firstInput === "KL" && input >= 1) {
    seatsSoldTenSeat++
    let ticketPrice = TenSeatPurchase(seatsSoldTenSeat)
    TenSeatPriceUpdate()
    document.querySelector('#input').value = ""
    input = 0
    return ticketPrice
    // Bali and economy
  } else if (currentInput === "buy economy class" && firstInput === "Bali" && input >= 1) {
    seatsSoldEconomy++
    let ticketPrice = EconomySeatPurchase(seatsSoldEconomy)
    EconomyPriceUpdate()
    document.querySelector('#input').value = ""
    input = 0
    return ticketPrice
    // Bali and business
  } else if (currentInput === "buy business class" && firstInput === "Bali" && input >= 1) {
    seatsSoldBusiness++
    let ticketPrice = BusinessSeatPurchase(seatsSoldBusiness)
    BusinessPriceUpdate()
    document.querySelector('#input').value = ""
    input = 0
    return ticketPrice
    // Bali and first
  } else if (currentInput === "buy first class" && firstInput === "Bali" && input >= 1) {
    seatsSoldFirst++
    let ticketPrice = FirstSeatPurchase(seatsSoldFirst)
    FirstPriceUpdate()
    document.querySelector('#input').value = ""
    input = 0
    return ticketPrice
  } else if (currentInput === "cancel" && input >=1) {
    document.querySelector('#input').value = ""
    input = 0
    return `Please choose your Destination - KL / Bali`
  }
}