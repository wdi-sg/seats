console.log("hello script js");

//define the variables that you will need

var baseCharge = 50;
var ticketCount = 10;

//define the calculation function based on your global variables

var calculateTicketPrice = function() {
    baseCharge = baseCharge + 2.50;
    ticketCount --;
};

var firstBuyerPrice = function() {
    // baseCharge;
    console.log('in function firstBuyerPrice')
    ticketCount --;
    console.log(ticketCount)
}


//call your function within the main input function

var inputHappened = function(currentInput){
    console.log( currentInput );
    if (ticketCount === 10) {
        console.log(ticketCount);
        firstBuyerPrice();
        display ("Your ticket price is " + baseCharge);
    } else if (ticketCount < 10) {
        calculateTicketPrice ();
        console.log(ticketCount)
        display ("Your ticket price is " + baseCharge);
    } else {
        display ("tickets sold out");
    }
};