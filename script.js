console.log("hello script js");

var seats = 10;


var inputHappened = function(currentInput){
  console.log( currentInput );
  var seatsLeft = 10 - currentInput;
if (currentInput == 0) {
    return "Plane is empty"
} if (currentInput > 0 && currentInput < 6) {
return "The price of the ticket is $" + 50*1.03 + " and "+  seatsLeft + " seats remaining"
} else if (currentInput > 5 && currentInput < 10) {
return "The price of the ticket is $" + 50*1.05 + " and "+  seatsLeft + " seats remaining"
} else if (currentInput == 10) {
return "The price of the last ticket is $" + 91000
}
};