console.log("hello script js");

var startingPrice = 50;
var numberOfSeats = 10;
var increasingPrice = 50;
var warning ="Price will increase 5%!";

var inputHappened = function(currentInput){
  console.log( currentInput );
// make a number and check the input is valid (no need to check...)
 // currentInput = Number(currentInput);
 // if (isNaN(currentInput)) { 
 //  return "Please enter a number"; }
 	increaseCalculation();
	decreaseTickets()
	if(numberOfSeats<0) {
  return "No More Tickes Available\n";
}
	if(numberOfSeats===1) {
warning ="Only 1 seat available! \n Price will increase 5%!";
}
	if(numberOfSeats===0) {
warning ="All Tickets Sold!"}
  return "Price you bought at: " + increasingPrice + "\n  Number of seats left: " + numberOfSeats + "\n " + warning;
	}



/// plane has 10 seats
/// check how many seats are available
/// tickets are $50, but for each one sold increase the price 5%

var increaseCalculation = function (){
increasingPrice = increasingPrice * 1.05; 
increasingPrice = increasingPrice.toFixed(2);
} 

var decreaseTickets = function (){
numberOfSeats  = numberOfSeats -1; 
} 