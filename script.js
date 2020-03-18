console.log("hello script js");

// Initialisation

var seatsSoldKL = 0;
var economy = 0;
var business = 0;
var firstClass = 0;

var surcharge = 0;
var priceKL = 50;
var priceEC = 50;
var priceBiz = 50;
var priceFC = 50;
var destination;
var cabinType;

document.querySelector("#output").innerText =
`Welcome to General Airways!
Where would you like to go?

--- KL
--- Bali`



// Helper functions

function twoDP(num) {
  return  (Math.floor(num * 100) / 100).toFixed(2);
}

function priceBracket(seatsSold, totalSeats) {
  switch (true) {
    case (seatsSold === 1):
    return `--- ${1 - seatsSold} seats left for this price bracket ---`;

    case (seatsSold < Math.ceil(totalSeats / 2)):
    return `--- ${Math.ceil(totalSeats / 2) - seatsSold} seats left for this price bracket ---`;

    case (seatsSold < totalSeats):
    return  `--- ${totalSeats - 1 - seatsSold} seats left for this price bracket ---`;

    case  (seatsSold === totalSeats):
    return  `--- ${totalSeats - seatsSold} seats left for this price bracket ---`;

  }
}

function priceKualaLumpur(seatsSold) {
  if (seatsSold > 0) {
    if (seatsSold < 5) {
      priceKL *= 1.03;
    } else if (seatsSold === 9) {
      priceKL = 91000;
    } else {
      priceKL *= 1.05;
    }
  }
}

function priceEconomy(seatsSold) {
  if (seatsSold > 0) {
    if (seatsSold < 8) {
      priceEC *= 1.03;
    } else if (seatsSold === 14) {
      priceEC = 91000;
    } else {
      priceEC *= 1.05;
    }
  }
}

function priceBusiness(seatsSold) {
  if (seatsSold > 0) {
    if (seatsSold < 3) {
      priceBiz *= 1.06;
    } else if (seatsSold === 5) {
      priceBiz = 91000;
    } else {
      priceBiz *= 1.1 ;
    }
  }
}

function priceFirstClass(seatsSold) {
  if (seatsSold > 0) {
    if (seatsSold === 3) {
      priceFC = 191000;
    } else {
      priceFC *= 1.15;
    }
  }
}



// Function

