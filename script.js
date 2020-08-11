console.log("hello script js");


let price = 50;
let seatsSold = 0;
let seatsLeft = 10;
const seatNum = 10;


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
    } else if (seatsSold > 1 && seatsSold < 6){
      price *= 1.03;
      console.log("seats sold is" + seatsSold);
      console.log("seats left is" + seatsLeft);
      console.log("price is " + price);
    } else if (seatsSold < 9 && seatsSold > 5) {
      price += 1.05;
      console.log("seats sold is" + seatsSold);
      console.log("seats left is" + seatsLeft);
      console.log("price is " + price);
    } else if (seatsSold === 9) {
      price = 91000;
    }
    
  }
  return `Lucky you! There are ${seatsLeft} seats left and you get your most expensive seat at ${price}`
}