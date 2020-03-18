console.log("hello script js");

var freeSeats = 10;
var bookedSeats = 0;
var price = 50;
var cost;
var y = 0;
var priceIncreased = 1;
document.querySelector('#output').innerText = 'Hi! There are ' + freeSeats + ' tickets left for sale! \n Please input a number to buy a seat!';
var inputHappened = function(currentInput){
  console.log( currentInput );
  if(parseFloat(currentInput)){
    if(freeSeats === 10 && bookedSeats === 0){
        freeSeats--;
        bookedSeats++;
        console.log(bookedSeats + ' bookedSeats');
        console.log(freeSeats + ' freeSeats');
        return output = 'Your plane ticket costs $' + price + '\n There are ' + freeSeats + ' seats left for sale!';
    }
    else if(freeSeats > 5 && freeSeats <= 10 && bookedSeats < 5 && bookedSeats >= 0){
    //3% increment per booked seat
        increase3();
        freeSeats--;
        bookedSeats++;
        cost = price * priceIncreased;
        console.log(cost + ' cost');
        console.log(price + ' price');
        console.log(bookedSeats + ' bookedSeats');
        console.log(freeSeats + ' freeSeats');
        console.log('test2');
        return output = 'Your plane ticket costs $' + cost + '\n There are ' + freeSeats + ' seats left for sale!';
    }
    else if(freeSeats > 1 && freeSeats <= 5 && bookedSeats < 9 && bookedSeats >= 5 ){
    //5% increment per booked seat
        increase5();
        freeSeats--;
        bookedSeats++;
        cost = price * priceIncreased;
        console.log(cost + ' cost');
        console.log(price + ' price');
        console.log(bookedSeats + ' bookedSeats');
        console.log(freeSeats + ' freeSeats');
        console.log('test3');
        return output = 'Your plane ticket costs $' + cost + '\n There are ' + freeSeats + ' seats left for sale!';
    }
    else if(freeSeats ===1 && bookedSeats === 9){
        console.log('test4');
        freeSeats--;
        bookedSeats++;
        return output = 'You bought the last ticket which costs $21000!';
    }
    else if(freeSeats === 0 && bookedSeats === 10){
        return output = 'Sorry we are fully booked.';
    }
  }
  else{
    return output = 'Invalid input! Please try again with a number.'
  }
}

var increase5 = function(){
    while ( y < bookedSeats){
        priceIncreased = priceIncreased * 1.05;
        y++;
        console.log(priceIncreased + ' priceIncreased');
    }
}
var increase3 = function(){
    while ( y < bookedSeats){
        priceIncreased = priceIncreased * 1.03;
        y++;
        console.log(priceIncreased + ' priceIncreased');
    }
}