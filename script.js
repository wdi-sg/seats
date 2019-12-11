console.log("hello script js");

var numberSold = 1
var seatPrice = 50
//+2.5 every time a seat is sold

var firstHalfPriceIncrease = 1.5
var secondHalfPriceIncrease = 2.5

var inputHappened = function(currentInput){
  console.log( currentInput );
  if(numberSold === 1 ){
    numberSold++;
//    seatPrice = seatPrice + priceIncrease;
    return "Price: " + seatPrice + "\n" + "Seats left: " + numberSold;
  }else if(numberSold <= 5){
    numberSold++
    seatPrice = seatPrice + firstHalfPriceIncrease;
    return "Price: " + seatPrice + "\n" + "Seats left: " + numberSold;
  }else if(numberSold <= 9){
    numberSold++
    seatPrice = seatPrice + secondHalfPriceIncrease;
    return "Price: " + seatPrice + "\n" + "Seats left: " + numberSold;
  }else if(numberSold === 10){
    numberSold++;
    seatPrice = 91000
    return "Price: " + seatPrice + "\n" + "Seats left: " + numberSold;
  }else
  return "sold out";

};