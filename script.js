console.log("hello script js");

var numberSold = 10
var seatPrice = 50
//+2.5 every time a seat is sold

var firstHalfPriceIncrease = 1.03
var secondHalfPriceIncrease = 1.05
var beforeFirstIncrease = 5
var beforeSecondIncrease = 4


var inputHappened = function(currentInput){
  console.log( currentInput );
  if(numberSold === 10 ){
    numberSold--;
    beforeFirstIncrease--
//    seatPrice = seatPrice + priceIncrease;
    return "Price: " + seatPrice + "\n" + "Seats left: " + numberSold + "\n" + "Seats before price increase: " + beforeFirstIncrease;
  }else if(numberSold >= 6){
    numberSold--;
    beforeFirstIncrease--;
    seatPrice = seatPrice * firstHalfPriceIncrease;
    return "Price: " + Math.round(seatPrice) + "\n" + "Seats left: " + numberSold + "\n" + "Seats before price increase: " + beforeFirstIncrease;
  }else if(numberSold >=2){
    numberSold--;
    beforeSecondIncrease--;
    seatPrice = seatPrice * secondHalfPriceIncrease;
    return "Price: " + Math.round(seatPrice) + "\n" + "Seats left: " + numberSold + "\n" + "Seats before price increase: " + beforeSecondIncrease;
  }else if(numberSold === 1){
    numberSold--;
    beforeSecondIncrease--;
    seatPrice = 91000
    return "Price: " + seatPrice + "\n" + "Seats left: " + numberSold;
  }else
  return "Sold Out";

};