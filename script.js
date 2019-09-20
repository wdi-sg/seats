console.log("hello script js");

//define the variables that you will need


//define the calculation function based on your global variables

/*var calculateTicketPrice = function() {
    baseCharge = baseCharge * 1.05
    ticketCount --;
};

var firstBuyerPrice = function() {
    // baseCharge;
    console.log('in function firstBuyerPrice')
    ticketCount --;
    console.log(ticketCount)
};
*/

var baseCharge = 50;
var ticketCount = 10;
var ticketCountRemainder =5;

var firstHalfPrice = function() {
    console.log('in function firstHalfPrice')
    baseCharge = baseCharge * 1.03;
    ticketCount --;
    ticketCountRemainder --;
};

var secondHalfPrice = function() {
    console.log('in function secondHalfPrice');
    baseCharge = baseCharge * 1.05;
    ticketCount --;
};

// var remainingTickets = function () {
    // ticketCount
// }


//call your function within the main input function

var inputHappened = function(currentInput){
    console.log( currentInput );
    if (ticketCount === 10 && ticketCount > 9) {
        console.log (ticketCount);
        display ("Your ticket price is " + "$" + baseCharge.toFixed(2) + ".");
    }
    if (ticketCount >= 6 && ticketCount < 11) {
        console.log(ticketCount);
        firstHalfPrice();
        display ("Your ticket price is " + "$" + baseCharge.toFixed(2) + "." + " " + ticketCountRemainder + " ticket(s) remaining until the next bracket.");
    } else if (ticketCount <= 5 && ticketCount !== 0) {
        secondHalfPrice ();
        console.log(ticketCount);
        display ("You are in the expensive bracket:" + " ticket price is " + "$" + baseCharge.toFixed(2));
    } else if (ticketCount === 0) {
        display ("You have to pay $91,000. Unluckeee");
    }
};