let originalPrice = 50;

var economy = {
  seatsSold: 0,
  totalSeats: 15
};

var business = {
  seatsSold: 0,
  totalSeats: 6
};

var firstClass = {
  seatsSold: 0,
  totalSeats: 4
};

var KLEconomy = {
  seatsSold: 0,
  totalSeats: 10
};

function baliEconomyPrice(seatsSold) {
  let output;
  if (seatsSold > 15) {
    output = "Sorry, all economy seats are sold out";
    return output;
  } else if (seatsSold > 0 && seatsSold <= 7) {
    output = originalPrice * Math.pow(1.03, seatsSold);
    return output.toFixed(2);
  } else if (seatsSold > 7 && seatsSold <= 14) {
    output = originalPrice * Math.pow(1.03, 7) * Math.pow(1.05, seatsSold - 7);
    return output.toFixed(2);
  } else {
    output = 91000;
    return output;
  }
}

function baliFirstPrice(seatsSold) {
  let output;
  if (seatsSold > 0 && seatsSold <= 3) {
    output = originalPrice + originalPrice * 0.15 * seatsSold;
    return output.toFixed(2);
  } else if (seatsSold > 4) {
    output = "Sorry, all first class seats are sold out";
    return output;
  } else {
    output = 191000;
    return output;
  }
}

function baliBusinessPrice(seatsSold) {
  let output;
  if (seatsSold > 6) {
    output = "Sorry, all business class seats are sold out";
    return output;
  } else if (seatsSold > 0 && seatsSold <= 3) {
    output = originalPrice * Math.pow(1.06, seatsSold);
    return output.toFixed(2);
  } else if (seatsSold > 3 && seatsSold <= 5) {
    output = originalPrice * Math.pow(1.06, 3) * Math.pow(1.1, seatsSold - 3);
    return output.toFixed(2);
  } else {
    output = 91000;
    return output;
  }
}

function KLEconomyPrice(seatsSold) {
  let output;
  if (seatsSold > 10) {
    output = "Sorry, all economy seats are sold out";
    return output;
  } else if (seatsSold > 0 && seatsSold <= 5) {
    output = originalPrice * Math.pow(1.03, seatsSold);
    return output.toFixed(2);
  } else if (seatsSold > 5 && seatsSold <= 9) {
    output = originalPrice * Math.pow(1.03, 5) * Math.pow(1.05, seatsSold - 5);
    return output.toFixed(2);
  } else {
    output = 91000;
    return output;
  }
}

var inputHappened = function(currentInput) {
  let output;
  if (currentInput === "KL") {
    output =
      "Current ticket price: " +
      KLEconomyPrice(KLEconomy.seatsSold + 1) +
      "\n Input 'buy KL economy' to purchase ticket. \n Else, input 'cancel' to cancel your transaction.";
    return output;
  } else if (currentInput === "Bali") {
    output =
      "Current first class ticket price: " +
      baliFirstPrice(firstClass.seatsSold + 1) +
      "\n Current business class ticket price: " +
      baliBusinessPrice(business.seatsSold + 1) +
      "\n Current economy class ticket price: " +
      baliEconomyPrice(economy.seatsSold + 1) +
      "\n Input 'buy Bali first' OR 'buy Bali economy' OR 'buy Bali business' to purchase ticket of your selected flight class. \n Else, input 'cancel' to cancel your transaction.";
    return output;
  } else if (currentInput === "buy Bali first") {
    firstClass.seatsSold++;
    if (firstClass.seatsSold > firstClass.totalSeats) {
      output = baliFirstPrice(firstClass.seatsSold);
      return output;
    } else {
      output =
        "Thank you for purchasing a first class ticket to Bali at $" +
        baliFirstPrice(firstClass.seatsSold) +
        ". Remaining first class tickets available: " +
        (firstClass.totalSeats - firstClass.seatsSold) +
        ".";
      return output;
    }
  } else if (currentInput === "buy Bali economy") {
    economy.seatsSold++;
    if (economy.seatsSold > economy.totalSeats) {
      output = baliEconomyPrice(economy.seatsSold);
      return output;
    } else {
      output =
        "Thank you for purchasing an economy class ticket to Bali at $" +
        baliEconomyPrice(economy.seatsSold) +
        ". Remaining economy class tickets available: " +
        (economy.totalSeats - economy.seatsSold) +
        ".";
      return output;
    }
  } else if (currentInput === "buy Bali business") {
    business.seatsSold++;
    if (business.seatsSold > business.totalSeats) {
      output = baliBusinessPrice(business.seatsSold);
      return output;
    } else {
      output =
        "Thank you for purchasing a business ticket to Bali at $" +
        baliBusinessPrice(business.seatsSold) +
        ". Remaining business class tickets available: " +
        (business.totalSeats - business.seatsSold) +
        ".";
      return output;
    }
  } else if (currentInput === "buy KL economy") {
    KLEconomy.seatsSold++;
    if (KLEconomy.seatsSold > KLEconomy.totalSeats) {
      output = KLEconomyPrice(KLEconomy.seatsSold);
      return output;
    } else {
      output =
        "Thank you for purchasing an economy class ticket to KL at $" +
        KLEconomyPrice(KLEconomy.seatsSold) +
        ". Remaining economy class tickets available: " +
        (KLEconomy.totalSeats - KLEconomy.seatsSold) +
        ".";
      return output;
    }
  } else {
    output = "Please input travel destination: 'KL' or 'Bali'.";
    return output;
  }
};

/*
// further 4
let originalPrice = 50;
let seatsSold = 0;
let totalSeats = 10;

var inputHappened = function(currentInput) {
  let output;
  if (currentInput == seatsSold) {
    seatsSold++;
    console.log(seatsSold);
    if (seatsSold > 10) {
      output = "Sorry, all seats are sold out";
      return output;
    } else if (seatsSold > 0 && seatsSold <= 5) {
      console.log(1.03);
      output = originalPrice * Math.pow(1.03, seatsSold);
      if (seatsSold === 5) {
        return (
          output.toFixed(2) +
          "\n There are 5 tickets remaining. The price bracket will increase with the next purchase."
        );
      } else {
        return output.toFixed(2);
      }
    } else if (seatsSold > 5 && seatsSold <= 9) {
      console.log(1.05);
      output =
        originalPrice * Math.pow(1.03, 5) * Math.pow(1.05, seatsSold - 5);
      return output.toFixed(2);
    } else {
      output = 91000;
      return output;
    }
  } else {
    output = "There are currently " + seatsSold + " seats sold. Please input the number " + seatsSold + " in order to make a purchase.";
    return output;
  }
};

// further 1 
let originalPrice = 50;
let seatsSold = 0;

var inputHappened = function (currentInput) {
  let output;
  seatsSold++;
  console.log(seatsSold);
  if (seatsSold > 10) {
    output = "Sorry, all seats are sold out";
    return output;
  }
  else if (seatsSold > 0 && seatsSold <= 5) {
    console.log(1.03);
    output = originalPrice * Math.pow(1.03,seatsSold);
    return output.toFixed(2);
  }
  else if (seatsSold > 5 && seatsSold <= 9) {
    console.log(1.05);
    output = originalPrice * Math.pow(1.03, 5) * Math.pow(1.05, seatsSold-5);
    return output.toFixed(2);
  }
  else {
    output = 91000;
    return output;
  }
}
*/
