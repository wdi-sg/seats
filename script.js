console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };

var totalSeats = 10;
var ticketPrice = 50;


document.getElementById("buy").addEventListener("click", buySeat);
document.getElementById("price").textContent = "$" + ticketPrice;
document.getElementById("seats-left").textContent = totalSeats + " seats availabble";


function buySeat(){

   //check if there is still seat,
   if (totalSeats > 1){

     //display feedback
     document.getElementById("feedback").textContent = "seat bought at" + " $" + ticketPrice;
     console.log ("seat " + totalSeats + " bought at" + " $" + ticketPrice);
     setTimeout(function(){
        document.getElementById("feedback").textContent = "";
      }, 3000);

      //price update
      ticketPrice = parseInt(ticketPrice) * 1.5;
      document.getElementById("price").textContent = "$" + ticketPrice;

    //if yes totalSeats -1
     totalSeats = totalSeats - 1;
     console.log(totalSeats + " seats left");
     document.getElementById("seats-left").textContent = totalSeats + " seats available";

   } else if (totalSeats === 1){
     console.log ("seat " + totalSeats + " bought at" + " $" + ticketPrice);
     totalSeats = totalSeats - 1;
     console.log(totalSeats + " seats left");
     document.getElementById("seats-left").textContent = "All sold out!";
     document.getElementById("buy").style.display = "none";
     document.getElementById("price").textContent = " ";
   }
}
// var buySeat = function(){
//   console.log("test");
// }

// onclick , buySeat, getNewPrice, displayPrice
// for each seat sold, each seat remaining cost 50% more.
//   when user buy a seat, seat sold +1 ,
