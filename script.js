console.log("hello script js");
//Part 2
var seatsRemaining = 10;
var seatsSold = 0;
var standardPrice = 50;
var priceIncrement1 = 50 *(3/100);
var priceIncrement2 = 50 *(5/100);
var currentPrice;
var inputHappened = function(currentInput){
  console.log( currentInput );
  if(seatsRemaining == 10){
    console.log(seatsRemaining);
    currentPrice = standardPrice;
    seatsRemaining = seatsRemaining - 1;
    seatsSold = seatsSold + 1;
    return ("Seat sold for $" + standardPrice + ", " + seatsRemaining + " seats remaining.");
  }
  else if(seatsRemaining <10 && seatsRemaining>=6){
    console.log(seatsRemaining);
    currentPrice = currentPrice + priceIncrement1;
    seatsRemaining = seatsRemaining - 1;
    seatsSold = seatsSold + 1;
    return ("Seat sold for $" + currentPrice + ", " + seatsRemaining + " seats remaining.");
  }
  else if (seatsRemaining < 6 && seatsRemaining>1){
    console.log(seatsRemaining);
    currentPrice = currentPrice + priceIncrement2;
    seatsRemaining = seatsRemaining - 1;
    seatsSold = seatsSold + 1;
    return ("Seat sold for $" + currentPrice + ", " + seatsRemaining + " seats remaining.");
  }
  else if (seatsRemaining == 1){
    console.log(seatsRemaining);
    currentPrice = 91000;
    seatsRemaining = seatsRemaining - 1;
    seatsSold = seatsSold + 1;
     return ("Seat sold for $" + currentPrice + ", " + seatsRemaining + " seats remaining.");
  }
  else {
    return "No more seats available.";
  }

};