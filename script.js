console.log("hello script js");


let price = 47.5;
let seatsSold = 0;
let seatsLeft = 10;




var priceCalc = function(currentInput)  {
  for( i=0; i < currentInput ; i++) {
    seatsSold ++;
    seatsLeft --;
    price += 2.5
    console.log(price);
    console.log(seatsSold);
    console.log(seatsLeft)
  }
  return `Lucky you! There are ${seatsLeft} seats left and you get your most expensive seat at ${price}`
}