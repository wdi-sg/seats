console.log("hello script js");

const input = document.getElementById("input");

//number of seats on plane
var planeCapacity = 10;
console.log("Plane capacity = " + planeCapacity);

var numberOfSeatsSold = 0;

/*

//Part 1

//price when plane is empty
var originalPrice = 50;

//percentage increment
var increment = 0.05;

var inputHappened = function(currentInput){

//sell first ticket
  if (numberOfSeatsSold === 0) {
    numberOfSeatsSold++;
    console.log("Tickets sold = " + numberOfSeatsSold);
    var message = "Congrats! You got a ticket at \$" + originalPrice + ".";
    input.value = "";
    input.placeholder = "";
    return message;

//sell subsequent tickets
  } else if ( numberOfSeatsSold < planeCapacity ) {

    var priceOfSeat = originalPrice * ( 1 + (increment * numberOfSeatsSold ));
    numberOfSeatsSold++;
    console.log("Tickets sold = " + numberOfSeatsSold);
    var message = "Congrats! You got a ticket at \$" + priceOfSeat.toFixed(2) + ".";
    input.value = "";
    input.placeholder = "";
    return message;

//sold out
  } else {

    input.value = "";
    input.placeholder = "SOLD OUT";
    return "WE ARE SOLD OUT!";

  }
}

*/

//Part 2 & 3 & 4

//percentage increment
var increment = [0.03, 0.05]
//var increment2 = 0.05;

//price of seat
var currentPrice = 50;

//seats left before price bracket changes
var seatsLeft;


var message = function(price, seats) {
    if (seats === 0) {
        seats = "Last";
    }
    return `Congrats! You got a ticket at \$${price}. ${seats} ticket before price bracket increases!`;
}


var inputHappened = function(currentInput){

//sell first ticket
  if (numberOfSeatsSold === 0) {
    numberOfSeatsSold++;
    console.log(numberOfSeatsSold + " at " + currentPrice);
    seatsLeft = (planeCapacity/2) - numberOfSeatsSold;
    input.value = "";
    input.placeholder = "";
    return message(currentPrice, seatsLeft);

//sell first half tickets at increment1
  } else if ( numberOfSeatsSold < (planeCapacity/2) ) {
    currentPrice = currentPrice * ( 1 + increment[0]);
    numberOfSeatsSold++;
    console.log(numberOfSeatsSold + " at " + currentPrice);
    seatsLeft -= 1;
    input.value = "";
    input.placeholder = "";
    return message(currentPrice.toFixed(2), seatsLeft);

//sell remaining at increment2
  } else if ( numberOfSeatsSold < (planeCapacity - 1) ) {
    currentPrice = currentPrice * ( 1 + increment[1] );
    numberOfSeatsSold++;
    console.log(numberOfSeatsSold + " at " + currentPrice);
    seatsLeft = planeCapacity - numberOfSeatsSold - 1;
    input.value = "";
    input.placeholder = "";
    return message(currentPrice.toFixed(2), seatsLeft);

//last ticket
  } else {
    currentPrice = 91000;
    numberOfSeatsSold++;
    console.log(numberOfSeatsSold + " at " + currentPrice);
    var lasttix = "Congrats! You got a the last ticket at \$" + currentPrice.toFixed(2) + "!";
    input.value = "";
    input.placeholder = "SOLD OUT";
    return lasttix;

  }
}