// calculatePriceIncrementPerSeatSold
// purpose:
// calculate the price increment for every seat sold
// business logic:
// whenever a seat is sold, the price increases by a percentage over the original price
// price increment per seat sold = original price x percentage
// function signature:
// originalPrice(number),percentage(number)--> priceIncrementPerSeatSold(number)
// example:
// calculatePriceIncrementPerSeatSold(originalPrice,percentage);
// var priceIncrementPerSeatSold = calculatePriceIncrementPerSeatSold(50, 0.05) = 2.50
var calculatePriceIncrementPerSeatSold = function(originalPrice, percentage){
    return originalPrice * percentage;
};


// calculatePriceMarkUp
// purpose:
// calculate the price mark up, depending on the total number of seats sold
// business logic:
// the price mark up is not constant, it depends on the number of seats sold ( or seats left, which is total seat - seats sold)
// price mark up = price increment per seat sold x total seats sold
// function signature:
// priceIncrementPerSeatSold(number),totalSeatsSold(number)----> price mark up (number)
// example:
// calculatePriceMarkUp(priceIncrementPerSeatSold,totalSeatsSold)
// var priceMarkUp = calculatePriceMarkUp(2.50,0) = 0 // no markup when no seat is sold
// var priceMarkUp = calculatePriceMarkUp(2.50,1) = 2.50 // mark up of 2.50 when 1 seat is sold
// var priceMarkUp = calculatePriceMarkUp(2.50,2) = 5.00 // mark up of 5.00 when 2 seats are sold
var calculatePriceMarkUp = function(priceIncrementPerSeatSold, totalSeatsSold) {
    return priceIncrementPerSeatSold * totalSeatsSold;
};

// calculateLatestPrice
// purpose:
// calculate the latest price of a seat
// business logic:
// the latest price of a seat = original price + price mark up
// function signature
// originalPrice(number),priceMarkUp(number)--->latestPrice(number)
// example:
// calculateLatestPrice(originalPrice, priceMarkUp)
// var latestPrice = calculateLatestPrice(50,0) = 50 //no mark up
// var latestPrice = calculateLatestPrice(50,2.50)=52.50 // mark up of 2.50
// var latestPrice = calculateLatestPrice(50,5.00)=55.00 // mark up of 5.00
var calculateLatestPrice = function(originalPrice, priceMarkUp) {
    return originalPrice + priceMarkUp;
};

// constant variables (given on the first part of the assignment)
var ORIGINALPRICE = 50
var PERCENTAGE = 0.05
// var TOTALSEATS = 10

// tracking variables to keep track of the overall status of seats sold
var totalSeatsSold = 0;
var priceIncrementPerSeatSold = calculatePriceIncrementPerSeatSold(ORIGINALPRICE, PERCENTAGE);
console.log("*******************************************************");
console.log("ORIGINALPRICE: ", ORIGINALPRICE);
console.log("PERCENTAGE: ", PERCENTAGE);
console.log("priceIncrementPerSeatSold: ", priceIncrementPerSeatSold);
console.log("*******************************************************");

var inputHappened = function(currentInput){
  // console.log(currentInput);
  console.log("at the start:");
  console.log("totalSeatsSold: ", totalSeatsSold);

  console.log("calculating latest price...")

  // calculate the price mark up
  var priceMarkUp = calculatePriceMarkUp(priceIncrementPerSeatSold, totalSeatsSold);
  console.log("priceMarkUp: ", priceMarkUp);

  // calculate the latest price
  var latesPrice = calculateLatestPrice(ORIGINALPRICE, priceMarkUp);
  console.log("latesPrice: ", latesPrice);
  // when inputHappened function is called, a seat is considered to be sold
  // increase totalSeatsSold by 1
  totalSeatsSold += 1;
  console.log("at the end");
  console.log("totalSeatsSold: ", totalSeatsSold);
  console.log("---------------------------------")
  return "a seat is sold";
};