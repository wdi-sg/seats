console.log("hello script js");

//When a user types anything into the input, consider that seat sold and show the user the price of their seat
var currentInput = Math.random()* 10 +1

var inputHappened = function(currentInput){
  console.log( currentInput );
var currentInput = Math.random()* 10 +1

if (currentInput < 5 && currentInput > 0) {
   return "Seat number  " + Math.round(currentInput) + " booked. Ticket price is $51.50 "
} else if (currentInput < 9 && currentInput > 6) {
 return "Seat number  " + Math.round(currentInput) + " booked. Ticket price is $52.50 "
 } else {
    return "Only last ticket available at $91000"
}
};




/* var inputHappened = function(currentInput){
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
}; */