var inputHappened = function(input){
  if (!destination) {
    if (input.toLowerCase() === "kl") {
      destination = input.toLowerCase();
      document.querySelector("#input").value = "";
      return `Would you like to buy a seat?
      Y / N

      --- Seats Left : ${10 - seatsSoldKL} ---
      --- Current Price ($${priceKL}) ---`;
    } else if (input.toLowerCase() === 'bali') {
      destination = input.toLowerCase();
      document.querySelector("#input").value = "";
      return `Which cabin would you like?
      First Class / Business / Economy


      ### Seats Left ###
      --- First Class : ${4 - firstClass} ---
      --- Current Price ($${priceFC}) ---

      --- Business Class : ${6 - business} ---
      --- Current Price ($${priceBiz}) ---

      --- Economy : ${15 - economy} ---
      --- Current Price ($${priceEC}) ---`;
    } else {
      document.querySelector("#input").value = "";
      alert("Please enter a valid destination");
      return `Welcome to General Airways!
      Where would you like to go?

      --- KL
      --- Bali`
    }
  }


  if (destination === "kl") {
    if (input.toLowerCase() === "y") {
      document.querySelector("#input").value = "";
      if (seatsSoldKL === 10) {
        return "Sorry! Seats are all sold out!";
      }

      priceKualaLumpur(seatsSoldKL);
      seatsSoldKL++;

      return `Thank you for your purchase!
      You bought a seat for $${twoDP(priceKL)}.
      Would you like to buy another seat?
      Y / N

      --- Seats Left : ${10 - seatsSoldKL} ---
      ${priceBracket(seatsSoldKL, 10)}`;
    } else if (input.toLowerCase() === 'n') {
      priceKualaLumpur(seatsSoldKL);
      return `Thank you for visiting!`
    } else {
      alert("Please enter a valid input.");

      return `Would you like to buy a seat?
      Y / N

      --- Seats Left : ${10 - seatsSoldKL} ---
      --- Current Price ($${priceKL}) ---`;
    }
  } else {
    if (!cabinType) {
      switch (input.toLowerCase()) {
        case "first class":
        cabinType = input.toLowerCase();
        document.querySelector("#input").value = "";
        return `Would you like to buy a seat?
        Y / N

        --- Seats Left : ${4 - firstClass} ---
        --- Current Price ($${priceFC}) ---`;

        case "business":
        cabinType = input.toLowerCase();
        document.querySelector("#input").value = "";
        return `Would you like to buy a seat?
        Y / N

        --- Seats Left : ${6 - business} ---
        --- Current Price ($${priceBiz}) ---`;

        case "economy":
        cabinType = input.toLowerCase();
        document.querySelector("#input").value = "";
        return `Would you like to buy a seat?
        Y / N

        --- Seats Left : ${15 - economy} ---
        --- Current Price ($${priceEC}) ---`;

        default:
        document.querySelector("#input").value = "";
        alert("Please enter a valid cabin type");
        return `Which cabin would you like?
        First Class / Business / Economy


        ### Seats Left ###
        --- First Class : ${4 - firstClass} ---
        --- Current Price ($${priceFC}) ---

        --- Business Class : ${6 - business} ---
        --- Current Price ($${priceBiz}) ---

        --- Economy : ${15 - economy} ---
        --- Current Price ($${priceEC}) ---`;
      }
    }

    if (cabinType === 'economy') {
      if (input.toLowerCase() === "y") {
        document.querySelector("#input").value = "";
        if (economy === 15) {
          return "Sorry! Seats are all sold out!";
        }

        priceEconomy(economy);
        economy++;

        return `Thank you for your purchase!
        You bought a seat for $${twoDP(priceEC)}.
        Would you like to buy another seat?
        Y / N

        --- Seats Left : ${15 - economy} ---
        ${priceBracket(economy, 15)}`;
      } else if (input.toLowerCase() === 'n') {
        priceEconomy(economy);
        return `Thank you for visiting!`
      } else {
        alert("Please enter a valid input.");

        return `Would you like to buy a seat?
        Y / N

        --- Seats Left : ${15 - economy} ---
        --- Current Price ($${priceEC}) ---`;
      }
    } else if (cabinType === 'business') {
      if (input.toLowerCase() === "y") {
        document.querySelector("#input").value = "";
        if (business === 6) {
          return "Sorry! Seats are all sold out!";
        }

        priceBusiness(business);
        business++;

        return `Thank you for your purchase!
        You bought a seat for $${twoDP(priceBiz)}.
        Would you like to buy another seat?
        Y / N

        --- Seats Left : ${6 - business} ---
        ${priceBracket(business, 6)}`;
      } else if (input.toLowerCase() === 'n') {
        priceBusiness(business);
        return `Thank you for visiting!`
      } else {
        alert("Please enter a valid input.");

        return `Would you like to buy a seat?
        Y / N

        --- Seats Left : ${6 - business} ---
        --- Current Price ($${priceBiz}) ---`;
      }
    } else if (cabinType === 'first class') {
      if (input.toLowerCase() === "y") {
        document.querySelector("#input").value = "";
        if (firstClass === 4) {
          return "Sorry! Seats are all sold out!";
        }

        priceFirstClass(firstClass);
        firstClass++;

        return `Thank you for your purchase!
        You bought a seat for $${twoDP(priceFC)}.
        Would you like to buy another seat?
        Y / N

        --- Seats Left : ${4 - firstClass} ---
        ${priceBracket(firstClass, 4)}`;
      } else if (input.toLowerCase() === 'n') {
        priceFirstClass(firstClass);
        return `Thank you for visiting!`
      } else {
        alert("Please enter a valid input.");

        return `Would you like to buy a seat?
        Y / N

        --- Seats Left : ${4 - firstClass} ---
        --- Current Price ($${priceFC}) ---`;
      }
    }
  }

};