console.log("hello script js");

var seat= 10;
var seatPrice= 50;
var increasedSeatPrice= 50*1.05;
var lastSeat= 91000;

var inputHappened = function(currentInput){
  console.log( currentInput );

  if (currentInput != "") {

    if (seat <= 10 && seat > 5) {
      seatPrice= seatPrice*1.03;
      seat --;
      output= "Thank you for your purchase! Your ticket was $" + seatPrice.toFixed(2) + ". " + seat + " seats left till increase in seat prices!";
    }

    else if (seat < 6 && seat > 1) {
      seatPrice= seatPrice*1.05;
      seat --;
      output= "Thank you for your purchase! Your ticket was $" + seatPrice.toFixed(2) + ". " + seat + " seats left till crazy jump in seat prices!";
    }

    else {
      output= "Thank you for your purchase! Your ticket was $" + lastSeat + ". This was the last seat!"
    }
  }
  return output;
};