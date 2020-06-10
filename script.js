//Initialize Values
var seatsSoldKL = 0;
var economySoldBL = 0;
var businessSoldBL = 0;
var firstSoldBL = 0;
var priceKL = 50;
var econPrice = 50;
var bizPrice = 50;
var firstPrice = 50;
var location;
var cabinClass;

//Starting prompt message
document.querySelector("#output").innerText =
`Welcome! Where will your next adventure take you? Type selection:
-KL
-Bali`;



// Calculations


function priceCategory(seatsSold, numberOfSeats) {
  switch (true) {
    case (seatsSold === 1):
    return `There are ${1 - seatsSold} seats left for this price.`;

    case (seatsSold < Math.ceil(numberOfSeats / 2)):
    return `There are ${Math.ceil(numberOfSeats / 2) - seatsSold} seats left for this price.`;

    case (seatsSold < numberOfSeats):
    return  `There are ${numberOfSeats - 1 - seatsSold} seats left for this price.`;

    case  (seatsSold === numberOfSeats):
    return  `There are ${numberOfSeats - seatsSold} seats left for this price.`;

  }
}

function calculateKLPrice(seatsSold) {
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

function calculateEconPrice(seatsSold) {
  if (seatsSold > 0) {
    if (seatsSold < 8) {
      econPrice *= 1.03;
    } else if (seatsSold === 14) {
      econPrice = 91000;
    } else {
      econPrice *= 1.05;
    }
  }
}

function calculateBizPrice(seatsSold) {
  if (seatsSold > 0) {
    if (seatsSold < 3) {
      bizPrice *= 1.06;
    } else if (seatsSold === 5) {
      bizPrice  = 91000;
    } else {
      bizPrice *= 1.1 ;
    }
  }
}

function calculateFirstPrice(seatsSold) {
  if (seatsSold > 0) {
    if (seatsSold === 3) {
      firstPrice = 191000;
    } else {
      firstPrice *= 1.15;
    }
  }
}



// Prompt sequence
//If location has not been specified yet (i.e. this is the user's first input)
var inputHappened = function(input){
  if (!location) {
    //Output depending on kl, bali, or invalid input
    if (input.toLowerCase() === "kl") {
      location = input.toLowerCase();
      document.querySelector("#input").value = "";
      return `Purchase a ticket? Type selection:
      Y / N
      --- Seats Available : ${10 - seatsSoldKL} ---
      --- Current Price: $${priceKL} ---`;
    } else if (input.toLowerCase() === "bali") {
      location = input.toLowerCase();
      document.querySelector("#input").value = "";
      return `Preferred cabin class?
            Type selection:
            Economy/Business/First Class
            Available Seats:

      --- First Class : ${4 - firstSoldBL} ---
      --- Current Price ($${firstPrice}) ---
      --- Business Class : ${6 - businessSoldBL} ---
      --- Current Price ($${bizPrice}) ---
      --- Economy : ${15 - economySoldBL} ---
      --- Current Price: $${econPrice}) ---`;
    } else {
      document.querySelector("#input").value = "";
      alert("Please enter a valid vacation destination!");
      return `Welcome! Where will your next adventure take you? Type selection:
      -KL
      -Bali`;
    }
  }

 //Purchase KL ticket
  if (location === "kl") {
    if (input.toLowerCase() === "y") {
      document.querySelector("#input").value = "";
      if (seatsSoldKL === 10) {
        return "Sold out!";
      }

      calculateKLPrice(seatsSoldKL);
      seatsSoldKL++;

      return `Your total is $${priceKL}.
      Purchase another ticket?
      Y / N
      --- Available seats : ${10 - seatsSoldKL} ---
      ${priceCategory(seatsSoldKL, 10)}`;
    } else if (input.toLowerCase() === 'n') {
      calculateKLPrice(seatsSoldKL);
      return `Thank you for visiting!`
    } else {
      alert("Please enter a valid input.");

      return `Purchase a ticket?
      Y / N
      --- Available seats : ${10 - seatsSoldKL} ---
      --- Current Price : $${priceKL} ---`;
    }
  } else {
    //User chose bali; cabin class not yet specified
    if (!cabinClass) {
      switch (input.toLowerCase()) {
        case "first class":
        cabinClass = input.toLowerCase();
        document.querySelector("#input").value = "";
        return `Purchase a ticket?
        Y / N
        --- Available seats : ${4 - firstSoldBL} ---
        --- Current Price : $${firstPrice} ---`;

        case "business":
        cabinClass = input.toLowerCase();
        document.querySelector("#input").value = "";
        return `Purchase a ticket?
        Y / N
        --- Available seats : ${6 - businessSoldBL} ---
        --- Current Price : $${bizPrice} ---`;

        case "economy":
        cabinClass = input.toLowerCase();
        document.querySelector("#input").value = "";
        return `Purchase a ticket?
        Y / N
        --- Available seats : ${15 - economySoldBL} ---
        --- Current Price : $${econPrice} ---`;

        default:
        document.querySelector("#input").value = "";
        alert("Please enter cabin class.");
        return `Preferred cabin class? Type selection:
        Economy / Business / First class
        ### Available seats ###
        --- First Class : ${4 - firstSoldBL} ---
        --- Current Price ($${firstPrice}) ---
        --- Business Class : ${6 - businessSoldBL} ---
        --- Current Price ($${bizPrice}) ---
        --- Economy : ${15 - economySoldBL} ---
        --- Current Price ($${econPrice}) ---`;
      }
    }
//Purchase bali tickets by cabin class
    if (cabinClass === 'economy') {
      if (input.toLowerCase() === "y") {
        document.querySelector("#input").value = "";
        if (economySoldBL === 15) {
          return "Sold out!";
        }

        calculateEconPrice(economySoldBL);
        economySoldBL++;

        return `Your total is $${econPrice}.
        Purchase another ticket?
        Y / N
        --- Available seats : ${15 - economySoldBL} ---
        ${priceCategory(economySoldBL, 15)}`;
      } else if (input.toLowerCase() === 'n') {
        calculateEconPrice(economySoldBL);
        return `Please come again!`
      } else {
        alert("Invalid input.");

        return `Purchase a ticket?
        Y / N
        --- Available seats : ${15 - economySoldBL} ---
        --- Current Price : $${econPrice} ---`;
      }
    } else if (cabinClass === 'business') {
      if (input.toLowerCase() === "y") {
        document.querySelector("#input").value = "";
        if (businessSoldBL === 6) {
          return "Sold out!";
        }

        calculateBizPrice(businessSoldBL);
        businessSoldBL++;

        return `Your total is $${bizPrice}.
        Purchase another ticket?
        Y / N
        --- Available seats : ${6 - businessSoldBL} ---
        ${priceCategory(businessSoldBL, 6)}`;
      } else if (input.toLowerCase() === 'n') {
        calculateBizPrice(businessSoldBL);
        return `Please come again!`
      } else {
        alert("Invalid input.");

        return `Purchase a ticket?
        Y / N
        --- Available seats : ${6 - businessSoldBL} ---
        --- Current Price :$${bizPrice} ---`;
      }
    } else if (cabinClass === 'first class') {
      if (input.toLowerCase() === "y") {
        document.querySelector("#input").value = "";
        if (firstSoldBL === 4) {
          return "Sold out!";
        }

        calculateFirstPrice(firstSoldBL);
        firstSoldBL++;

        return `Your total is $${firstPrice}.
        Purchase another ticket?
        Y / N
        --- Seats Left : ${4 - firstSoldBL} ---
        ${priceCategory(firstSoldBL, 4)}`;
      } else if (input.toLowerCase() === 'n') {
        calculateFirstPrice(firstSoldBL);
        return `Please come again!`
      } else {
        alert("Invalid input.");

        return `Purchase a ticket?
        Y / N
        --- Available seats: ${4 - firstSoldBL} ---
        --- Current Price :$${firstPrice} ---`;
      }
    }
  }

};