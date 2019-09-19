console.log("hello script js");

//define the variables that you will need

var baseCharge = 50;
var addCharge = baseCharge * 1.05;
var ticketCount = 10;

//define the calculation function based on your global variables

var calculateTicketPrice = function() {
    baseCharge = baseCharge * 1.05;
    ticketCount --;
};

//call your function within the main input function

var inputHappened = function(currentInput){
    console.log( currentInput );
    if (ticketCount > 0) {
        calculateTicketPrice ();
        console.log(ticketCount)
        display ("Your ticket price is " + baseCharge);
    } else {
        display ("tickets sold out");
    }
};