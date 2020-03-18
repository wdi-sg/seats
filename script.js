var instMenu = [
  "Enter one of:\n",
  "1. 'buy first class'",
  "2. 'buy business class'",
  "3. 'buy economy class'"];

var optMenu = [
  "buy first class",
  "buy business class",
  "buy economy class"
];

var bigPlane = {
  first: {
    seatCount: 4,
    seatsSold: 0,
    lowRate: 1.15,
    highRate: 1.15,
    lastSeat: 191000,
    originalPrice: 50,
    nextPrice: [50, ""],
    currentPrice: null
  },
  business: {
    seatCount: 6,
    seatsSold: 0,
    lowRate: 1.06,
    highRate: 1.1,
    lastSeat: 91000,
    originalPrice: 50,
    nextPrice: [50, ""],
    currentPrice: null
  },
  economy: {
    seatCount: 15,
    seatsSold: 0,
    lowRate: 1.03,
    highRate: 1.05,
    lastSeat: 91000,
    originalPrice: 50,
    nextPrice: [50, ""],
    currentPrice: null
  }
}

document.getElementById("output").innerText = instMenu.join("\n");

var inputHappened = function(currentInput){
  input = currentInput.toLowerCase();
  clearInput();

  try {
    validateInput(input);
  } catch (error) {
    return error;
  }
  var seatClass = input.split(" ")[1];
  console.log(seatClass);
  return sellSeat(seatClass);
};

var validateInput = function (input) {
  if (optMenu.indexOf(input) !== -1) {
    return true;
  }
  throw new Error("Invalid input.\n" + instMenu.join("\n"));
}

var sellSeat = function (seatClass) {

  if (bigPlane[seatClass].seatsSold < bigPlane[seatClass].seatCount) {

    console.log("before", bigPlane[seatClass].seatsSold, bigPlane[seatClass].currentPrice, bigPlane[seatClass].nextPrice);
    bigPlane[seatClass].seatsSold++;
    bigPlane[seatClass].currentPrice = bigPlane[seatClass].nextPrice[0];
    bigPlane[seatClass].nextPrice = getNextPrice(bigPlane[seatClass].seatsSold, bigPlane[seatClass].currentPrice, seatClass);
    var rateLevel = bigPlane[seatClass].nextPrice[1];
    console.log("after", bigPlane[seatClass].seatsSold, bigPlane[seatClass].currentPrice, bigPlane[seatClass].nextPrice);
    if (bigPlane[seatClass].seatsSold === bigPlane[seatClass].seatCount) {
      return `Sold! Your seat cost $${bigPlane[seatClass].currentPrice.toFixed(2)}, as the last seat.`;
    }
    console.log(bigPlane[seatClass].currentPrice);
    return `Sold! Your seat cost $${bigPlane[seatClass].currentPrice.toFixed(2)}. The next seat will be sold at the ${rateLevel} rate.`;
  }
  return `Sold out in ${seatClass} class. Try another class, or the next flight.`;
}

var getNextPrice = function (seatsSold, currentPrice, seatClass) {
  var lowRate = bigPlane[seatClass].lowRate;
  var highRate = bigPlane[seatClass].highRate;

  if (seatClass === "first") {
    if (seatsSold === bigPlane.first.seatCount - 1) {
      return [bigPlane.first.lastSeat, "last seat"];
    }
    return [bigPlane[seatClass].currentPrice * highRate, "standard"];
  }

  if (bigPlane[seatClass].seatsSold < Math.floor(bigPlane[seatClass].seatCount / 2)) {
    console.log("low");
    return [bigPlane[seatClass].currentPrice * lowRate, "low"];
  } else if (bigPlane[seatClass].seatsSold < bigPlane[seatClass].seatCount - 1) {
    console.log("high");
    return [bigPlane[seatClass].currentPrice * highRate, "high"];
  }
  return [bigPlane[seatClass].lastSeat, "last seat"];
}

/* TODO
var getCheapSeats = function (seats, seatClass) {
  if (seatClass === "first") {
    return;
  }
}
*/

var clearInput = function () {
  document.getElementById("input").value = "";
}
