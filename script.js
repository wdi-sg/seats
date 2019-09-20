console.log("hello script js");

//initial total seats in plane is 10
//initial  ticket price is 50
//var initialTotalSeats = 10;
var initialTicketPrice = 50;
var seatsLeft = 10;
var priceCharged;
var surcharge = 0.05;

//After user typed input, show ticket price as 50 AND minus total seats by 1
var inputHappened = function (seatsLeft, priceCharged, currentInput){
   /* if (currentInput && seatsLeft === 10) {
        surcharge = 0;
        priceCharged = initialTicketPrice;
        seatsLeft = seatsLeft - 1;

        console.log(seatsLeft);
        console.log(priceCharged);
    return;
    }

};*/
//If total seats is 10, ticket price is $50
if (seatsLeft === 10) {
        surcharge = 0;
        priceCharged = initialTicketPrice;
        seatsLeft--;
        console.log(seatsLeft);
        console.log(priceCharged);
    return;
};  //
if (seatsLeft = 9) {
    surcharge = 0.05;
    priceCharged = initialTicketPrice + (initialTicketPrice * surcharge);
    seatsLeft--;
    console.log(seatsLeft);
    console.log(priceCharged);
return;
};

while (seatsLeft <= 0) {
    surcharge = surcharge * 1;
    priceCharged = initialTicketPrice + (initialTicketPrice * surcharge);
    seatsLeft--;
    console.log(seatsLeft);
    console.log(priceCharged);
};
/*output = "1 ticket booked. Please pay $" + priceCharged + ". Seats left: " +*/

/*var nextPurchase = function(userKeyed) {
        seatsLeft - 1;
        priceCharged = initialTicketPrice + (initialTicketPrice * 0.05);
        console.log(seatsLeft);
        console.log(priceCharged);
};


//Total seats now 10 - 1, ticket price now $50 x (50 x 0.05)

//When second user typed input, show ticket price as 50 x (50 x 0.05) AND minus total seats by 1
//Total seats now 10 -1 -1, ticket price now 50 x (50 x (50 x (0.05 + 0.05))*/