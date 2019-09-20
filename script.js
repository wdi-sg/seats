


//.Total seats on plane = 10
// First plane ticket when empty = 50
// Price after first ticket = (1 + (1 * 0.05))
// Price after second ticket = (1 + (1 * 0.10))

console.log("hello script js");

var ticketPrice = 50;
var noOfSeats = 10;
var inputHappened = function(currentInput){
   console.log( currentInput );
   if( noOfSeats > 0){
   noOfSeats = noOfSeats - 1;
   //noOfSeats --;
   calculatePrice();
   display("Price of ticket is "+ ticketPrice + "\nNo of seats Left: " + noOfSeats)
   }else{
       display("No more")
   }
};

var calculatePrice = function(){
   ticketPrice = ticketPrice * 1.05
};
// var calculatePrice = function(){
//    ticketPrice = ticketPrice * 1.05
// };
// var currentInput = "number";
// var inputHappened = function(currentInput){
//     var

//   console.log( currentInput );
//   return "WOW SOMETHING HAPPENED";
// }