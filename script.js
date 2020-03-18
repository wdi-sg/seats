console.log("hello script js");

var seatsLeft = 10;
var seatPrice = 50;

var firstSeat = true;

// var seatSold = function(){
//     if (seatsLeft > 5){
//         seatPrice = seatPrice * 1.03;
//     }

//     seatsLeft--;

// }

var inputHappened = function(currentInput){
  console.log( currentInput );
  var output;
  output = `Your seat is $${seatPrice}`;

  if (firstSeat){
    seatPrice = 50 * 1.05;
    firstSeat = false;
  }
  //seatSold();

  return output;
};