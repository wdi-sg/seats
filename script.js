
var seatsAvailable = 10;
var seatsSold = 0;
var price = 50;

//Finer-grade pricing
var inputHappened = function(currentInput){
  console.log( currentInput );
 if (seatsSold === 9) {
        price = 91000;
        return `Lucky you! You bought the last ticket at $${price}!`;
    }

  if (seatsSold > 0 && seatsSold < 5){
        price = 50 * 1.03;
    }

    if (seatsSold === 9) {
        price = 91000;
        return `Lucky you! You bought the last ticket at $${price}!`;
    }

    if (seatsSold > 5) {
        price = 50 * 1.05;
    }

  seatsAvailable--;
  seatsSold++;

  return `Your total is $${price}. There are ${seatsAvailable} seats left on the plane.`;
};

//