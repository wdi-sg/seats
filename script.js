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

// calculateDynamicPriceIncrementPerSeatSold
// purpose:
// calculate the price increment for every seat sold, depending on the price band
// business logic:
// depending on the price band, the price increment is different
// price band 1: priceIncrementPerSeatSold = originalPrice * 3%
// price band 2: priceIncrementPerSeatSold = originalPrice * 5%
// price band 3: priceIncrementPerSeatSold = 0
// function signature:
// originalPrice(number),percentage(number),priceBand(string)--->priceIncrementPerSeatSold(number)
var calculateDynamicPriceIncrementPerSeatSold = function(originalPrice,percentage1,percentage2,priceBand){
    switch(priceBand) {
        case "priceBand1":
            return originalPrice * percentage1;
        case "priceBand2":
            return originalPrice * percentage2;
        case "priceBand3":
            return 0;
        default:
            console.log("error - invalid price band");
            break;
    }
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

// calculateDynamicPriceMarkUp
// purpose:
// calculate the price mark up, depending on the price band at the point of purchase
// business logic:
// the dynamic part of the price mark up is due to the price bands
// for price band 1:
// priceIncrementPerSeatSoldPriceBand1 = originalPrice * percentagePriceBand1
// priceMarkUpPriceBand1 = priceIncrementPerSeatSoldPriceBand1 * totalSeatsSold
// for price band 2:
// priceIncrementPerSeatSoldPriceBand1 = originalPrice * percentagePriceBand2
// priceMarkUpPriceBand2 = priceIncrementPerSeatSoldPriceBand2 * totalSeatsSold
// for price band 3:
// priceMarkUpPriceBand3 = ridiculousPrice - originalPrice
// function signature:
// priceBand(string)--->priceMarkUp(number)
// example:
// var priceMarkUp = calculateDynamicPriceMarkUp("priceBand1");


// getPriceBand
// purpose:
// check the price band that should be used
// business logic
// there are 3 price bands:
// price band 1 - when the total seats sold is less than half of the total seats available
// at this price band, the price mark up is lower due to the lower percentage of 3%
// price band 2 - when the total seats sold is more than half of the total seats available
// at this price band, the price mark up is higher due to the higher percentage of 5%
// price band 3 - when there is only 1 seat left, the price mark up is set to a ridiculously high value
// for the case of 10 seats,
// to qualify for price band 1 : total no. of seats sold = 0 seat sold to 5 seats sold
// to qualify for price band 2 : total no. of seats sold = 6 seats sold to 9 seats sold
// the last seat (10th seat) will be sold at a ridiculous price of 91000
// function signature
// totalSeatsSold (number),TOTALSEATS(number)---> priceBand(string)
// example:
// getPriceBand(totalSeatsSold, totalSeats);
// var priceBand = getPriceBand(0, 10); // returns "priceBand1"
// var priceBand = getPriceBand(6, 10); // returns "priceBand2"
// var priceBand = getPriceBand(9, 10); // returns "priceBand3"
var getPriceBand = function(totalSeatsSold, totalSeats) {
    if (totalSeatsSold >= 0 && totalSeatsSold <= 5 ) {
        return "priceBand1";
    } else if (totalSeatsSold > 5 && totalSeatsSold < (totalSeats - 1) ) {
        return "priceBand2";
    } else {
        return "priceBand3";
    }
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
var ORIGINALPRICE = 50;
var PERCENTAGE = 0.05;
var PERCENTAGE1 = 0.03;
var PERCENTAGE2 = 0.05;
var TOTALSEATS = 10;

// tracking variables to keep track of the overall status of seats sold
var totalSeatsSold = 0;
console.log("*******************************************************");
var priceIncrementPerSeatSold = calculatePriceIncrementPerSeatSold(ORIGINALPRICE, PERCENTAGE);
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

  // calculate dynamic price mark up
  // get the price band /
  var priceBand = getPriceBand(totalSeatsSold, TOTALSEATS);
  console.log("priceBand: ", priceBand);

  var dynamicPriceIncrementPerSeatSold = calculateDynamicPriceIncrementPerSeatSold(ORIGINALPRICE, PERCENTAGE1, PERCENTAGE2, priceBand);
  console.log("dynamicPriceIncrementPerSeatSold: ", dynamicPriceIncrementPerSeatSold);
  // calculate the latest price
  var latestPrice = calculateLatestPrice(ORIGINALPRICE, priceMarkUp);
  console.log("latestPrice: ", latestPrice);
  // when inputHappened function is called, a seat is considered to be sold
  // increase totalSeatsSold by 1
  totalSeatsSold += 1;
  console.log("at the end");
  console.log("totalSeatsSold: ", totalSeatsSold);
  console.log("---------------------------------");

  var totalSeatsLeft = TOTALSEATS - totalSeatsSold;
  var displayMessage = "";

  if (totalSeatsLeft <= 0) {
    displayMessage = "No more seats left";
  } else {
    displayMessage = "A seat has been sold! Grab your ticket now at $" + latestPrice + "! Only " + totalSeatsLeft + " seats left!";
  }

  return displayMessage;
};

// requirements satisfied
// working on further requirements 1