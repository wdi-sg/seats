console.log("hello script js");
let seats = 10;
let seatPrice = 50;
let higherTier = seats / 2;
let seatsBeforeHike = higherTier;

let firstClassSeats = 4;
let higherTierFirstClass = firstClassSeats / 2;

let businessClassSeats = 6;
let higherTierBusinessClass = businessClassSeats / 2;

let economyClassSeats = 16;
let higherTierEconomyClass = economyClassSeats / 2;
let economySeatsBeforeHike = higherTierEconomyClass;

let enteredClass;

var inputHappened = function(currentInput) {
  enteredClass = checkClass(currentInput);
  if (enteredClass === "economy") {
    return sellSeats();
  } else if (enteredClass === "business") {
    console.log("business");
  } else if (enteredClass === "first class") {
    console.log("first class");
  }
  // return sellSeats(currentInput);
};

var checkClass = function(currentInput) {
  let chosenClass = currentInput;
  return chosenClass;
};

var sellSeats = function() {
  while (economyClassSeats === 16) {
    economyClassSeats--;
    return displaySeatMessage(seatPrice);
  }
  economyClassSeats--;
  seatPrice = changeTieredPricing().toFixed(2);
  return displaySeatMessage(seatPrice);

  // while (seats === 10) {
  //   seats--;
  //   return displaySeatMessage(seatPrice);
  // }
  // seats--;
  // seatPrice = changeTieredPricing().toFixed(2);
  // return displaySeatMessage(seatPrice);
};

var displaySeatMessage = function(seatPrice) {
  const seatsBeforeHike = checkSeatsBeforePriceHike();
  if (enteredClass === "economy") {
    while (
      economyClassSeats >= higherTierEconomyClass &&
      economySeatsBeforeHike != 0
    ) {
      return `Seat sold for $${seatPrice}! ${economyClassSeats} seats left. ${economySeatsBeforeHike} before price hike!`;
    }
    while (economyClassSeats >= 1 && economySeatsBeforeHike === 0) {
      return `Seat sold for $${seatPrice}! ${economyClassSeats} seats left.`;
    }
    return `Seat sold for $${seatPrice}! You're a mad lad!`;
  }
};

var changeTieredPricing = function() {
  let multiplier;
  if (enteredClass === "economy") {
    if (economyClassSeats > higherTierEconomyClass) {
      multiplier = 1.03;
      return (seatPrice = seatPrice * 1.03);
    } else if (economyClassSeats >= 1) {
      multiplier = 1.05;
      console.log("hike", seats, multiplier);
      return (seatPrice = seatPrice * multiplier);
    } else {
      return (seatPrice = 91000);
    }
  }

  // let multiplier;
  // if (seats > higherTier) {
  //   multiplier = 1.03;
  //   return (seatPrice = seatPrice * 1.03);
  // } else if (seats >= 1) {
  // }
  // return (seatPrice = 91000);
};

var checkSeatsBeforePriceHike = function() {
  if (enteredClass === "economy") {
    if (economySeatsBeforeHike != 0) {
      economySeatsBeforeHike--;
    }
    return economySeatsBeforeHike;
  }

  // if (seatsBeforeHike != 0) {
  //   seatsBeforeHike--;
  // }
  // return seatsBeforeHike;
};
