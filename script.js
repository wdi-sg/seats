console.log("hello script js");

//A program for a kiosk that sells airline tickets.

var emptySeats = 10;
var ticketPrice = 50.00;
var priceChangeSeat;
var priceIncrease;


//--------
//PART 1
//--------
/*
var inputHappened = function(anyInput){
//Seat 1 sold. emptySeats is 10.
  emptySeats -= 1;
  if(emptySeats === 9) {
    //emptySeats is 9 after click. Price is $50.
    return "Seat sold (" + emptySeats + " left). Price is $" + ticketPrice.toFixed(2);
  } else if(emptySeats >= 0 && emptySeats < 9) {
    //Seat 2 - 10 sold. Price increase by 0.05%.
    ticketPrice *= 1.05;
    return "Seat sold (" + emptySeats + " left). Price is $" + ticketPrice.toFixed(2);
  } else {
    return "Tickets sold out.";
  };
};
*/

//--------
//PART 2
//--------
/*
var inputHappened = function(anyInput){
//Seat 1 sold. emptySeats is 10.
  emptySeats -= 1;
  if(emptySeats === 9) {
    //emptySeats is 9 after click. Price is $50. Seat 1
    return "Seat sold (" + emptySeats + " left). Price is $" + ticketPrice.toFixed(2);
  } else if(emptySeats >= 5 && emptySeats < 9) {
    //Seat 2 - 5 sold. Price increase by 0.03%.
    ticketPrice *= 1.03;
    return "Seat sold (" + emptySeats + " left). Price is $" + ticketPrice.toFixed(2);
  } else if(emptySeats >= 1 && emptySeats < 5) {
    //Seat 6 - 9 sold. Price increase by 0.05%.
    ticketPrice *= 1.05;
    return "Seat sold (" + emptySeats + " left). Price is $" + ticketPrice.toFixed(2);
  } else if(emptySeats === 0){
    //Seat 10 sold. Price is $91000. Seat 10
    ticketPrice = 91000;
    return "Seat sold (" + emptySeats + " left). Price is $" + ticketPrice;
  } else{
    //no more seats.
    return "Tickets sold out.";
  };
};
*/

//--------
//PART 3
//--------
var inputHappened = function(anyInput){
//Seat 1 sold. emptySeats is 10.

  emptySeats -= 1;
  if(emptySeats === 9) {
    //emptySeats is 9 after click. Price is $50. Seat 1
    priceIncrease = (ticketPrice * 1.03).toFixed(2);
    return "Seat sold at Price $"+ ticketPrice.toFixed(2) + ". ("+ (emptySeats - 5) + " left *at 3% increase*. Next Price $" + priceIncrease + ")";
  } else if(emptySeats >= 5 && emptySeats < 9) {
    //Seat 2 - 5 sold. Price increase by 0.03%.
    if(emptySeats - 5 !== 0) {
        ticketPrice *= 1.03;
        priceIncrease = (priceIncrease * 1.03).toFixed(2);
        return "Seat sold at Price $"+ ticketPrice.toFixed(2) + ". ("+ (emptySeats - 5) + " left *at 3% increase*. Next Price $" + priceIncrease + ")";
    } else {
        ticketPrice *= 1.03;
        priceIncrease = (priceIncrease * 1.05).toFixed(2);
        return "Seat sold at Price $"+ ticketPrice.toFixed(2) + ". ("+ (emptySeats) + " left *at 5% increase*. Next Price $" + priceIncrease + ")";
    }
  } else if(emptySeats >= 1 && emptySeats < 5) {
    //Seat 6 - 9 sold. Price increase by 0.05%.
        if(emptySeats !== 1){
            ticketPrice *= 1.05;
            priceIncrease = (priceIncrease * 1.05).toFixed(2);
            return "Seat sold at Price $"+ ticketPrice.toFixed(2) + ". ("+ (emptySeats-1) + " left *at 5% increase*. Next Price $" + priceIncrease + ")";
        } else {
            ticketPrice *= 1.05;
            priceIncrease = 91000;
            return "Seat sold at Price $"+ ticketPrice.toFixed(2) + ". ("+ (emptySeats) + " ticket left. Price $" + priceIncrease + ")";
        };
  } else if(emptySeats === 0) {
    //Seat 10 sold. Price is $91000. Seat 10
    ticketPrice = 91000;
    return "Seat sold at Price $"+ ticketPrice.toFixed(2) + ". ("+ (emptySeats) + " ticket left.)";
  } else{
    //no more seats.
    return "Tickets sold out. Refresh browser to try again.";
  };
};