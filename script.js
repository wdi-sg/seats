console.log("hello script js");

var calculatePriceIncreasedPerSeatSold = function(originalPrice, percentage)
{
    return originalPrice * percentage;
};

var calculateDynamicPriceIncreasedPerSeatSold = function(originalPrice,percentage1,percentage2,priceBand)
{
    switch(priceBand)
    {
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

var calculatePriceMarkUp = function(priceIncrementPerSeatSold, totalSeatsSold) {
    return priceIncrementPerSeatSold * totalSeatsSold;
};


var calculateDynamicPriceMarkUp = function(priceIncrementPerSeatSold, totalSeatsSold, priceBand, lastSeatPrice, originalPrice){
    if (priceBand === "priceBand1" || priceBand === "priceBand2") {
        return priceIncrementPerSeatSold * totalSeatsSold;
    } else {
        return lastSeatPrice - originalPrice;
    }
}

var getPriceBand = function(totalSeatsSold, totalSeats) {
    if (totalSeatsSold >= 0 && totalSeatsSold <= 5 ) {
        return "priceBand1";
    } else if (totalSeatsSold > 5 && totalSeatsSold < (totalSeats - 1) ) {
        return "priceBand2";
    } else {
        return "priceBand3";
    }
};

var calculateLatestPrice = function(originalPrice, priceMarkUp) {
    return originalPrice + priceMarkUp;
};

var ORIGINALPRICE = 50;
var PERCENTAGE = 0.05;
var PERCENTAGE1 = 0.03;
var PERCENTAGE2 = 0.05;
var TOTALSEATS = 11;
var LASTSEATPRICE = 91000;

var totalSeatsSold = 0;
console.log("");

console.log("Original Price: ", ORIGINALPRICE);
console.log("1st Percentage: ", PERCENTAGE1);
console.log("2nd Percentage: ", PERCENTAGE2);
console.log("");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
  console.log("at the start:");
  console.log("totalSeatsSold: ", totalSeatsSold);

  console.log("calculating latest price...")

  var priceBand = getPriceBand(totalSeatsSold, TOTALSEATS);
  console.log("priceBand: ", priceBand);


  var dynamicPriceIncreasedPerSeatSold = calculateDynamicPriceIncreasedPerSeatSold(ORIGINALPRICE, PERCENTAGE1, PERCENTAGE2, priceBand);
  console.log("dynamicPriceIncreasedPerSeatSold: ", dynamicPriceIncreasedPerSeatSold);


  var dynamicPriceMarkUp = calculateDynamicPriceMarkUp(dynamicPriceIncreasedPerSeatSold, totalSeatsSold, priceBand, LASTSEATPRICE, ORIGINALPRICE);
  console.log("dynamicPriceMarkUp: ", dynamicPriceMarkUp);

  var latestPrice = calculateLatestPrice(ORIGINALPRICE, dynamicPriceMarkUp);
  console.log("latestPrice: ", latestPrice);

  totalSeatsSold += 1;
  console.log("at the end:");
  console.log("totalSeatsSold: ", totalSeatsSold);
  console.log("---------------------------------");

  var totalSeatsLeft = TOTALSEATS - totalSeatsSold;
  var displayMessage = "";

  if (totalSeatsLeft <= 0) {
    displayMessage = "The last seat was sold at $" + latestPrice + "!";
  } else {
    displayMessage = "A seat was sold at " + latestPrice + "! Grab your ticket now at $" + "_____" + "! Only " + totalSeatsLeft + " seats left!";
  }

  return displayMessage;
};