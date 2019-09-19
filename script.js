console.log("hello script js");

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
    price = price * 1.05;
    price = parseFloat(price.toFixed(2))
    console.log(price);
};

// function to increase price by 3%
let priceHike3 = function(price) {
    price = price * 1.03;
    price = parseFloat(price.toFixed(2))
    console.log(price);
};

// function to increase price by 6%
let priceHike6 = function(price) {
    price = price * 1.06;
    price = parseFloat(price.toFixed(2))
    console.log(price);
};

// function to increase price by 10%
let priceHike10 = function(price) {
    price = price * 1.10;
    price = parseFloat(price.toFixed(2))
    console.log(price);
};

// function to increase price by 15%
let priceHike15 = function(price) {
    price = price * 1.15;
    price = parseFloat(price.toFixed(2))
    console.log(price);
};

// function for economy seats price hike
let priceYSeats = function() {
    if (yseats > 8) {
        priceHike3(yprice);
        yseatSold();
    } else if (yseats > 1) {

    } else if (yseats === 1) {

    } else {

    };
};
// function for business seats price hike

// function for first seats price hike


// last seat for economy and business
let lastSeatYJ = `You bought the last seat for $91,000, congratulations!`

// last seat for first
let lastSeatF = `You bought the last seat for $191,000, congratulations!`

// function to check input
let checkInput = function(input) {
    switch (input) {
        case ("buy first class"):
            seatSold(fseats);
            return `You just bought a seat for $${fprice}, congratulations! There are ${fseats} seats left.`
        break;
        case ("buy business class"):
            seatSold(jseats);
            return `You just bought a seat for $${jprice}, congratulations! There are ${jseats} seats left.`
        break;
        case ("buy economy class"):
            priceYSeats();
            return `You just bought a seat for $${yprice}, congratulations! There are ${yseats} seats left.`
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

    checkInput(currentInput);
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