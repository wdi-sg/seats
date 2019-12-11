
var planeSeats = 0;
var price = 0;

var seatPrice = function(){
    if (planeSeats === 0) {
        price = 50;
        planeSeats += 1;
    } else if (planeSeats >= 1 && planeSeats <= 5) {
        price = price + (price * 0.03);
        planeSeats += 1;
    } else if (planeSeats >= 6 && planeSeats <= 8){
        price = price + (price * 0.05);
        planeSeats += 1;
    } else if (planeSeats === 9) {
        price = 91000;
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