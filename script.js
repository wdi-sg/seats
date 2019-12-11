console.log("Ready to sell seats");

var percentageIncrementFirst = 3;
var percentageIncrementSecond = 5;
var seatPrice = 50;
var currentPrice = seatPrice;

var plane = {
    firstClass: {
        planeSeats: 4,
        seatsSold: 0,
        percentageIncrementFirst: 15,
        percentageIncrementSecond: 15,
        seatPrice: 50,
        currentPrice: seatPrice,
        finalSeatPrice: 191000,
    },
    businessClass: {
        planeSeats: 6,
        seatsSold: 0,
        percentageIncrementFirst: 6,
        percentageIncrementSecond: 10,
        seatPrice: 50,
        currentPrice: seatPrice,
        finalSeatPrice: 91000,
    },
    economy: {
        planeSeats: 10,
        seatsSold: 0,
        percentageIncrementFirst: 3,
        percentageIncrementSecond: 5,
        seatPrice: 50,
        currentPrice: seatPrice,
        finalSeatPrice: 91000,
    }
}

// console.log((planeSeats - seatsSold) + " seats left.");

var sellSeat = function(flightClass) {

    var seatsSold = plane[flightClass].seatsSold;
    var planeSeats = plane[flightClass].planeSeats;

    if (seatsSold === planeSeats) {
        return "Sorry plane is sold out. :("
    }
    var percentageIncrement = plane[flightClass].percentageIncrementFirst;
    var incrementMessage = ""
    // use if-else statements to determine how expensive the seat should be.
    if (planeSeats - seatsSold === 1) {
        console.log("Sold the final seat!");
        plane[flightClass].seatsSold++;
        return "Sold you the final seat for $" + plane[flightClass].finalSeatPrice;
    } else if (((planeSeats - seatsSold) <= (planeSeats / 2)) && (flightClass !== "firstClass")) { // less than half the seats left
        percentageIncrement = plane[flightClass].percentageIncrementSecond;
        incrementMessage = (planeSeats - seatsSold - 2) + " more seats available until price increase.";
        console.log(percentageIncrement + "% increase");
    } else {
        incrementMessage = ((Math.floor(planeSeats / 2)) - seatsSold - 1) + " more seats available until price increase.";
        percentageIncrement = plane[flightClass].percentageIncrementFirst;
        console.log(percentageIncrement + "% increase");
    }

    if (flightClass === "firstClass") {
        incrementMessage = (planeSeats - seatsSold - 2) + " more seats available until price increase.";
    }

    var seatAdjustedPrice = plane[flightClass].currentPrice;
    plane[flightClass].seatsSold++;
    plane[flightClass].currentPrice += (seatPrice * percentageIncrement * 0.01);

    console.log((planeSeats - plane[flightClass].seatsSold) + " seats left in " + flightClass);
    return "Sold you a seat in " + flightClass + " for $" + seatAdjustedPrice + ". " + incrementMessage;
}

var inputHappened = function(currentInput){

    var formattedInput = currentInput.toLowerCase().trim();

    if (formattedInput === "buy economy") {
        console.log("Sell economy seat");
        return sellSeat("economy");
    } else if (formattedInput === "buy business") {
        console.log("Sell Business Class Seat");
        return sellSeat("businessClass");
    } else if (formattedInput === "buy first class") {
        console.log("Sell First Class Seat");
        return sellSeat("firstClass");
    } else {
        return "Please type in (without quote marks): \n 'Buy Economy' to buy an economy seat. \n 'Buy Business' to buy a business class seat. \n 'Buy First Class' to buy a first class seat.";
    }

};