var seatCount = 10;
var seatsSold = 0;
var originalPrice = 50;
var nextPrice = originalPrice;
var currentPrice;

var inputHappened = function(currentInput){
  if (seatsSold < seatCount) {
    clearInput();
    return sellSeat();
  }
  clearInput();
  return "Sold out. Try the next flight.";
};

var sellSeat = function () {
  console.log("before", seatsSold, currentPrice, nextPrice);
  seatsSold++;
  currentPrice = nextPrice;
  nextPrice = getNextPrice(seatsSold, currentPrice);
  cheapSeatsLeft = getCheapSeats(seatsSold);
  console.log("after", seatsSold, currentPrice, nextPrice);
  if (seatsSold === seatCount) {
    return `Sold! Your seat cost $${currentPrice}, as the last seat.`;
  }
  return `Sold! Your seat cost $${currentPrice.toFixed(2)}. ${cheapSeatsLeft} more seats before rates increase.`;
}

var getNextPrice = function (seatsSold, currentPrice) {
  var lowRate = 1.03;
  var highRate = 1.05;

  if (seatsSold < seatCount / 2) {
    return currentPrice * lowRate;
  } else if (seatsSold < seatCount - 1) {
    return currentPrice * highRate;
  }
  return 91000;
}

var getCheapSeats = function (seats) {
  // if (seatsSold === seatCount - 1) {
  //   return 0;
  // }

  return seatsSold < seatCount / 2 ? seatCount / 2 - seatsSold : seatCount - seatsSold - 1;
}

var clearInput = function () {
  document.getElementById("input").value = "";
}
