var seatCount = 10;
var seatsSold = 0;
var originalPrice = 50;
var nextPrice = originalPrice;
var currentPrice;

var surchargeRate = 0.05;
var surcharge = originalPrice * surchargeRate;

var inputHappened = function(currentInput){
  if (seatsSold < seatCount) {
    seatsSold++;
    currentPrice = nextPrice;
    nextPrice += surcharge;
    console.log(seatsSold, currentPrice, nextPrice);

    clearInput();
    return `Sold! Your seat cost $${currentPrice}.`;
  }

  clearInput();
  return "Sold out. Try the next flight.";
};

var clearInput = function () {
  document.getElementById("input").value = "";
}
