var seatCount = 10;
var seatsSold = 0;
var originalPrice = 50;
var nextPrice = originalPrice;
var currentPrice;

var inputHappened = function(currentInput){
  if (seatsSold < seatCount) {
    seatsSold++;
    currentPrice = nextPrice;
    nextPrice = getNextPrice(seatsSold, currentPrice);
    console.log(seatsSold, currentPrice, nextPrice);

    clearInput();
    return `Sold! Your seat cost $${currentPrice}.`;
  }

  clearInput();
  return "Sold out. Try the next flight.";
};

var getNextPrice = function (seatsSold, currentPrice) {
  var lowRate = 0.03;
  var highRate = 0.05;
  var surcharge;

  if (seatsSold < seatCount / 2) {
    surcharge = originalPrice * lowRate;
    return currentPrice + surcharge;
  } else if (seatsSold < seatCount - 1) {
    surcharge = originalPrice * highRate;
    return currentPrice + surcharge;
  }
  return 91000;
}

var clearInput = function () {
  document.getElementById("input").value = "";
}
