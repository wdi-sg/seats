console.log("hello script js");

// last seat for economy and business
let lastSeatYJ = `You bought the last seat for $91,000, congratulations!`

// last seat for first
let lastSeatF = `You bought the last seat for $191,000, congratulations!`

// economy seats
let yseats = 15;

// business seats
let jseats = 6;

// first seats
let fseats = 4;

// economy price
let yprice = 48.54;

// business price
let jprice = 47.17;

// first price
let fprice = 43.48;

let inputTracker = 0;

// function to reduce yseats
let yseatSold = function() {
    yseats -= 1;
    console.log(yseats);
};

// function to reduce jseats
let jseatSold = function() {
    jseats -= 1;
    console.log(jseats);
};
// function to reduce yseats
let fseatSold = function() {
    fseats -= 1;
    console.log(fseats);
};

// function to increase price by 5%
let priceHike5 = function() {
    yprice = yprice * 1.05;
    yprice = parseFloat(yprice.toFixed(2))
    console.log(yprice);
};

// function to increase price by 3%
let priceHike3 = function() {
    yprice = yprice * 1.03;
    yprice = parseFloat(yprice.toFixed(2))
    console.log(yprice);
};

// function to increase price by 6%
let priceHike6 = function() {
    jprice = jprice * 1.06;
    jprice = parseFloat(jprice.toFixed(2))
    console.log(jprice);
};

// function to increase price by 10%
let priceHike10 = function() {
    jprice = jprice * 1.10;
    jprice = parseFloat(jprice.toFixed(2))
    console.log(jprice);
};

// function to increase price by 15%
let priceHike15 = function() {
    fprice = fprice * 1.15;
    fprice = parseFloat(fprice.toFixed(2))
    console.log(fprice);
};

// function for economy seats price hike
let priceYSeats = function() {
    if (yseats > 8) {
        priceHike3();
        yseatSold();
    } else if (yseats > 1) {
        priceHike5();
        yseatSold();
    } else {
        return "broken app";
    };
};

// function for business seats price hike
let priceJSeats = function() {
    if (jseats > 3) {
        priceHike6();
        jseatSold();
    } else if (yseats > 1) {
        priceHike10();
        jseatSold();
    } else {
        return "broken app";
    };
};

// function for first seats price hike
let priceFSeats = function() {
    if (fseats > 1) {
        priceHike15();
        fseatSold();
    } else {
        return "broken app";
    };
};

// function to check input
let checkInput = function(input) {
    switch (input) {
        case ("buy first class"):
            if (fseats === 1) {
                fseatSold();
                return lastSeatF;
            } else if (fseats > 1) {
                priceFSeats();
                return `You just bought a seat for $${fprice}, congratulations! There are ${fseats} seats left.`
            } else {
                return `ALL SOLD OUT!`
            };
        break;
        case ("buy business class"):
            if (jseats === 1) {
                jseatSold();
                return lastSeatYJ;
            } else if (jseats > 1) {
                priceJSeats();
                return `You just bought a seat for $${jprice}, congratulations! There are ${jseats} seats left.`
            } else {
                return `ALL SOLD OUT!`
            };
        break;
        case ("buy economy class"):
            if (yseats === 1) {
                yseatSold();
                return lastSeatYJ;
            } else if (yseats > 1) {
                priceYSeats();
                return `You just bought a seat for $${yprice}, congratulations! There are ${yseats} seats left.`
            } else {
                return `ALL SOLD OUT!`
            };
        break;
        default:
            return `Please select a cabin class.`
        break;
    }
}

var inputHappened = function(currentInput){

// tracking to ensure the user's input is recorded.
    inputTracker += 1;
    console.log(inputTracker);

    return checkInput(currentInput);
// activate purchase, check if seats are still available.
//     if (seats > 5) {
//         priceHike3();
//         seatSold();
//         return `You just bought a seat for $${price}, congratulations! There are ${seats} seats left.`;
//     } else if (seats > 2) {
//         priceHike5();
//         seatSold();
//         return `You just bought a seat for $${price}, congratulations! There are ${seats} seats left.`;
//     } else if (seats === 2) {
//         priceHike5();
//         seatSold();
//         return `You just bought a seat for $${price}, please take note that there's only 1 seat left! Hurry!`;
//     } else if (seats === 1) {
//         priceHike5();
//         seatSold();
//         return `You bought the last seat for $91,000, congratulations!`;
//     } else {
//         return "Please take another flight.";
//     };
};