console.log("hello script js");

var totalSeats = 10;
var boughtSeats = 1;
var seatPrice = 0;

//part 1
/*var inputHappened = function(currentInput){
  console.log( currentInput );
  //display( "WOW SOMETHING HAPPENED" );
  var input = currentInput.toLowerCase();
  console.log(`Lower Case ${input}`);
  if (input === "buy" && totalSeats > 0) {
    if (boughtSeats === 1) {
        seatPrice = 50;
        console.log(seatPrice);
        display(`The price of this ticket is $${seatPrice}.`);
    } else if (boughtSeats > 1 && boughtSeats < 10) {
        //seatPrice = seatPrice * 1.05; //cumulative 5% on previous ticket price
        seatPrice = seatPrice + (50*0.05); //cumulative price which adds 5% of $50 on to previous ticket price
        console.log(seatPrice);
        display(`The price of this ticket is $${seatPrice}.`);
    }
    boughtSeats = boughtSeats +1;
    totalSeats = totalSeats - 1;
    console.log(boughtSeats);
    console.log(totalSeats);
  } else if (totalSeats === 0) {
    display("Tickets are sold out.")
    } else {
    display("Do you want to BUY the ticket?");
  }
};*/

//part 2 & part 4
var inputHappened = function(currentInput){
  console.log( currentInput );
  //display( "WOW SOMETHING HAPPENED" );
  var input = currentInput.toLowerCase();
  console.log(`Lower Case ${input}`);
  if (input === "buy" && totalSeats > 0) {
    if (boughtSeats === 1) {
        seatPrice = 50;
        console.log(seatPrice);
        display(`The price of this ticket is $${seatPrice}.`);
        //If statement for seats 2 to 5
    } else if (boughtSeats > 1 && boughtSeats <= 5) {
        //seatPrice = seatPrice + (50*0.03); //cumulative price which adds 3% of $50 on to previous ticket price (part 2)
        seatPrice = seatPrice * 1.03; //cumulative 3% on previous ticket price (part 4)
        console.log(seatPrice);
        display(`The price of this ticket is $${seatPrice}.`);
        //If statement for seats 6 to 9
    } else if (boughtSeats >= 6 && boughtSeats < 10) {
        //seatPrice = seatPrice + (50*0.05); //cumulative price which adds 5% of $50 on to previous ticket price (part 2)
        seatPrice = seatPrice * 1.05; //cumulative 5% on previous ticket price (part 4)
        console.log(seatPrice);
        display(seatPrice);
    } else if (boughtSeats = 10) {
        seatPrice = 91000;
        display(`The price of this ticket is $${seatPrice}.`);
    }
    boughtSeats = boughtSeats +1;
    totalSeats = totalSeats - 1;
    console.log(`Next seat to be sold ${boughtSeats}`);
    console.log(`Total no. of seats left ${totalSeats}`);
  } else if (totalSeats === 0) {
    display("Tickets are sold out.")
    } else {
    display("Do you want to BUY the ticket?");
  }
};