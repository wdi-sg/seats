console.log("hello script js");

var totalSeats = 10;
var boughtSeats = 1;
var seatPrice = 0;


var inputHappened = function(currentInput){
  console.log( currentInput );
  //display( "WOW SOMETHING HAPPENED" );
  var input = currentInput.toLowerCase();
  console.log(`Lower Case ${input}`);
  if (input === "buy" && totalSeats > 0) {
    if (boughtSeats === 1) {
        seatPrice = 50;
        console.log(seatPrice);
        display(seatPrice);
        //return seatPrice;
    } else if (boughtSeats > 1 && boughtSeats < 10) {
        //seatPrice = seatPrice * 1.05; //cumulative 5% on previous ticket price
        seatPrice = seatPrice + (50*0.05); //cumulative price which adds 5% of $50 on to previous ticket price
        console.log(seatPrice);
        display(seatPrice);
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
};