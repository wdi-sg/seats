console.log("hello script js");

var seatsLeft = 10;
var ticketPrice = 50

var inputHappened = function(currentInput){
  console.log( currentInput );

  //when user input, deduct one seat
  seatsLeft--;
  console.log(seatsLeft);

  //When seat deducted, increase ticket price by 5%
  ticketPrice = (ticketPrice * 1.05).toFixed(2);

  //initialize input box
  document.getElementById("input").value = "";

  return ticketPrice;

};