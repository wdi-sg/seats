console.log("hello script js");

var basePrice = 50;
var planeSeats = 10;

var message;
var updatedPrice;

var toSecondTier = 4; // 4 tickets before price increases
var toFirstTier = 5;

// adding information as objects
var plane = {
    firstSeats: {
        totalSeats: 4,
        firstIncrement: 1.15,
        lastSeatPrice: 191000,
        basePrice: 50,
        seatsSold: 0
    },
    businessSeats: {
        totalSeats: 6,
        firstIncrement: 1.06,
        secondIncrement: 1.10,
        lastSeatPrice: 191000,
        basePrice: 50,
        seatsSold: 0
    },
    economySeats: {
        totalSeats: 15,
        firstIncrement: 1.03,
        secondIncrement: 1.05,
        lastSeatPrice: 191000,
        basePrice: 50,
        seatsSold: 0
    }
}

var seatsLeft;

var inputHappened = function(currentInput){
//  console.log( currentInput );

// logic for economy class
if (currentInput === "buy economy" || currentInput === "buy e" || currentInput === "e") {
    console.log("you get economy tickets" + plane.economySeats.totalSeats);
    message = "Economy class has: " + plane.economySeats.totalSeats + " seats left";
    plane.economySeats.seatsSold++;
        if (plane.economySeats.seatsSold >= 0 && plane.economySeats.seatsSold <= 7) {
            updatedPrice = basePrice * plane.economySeats.firstIncrement;
            seatsLeft = plane.economySeats.totalSeats - plane.economySeats.seatsSold;
            message = "you got it, seat is sold!" + "\n" + "your total price is: $" + updatedPrice + "\n" + "Seats left: " + seatsLeft;
            console.log("current price: " + updatedPrice + " & seats sold: " + plane.economySeats.seatsSold);
        } else if (plane.economySeats.seatsSold >= 8 && plane.economySeats.seatsSold <= 14) {
            updatedPrice = basePrice * plane.economySeats.secondIncrement;
            seatsLeft = plane.economySeats.totalSeats - plane.economySeats.seatsSold;
            message = "you got it, seat is sold!" + "\n" + "your total price is: $" + updatedPrice + "\n" + "Seats left: " + seatsLeft;
            console.log("current price: " + updatedPrice + " & seats sold: " + plane.economySeats.seatsSold);
        } else if (plane.economySeats.seatsSold === 15) {
            updatedPrice = plane.economySeats.lastSeatPrice;
            seatsLeft = plane.economySeats.totalSeats - plane.economySeats.seatsSold;
            message = "wow you got the lucky last seat!" + "\n" + "your total price is: $" + updatedPrice + "\n" + "Seats left: " + seatsLeft;
            console.log(seatsLeft);
        } else {
            message = "sorry we're all sold out! better luck next time :(";
        };
// logic for first class
} else if (currentInput === "buy first class" || currentInput === "buy f" || currentInput === "f") {
    console.log("first class tix" + plane.firstSeats.totalSeats);message = "First class has: " + plane.firstSeats.totalSeats + " seats left";
    plane.firstSeats.seatsSold++;
        if (plane.firstSeats.seatsSold >= 0 && plane.firstSeats.seatsSold <= 3) {
            updatedPrice = basePrice * plane.firstSeats.firstIncrement;
            seatsLeft = plane.firstSeats.totalSeats - plane.firstSeats.seatsSold;
            message = "you got it, seat is sold!" + "\n" + "your total price is: $" +Math.round(updatedPrice * 100) / 100 + "\n" + "Seats left: " + seatsLeft;
            console.log("current price: " + updatedPrice + " & seats sold: " + plane.firstSeats.seatsSold);
        } else if (plane.firstSeats.seatsSold === 4) {
            updatedPrice = plane.firstSeats.lastSeatPrice;
            seatsLeft = plane.firstSeats.totalSeats - plane.firstSeats.seatsSold;
            message = "wow you got the lucky last seat!" + "\n" + "your total price is: $" + Math.round(updatedPrice * 100) / 100 + "\n" + "seats left: " + seatsLeft;
            console.log(updatedPrice);
        } else {
            message = "sorry we're all sold out! better luck next time :(";
        };
// logic for business class
} else if (currentInput === "buy business class" || currentInput === "buy b" || currentInput === "b") {
    console.log("business class tix" + plane.businessSeats.totalSeats);message = "Business class has: " + plane.businessSeats.totalSeats + " seats left";
    plane.businessSeats.seatsSold++;
        if (plane.businessSeats.seatsSold >= 0 && plane.businessSeats.seatsSold <= 3) {
            updatedPrice = basePrice * plane.businessSeats.firstIncrement;
            seatsLeft = plane.businessSeats.totalSeats - plane.businessSeats.seatsSold;
            message = "you got it, seat is sold!" + "\n" + "your total price is: $" + Math.round(updatedPrice * 100) / 100 + "\n" + "seats left: " + seatsLeft;
            console.log("current price: " + updatedPrice + " & seats sold: " + plane.businessSeats.seatsSold);
        } else if (plane.businessSeats.seatsSold >= 4 && plane.businessSeats.seatsSold <= 5) {
            updatedPrice = basePrice * plane.businessSeats.secondIncrement;
            seatsLeft = plane.businessSeats.totalSeats - plane.businessSeats.seatsSold;
            message = "you got it, seat is sold!" + "\n" + "your total price is: $" + Math.round(updatedPrice * 100) / 100 + "\n" + "seats left: " + seatsLeft;
            console.log("current price: " + updatedPrice + " & seats sold: " + plane.businessSeats.seatsSold);
        } else if (plane.businessSeats.seatsSold === 6) {
            updatedPrice = plane.businessSeats.lastSeatPrice;
            seatsLeft = plane.businessSeats.totalSeats - plane.businessSeats.seatsSold;
            message = "wow you got the lucky last seat!" + "\n" + "your total price is: $" + Math.round(updatedPrice * 100) / 100 + "\n" + "seats left: " + seatsLeft;
            console.log(updatedPrice);
        } else {
            message = "sorry we're all sold out! better luck next time :(";
        };
// check for valid input
} else {
    message = "Please type your answer in the following format: buy economy, buy first class, buy business class";
}
    return message;
};

