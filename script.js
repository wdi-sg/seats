console.log(`script.js logging initiated`);

const totalSeats = 10;
const originalPrice = 50;
const lastSeatPrice= 91000;
var seatsLeft = 10;
var seatsSold = totalSeats - seatsLeft;
var totalSales = 0;


// Main Function to coordinate the sequence of processes
var inputHappened = function(currentInput){
  // set no. of seats sold in one trasaction as 1, could be extended in future application if user can choose to buy more than 1 ticket.
  console.log( `input : ${currentInput}` );
  var noOfSeatsSold = 1;
  if (seatsLeft > 0) {
    seatPurchased(noOfSeatsSold);
    //var currentPrice = calculatePriceOfSeat(seatsSold);
    var currentPrice = calculatePriceOfSeat2(seatsSold);
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

/*
var calculatePriceOfSeat = function(seatsSold) {
  console.log("inside calculatePriceOfSeat" + seatsSold);
  var salesPrice = 50 * ((seatsSold - 1) * 0.05) + 50; // ticket price formula y = 50 ((n - 1) * 0.05 ) + 50;
  return salesPrice;

}; */

var calculatePriceOfSeat2 = function(seatsSold) {
  console.log("inside calculatePriceOfSeat2" + seatsSold);
  var salesPrice;
  var interest1 = 0.03;
  var interest2 = 0.05;
  if (seatsSold === 1) {
    salesPrice = originalPrice;
  } else if (seatsSold > 1 && seatsSold < 6) {
    salesPrice = 50 * ((seatsSold - 1) * interest1) + 50;
  } else if (seatsSold > 5 && seatsSold < 10){
    salesPrice = (50 * ((5 - 1) * interest1) + 50) + (50 * ((seatsSold - 5) * interest2));
  } else {
    salesPrice = lastSeatPrice;
  }
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
