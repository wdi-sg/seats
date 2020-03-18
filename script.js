console.log("hello script js");

var seatsLeft = 10;
var ticketPrice = 50

var inputHappened = function(currentInput){
  console.log( currentInput );

  //Check user input
  if (currentInput != "buy"){
    //initialize input box
    document.getElementById("input").value = "";

    return "Please type in 'buy' in the white box to buy ticket"
  }

  //when user input, deduct one seat
  seatsLeft--;
  console.log(seatsLeft);

  //When seat deducted, increase ticket price by 5%
  if (seatsLeft > 5){
    ticketPrice = (50 * 1.03).toFixed(2);
  } else if(seatsLeft > 0 && seatsLeft <= 5){
    ticketPrice = (50 * 1.05).toFixed(2);
  } else{
    ticketPrice = 91000;
  }


  //initialize input box
  document.getElementById("input").value = "";

  return `There are ${seatsLeft} seats left, the price of your ticket is $${ticketPrice}`;

};