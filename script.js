let flightChoice; // store flight destination (KL or BALI)
let wantBuy = false; // use to check if user wanna buy ticket or not
let choseFlight = false; // check if user have chose flight destination

const input = document.getElementById("input");

const airline = {
  plane1: {
    cabin: {
      e: {
        seats: 10,
        ticketsSold: 0,
        priceRule: {
          price: 50,
          first: 1,
          second: 1,
          last: 50,
          timesIncreased: 0,
        },
      },
    },
  },
  plane2: {
    cabin: {
      e: {
        seats: 15,
        ticketsSold: 0,
        priceRule: {
          price: 50,
          first: 1.03,
          second: 1.05,
          last: 91000,
          timesIncreased: 0,
        },
      },
      b: {
        seats: 6,
        ticketsSold: 0,
        priceRule: {
          price: 50,
          first: 1.06,
          second: 1.1,
          last: 91000,
          timesIncreased: 0,
        },
      },
      f: {
        seats: 4,
        ticketsSold: 0,
        priceRule: {
          price: 50,
          first: 1.15,
          second: 1.15,
          last: 191000,
          timesIncreased: 0,
        },
      },
    },
  },
};

// store object in an object for easy reference
const flights = {
  kl: airline.plane1,
  bali: airline.plane2,
};

// alter input display
input.placeholder = "Destination (KL/BALI)?";

const inputHappened = function(currentInput) {
  // declared to store ticket info for display
  let ticketsLeft = "";
  // ensure input are strings
  if (!isNaN(Number(currentInput))) {
    input.value = "";
    return `${currentInput} is invalid.`;
  }
  // save initial input for displaying error
  const saveInput = currentInput;
  // lowercase all inputs to prevent user confusion
  currentInput = currentInput.toLowerCase();
  // check if use has chosen flight details
  if (!choseFlight) {
    // check if flight service of user input is supported
    if (currentInput !== "kl" && currentInput !== "bali") {
      // clear value in input to make way for next input
      input.value = "";
      return `${currentInput} flight service not available.`;
    }
    choseFlight = true; // save to global variable
    flightChoice = currentInput; // save to global variable
    input.value = "";
    input.placeholder = "Ticket (buy / cancel)?";
    return `Flight destination set to ${flightChoice.toUpperCase()}`;
  }
  // check if user want to buy tickets
  switch (wantBuy) {
    case false:
      if (currentInput === "buy") {
        input.value = "";
        if (flightChoice === "bali") {
          // E for economy, B for business, f for first
          input.placeholder = "Buy (E / B / F) class?";
        }
        if (flightChoice === "kl") {
          input.placeholder = "Buy (E) class?";
        }
        wantBuy = true;
      } else if (currentInput === "cancel") {
        input.value = "";
        return "Ok. Please buy next time.";
      } else {
        input.value = "";
        return `${saveInput} not recognized.\nDo you want to BUY or CANCEL?`;
      }
      break;
    case true: // once purchase choice is done, execute purchase
      // KL specific commands
      if (
        flightChoice !== "kl" &&
        (currentInput === "e" || currentInput === "b" || currentInput === "f")
      ) {
        input.value = "";
        // price is calculated here but is stored into the global object
        ticketsLeft = getTicketDetails(currentInput);
        if (ticketsLeft === null) {
          return `Sorry, all ${currentInput.toUpperCase()} tickets are sold out!`;
        }
        // extract price from object by using destructing method, to type less
        const {price} = flights[flightChoice]["cabin"][currentInput].priceRule;
        // round price to 2 decimal places
        return `You paid $${price.toFixed(
          2,
        )} for an Airplane seat.\n${ticketsLeft}`;
        // BALI specific commands
      } else if (flightChoice !== "bali" && currentInput === "e") {
        input.value = "";
        // price is calculated here but is stored into the global object
        ticketsLeft = getTicketDetails(currentInput);
        if (ticketsLeft === null) {
          return `Sorry, all ${currentInput.toUpperCase()} tickets are sold out!`;
        }
        // extract price from object by using destructing method, to type less
        const {price} = flights[flightChoice]["cabin"][currentInput].priceRule;
        // round price to 2 decimal places
        return `You paid $${price.toFixed(
          2,
        )} for an ${currentInput.toUpperCase()} Airplane seat.\n${ticketsLeft}`;
      } else { // handle wrong cabin class selection
        input.value = "";
        return `${saveInput} is invalid.`;
      }
    default: // nothing is used here and should not be executed
      return "Something went wrong!!!";
  }
  // prevent undefined from being displayed in the output at any time
  return "";
};

function getTicketDetails(cabinClass) {
  // extract airline object from the flights object, destructure for easy use
  // this allow easy code reusuability for future objects expansion
  const {ticketsSold, seats, priceRule} = flights[flightChoice]["cabin"][
    cabinClass
  ];
  // declared to store value for easy display
  let numOfSeatsLeft;
  // destructured value cannot be used as value cannot be reassigned if not direct
  flights[flightChoice]["cabin"][cabinClass].ticketsSold += 1;
  if (ticketsSold === 0) { // 1st seat
    // check for price increase
    if (priceRule.first === 1) {
      return `Number of tickets left ${seats - ticketsSold - 1}.`;
    }
    return "Price of tickets will increase from the next purchase onwards.";
  } else if (ticketsSold < seats / 2) { // 1st half
    // check for price increase
    if (priceRule.second === 1) {
      return `Number of tickets left ${seats - ticketsSold - 1}.`;
    }
    // destructured value cannot be used as value cannot be reassigned if not direct
    flights[flightChoice]["cabin"][cabinClass].priceRule.price =
      priceRule.price * priceRule.first;
    // check for price increase for number of seats left display
    if (priceRule.first !== priceRule.second) {
      numOfSeatsLeft = Math.ceil(seats - seats / 2 - ticketsSold);
    } else {
      numOfSeatsLeft = seats - 1 - ticketsSold;
    }
    return `Number of tickets left to price increase: ${numOfSeatsLeft}.`;
  } else if (ticketsSold < seats - 1) { // 2nd half
    // check for price increase for number of seats left display
    if (priceRule.last === priceRule.price) {
      return `Number of tickets left ${seats - ticketsSold - 1}.`;
    }
    // destructured value cannot be used as value cannot be reassigned if not direct
    flights[flightChoice]["cabin"][cabinClass].priceRule.price =
      priceRule.price * priceRule.second;
    numOfSeatsLeft = seats - 1 - ticketsSold;
    return `Number of tickets left to price increase: ${numOfSeatsLeft}.`;
  } else if (ticketsSold === seats - 1) { // last seat
    // destructured value cannot be used as value cannot be reassigned if not direct
    flights[flightChoice]["cabin"][cabinClass].priceRule.price = priceRule.last;
    return `You have bought the last ticket to ${flightChoice.toUpperCase()}.`;
  } else { // handle tickets are sold out
    flights[flightChoice]["cabin"][cabinClass].ticketsSold -= 1;
    return null;
  }
}
