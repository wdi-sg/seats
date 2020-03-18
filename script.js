console.log("hello script js");

// Initialisation

var seatsSold = 0;
var surcharge = 0;
var price = 50;

document.querySelector("#output").innerText =
`Welcome to General Airways!
Would you like to buy a seat?

--- Seats Left : ${10 - seatsSold} ---
--- Early Bird Price ($${price}) ---`



// Helper functions

function twoDP(num) {
  return  (Math.floor(num * 100) / 100).toFixed(2);
}

function seatsBracket(seatsSold) {
  switch (true) {
    case (seatsSold === 1):
      return `--- ${1 - seatsSold} seats left for this price ---`;

    case (seatsSold < 6):
      return `--- ${5 - seatsSold} seats left for this price ---`;

    case (seatsSold < 10):
      return  `--- ${9 - seatsSold} seats left for this price ---`;

    case  (seatsSold === 10):
      return  `--- ${10 - seatsSold} seats left for this price ---`;

  }
}



// Function

var inputHappened = function(intput){
  if (seatsSold === 10) {
    return "Sorry! Seats are all sold out!";
  }

  if (seatsSold > 0) {
    if (seatsSold < 5) {
      price = 50 * 1.03;
    } else if (seatsSold === 9) {
      price = 91000;
    } else {
      price = 50 * 1.05;
    }
  }

  seatsSold++;

  return `Thank you for your purchase!
  You bought a seat for $${twoDP(price)}.
  Would you like to buy another seat?

  --- Seats Left : ${10 - seatsSold} ---
  ${seatsBracket(seatsSold)}`
};