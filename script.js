console.log("hello script js");
var planeSeats = 10;
var seatPrice = 50;
var seatsSold = 0;
var priceIncrement = 0.05;

var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "";
  planeSeats = planeSeats - 1;
  if (planeSeats < 0 ) {
    output = "Sorry, seats are sold out";
  } else {
    var purchasePrice = parseInt(seatPrice) * (1 + (priceIncrement * seatsSold));
        console.log(0.05 * parseInt(seatsSold));
    seatsSold = seatsSold + 1;
    console.log(seatsSold);
    output = "Thank you for purchasing a seat at $" + purchasePrice.toFixed(2) + ". Seats left: " + planeSeats;
}
  return output;
};

//planeSeats is 10
//when seats sold is 0 price is 50
//when seats sold is 1 price increase by 5% from price
//when there is input, seat is sold
//plane seat is reduced by 1
//seats sold is increased by 1
//price increment is 5% per ticket sold
//purchasePrice is 50 * 100% + (5% * number of ticket sold)
//if seats are sold out, show message that seats are sold out