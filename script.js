console.log("hello script js");
var planeSeats = 10;
var seatPrice = 50;
var seatsSold = 1;

var inputHappened = function(currentInput){
  console.log( currentInput );
  var output = "";
  planeSeats = planeSeats - 1;
  if (planeSeats <= 0 ) {
    output = "sorry, seats are sold out";
  } else {
    var purchasePrice = parseInt(seatPrice) * (1 + (0.05 * seatsSold));
        console.log(0.05 * parseInt(seatsSold));
    seatsSold = seatsSold + 1;
    console.log(seatsSold);
    output = "Thank you for purchasing a seat at $" + purchasePrice.toFixed(2) + ". There are " + planeSeats + "left.";
}
  return output;
};