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

//Part 2

//percentage increment
var increment1 = 0.03;
var increment2 = 0.05;

//price of seat
var currentPrice = 50;

var inputHappened = function(currentInput){

//sell first ticket
  if (numberOfSeatsSold === 0) {
    numberOfSeatsSold++;
    console.log(numberOfSeatsSold + " at " + currentPrice);
    var message = "Congrats! You got a ticket at \$" + currentPrice + ".";
    input.value = "";
    input.placeholder = "";
    return message;

//sell first half tickets at increment1
  } else if ( numberOfSeatsSold < (planeCapacity/2) ) {
    currentPrice = currentPrice * ( 1 + increment1);
    numberOfSeatsSold++;
    console.log(numberOfSeatsSold + " at " + currentPrice);
    var message = "Congrats! You got a ticket at \$" + currentPrice.toFixed(2) + ".";
    input.value = "";
    input.placeholder = "";
    return message;

//sell remaining at increment2
  } else if ( numberOfSeatsSold < (planeCapacity - 1) ) {
    currentPrice = currentPrice * ( 1 + increment2 );
    numberOfSeatsSold++;
    console.log(numberOfSeatsSold + " at " + currentPrice);
    var message = "Congrats! You got a ticket at \$" + currentPrice.toFixed(2) + ".";
    input.value = "";
    input.placeholder = "";
    return message;

//last ticket
  } else {
    currentPrice = 91000;
    numberOfSeatsSold++;
    console.log(numberOfSeatsSold + " at " + currentPrice);
    var message = "Congrats! You got a the last ticket at \$" + currentPrice.toFixed(2) + "!";
    input.value = "";
    input.placeholder = "SOLD OUT";
    return message;

  }
}