console.log("hello script js");

var freeSeats = 10;
var bookedSeats = 0;
var price = 50;
var cost;
var priceIncreased = 1;
var increment = 1;
var x , y = 0;

var inputHappened = function(currentInput){
  console.log( currentInput );
  if(freeSeats === 10 && bookedSeats === 0){
    freeSeats--;
    bookedSeats++;
    console.log(bookedSeats + ' bookedSeats');
    console.log(freeSeats + ' freeSeats');
    return output = 'Your plane ticket costs $' + price;
  }
  else if(0 < freeSeats < 10 && 10 > bookedSeats > 0){
    //5% increment per booked seat
    increase();
    freeSeats--;
    bookedSeats++;
    cost = price * priceIncreased;
    console.log(cost + ' cost');
    console.log(price + ' price');
    console.log(priceIncreased + ' priceIncreased');

    console.log(bookedSeats + ' bookedSeats');
    console.log(freeSeats + ' freeSeats');
    return output = 'Your plane ticket costs $' + cost;
  }
  else if(freeSeats === 0 && bookedSeats === 10){
    return output = 'Sorry we are fully booked.';
  }
};

var increase = function(){
    while ( y < bookedSeats){
        priceIncreased = priceIncreased * 1.05;
        y++;
        console.log(priceIncreased + ' priceIncreased');
    }
}