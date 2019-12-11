console.log("hello script js");

var numberSold = 0
var seatPrice = 50
//+2.5 every time a seat is sold

var priceIncrease = 2.5


var inputHappened = function(currentInput){
  console.log( currentInput );
  if(numberSold === 0 ){
    numberSold++;
//    seatPrice = seatPrice + priceIncrease;
    return seatPrice;
  }else if(numberSold < 10){
    numberSold++
    seatPrice = seatPrice + priceIncrease;
    return seatPrice;
  }else
  return "sold out";

};