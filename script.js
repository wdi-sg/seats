const input = document.getElementById("input");
input.placeholder = "Buy a ticket (y/n)?";

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
        },
      },
    },
  },
};
let wantBuy = false;
let timesPriceIncreased = 0;

const inputHappened = function(currentInput) {
  let ticketsLeft = "";
  if (!isNaN(Number(currentInput))) {
    input.value = "";
    return `${currentInput} not allowed. Key in y or n.`;
  }
  const saveInput = currentInput;
  currentInput = currentInput.toLowerCase();
  switch (wantBuy) {
    case false:
      if (currentInput === "y") {
        input.value = "";
        input.placeholder = "(E / B / F) class?";
        wantBuy = true;
      } else {
        input.value = "";
        return "Ok...";
      }
      break;
    case true:
      if (
        currentInput === "e" ||
        currentInput === "b" ||
        currentInput === "f"
      ) {
        input.value = "";
        ticketsLeft = caluclateTicketPrice(currentInput, "plane2");
        if (ticketsLeft === null) return "Sorry, all tickets are sold out!";
        const {price} = airline["plane2"]["cabin"][currentInput].priceRule;
        return `You paid $${price} for an Airplane seat.\n${ticketsLeft}`;
      } else {
        input.value = "";
        return `${saveInput} is invalid.`;
      }
    default:
      return "Something went wrong!!!";
  }
  return "";
};

function caluclateTicketPrice(cabinClass, planeVersion) {
  const {ticketsSold, seats, priceRule} = airline[planeVersion]["cabin"][
    cabinClass
  ];
  let numOfSeatsLeft;
  airline[planeVersion]["cabin"][cabinClass].ticketsSold += 1;
  if (ticketsSold === 0) {
    return "Price of tickets will increase from the next purchase onwards.";
  } else if (ticketsSold < seats / 2) {
    if (timesPriceIncreased === 0) {
      timesPriceIncreased += 1;
      console.log(timesPriceIncreased);
      airline[planeVersion]["cabin"][cabinClass].priceRule.price = (
        priceRule.price * priceRule.first
      ).toFixed(2);
    }
    if (priceRule.first !== priceRule.second) {
      console.log(seats);
      numOfSeatsLeft = Math.ceil(seats - seats / 2 - ticketsSold);
    } else {
      numOfSeatsLeft = seats - 1 - ticketsSold;
    }
    return `Number of tickets left to price increase: ${numOfSeatsLeft}`;
  } else if (ticketsSold < seats - 1) {
    if (timesPriceIncreased === 1) {
      timesPriceIncreased += 1;
      airline[planeVersion]["cabin"][cabinClass].priceRule.price = (
        priceRule.price * priceRule.second
      ).toFixed(2);
    }
    numOfSeatsLeft = seats - 1 - ticketsSold;
    return `Number of tickets left to price increase: ${numOfSeatsLeft}`;
  } else if (ticketsSold === seats - 1) {
    airline[planeVersion]["cabin"][cabinClass].priceRule.price = priceRule.last;
    return "";
  } else {
    airline[planeVersion]["cabin"][cabinClass].ticketsSold -= 1;
    return null;
  }
}