// calculating prices of plane tickets and counting down from 10
//   if (planeSeats === 10) {
//     updatedPrice = basePrice;
//     planeSeats--;
//     planeSeats//     console.log(updatedPrice,planeSeats);
//     message = "SEAT SOLD! Your total price is: $" + updatedPrice + "\n" + "Seats left: " + planeSeats;
//   } else if (planeSeats >= 6) {
//     updatedPrice = updatedPrice * 1.03;
//     planeSeats--;
//     toSecondTier--;
//     console.log(planeSeats, updatedPrice);
//     message = "SEAT SOLD! Your total price is: $" + Math.round(updatedPrice * 100) / 100 + "\n" + "Seats left: " + planeSeats + "\n" + "Seats before price increase: " + toSecondTier;
//   } else if (planeSeats >= 2) {
//     updatedPrice = updatedPrice * 1.05;
//     planeSeats--;
//     toFirstTier--;
//     console.log(planeSeats, updatedPrice);
//     message = "SEAT SOLD! Your total price is: $" + Math.round(updatedPrice * 100) / 100 + "\n" + "Seats left: " + planeSeats + "\n" + "Seats before price increase: " + toFirstTier;
//   } else if (planeSeats >= 1) {
//     updatedPrice = 91000;
//     planeSeats--;
//     console.log(updatedPrice);
//     message = "SEAT SOLD! Your total price is: $" + Math.round(updatedPrice * 100) / 100 + "\n" + "Seats left: " + planeSeats;
//   } else {
//     planeSeats = 0;
//     message = "SOLD OUT! Better luck next time!";
//   }
//     return message;
// }; // end if plane seats are 10