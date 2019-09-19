console.log("hello script js");

const input = document.getElementById("input");

//price when plane is empty
var originalPrice = 50;

//number of seats on plane
var planeCapacity = 10;
console.log("Plane capacity = " + planeCapacity);

var numberOfSeatsSold = 0;

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