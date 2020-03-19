console.log("Airticket Kiosk!");

var totalPlaneSeats = 10;
var firstHalfSeats = 50 * 1.03;
var secondHalfSeats = 50 * 1.05;
var firstSeatOnThePlane = 50;
var befPriceChange;
var compoundingPrice = 50;
var lastSeat = 91000;

var economySeats = 15;
var businessSeats = 6;
var firstClassSeats = 4;

var economyFirstHalfPrice = 50;
var businessSeatsPrice = 50;
var firstClassPrice = 50;

document.getElementById("output").innerText = `Hi! Good Morning?`;

function clearInput() {
  document.getElementById("input").value = "";
}
//use this to clear the input box

//=========================Part 1 =================================
// var inputHappened = function(currentInput) {
//   if (isNaN(currentInput)) {
//     clearInput();
//     return "Sorry please enter Economy , Business or First Class!";
//   } else if (totalPlaneSeats === 10) {
//     totalPlaneSeats = totalPlaneSeats - 1;
//     befPriceChange = totalPlaneSeats - 9;
//     clearInput();
//     return (
//       "Your ticket is $ " +
//       firstSeatOnThePlane +
//       " tickets before price change : " +
//       befPriceChange
//     );
//   } else if (totalPlaneSeats < 10 && totalPlaneSeats > 5) {
//     totalPlaneSeats = totalPlaneSeats - 1;
//     befPriceChange = totalPlaneSeats - 5;
//     compoundingPrice = compoundingPrice * 1.03;
//     clearInput();
//     return (
//       "Your ticket is $ " +
//       Math.round((compoundingPrice + Number.EPSILON) * 100) / 100 +
//       " tickets before price change : " +
//       befPriceChange
//     );
//   } else if (totalPlaneSeats < 6 && totalPlaneSeats > 1) {
//     totalPlaneSeats = totalPlaneSeats - 1;
//     befPriceChange = totalPlaneSeats - 1;
//     compoundingPrice = compoundingPrice * 1.05;
//     clearInput();
//     return (
//       "Your ticket is $ " +
//       Math.round((compoundingPrice + Number.EPSILON) * 100) / 100 +
//       " tickets before price change : " +
//       befPriceChange
//     );
//   } else if (totalPlaneSeats === 1) {
//     totalPlaneSeats = totalPlaneSeats - 1;
//     clearInput();
//     return (
//       "Your ticket is $ " + lastSeat + " This is the last ticket available!"
//     );
//   } else {
//     clearInput();
//     return "Sorry no more tickets!";
//   }
// };
// ==============================================================================

var inputHappened = function(currentInput) {
  if (currentInput === "Economy" && economySeats === 15) {
    economySeats = economySeats - 1;
    befPriceChange = 0;
    clearInput();
    return (
      "Your ticket is $ " +
      firstSeatOnThePlane +
      " tickets before price change : " +
      befPriceChange
    );
  } else if (currentInput === "Business" && businessSeats === 6) {
    console.log("hello");
    businessSeats = businessSeats - 1;
    befPriceChange = 0;
    clearInput();
    return (
      "Your ticket is $ " +
      firstSeatOnThePlane +
      " tickets before price change : " +
      befPriceChange
    );
  } else if (currentInput === "First Class" && firstClassSeats === 4) {
    console.log("first class!");
    firstClassSeats = firstClassSeats - 1;
    firstClassPrice = firstClassPrice * 1.15;
    befPriceChange = 0;
    console.log(firstClassSeats);
    clearInput();
    return (
      "Your ticket is $ " +
      firstClassPrice +
      " tickets before price change : " +
      befPriceChange
    );
  } else if (currentInput === "First Class") {
    if (firstClassSeats < 4 && firstClassSeats > 1) {
      firstClassSeats = firstClassSeats - 1;
      firstClassPrice = firstClassPrice * 1.15;
      befPriceChange = 0;
      console.log(firstClassSeats);
      clearInput();
      return (
        "Your ticket is $ " +
        firstClassPrice +
        " tickets before price change : " +
        befPriceChange
      );
    } else if (firstClassSeats === 1) {
      firstClassSeats = firstClassSeats - 1;
      firstClassPrice = 191000;
      console.log(firstClassSeats);
      clearInput();
      return (
        "Your ticket is $ " +
        firstClassPrice +
        " This is the last ticket, thanks!"
      );
    } else {
      clearInput();
      console.log("YOYO try something else!");
      return "Sorry no more First Class Tickets!";
    }
  } else if (currentInput === "Business") {
    if (businessSeats < 6 && businessSeats > 3) {
      businessSeats = businessSeats - 1;
      befPriceChange = businessSeats - 3;
      businessSeatsPrice = businessSeatsPrice * 1.06;
      console.log(businessSeats);
      clearInput();
      return (
        "Your ticket is $ " +
        businessSeatsPrice +
        " tickets before price change : " +
        befPriceChange
      );
    } else if (businessSeats < 4 && businessSeats > 1) {
      businessSeats = businessSeats - 1;
      befPriceChange = businessSeats - 1;
      businessSeatsPrice = businessSeatsPrice * 1.1;
      console.log(businessSeats);
      clearInput();
      return (
        "Your ticket is $ " +
        businessSeatsPrice +
        " tickets before price change : " +
        befPriceChange
      );
    } else if (businessSeats === 1) {
      businessSeats = businessSeats - 1;
      businessSeatsPrice = 91000;
      clearInput();
      return (
        "Your ticket is $ " + businessSeatsPrice + " This is the last Ticket"
      );
    } else {
      clearInput();
      return "There is no more ticket! Sorry about that!";
    }
  } else if (currentInput === "Economy") {
    if (economySeats < 15 && economySeats > 7) {
      economySeats = economySeats - 1;
      befPriceChange = economySeats - 7;
      economyFirstHalfPrice = economyFirstHalfPrice * 1.03;
      console.log(economySeats);
      clearInput();
      return (
        "Your ticket is $ " +
        economyFirstHalfPrice +
        " tickets before price change : " +
        befPriceChange
      );
    } else if (economySeats > 1 && economySeats <= 7) {
      console.log("It is working to this part!");
      economySeats = economySeats - 1;
      befPriceChange = economySeats - 1;
      economyFirstHalfPrice = economyFirstHalfPrice * 1.05;
      console.log(economySeats);
      console.log(befPriceChange);
      clearInput();
      return (
        "Your ticket is $ " +
        economyFirstHalfPrice +
        " tickets before price change : " +
        befPriceChange
      );
    } else if (economySeats === 1) {
      economySeats = economySeats - 1;
      console.log(economySeats);
      clearInput();
      return "Your ticket is $ " + lastSeat + "This is the last ticket!";
    } else {
      return "Sorry no more seats available!";
    }
  }
};
