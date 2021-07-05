console.log("hello script js");

var ticketPrice = 50;
var seatsleft = 10;
var priceCharged = ticketPrice + (5%);

var inputHappened = function(currentInput){
    if (seatsleft == 10){
        priceCharged = ticketPrice;
        seatsleft = seatsleft - 1;
        console.log(seatsleft);
        console.log(priceCharged);

        return (seatsleft + priceCharged);
    }
