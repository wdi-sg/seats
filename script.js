console.log("hello script js");

// Initialisation

var seatsSold = 0;
var surcharge = 0;
var price = 50;

document.querySelector("#output").innerText =
`Welcome to General Airways!
Would you like to buy a seat?

--- Seats Left : ${10 - seatsSold} ---`



// Helper functions

function twoDP(num) {
  return  (Math.floor(num * 100) / 100).toFixed(2);
}



// Function

var inputHappened = function(intput){
  if (seatsSold === 10) {
    return "Sorry! Seats are all sold out!";
  }

  if (seatsSold > 0) {
    price = 50 * 1.05;
  };

  seatsSold++;

  return `Thank you for your purchase!
  You bought a seat for $${twoDP(price)}.
  Would you like to buy another seat?

  --- Seats Left : ${10 - seatsSold} ---`
};