console.log("hello script js");
//Part 6
var economySeatsRemaining = 15;
var bizSeatsRemaining = 6;
var firstSeatsRemaining = 4;
var standardPrice = 50;
var priceIncrementE1 = 1.03;
var priceIncrementE2 = 1.05;
var priceIncrementB1 = 1.06;
var priceIncrementB2 = 1.10;
var priceIncrementFC = standardPrice*(0.15);
var econPrice = standardPrice;
var bizPrice = standardPrice;
var firstClassPrice = standardPrice;
var tixRemainingE1 = 7;
var tixRemainingE2 = 6;
var tixRemainingB1 = 2;
var tixRemainingB2 = 2;
var tixRemainingFC = 2;

function tixStringMaker(tix) {
    if (tix > 1) {
        return (tix + " tickets remaining before price bracket goes up.")
    } else if (tix == 1) {
        return (tix + " ticket remaining before price bracket goes up.")
    } else if (tix == 0) {
        return ("Price bracket goes up for the next ticket.")
    }
}

var inputPrompt = document.getElementById("input");
inputPrompt.placeholder = "Buy which class?";

function clear() {
    inputPrompt.value = "";
}
var inputHappened = function(currentInput) {
    console.log(currentInput);
    currentInput = currentInput.toLowerCase();
    if (currentInput.includes("economy")) {
        if (economySeatsRemaining == 15) {
            console.log(economySeatsRemaining);
            econPrice = standardPrice;
            economySeatsRemaining = economySeatsRemaining - 1;
            var tixString = tixStringMaker(tixRemainingE1);
            clear();
            return ("Seat sold for $" + econPrice.toFixed() + ", " + economySeatsRemaining + " economy class seats remaining. " + tixString);
        } else if (economySeatsRemaining < 15 && economySeatsRemaining >= 8) {
            console.log(economySeatsRemaining);
            econPrice = econPrice * priceIncrementE1;
            economySeatsRemaining = economySeatsRemaining - 1;
            tixRemainingE1 = tixRemainingE1 - 1;
            var tixString = tixStringMaker(tixRemainingE1);
            clear();
            return ("Seat sold for $" + econPrice.toFixed(2) + ", " + economySeatsRemaining + " economy class seat remaining. " + tixString);
        } else if (economySeatsRemaining < 8 && economySeatsRemaining >= 2) {
            console.log(economySeatsRemaining);
            econPrice = econPrice * priceIncrementE2;
            economySeatsRemaining = economySeatsRemaining - 1;
            tixRemainingE2 = tixRemainingE2 - 1;
            var tixString = tixStringMaker(tixRemainingE2);
            clear();
            return ("Seat sold for $" + econPrice.toFixed(2) + ", " + economySeatsRemaining + " economy class seat remaining. " + tixString);
        } else if (economySeatsRemaining == 1) {
            console.log(economySeatsRemaining);
            econPrice = 91000;
            economySeatsRemaining = economySeatsRemaining - 1;
            clear();
            return ("Seat sold for $" + econPrice.toFixed(2) + ", " + economySeatsRemaining + " economy class seat remaining.");
        } else {
            clear();
            return "No more economy class seat available.";
        }
    } else if (currentInput.includes("business")) {
        if (bizSeatsRemaining == 6) {
            console.log(bizSeatsRemaining);
            bizPrice = standardPrice * priceIncrementB1;
            bizSeatsRemaining = bizSeatsRemaining - 1;
            var tixString = tixStringMaker(tixRemainingB1);
            clear();
            return ("Seat sold for $" + bizPrice.toFixed(2) + ", " + bizSeatsRemaining + " business class seat remaining. " + tixString);
        } else if (bizSeatsRemaining < 6 && bizSeatsRemaining >= 4) {
            console.log(bizSeatsRemaining);
            bizPrice = bizPrice * priceIncrementB1;
            bizSeatsRemaining = bizSeatsRemaining - 1;
            tixRemainingB1 = tixRemainingB1 - 1;
            var tixString = tixStringMaker(tixRemainingB1);
            clear();
            return ("Seat sold for $" + bizPrice.toFixed(2) + ", " + bizSeatsRemaining + " business class seat remaining. " + tixString);
        } else if (bizSeatsRemaining < 4 && bizSeatsRemaining >= 2) {
            console.log(bizSeatsRemaining);
            bizPrice = bizPrice * priceIncrementB2;
            bizSeatsRemaining = bizSeatsRemaining - 1;
            tixRemainingB2 = tixRemainingB2 - 1;
            var tixString = tixStringMaker(tixRemainingB2);
            clear();
            return ("Seat sold for $" + bizPrice.toFixed(2) + ", " + bizSeatsRemaining + " business class seat remaining. " + tixString);
        } else if (bizSeatsRemaining == 1) {
            console.log(bizSeatsRemaining);
            bizPrice = 91000;
            bizSeatsRemaining = bizSeatsRemaining - 1;
            clear();
            return ("Seat sold for $" + bizPrice.toFixed(2) + ", " + bizSeatsRemaining + " business class seat remaining.");
        } else {
            clear();
            return "No more business class seat available.";
        }
    } else if (currentInput.includes("first")) {
        if (firstSeatsRemaining<=4 && firstSeatsRemaining >= 2) {
            console.log(firstSeatsRemaining);
            firstClassPrice = firstClassPrice + priceIncrementFC;
            firstClassPrice = firstClassPrice
            firstSeatsRemaining = firstSeatsRemaining - 1;
            var tixString = tixStringMaker(tixRemainingFC);
            tixRemainingFC = tixRemainingFC - 1;
            clear();
            return ("Seat sold for $" + firstClassPrice.toFixed(2) + ", " + firstSeatsRemaining + " first class seat remaining. " + tixString);
        } else if (firstSeatsRemaining == 1) {
            console.log(firstSeatsRemaining);
            firstClassPrice = 191000;
            firstSeatsRemaining = firstSeatsRemaining - 1;
            clear();
            return ("Seat sold for $" + firstClassPrice.toFixed(2) + ", " + firstSeatsRemaining + " first class seat remaining.");
        } else {
            clear();
            return "No more first class seat available.";
        }
    } else {
        alert("Invalid option. Try again");
        clear();
        return "";

    }


};