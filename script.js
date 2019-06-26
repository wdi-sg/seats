console.log("hello script js");

var numSeats = 10;
var numSeatsLeft = numSeats;
var priceSeat = 50;
var beginningPriceSeat = 50;
var numSeatsLeftBracket = 5;

var seatTierIndicate = function(seatsLeft){
    if (seatsLeft < numSeats/2){
        return "Current Price Bracket: +5%. Total Seats Left: " + seatsLeft;
    }
    else{
        return "Current Price Bracket: +3%. Number of Seats Left in this price bracket: " + numSeatsLeftBracket + " . Total Seats Left: " + seatsLeft;
    }
};

var inputHappened = function(currentInput){
  console.log( currentInput );

  var message = '';

  if (currentInput === "buy" && numSeatsLeft > 0) {
    message = "Seat Sold. Price: $"+priceSeat.toFixed(2);
    if (numSeatsLeft > (numSeats/2 + 1)){
        priceSeat += beginningPriceSeat * 0.03;
    }
    else{
        priceSeat += beginningPriceSeat * 0.05;
    }
    //priceSeat *= 1.05;
    numSeatsLeft--;
    numSeatsLeftBracket--; //for the price bracket indicator
  }
  else if (currentInput === "buy"){
    message = "Sorry, seats sold out.";
  }
  else{
    message = "Please enter a valid input.";
  };
    display(message,seatTierIndicate(numSeatsLeft));
    console.log(message);
};