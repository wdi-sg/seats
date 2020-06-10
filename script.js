
var seatsAvailable = 10;
var seatsSold = 0;
var price = 50;

var inputHappened = function(currentInput){
  console.log( currentInput );
  if (seatsSold > 0) {
    price = 50 * 1.05;
  }
  if (seatsSold === 10) {
    return 'Sorry, there are no tickets left!';
  }

  seatsAvailable--;
  seatsSold++;

  return `Your total is $${price}. There are ${seatsAvailable} seats left on the plane.`
};