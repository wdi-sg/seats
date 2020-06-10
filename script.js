// Object: A regular plane
var regPlane = {
  totalSeats: 10,
  currPrice: 50.0,
  availSeats: 10,
  soldSeats: 0,
};

var KLPlane = {
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

var baliPlane = {
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

function getCabinTicket(plane, prop) {
  if (plane[prop].availSeats == 1) { // This is the last seat
    return plane[prop].lastSeat;
  }
  else if (plane[prop].availSeats > plane[prop].totalSeats) {
    return plane[prop].currPrice * plane[prop].pricePercentage[0];
  }
  return plane[prop].currPrice * plane[prop].pricePercentage[1];
}

// Purpose: for regularPlanes, returns the price of the next seat W/O compound interest
function getNextSeatPrice(plane) {
  if (plane.availSeats === plane.totalSeats) {
    return plane.currPrice;
  }
  // If this is the last seat
  else if (plane.availSeats == 1) {
    return 91000;
  }
  // If it is the first half seats
  else if (plane.availSeats > plane.totalSeats/2) {
    return 50 * 1.03;
  }
  // If it is the last half seats
  return 50 * 1.05;
}

// Purpose: updates seats and current price when seats are sold
function updateRegPlane(plane) {
  plane.currPrice = getNextSeatPrice(plane);
  plane.seatsSold++;
  plane.availSeats--;
}

function updateCabinSeats(plane, prop) {
  plane[prop].currPrice = getCabinTicket(plane, prop);
  plane[prop].soldSeats++;
  plane[prop].availSeats--;
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
document.querySelector('#input').addEventListener('change', function(event) {
  var currentInput = event.target.value;
  var displayMessage = "";
  var availSeats = 0;
  var price = 0;

  if (!isValid(currentInput)) { // Return if input is invalid
    return;
  }

  if (cookieExists()) {
    console.log("Cookie exists!");
    if (getCookie("place") == "KL") {
      if (currentInput == "buy") {
        updateRegPlane(KLPlane);
        price = KLPlane.currPrice;
        availSeats = KLPlane.availSeats;
      }
      else {
        deleteCookie("place");
      }
    }
    else if (getCookie("place") == "bali") {
      if (isCabinPurchase(currentInput)) { // input = "buy economy/business/first"
        const prop = getCabinProp(currentInput);
        console.log(prop);
        updateCabinSeats(baliPlane, prop);
        console.log(baliPlane);
        price = destinationMessage();
        console.log("My price " + price);
        availSeats = baliPlane.first.availSeats;
      }
      else {
        deleteCookie("place");
      }
    }
  }

  else { // Cookie does not exists
  console.log("Cookie does not exists!");
    if (isCabinPurchase(currentInput)) { // input = "buy economy/business/first"
      const prop = getCabinProp(currentInput);
      updateCabinSeats(cabinPlane, prop);
      price = cabinPlane[prop].currPrice;
      availSeats = cabinPlane[prop].availSeats;
    }

    else if (isDestination(currentInput)) {
      if (getFleet(currentInput) == "cabin") { // input = "bali"
        price = destinationMessage();
        availSeats = baliPlane.first.availSeats;
      }
      else { // input = "KL"
        price = KLPlane.currPrice;
        availSeats = KLPlane.availSeats;
        console.log(price);
      }
      setCookie("place", currentInput);
    }

    else { // input = anything else
      updateRegPlane(regPlane);
      price = regPlane.currPrice;
      availSeats = regPlane.availSeats;
    }
  }
  overwrite(price);
  append("No. of seats left: " + availSeats);
});

function destinationMessage() {
  return "Economy: " + baliPlane.economy.currPrice +
          " No. of seats left: " + baliPlane.economy.availSeats +
          " Business: " + baliPlane.business.currPrice +
          " No. of seats left: " + baliPlane.business.availSeats +
          " First class " + baliPlane.first.currPrice;
}

function cookieExists() {
  return getCookie("place") != "";
}

function deleteCookie(cname) {
  document.cookie = cname + "=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}

function setCookie(cname, cvalue) {
  document.cookie = cname + "=" + cvalue;
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getFleet(currentInput) {
  if (currentInput == "bali") {
    return "cabin";
  }
  return "regular";
}

// Purpose: checks if input is a destination
function isDestination(currentInput) {
  if (currentInput == "bali" || currentInput == "KL") {
    return true;
  }
  return false;
}

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