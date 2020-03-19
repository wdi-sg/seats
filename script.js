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
  return sellSeat(seatClass, bigPlane[seatClass]);
};

var validateInput = function (input) {
  if (optMenu.indexOf(input) !== -1) {
    return true;
  }
  throw new Error("Invalid input.\n" + instMenu.join("\n"));
}

var updateSeats = function (seatClass, seatsSold, currentPrice, nextPrice) {
  bigPlane[seatClass].seatsSold = seatsSold;
  bigPlane[seatClass].currentPrice = currentPrice;
  bigPlane[seatClass].nextPrice = nextPrice;
  console.log(bigPlane);

  return true;
}

var sellSeat = function (seatClass, seatsObj) {
  seatsSold = seatsObj.seatsSold;
  seatCount = seatsObj.seatCount;
  currentPrice = seatsObj.currentPrice;
  nextPrice = seatsObj.nextPrice;
  lastSeat = seatsObj.lastSeat;

  if (seatsSold < seatCount) {

    seatsSold++;
    currentPrice = nextPrice[0];
    nextPrice = getNextPrice(seatClass,
                             seatsSold,
                             seatCount,
                             currentPrice,
                             seatsObj.lowRate,
                             seatsObj.highRate,
                             lastSeat);
    console.log(nextPrice);
    var rateLevel = nextPrice[1];
    if (seatsSold === seatCount) {
      updateSeats(seatClass, seatsSold, currentPrice, nextPrice);
      return `Sold! Your seat cost $${currentPrice.toFixed(2)}, as the last seat.`;
    }
    console.log(currentPrice);
    updateSeats(seatClass, seatsSold, currentPrice, nextPrice);
    return `Sold! Your seat cost $${currentPrice.toFixed(2)}. The next seat will be sold at the ${rateLevel} rate.`;
  }
  return `Sold out in ${seatClass} class. Try another class, or the next flight.`;
  updateSeats(seatClass, seatsSold, currentPrice, nextPrice);
}

var getNextPrice = function (seatClass, seatsSold, seatCount, currentPrice, lowRate, highRate, lastSeat) {
  console.log("got " + seatClass);
  if (seatClass === "first") {
    if (seatsSold === seatCount - 1) {
      return [lastSeat, "last seat"];
    }
    return [currentPrice * highRate, "standard"];
  }

  if (seatsSold < Math.floor(seatCount / 2)) {
    console.log("low");
    return [currentPrice * lowRate, "low"];
  } else if (seatsSold < seatCount - 1) {
    console.log("high");
    return [currentPrice * highRate, "high"];
  }
  return [lastSeat, "last seat"];
}

/* TODO - report remaining seats at the same rate
var getCheapSeats = function (seats, seatClass) {
  if (seatClass === "first") {
    return;
  }
}
*/

var clearInput = function () {
  document.getElementById("input").value = "";
}
