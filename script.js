console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };

var totalSeats = 10;
var ticketPrice = 50;


document.getElementById("buy").addEventListener("click", buySeat);
document.getElementById("price").textContent = "$" + ticketPrice;


function buySeat(){
  document.getElementById("feedback").textContent = "seat bought at" + " $" + ticketPrice;
  setTimeout(function(){
     document.getElementById("feedback").textContent = "";
   }, 1000);
  totalSeats = totalSeats - 1;
  console.log(totalSeats);
}
// var buySeat = function(){
//   console.log("test");
// }

// onclick , buySeat, getNewPrice, displayPrice
// for each seat sold, each seat remaining cost 50% more.
//   when user buy a seat, seat sold +1 ,
