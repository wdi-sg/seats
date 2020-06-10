console.log("hello script js");

var seat= 10;
var seatPrice= 50;
var increasedSeatPrice= 50*1.05;
var lastSeat= 91000;

var inputHappened = function(currentInput){
  console.log( currentInput );

  if (currentInput != "") {

    if (seat <= 10 && seat > 5) {
      seat --;
      output= "Thank you for your purchase! Your ticket was $" + (seatPrice*1.03) + ". We have "+ seat + " seats left.";
    }

    else if (seat < 6 && seat > 1) {
       seat --;
      output= "Thank you for your purchase! Your ticket was $" + increasedSeatPrice.toFixed(2) + ". We have " + seat + " seats left.";
    }

    else {
      output= "Thank you for your purchase! Your ticket was $" + lastSeat + ". This was the last seat!"
    }
  }
  return output;
};