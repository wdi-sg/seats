console.log("hello script js");

var startingPrice = 50;
var numberOfSeats = 10;
var increasingPrice = 50;

var inputHappened = function(currentInput){
  console.log( currentInput );
// make a number and check the input is valid
 currentInput = Number(currentInput);
 if (isNaN(currentInput)) { 
  return "Please enter a number"; }
  return currentInput;
};


/// plane has 10 seats
/// check how many seats are available
/// tickets are $50, but for each one sold increase the price 5%

var startingPrice = 50;
var numberOfSeats = 10;
var increasingPrice = 50;
var increaseCalculation = function (){
increasingPrice = increasingPrice * 1.05; 
} 