
var planeSeats = 0;
var price = 0;

var seatPrice = function(){
    if (planeSeats === 0) {
        price = 50;
        planeSeats += 1;
    } else if (planeSeats > 0 && planeSeats <= 10){
        price = price + (price * 0.05);
        planeSeats += 1;
    }
};

var inputHappened = function(currentInput){
    seatPrice();
    if (planeSeats >= 10) {
       return "Plane has reached it's max capacity!";
    } else {
     return "The cost of your ticket is $" + price.toFixed(2);
    }
};