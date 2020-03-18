console.log("hello script js");
//Part 1
var seatsRemaining = 10;
var seatsSold = 0;
var standardPrice = 50;
var priceIncrement = 50 *(5/100);
var currentPrice;
var inputHappened = function(currentInput){
  console.log( currentInput );
  if(seatsRemaining>0){
    console.log(seatsRemaining);
    currentPrice = standardPrice + seatsSold*priceIncrement;
    seatsRemaining = seatsRemaining - 1;
    seatsSold = seatsSold + 1;
    return ("Seat sold for $" + currentPrice + ", " + seatsRemaining + " seats remaining.");
  }
  else {
    return "No more seats available.";
  }


  ;
};