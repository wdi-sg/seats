console.log("hello script js");

var inputHappened = function(currentInput){
    if (currentInput !== null) {
        var seatsLeft = initialTotalSeats - 1;
        var priceCharged = initialTicketPrice;
        console.log(seatsLeft);
        console.log(priceCharged);
    }
  //
  display( "1 ticket booked. Please pay $" + priceCharged + ". Seats left: " + seatsLeft);
};


//initial total seats in plane is 10
//initial  ticket price is 50
var initialTotalSeats = 10;
var initialTicketPrice = 50;

var nextPurchase = function(seatsLeft, priceCharged) {

}

//var userToPay = function (initialTotalSeats, initialTicketPrice) {
//    if (initialTotalSeats = 10) {
//        initialTicketPrice = 50;


//    }
//}
//If total seats is 10, ticket price is $50
//After user typed input, show ticket price as 50 AND minus total seats by 1
//Total seats now 10 - 1, ticket price now $50 x (50 x 0.05)

//When second user typed input, show ticket price as 50 x (50 x 0.05) AND minus total seats by 1
//Total seats now 10 -1 -1, ticket price now 50 x (50 x (50 x (0.05 + 0.05))