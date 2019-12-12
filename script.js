console.log("Buy your Air-Tickets");

var seatSolds = 1;
var seatPrice = 50;
var priceIncrease = 2.5;
var lastSeat = 91000;
var priceIncrease3 = 1.5;
var priceIncrease5 = 2.5;
var beforePriceIncrease1 = 4;
var beforePriceIncrease2 = 4;


var inputHappened = function(currentInput){
  console.log( currentInput );

// if (seatSolds === 1){
//     seatSolds++;
//     return "The Price of your Seat is $" + seatPrice;

// } else if (seatSolds <= 10){
//     seatPrice = seatPrice + priceIncrease;
//     seatSolds++;
//     return "The Price of your Seat is  $" + seatPrice;
// } else {

//     return "There is no more Seat Available!"
// }    //This is for Part 1//




// if (seatSolds === 1){
//     seatSolds++;

//     return "The Price of your Seat is $" + seatPrice + "\n" + "There is " + beforePriceIncrease2 + " tickets before price increase." ;
// } else if (seatSolds<= 5){
//     seatPrice = seatPrice + priceIncrease3;
//     seatSolds++;
//     beforePriceIncrease2--;
//     return "The Price of your Seat is $" + seatPrice + "\n" + "There is " + beforePriceIncrease2 + " tickets before price increase." ;
// } else if (seatSolds >= 6 && seatSolds < 10){
//     seatPrice = seatPrice + priceIncrease5;
//     seatSolds++;
//     beforePriceIncrease1--;
//     return "The Price of your Seat is $" + seatPrice + "\n" + "There is " + beforePriceIncrease1 + " tickets before price increase";
// } else if (seatSolds === 10){
//     seatSolds++;
//     return "The Price of your Seat is $" + lastSeat + "\n" + "This is the last Seat Available!";
// } else {
//         return "There is no more seats available!"
// } //This is for Part 2//

// if (seatSolds === 1){
//     seatSolds++;

//     return "The Price of your Seat is $" + seatPrice + "\n" + "There is " + beforePriceIncrease2 + " tickets before price increase." ;
// } else if (seatSolds<= 5){
//     seatPrice = seatPrice * 1.03;
//     seatSolds++;
//     beforePriceIncrease2--;
//     return "The Price of your Seat is $" + Math.round(seatPrice*100) / 100 + "\n" + "There is " + beforePriceIncrease2 + " tickets before price increase." ;
// } else if (seatSolds >= 6 && seatSolds < 10){
//     seatPrice = seatPrice * 1.05;
//     seatSolds++;
//     beforePriceIncrease1--;
//     return "The Price of your Seat is $" + Math.round(seatPrice*100) / 100 + "\n" + "There is " + beforePriceIncrease1 + " tickets before price increase";
// } else if (seatSolds === 10){
//     seatSolds++;
//     return "The Price of your Seat is $" + lastSeat + "\n" + "This is the last Seat Available!";
// } else {
//         return "There is no more seats available!"
// } //This is for Part 3//



};