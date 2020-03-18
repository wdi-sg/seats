console.log("hello script js");

//Part 1

var availSeats = 10;
var seatPrice = 50;

/*
var inputHappened = function(currentInput) {
  console.log( currentInput );
if (availSeats === 10) {
    availSeats--;
    return seatPrice;
} else if(availSeats < 10 && availSeats > 0) {
    seatPrice = seatPrice + (seatPrice * 0.05);
    availSeats --;
    return seatPrice;
} else {
    return "Sorry, we are currently fully booked.";
}
}
*/

//Part 2
var inputHappened = function(currentInput) {
  console.log( currentInput );
  if (availSeats === 10) {
    availSeats--;
    return "$" + seatPrice + " ----" + " " + availSeats + " seats left.";
  } else if (availSeats >= 6) {
    availSeats--;
    seatPrice = seatPrice + (seatPrice * 0.03);
    return "$" + seatPrice + " ----" + " " + availSeats + " seats left.";
  } else if (availSeats > 1) {
    availSeats--;
    seatPrice = seatPrice + (seatPrice * 0.05);
    return "$" + seatPrice + " ----" + " " + availSeats + " seats left.";
  } else {
    return "You're our lucky final passenger! Your seat ticket is $91,000.";
  }
}