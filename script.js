console.log("hello script js");

var numSeats = 10;
var priceSeat = 50;
var beginningPriceSeat = 50;

var inputHappened = function(currentInput){
  console.log( currentInput );

  var message = '';

  if (currentInput === "buy" && numSeats > 0) {
    message = "Seat Sold. Price: $"+priceSeat.toFixed(2);
    //priceSeat *= 1.05;
    priceSeat += beginningPriceSeat * 0.05
    numSeats--;
  }
  else if (currentInput === "buy"){
    message = "Sorry, seats sold out.";
  }
  else{
    message = "Please enter a valid input.";
  };
    display(message);
    console.log(message);
};