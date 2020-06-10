console.log("hello script js");
var airplane = {
  seats: 10,
  basePrice: 50
}
var currentSeats = airplane.seats;
var currentPrice = 0;

var calculateCurrentPrice = function(){
  if(currentSeats != airplane.seats){ //as long as airplane isn't empty increase price
    currentPrice = airplane.basePrice + (airplane.basePrice * .05);
  }
  else{
    currentPrice = airplane.basePrice;
  }
}

var inputHappened = function(currentInput){
  //console.log( currentInput );
  calculateCurrentPrice();
  console.log(currentPrice);
  currentSeats--;
  console.log(currentSeats);
  return "Your ticket costs $" + currentPrice;
};


