console.log("hello script js");

var freeSeats = 10;
var bookedSeats = 0;
var price = 50;
var cost;
var x = 0;

var inputHappened = function(currentInput){
  console.log( currentInput );
  if(freeSeats === 10 && bookedSeats === 0){
    freeSeats--;
    bookedSeats++;
    console.log(bookedSeats + ' bookedSeats');
    console.log(freeSeats + ' freeSeats');
    return output = 'Your plane ticket costs $' + price;
  }
  else if(freeSeats > 5 && freeSeats <= 10 && bookedSeats < 5 && bookedSeats >= 0){
    //3% increment per booked seat
    freeSeats--;
    bookedSeats++;
    cost = price * 1.03;
    console.log(cost + ' cost');
    console.log(price + ' price');
    console.log(bookedSeats + ' bookedSeats');
    console.log(freeSeats + ' freeSeats');
    console.log('test2');
    return output = 'Your plane ticket costs $' + cost;
  }
  else if(freeSeats > 1 && freeSeats <= 5 && bookedSeats < 9 && bookedSeats >= 5 ){
    //5% increment per booked seat
    freeSeats--;
    bookedSeats++;
    cost = price * 1.05;
    console.log(cost + ' cost');
    console.log(price + ' price');
    console.log(bookedSeats + ' bookedSeats');
    console.log(freeSeats + ' freeSeats');
    console.log('test3');
    return output = 'Your plane ticket costs $' + cost;
  }
  else if(freeSeats ===1 && bookedSeats === 9){
    console.log('test4');
    freeSeats--;
    bookedSeats++;
    return output = 'Your seat costs $21000!';
  }
  else if(freeSeats === 0 && bookedSeats === 10){
    return output = 'Sorry we are fully booked.';
  }
};