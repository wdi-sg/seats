console.log("hello script js");

var seat= 10;
var seatPrice= 50;
var increasedSeatPrice= 50*1.05;

var inputHappened = function(currentInput){
  console.log( currentInput );

  if (currentInput != "") {

    if (seat == 10) {
      seat --;
      output= "Thank you for your purchase! Your ticket was $" + seatPrice + ". We have "+ seat + " seats left.";
    }

    else if (seat < 10 && seat > 0) {
       seat --;
      output= "Thank you for your purchase! Your ticket was $" + increasedSeatPrice.toFixed(2) + ". We have " + seat + " seats left.";
    }

    else {
      output= "We're all out of seats! Better luck next time!"
    }
  }
  return output;
};