console.log("hello script js");


let price = 50;
let seatsSold = 0;
let seatsLeft = 10;
const seatNum = 10;
let seatsToNextBracket = 0;

//for loop for looping user input
var priceCalc = function(currentInput)  {
  for( i=0; i < currentInput ; i++) {
    seatsSold ++;
    seatsLeft --;
    console.log("seats sold is" + seatsSold);
    console.log("seats left is" + seatsLeft);
  //if statements to check price
    if(seatsSold === 1) {
      price = 50;
      console.log("first seat is $" + price);
      seatsToNextBracket= 0;
    } else if (seatsSold > 1 && seatsSold < 6){
      price *= 1.03;
      seatsToNextBracket = 5 - parseInt(seatsSold);
      console.log("seat is $" + price);
    } else if (seatsSold < 9 && seatsSold > 5) {
      price *= 1.05;
      console.log("seat is $" + price);
      seatsToNextBracket = 8 - parseInt(seatsSold);
    } else if (seatsSold === 9) {
      price = 91000;
      console.log("last seat is $" + price);
      seatsToNextBracket = 0;
    }
    
  }
  //a message tell the user how many tickets are left before the price bracket goes up.
  return `Your most expensive ticket is ${price} and there are only ${seatsLeft} seats left! There are ${seatsToNextBracket} seats left to the next price bracket!`;
}