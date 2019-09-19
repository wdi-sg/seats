console.log("hello script js");

let seats = 10;

let price = 47.62;

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
}

// function to increase price by 3%

var inputHappened = function(currentInput){

// tracking to ensure the user's input is recorded.
    inputTracker += 1;
    console.log(inputTracker);

// activate purchase, check if seats are still available.
    if (seats > 2) {
        priceHike()
        seatSold();
        return `You just bought a seat for $${price}, congratulations! There are ${seats} seats left.`;
    } else if (seats === 2) {


    } else if (seats === 1) {

    } else {

    };


  return "statement";
};