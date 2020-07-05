console.log("hello script js");
//seats left = 10 - seats sold
// i represents the number of seats sold seatsSold, i <= 10,
// when i = 1, (basePrice)= $50,
// when i = 2 to 10, seatPrice = basePrice + $2.50

 var users = 10; // Maximum number of seats
 var seatsSold = 0;
 var inputHappened = function(currentInput) {
 // starting value
     seatsSold = seatsSold + 1;
     var basePrice = 50; // Original price of seats
     var seatsLeft = users - seatsSold;
     var premiumPrice = (basePrice * 0.05) + basePrice;
     if (seatsSold === 1) {
         return ("Your ticket price is" + " " + basePrice);
     } else if (seatsSold > 1 && seatsSold <= 10) {
         return ("Your ticket price is" + " " + premiumPrice);
     } else  {
         return ("No seats left.");
     }
 };