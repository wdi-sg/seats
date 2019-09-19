console.log("hello script js");

let seats = 10;

let price = 48.54;

let inputTracker = 0;

// function to reduce seats
let seatSold = function() {
    seats -= 1;
    console.log(seats);
};

// function to increase price by 5%
let priceHike5 = function() {
    price = price * 1.05;
    price = parseFloat(price.toFixed(2))
    console.log(price);
};

// function to increase price by 3%
let priceHike3 = function() {
    price = price * 1.03;
    price = parseFloat(price.toFixed(2))
    console.log(price);
};

var inputHappened = function(currentInput){

// tracking to ensure the user's input is recorded.
    inputTracker += 1;
    console.log(inputTracker);

// activate purchase, check if seats are still available.
    if (seats > 5) {
        priceHike3();
        seatSold();
        return `You just bought a seat for $${price}, congratulations! There are ${seats} seats left.`;
    } else if (seats > 2) {
        priceHike5();
        seatSold();
        return `You just bought a seat for $${price}, congratulations! There are ${seats} seats left.`;
    } else if (seats === 2) {
        priceHike5();
        seatSold();
        return `You just bought a seat for $${price}, please take note that there's only 1 seat left! Hurry!`;
    } else if (seats === 1) {
        priceHike5();
        seatSold();
        return `You bought the last seat for $91,000, congratulations!`;
    } else {
        return "Please take another flight.";
    };
};