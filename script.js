console.log("hello script js");

const seatCapacity = 10;
const lastSeatPrice = 91000;
var seatsLeft = seatCapacity;
var currSeatPrice = 50;

//function implements a seat sale
//updates the latest price, updates seatsleft
var seatSale = function(){
    //update seats left
    seatsLeft -= 1;
    var sellingPrice = currSeatPrice;
    //update current seat price - 5% over previous price
    updatePrice();
    //output price of the seat solde
    if(seatsLeft<0){
        return "no seats left";
    }
    else {
        return sellingPrice;
    }
}

var updatePrice = function(){
    //last seat
    console.log("seatsLeft: " + seatsLeft);
    console.log("oldSeatPrice: " + currSeatPrice);

    if(seatsLeft==1){
        currSeatPrice = lastSeatPrice;
    }
    //second half of the plane
    else if(seatsLeft/seatCapacity <=0.5){
        currSeatPrice *= 1.05;
    }
    else {
        currSeatPrice *= 1.03;
    }
    console.log("currSeatPrice: " + currSeatPrice);
}


var inputHappened = function(currentInput){
  // console.log( currentInput );
  return seatSale();;
};