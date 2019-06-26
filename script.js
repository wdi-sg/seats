console.log(`script.js logging initiated`);

const totalSeats = 10;
const originalPrice = 50;
var seatsLeft = 10;
var seatsSold = totalSeats - seatsLeft;
var totalSales = 0;


var inputHappened = function(currentInput){
  var noOfSeatsSold = 1; // set no. of seats sold in one trasaction as 1
  console.log( `input : ${currentInput}` );
  if (seatsLeft > 0) {
    seatPurchased(noOfSeatsSold);
    var currentPrice = calculatePriceOfSeat(seatsSold);
    totalSales = +totalSales + currentPrice;
    display(`The price is ${currentPrice}. ${seatsLeft} seats left. Airline total sales: ${totalSales}`);
  }

};

// Logging the sales of seats, and seats left
var seatPurchased = function(noOfSeatsSold) {
  seatsLeft = seatsLeft - noOfSeatsSold;
  seatsSold = seatsSold + noOfSeatsSold;
  console.log("seats left: " + seatsLeft);
  console.log("seats sold: " + seatsSold);
  display(`${seatsLeft}`);
}

var calculatePriceOfSeat = function(seatsSold) {
  console.log("inside calculatePriceOfSeat" + seatsSold);
  var salesPrice = 50 * ((seatsSold - 1) * 0.05) + 50; // ticket price formula y = 50 ((n - 1) * 0.05 ) + 50;
  return salesPrice;

};



/*
var validInput = function(currentInput) {
  if (currentInput === "buy") {
    return true;
  } else {
    return false;
  }
};
*/
