console.log("hello script js");

let seatPrice;
let economySeatPrice = 50;
let businessSeatPrice = 50;
let firstClassSeatPrice = 50;

let firstClassSeats = 4;

let businessClassSeats = 6;
let higherTierBusinessClass = businessClassSeats / 2;
let businessSeatsBeforeHike = higherTierBusinessClass;

let economyClassSeats = 16;
let higherTierEconomyClass = economyClassSeats / 2;
let economySeatsBeforeHike = higherTierEconomyClass;

let enteredClass;

var inputHappened = function(currentInput) {
  enteredClass = checkClass(currentInput);
  return sellSeats();
};

var checkClass = function(currentInput) {
  let chosenClass = currentInput;
  return chosenClass;
};

var sellSeats = function() {
  if (enteredClass === "economy") {
    while (economyClassSeats === 16) {
      economyClassSeats--;
      return displaySeatMessage();
    }
    economyClassSeats--;
    seatPrice = changeTieredPricing(seatPrice);
    return displaySeatMessage();
  }

  if (enteredClass === "business") {
    while (businessClassSeats === 6) {
      businessClassSeats--;
      return displaySeatMessage();
    }
    businessClassSeats--;
    seatPrice = changeTieredPricing(seatPrice);
    return displaySeatMessage();
  }

  if (enteredClass === "first class") {
    while (firstClassSeats !== 0) {
      firstClassSeats--;
      return displaySeatMessage();
    }
    seatPrice = changeTieredPricing(seatPrice);
    return displaySeatMessage();
  }
};

var displaySeatMessage = function() {
  const seatsBeforeHike = checkSeatsBeforePriceHike();
  if (enteredClass === "economy") {
    while (
      economyClassSeats >= higherTierEconomyClass &&
      economySeatsBeforeHike != 0
    ) {
      return `Seat sold for $${economySeatPrice}! ${economyClassSeats} seats left. ${economySeatsBeforeHike} before price hike!`;
    }
    while (economyClassSeats >= 1 && economySeatsBeforeHike === 0) {
      return `Seat sold for $${economySeatPrice}! ${economyClassSeats} seats left.`;
    }
    return `Seat sold for $${economySeatPrice}! You're a mad lad!`;
  }

  if (enteredClass === "business") {
    while (
      businessClassSeats >= higherTierBusinessClass &&
      businessSeatsBeforeHike != 0
    ) {
      return `Seat sold for $${businessSeatPrice}! ${businessClassSeats} seats left. ${businessSeatsBeforeHike} before price hike!`;
    }
    while (businessClassSeats >= 1 && businessSeatsBeforeHike === 0) {
      return `Seat sold for $${businessSeatPrice}! ${businessClassSeats} seats left.`;
    }
    return `Seat sold for $${businessSeatPrice}! You're a mad lad!`;
  }

  if (enteredClass === "first class" && firstClassSeats !== 0) {
    return `Seat sold for $${firstClassSeatPrice}! ${firstClassSeats} seats left`;
  } else {
    return `Seat sold for $${firstClassSeatPrice}! You must be the president or something!`;
  }
};

var changeTieredPricing = function() {
  let multiplier;
  if (enteredClass === "economy") {
    if (economyClassSeats > higherTierEconomyClass) {
      multiplier = 1.03;
      return (economySeatPrice = economySeatPrice * multiplier);
    } else if (economyClassSeats >= 1) {
      multiplier = 1.05;
      return (economySeatPrice = economySeatPrice * multiplier);
    }
    return (economySeatPrice = 91000);
  }

  if (enteredClass === "business") {
    if (businessClassSeats > higherTierBusinessClass) {
      multiplier = 1.06;
      return (businessSeatPrice = businessSeatPrice * multiplier);
    } else if (businessClassSeats >= 1) {
      multiplier = 1.1;
      return (businessSeatPrice = businessSeatPrice * multiplier);
    }
    return (businessSeatPrice = 91000);
  }

  if (enteredClass === "first class") {
    if (firstClassSeats !== 0) {
      multiplier = 1.15;
      console.log("happened");
      return (firstClassSeatPrice = firstClassSeatPrice * multiplier);
    }
    return (firstClassSeatPrice = 91000);
  }
};

var checkSeatsBeforePriceHike = function() {
  if (enteredClass === "economy") {
    if (economySeatsBeforeHike != 0) {
      economySeatsBeforeHike--;
    }
    return economySeatsBeforeHike;
  }

  if (enteredClass === "business") {
    if (businessSeatsBeforeHike != 0) {
      businessSeatsBeforeHike--;
    }
    return businessSeatsBeforeHike;
  }
};
