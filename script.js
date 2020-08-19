
var planeSeats = 0;
var price = 0;

var firstClassPrice = 0;
var businessClassPrice = 0;
var economyClassPrice = 0;

var firstClassSeats = 0;
var businessClassSeats = 0;
var economyClassSeats = 0;

var firstClass = function (){
    if (firstClassSeats === 0){
        firstClassPrice = 50;
        firstClassSeats += 1;
        planeSeats += 1;
    } else if (firstClassSeats > 0 && firstClassSeats <= 2){
        firstClassPrice = 50 + (50 * 0.15);
        firstClassSeats += 1;
        planeSeats += 1;
    } else if (firstClassSeats > 2 && firstClassSeats <= 3) {
        firstClassPrice = 191000;
        firstClassSeats += 1;
        planeSeats += 1;
    }
};

var business = function(){
    if (businessClassSeats === 0){
        businessClassPrice = 50;
        businessClassSeats +=1;
        planeSeats += 1;
    } else if (businessClassSeats > 0 && businessClassSeats <= 2){
        businessClassPrice = businessClassPrice + (businessClassPrice * 0.06);
        businessClassSeats += 1;
        planeSeats += 1;
    } else if (businessClassSeats > 2 && businessClassSeats <= 4){
        businessClassPrice = businessClassPrice + (businessClassPrice * 0.1);
        businessClassSeats += 1;
        planeSeats += 1;
    } else if (businessClassSeats > 4 && businessClassSeats <= 5){
        businessClassPrice = 91000;
        businessClassSeats += 1;
        planeSeats += 1;
    }
};

var economy = function(){
    if (economyClassSeats === 0){
        economyClassPrice = 50;
        economyClassSeats++;
        planeSeats += 1;
    } else if (economyClassSeats > 0 && economyClassSeats <= 8){
        economyClassPrice = economyClassPrice + (economyClassPrice * 0.03);
        economyClassSeats++
        planeSeats += 1;
    } else if (economyClassSeats > 8 && economyClassSeats <= 14){
        economyClassPrice = economyClassPrice + (economyClassPrice * 0.06);
        economyClassSeats++
        planeSeats += 1;
    } else if (seats > 14 && seats <= 15){
        economyClassPrice = 91000;
        economyClassSeats++
        planeSeats += 1;
    }
};

var seatPrice = function(){
    if (planeSeats === 0) {
        price = 50;
        planeSeats += 1;
    } else if (planeSeats > 0 && planeSeats <= 4){
        price = price + (price * 0.03);
        planeSeats += 1;
    } else if (planeSeats >= 5 && planeSeats <= 8){
        price = price + (price * 0.05);
        planeSeats += 1;
    } else if (planeSeats === 9 || planeSeats <= 10){
        price = 91000;
        planeSeats += 1;
    }
};

var inputHappened = function(currentInput){
    // seatPrice();
    if (currentInput === "buy first class"){
        firstClass();
        return "The cost of your ticket is $" + firstClassPrice.toFixed(2) + " remaining tickets left: " + (4 - firstClassSeats);
    } else if (currentInput === "buy business class"){
        business();
        return "The cost of your ticket is $" + businessClassPrice.toFixed(2) + " remaining tickets left: " + (6 - businessClassSeats);
    } else if (currentInput === "buy economy class"){
        economy();
        return "The cost of your ticket is $" + economyClassPrice.toFixed(2) + " remaining tickets left: " + (15 - economyClassSeats);
    } else {
        return "Choose to buy either economy/business/first class"
    }

    if (planeSeats > 25) {
       return "Plane has reached it's max capacity!";
    }

};