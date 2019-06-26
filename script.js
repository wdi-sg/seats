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

   //check if there is still seat,
   if (totalSeats > 1){

     //display feedback
     document.getElementById("feedback").textContent = "seat bought at" + " $" + ticketPrice;
     setTimeout(function(){
        document.getElementById("feedback").textContent = "";
      }, 1000);

      //price update
      ticketPrice = parseInt(ticketPrice) * 1.5;
      document.getElementById("price").textContent = "$" + ticketPrice;

    //if yes totalSeats -1
     totalSeats = totalSeats - 1;
     console.log(totalSeats);
   } else if (totalSeats === 1){
     totalSeats = totalSeats - 1;
     document.getElementById("buy").style.display = "none";
     document.getElementById("price").textContent = "Sold out";
   }

}
// var buySeat = function(){
//   console.log("test");
// }

// onclick , buySeat, getNewPrice, displayPrice
// for each seat sold, each seat remaining cost 50% more.
//   when user buy a seat, seat sold +1 ,
