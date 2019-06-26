// Data Description

//Price of empty seat (number)
var emptySeatPrice = 50;
console.log("Empty Seat Price: " + emptySeatPrice + " " + typeof emptySeatPrice);

// No of seats left (number)
var economySeatsLeft = 10;
var businessSeatsLeft = 6;
var firstSeatsLeft = 4;
console.log("Eseats: " + economySeatsLeft + "/10  Bseats: " + businessSeatsLeft + "/6  Fseats: " + firstSeatsLeft + "/4");

// Function Purpose, Show buyer the purchased seat price
var inputHappened = function(currentInput){
    console.log(currentInput + " " + typeof currentInput);

    // Economy Class if function
    if (currentInput === "be" && economySeatsLeft === 10) {
        economySeatPrice = 1.03 * emptySeatPrice;
        lastEconomyPrice = economySeatPrice;
        economySeatsLeft = economySeatsLeft - 1;
        display("Your ticket is purchased at $" + economySeatPrice + " only " + economySeatsLeft + " economy seats left before price surge additional 2%");
    }
    else if (currentInput === "be" && economySeatsLeft > 5 && economySeatsLeft < 10) {
        lastEconomyPrice = lastEconomyPrice * 1.03;
        economySeatsLeft = economySeatsLeft - 1;
        display("Your ticket is purchased at $" + lastEconomyPrice + " only " + economySeatsLeft + " economy seats left before price surge additional 2%");
    }
    else if (currentInput === "be" && economySeatsLeft <= 5 && economySeatsLeft > 1) {
        lastEconomyPrice = lastEconomyPrice * 1.05;
        economySeatsLeft = economySeatsLeft - 1;
        display("Your ticket is purchased at $" + lastEconomyPrice + " only " + economySeatsLeft + " economy seats left before price really surge exponentally");
    }
    else if (currentInput === "be" && economySeatsLeft === 1) {
        economySeatPrice = 91000;
        economySeatsLeft = economySeatsLeft - 1;
        display("Your ticket is purchased at $" + economySeatPrice + " no seats left ");
    }
    else if (currentInput === "be" && economySeatsLeft < 1) {
        economySeatsLeft = economySeatsLeft - 1;
        display("All economy class tickets are sold out");
    }


    // Business Class if function
    else if (currentInput === "bb" && businessSeatsLeft === 6) {
        businessSeatsPrice = 1.06 * emptySeatPrice;
        lastbusinessPrice = businessSeatsPrice;
        businessSeatsLeft = businessSeatsLeft - 1;
        display("Your ticket is purchased at $" + businessSeatsPrice + " only " + businessSeatsLeft + " business seats left before price surge additional 4%");
    }
    else if (currentInput === "bb" && businessSeatsLeft > 3 && businessSeatsLeft < 6) {
        lastbusinessPrice = lastbusinessPrice * 1.06;
        businessSeatsLeft = businessSeatsLeft - 1;
        display("Your ticket is purchased at $" + lastbusinessPrice + " only " + businessSeatsLeft + " business seats left before price surge additional 4%");
    }
    else if (currentInput === "bb" && businessSeatsLeft <= 3 && businessSeatsLeft > 1) {
        lastbusinessPrice = lastbusinessPrice * 1.1;
        businessSeatsLeft = businessSeatsLeft - 1;
        display("Your ticket is purchased at $" + lastbusinessPrice + " only " + businessSeatsLeft + " business seats left before price really surge");
    }
    else if (currentInput === "bb" && businessSeatsLeft === 1) {
        businessSeatsPrice = 91000;
        businessSeatsLeft = businessSeatsLeft - 1;
        display("Your ticket is purchased at $" + businessSeatsPrice + " no seats left ");
    }
    else if (currentInput === "bb" && businessSeatsLeft < 1) {
        businessSeatsLeft = businessSeatsLeft - 1;
        display("All business class tickets are sold out");
    }


    // First Class if function
    else if (currentInput === "bf" && firstSeatsLeft <= 4 && firstSeatsLeft >= 2) {
        firstSeatsPrice = 1.15 * emptySeatPrice;
        firstSeatsLeft = firstSeatsLeft - 1;
        display("Your ticket is purchased at $" + firstSeatsPrice + " only " + firstSeatsLeft + " first seats left");
    }
    else if (currentInput === "bf" && firstSeatsLeft === 1) {
        firstSeatsPrice = 191000;
        firstSeatsLeft = firstSeatsLeft - 1;
        display("Your ticket is purchased at $" + firstSeatsPrice + " no seats left ");
    }
    else if (currentInput === "bf" && firstSeatsLeft < 1) {
        firstSeatsLeft = firstSeatsLeft - 1;
        display("All first class tickets are sold out");
    }


    //Common if function
    else if (currentInput !== "") {
        display("Invalid Input!");
    }
    else {
        display("Your purchase is cancelled");
    }

console.log("Eseats: " + economySeatsLeft + "/10  Bseats: " + businessSeatsLeft + "/6  Fseats: " + firstSeatsLeft + "/4");
};


/* Could have done better 1
var eSeatsLeft = function(economySeatsLeft) {
    return economySeatsLeft - 1;
};

var banana = eSeatsLeft(economySeatsLeft);
        console.log("banana: " + banana);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var priceSurge1 = function(economySeatsPrice) {
    return economySeatsPrice * 1.03;
};

var banana = eSeatsLeft(economySeatsPrice);
        console.log("bababa:" + banana);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


*/






/*

console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};
*/