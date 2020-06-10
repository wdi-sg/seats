console.log("hello script js");

var seatCapacity = 10;
var seatsLeft = seatCapacity;
var currSeatPrice = 50;

//function implements a seat sale
//updates the latest price, updates seatsleft
var seatSale = function(){
    var sellingPrice = currSeatPrice;
    //update current seat price - 5% over previous price
    currSeatPrice *=1.05;
    //update seats left
    seatsLeft -= 1;
    //output price of the seat solde
    if(seatsLeft<0){
        return "no seats left";
    }
    else {
        return sellingPrice;
    }
}


var inputHappened = function(currentInput){
  console.log( currentInput );
  return seatSale();;
};