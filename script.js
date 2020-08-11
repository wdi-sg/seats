console.log("hello script js");

/*
price (number) -> seats (number)
For each ticket sold, the price will increase by 1.05
currentInpunt.trim() will remove the whitespace from the input
*/

var price = 50;
var seats = 10;

var inputHappened = function(currentInput){
  console.log( currentInput );
  var value = currentInput.trim();

  if (value) {
    if (seats !== 0) {
      price *= 1.05;
      price = parseFloat(price.toFixed(2));
      var output = "current seats: " + seats + " price: " + price;
      seats--;
      return output;
    } else {
      var output = "Seats are sold out!";
      return output;
    }  
  } else {
    return "You key nothing!"
  }
};