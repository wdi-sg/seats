////## First half of assignment commented out.

var seatsBought = 1;
var availableSeats = 10;
var seatPrice = 50;
var nextSeatPrice= 50;

//Set this variable depending on content
var havePriceBrackets = true;

var seatPriceMultiple = multiple => (seatPrice * multiple).toFixed(2);

var seatPriceCompound = comp => (nextSeatPrice * comp).toFixed(2);

var nextSeatPriceCalc = (m1, m2, lastpx, method) => {
    if (havePriceBrackets) {
        if (availableSeats > 5) {
            nextSeatPrice = method(m1);
        } else if (availableSeats < 6 && availableSeats > 1) {
            nextSeatPrice = method(m2);
        } else if (availableSeats === 1) {
            nextSeatPrice = lastpx;
        }
    } else {
        nextSeatPrice = method(m1);
    }
}

var outputPriceBracketInfo = (seats, multiple) => {
    return outputSeatAndNextPrice() + `\n${seats} seats left before prices rise by ${Math.floor((multiple - 1) * 100)}%. BUY NOW OR REGRET.`
}

var outputSeatAndNextPrice = () => {
    return `You've paid $${seatPrice} for your seat. \n${availableSeats} seats left. \nThe price of the next seat is $${nextSeatPrice}.`;
}

var purchaseSeat = (m1, m2, lastpx, method) => {

    if (availableSeats > 0) {
        availableSeats--;
        console.log(seatsBought + " bought")
        seatsBought++;
    }

    nextSeatPriceCalc(m1, m2, lastpx, method);

    if (havePriceBrackets) {
        if (availableSeats > 5) {
            priceBracketAvailability = availableSeats - 5;
            return outputPriceBracketInfo(priceBracketAvailability, m1);
        } else if (availableSeats < 6 && availableSeats > 1) {
            priceBracketAvailability = availableSeats - 1;
            return outputPriceBracketInfo(priceBracketAvailability, m2);
        } else if (availableSeats === 1) {
            priceBracketAvailability = availableSeats
            return outputSeatAndNextPrice() + `\nOnly one seat left, all yours at $${lastpx}!`
        } else if (!availableSeats) {
            return "No seats left. Too bad."
        }
    } else if (!availableSeats) {
        return "No seats left. Too bad."
    } else {
        return outputSeatAndNextPrice();
    }

    seatPrice = nextSeatPrice;
}


var inputHappened = function(currentInput) {
  // console.log( currentInput );

    return purchaseSeat(1.03, 1.05, 91000, seatPriceCompound);

};


//## For final parts of assignment

var kualaLumpurSeats = 10
var kualaLumpurSeatPrice = 50;
var nextKualaLumpurSeatPrice = 50;

var economySeats = 15;
var economySeatPrice = 50;
var nextEconomySeatPrice = 50;

var businessSeats = 6;
var businessSeatPrice = 50;
var nextBusinessSeatPrice = 50;

var firstSeats = 4;
var firstSeatPrice = 50;
var nextFirstSeatPrice = 50;

var kualaLumpurSeatPriceCalc = () => {
    if (kualaLumpurSeats > 5) {
        nextKualaLumpurSeatPrice = (kualaLumpurSeatPrice * 1.03).toFixed(2);
    } else if (kualaLumpurSeats < 5 && kualaLumpurSeats > 1) {
        nextKualaLumpurSeatPrice = (kualaLumpurSeatPrice * 1.05).toFixed(2);
    } else if (kualaLumpurSeats === 1) {
        nextKualaLumpurSeatPrice = 91000;
    }
}

var economySeatPriceCalc = () => {
    if (economySeats > 7) {
        nextEconomySeatPrice = (economySeatPrice * 1.03).toFixed(2);
    } else if (economySeats < 7 && economySeats > 1) {
        nextEconomySeatPrice = (economySeatPrice * 1.05).toFixed(2);
    } else if (economySeats === 1) {
        nextEconomySeatPrice = 91000;
    } else if (!economySeats) {
        nextEconomySeatPrice = 'No seats left'
    }
};

var businessSeatPriceCalc = () => {
    if (businessSeats > 7) {
        nextBusinessSeatPrice = (businessSeatPrice * 1.06).toFixed(2);
    } else if (businessSeats < 7 && businessSeats > 1) {
        nextBusinessSeatPrice = (businessSeatPrice * 1.1).toFixed(2);
    } else if (businessSeats === 1) {
        nextBusinessSeatPrice = 91000;
    } else if (!businessSeats) {
        nextBusinessSeatPrice = 'No seats left';
    }
}
var firstSeatPriceCalc = () => {
    if (firstSeats > 1) {
        nextFirstSeatPrice = (firstSeatPrice * 1.15).toFixed(2);
    } else if (firstSeats === 1) {
        nextFirstSeatPrice = 191000;
    } else if (!firstSeats) {
        nextFirstSeatPrice = 'No seats left';
    }
}

