
var planeSeats = 0;
var price = 0;

var randomPrice = function(){
    var random = Math.floor(Math.random() * 10);
    if (random >= 0 && random <= 5) {
        return 0.03;
    } else {
        return 0.05;
    }
}

var seatPrice = function(){
    randomPrice();
    if (planeSeats === 0) {
        price = 50;
        planeSeats += 1;
    } else if (planeSeats > 0 && planeSeats <= 4){
        price = price + (price * randomPrice());
        planeSeats += 1;
        console.log(randomPrice());
    } else if (planeSeats >= 5 && planeSeats <= 8){
        price = price + (price * randomPrice());
        planeSeats += 1;
        console.log(randomPrice());
    } else if (planeSeats === 9 || planeSeats <= 10){
        price = 91000;
        planeSeats += 1;
    }
};

var inputHappened = function(currentInput){
    seatPrice();
    if (planeSeats > 10) {
       return "Plane has reached it's max capacity!";
    } else {
     return "The cost of your ticket is $" + price.toFixed(2) + " remaining tickets left: " + (10 - planeSeats);
    }
};