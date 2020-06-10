console.log("hello script js");
var airplane = {
  seats: 10,
  basePrice: 50
}
var currentSeats = airplane.seats;
var currentPrice = 0;

var calculateCurrentPrice = function(){
  var seatsTaken = airplane.seats - currentSeats;
  //for the first half of the plane
  if(seatsTaken > 0 && seatsTaken < (airplane.seats/2)){
    currentPrice = airplane.basePrice + (airplane.basePrice * .03);
  }
  else if(seatsTaken >= (airplane.seats/2) && seatsTaken < (airplane.seats-1)){
    currentPrice = airplane.basePrice + (airplane.basePrice * .05);
  }
  else if(seatsTaken == 0) { //first seat
    currentPrice = airplane.basePrice;
  }
  else if(seatsTaken == (airplane.seats-1)){
    currentPrice = 91000;
  }
  else{
    currentPrice = 0;
  }
}

var buyTicket = function(){
  calculateCurrentPrice();
  currentSeats--;
  return "Your ticket costs $" + currentPrice;
}

/*
var inputHappened = function(currentInput){
  //console.log( currentInput );
  
  console.log(currentPrice);
  
  console.log(currentSeats);
  
};

*/
