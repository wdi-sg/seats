console.log("hello script js");
//Part 4
var seatsRemaining = 10;
var seatsSold = 0;
var standardPrice = 50;
var priceIncrement1 = 1.03;
var priceIncrement2 = 1.05;
var currentPrice;
var tixRemaining1 = 4
var tixRemaining2 = 4

function tixStringMaker (tix){
    if (tix>1){
        return (tix + " tickets remaining before price bracket goes up.")
    }
    else if(tix==1){
        return (tix + " ticket remaining before price bracket goes up.")
    }
    else if (tix == 0){
        return ("Price bracket goes up for the next ticket.")
    }
}
var inputHappened = function(currentInput){
  console.log( currentInput );
  if(seatsRemaining == 10){
    console.log(seatsRemaining);
    currentPrice = standardPrice;
    seatsRemaining = seatsRemaining - 1;
    seatsSold = seatsSold + 1;
    var tixString = tixStringMaker(tixRemaining1);
    return ("Seat sold for $" + standardPrice + ", " + seatsRemaining + " seats remaining. "+tixString);
  }
  else if(seatsRemaining <10 && seatsRemaining>=6){
    console.log(seatsRemaining);
    currentPrice = currentPrice*priceIncrement1;
    currentPrice = currentPrice.toFixed(2);
    seatsRemaining = seatsRemaining - 1;
    seatsSold = seatsSold + 1;
    tixRemaining1 = tixRemaining1 - 1;
    var tixString = tixStringMaker(tixRemaining1);
    return ("Seat sold for $" + currentPrice + ", " + seatsRemaining + " seats remaining. "+tixString);
  }
  else if (seatsRemaining < 6 && seatsRemaining>1){
    console.log(seatsRemaining);
    currentPrice = currentPrice*priceIncrement2;
    currentPrice = currentPrice.toFixed(2);
    seatsRemaining = seatsRemaining - 1;
    seatsSold = seatsSold + 1;
    tixRemaining2 = tixRemaining2 - 1;
    var tixString = tixStringMaker(tixRemaining2);
    return ("Seat sold for $" + currentPrice + ", " + seatsRemaining + " seats remaining. "+tixString);
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