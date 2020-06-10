// Object: A regular plane
var regPlane = {
  totalSeats: 10,
  currPrice: 50.0,
  availSeats: 10,
  soldSeats: 0,
};

// Object: A cabin plane
var cabinPlane = {
  economy: {
    totalSeats: 15,
    availSeats: 15,
    currPrice: 50,
    pricePercentage: [1.03, 1.05],
    lastSeat: 91000,
  },
  business: {
    totalSeats: 6,
    availSeats: 6,
    currPrice: 50,
    pricePercentage: [1.06, 1.10],
    lastSeat: 91000,
  },
  first: {
    totalSeats: 4,
    availSeats: 4,
    currPrice: 50,
    pricePercentage: [1.15, 1.50],
    lastSeat: 191000,
  }
};

function getCabinTicket(prop) {
  if (cabinPlane[prop].availSeats == 1) { // This is the last seat
    return cabinPlane[prop].lastSeat;
  }
  else if (cabinPlane[prop].availSeats > cabinPlane[prop].totalSeats) {
    return cabinPlane[prop].currPrice * cabinPlane[prop].pricePercentage[0];
  }
  return cabinPlane[prop].currPrice * cabinPlane[prop].pricePercentage[1];
}

// Purpose: for regularPlanes, returns the price of the next seat W/O compound interest
function getNextSeatPrice() {
  if (regPlane.availSeats === regPlane.totalSeats) {
    return regPlane.currPrice;
  }
  // If this is the last seat
  else if (regPlane.availSeats == 1) {
    return 91000;
  }
  // If it is the first half seats
  else if (regPlane.availSeats > regPlane.totalSeats/2) {
    return 50 * 1.03;
  }
  // If it is the last half seats
  return 50 * 1.05;
}

// Purpose: updates seats and current price when seats are sold
function update_regPlaneSeatSold() {
  regPlane.currPrice = getNextSeatPrice();
  regPlane.seatsSold++;
  regPlane.availSeats--;
}

function updateCabinSeats(prop) {
  cabinPlane[prop].currPrice = getCabinTicket(prop);
  cabinPlane[prop].soldSeats++;
  cabinPlane[prop].availSeats--;
}

function isCabinPurchase(currentInput) {
  return ((currentInput == "buy first class") || (currentInput == "buy business class")
          || (currentInput == "buy economy class"));
}

function getCabinProp(currentInput) {
  switch (currentInput) {
    case "buy first class":
      return "first";
    case "buy business class":
      return "business";
    case "buy economy class":
      return "economy";
    default: return "Error 404";
  }
}

// When button is clicked
document.querySelector('#input').addEventListener('change', function(event){
    var currentInput = event.target.value;
    var displayMessage = "";
    var availSeats = 0;

    if (isValid(currentInput)) { // Only valid if it's strings and not empty
      if (isCabinPurchase(currentInput)) { // If it is a cabin purchase
        const prop = getCabinProp(currentInput);
        updateCabinSeats(prop);
        price = cabinPlane[prop].currPrice;
        availSeats = cabinPlane[prop].availSeats;
      }
      else {
        update_regPlaneSeatSold();
        price = regPlane.currPrice
        availSeats = regPlane.availSeats;
      }
      overwrite(price);
      append("No. of seats left: " + availSeats)
    }
});

// This function overwrites current output
var overwrite = function(data){
    var output = document.querySelector('#output');
    output.innerText = data;
}

// This function appends text to current output
function append(text) {
    var output = document.querySelector('#output');
    output.innerText += text;
}

// Purpose: checks the validity of input,
// Input must be a string and must not be empty
function isValid(input) {
  if (!isNaN(input) || input === "") {
    overwrite("Uh oh! Input must be a string and must not be empty ~");
    return false;
  }
  return true;
}


// Purpose: regularPlanes, returns the price of the next seat w/ compound interest
// function getCumNextSeatPrice() {
//   // If it is the first seat
//   if (regPlane.availSeats === regPlane.totalSeats) {
//     return regPlane.currPrice;
//   }
//   // If this is the last seat
//   else if (regPlane.availSeats == 1) {
//     return 91000;
//   }
//   // If it is the first half seats
//   else if (regPlane.availSeats > regPlane.totalSeats/2) {
//     return regPlane.currPrice * 1.03;
//   }
//   // If it is the last half seats
//   return regPlane.currPrice * 1.05;
// }