console.log("hello script js");

//create global variable for plane seat starting at 0, and ticket price at $50
var AvailablePlaneSeats = 10
var ticketPrice = 50

//every time a user inputs something
var inputHappened = function(currentInput){
  console.log( currentInput );

  //check to see if there are tickets left. If more than 0, do normal, otherwise, display error
  if(AvailablePlaneSeats > 0){

    //minus 1 from plane seats
    AvailablePlaneSeats = AvailablePlaneSeats - 1;
    console.log (AvailablePlaneSeats);
    display( `You have bought a ticket at ${ticketPrice}! There are ${AvailablePlaneSeats} seats left.` );
    //next ticket price increases by 5%
    ticketPrice = ticketPrice * 1.05;
    console.log (ticketPrice);
  }else{
    display("There are no more seats left!");
  }
};