console.log("hello script js");
var seats = 10;
var price = 50 * 1.05;
var inputHappened = function (currentInput) {
  console.log(currentInput);

  seats--;

  return "Seats Available: " + seats + " Price: " + price;

};