var buyEconomySeat = () => {
    if (economySeats > 0) {
        economySeats--;
    } else {
        return;
    }

    economySeatPriceCalc();

    return `You've paid $${economySeatPrice} for your Economy seat. \n${economySeats} Economy seats left. \nThe price of the next Economy seat is $${nextEconomySeatPrice}.\n` + `\nTicket Prices:\nEconomy: $${nextEconomySeatPrice}\nBusiness Class: $${nextBusinessSeatPrice}\nFirst Class: $${nextFirstSeatPrice}`
}

var buyBusinessSeat = () => {
    if (businessSeats > 0) {
        businessSeats--;
    } else {
        return;
    }

    businessSeatPriceCalc();

    return `You've paid $${businessSeatPrice} for your Business Class seat. \n${businessSeats} Business Class seats left. \nThe price of the next Business Class seat is $${nextBusinessSeatPrice}.\n` + `\nTicket Prices:\nEconomy: $${nextEconomySeatPrice}\nBusiness Class: $${nextBusinessSeatPrice}\nFirst Class: $${nextFirstSeatPrice}`
}

var buyFirstSeat = () => {
    if (firstSeats > 0) {
        firstSeats--;
    } else {
        return;
    }

    firstSeatPriceCalc();

    return `You've paid $${firstSeatPrice} for your First Class seat. \n${businessSeats} First Class seats left. \nThe price of the next First Class seat is $${nextFirstSeatPrice}.\n` + `\nTicket Prices:\nEconomy: $${nextEconomySeatPrice}\nBusiness Class: $${nextBusinessSeatPrice}\nFirst Class: $${nextFirstSeatPrice}`
}

var buyKualaLumpurSeat = () => {
    if (kualaLumpurSeats > 0) {
        kualaLumpurSeats--;
    }

    if (kualaLumpurSeats > 0) {
        kualaLumpurSeatPriceCalc();

        return `You've paid $${kualaLumpurSeatPrice} for your  seat. \n${kualaLumpurSeats} seats left. \nThe price of the next seat is $${nextKualaLumpurSeatPrice}.`
    } else {
        return 'No more seats.';
    }
}


var destination;

while (destination !== 'kuala lumpur' || destination !== 'bali') {
    destination = prompt("Please enter your destination (Kuala Lumpur or Bali).").trim().toLowerCase();
    if (destination === 'kuala lumpur' || destination === 'bali') {
        break;
    }
}

var inputField = document.getElementById("input")
var outputField = document.getElementById("output")
var ticketPrices = `\nTicket Prices:\nEconomy: $${nextEconomySeatPrice}\nBusiness Class: $${nextBusinessSeatPrice}\nFirst Class: $${nextFirstSeatPrice}`

if (destination === 'bali') {
    inputField.setAttribute("placeholder", "Enter Economy, Business Class, or First Class");
    outputField.innerText = ticketPrices;
} else if (destination === 'kuala lumpur') {
    outputField.innerText = `The price of a ticket is $${economySeatPrice}.`
}

var inputHappened = function(currentInput) {
  // console.log( currentInput );
    if (destination === 'bali') {
        if (currentInput.toLowerCase().includes('economy')) {
            var buyPrompt = prompt(`Please type "buy" to complete your purchase.`).toLowerCase().trim();
            if (buyPrompt === 'buy') {
                return buyEconomySeat();
                buyPrompt = "";
                economySeatPrice = nextEconomySeatPrice;
            }
        } else if (currentInput.toLowerCase().includes('business')) {
            var buyPrompt = prompt(`Please type "buy" to complete your purchase.`).toLowerCase().trim();
            if (buyPrompt === 'buy') {
                return buyBusinessSeat();
                buyPrompt = "";
                businessSeatPrice = nextBusinessSeatPrice;
            }
        } else if (currentInput.toLowerCase().includes('first class')) {
            var buyPrompt = prompt(`Please type "buy" to complete your purchase.`).toLowerCase().trim();
            if (buyPrompt === 'buy') {
                return buyFirstSeat();
                buyPrompt = "";
                businessSeatPrice = nextBusinessSeatPrice
            }
        } else {
            return "Please enter either Economy, Business Class or First Class."
        }
    } else if (destination === 'kuala lumpur') {
        return buyKualaLumpurSeat();
        kualaLumpurSeatPrice = nextKualaLumpurSeatPrice;
    }
};