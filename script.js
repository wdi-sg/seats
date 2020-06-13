
//defining tickets available and original price
var availableTickets = 10;
var basicPrice = 50;

var availableClassTickets = {
    economy: 15,
    business: 6,
    first: 4,
}

//defining dropdown options as variables
var destinationOptions = document.querySelector("#options");
var kualaLumpur = document.querySelector("#kl");
var baliIndo = document.querySelector("#bali");
var economyClass = document.querySelector("#economy");
var businessClass = document.querySelector("#business");
var firstClass = document.querySelector("#first");


//to hide certain options in second dropdown when user selects an item from first dropdown
function userSelection(e) {
    if (kualaLumpur.selected) {
        businessClass.disabled = true;
        firstClass.disabled = true;
    } else {
        businessClass.disabled = false;
        firstClass.disabled = false;
    }
}

destinationOptions.addEventListener('change', userSelection);


//to compute ticket price and available seats
var economyPrice = 50;
var businessPrice = 50;
var firstPrice = 50;

function buyTicket() {
    if (availableTickets >= 6) {
        availableTickets--;
        basicPrice += basicPrice*0.03;
        return basicPrice;
    } else if (availableTickets >= 2) {
        availableTickets--;
        basicPrice += basicPrice*0.05;
        return basicPrice;
    } else if (availableTickets === 1) {
        availableTickets--;
        basicPrice = 91000;
        return basicPrice;
    } else if (availableTickets === 0) {
        alert("Uh oh, our seats are fully booked!")
    }
}

function buyBaliEconomy() {
    if (availableClassTickets.economy >= 8) {
        availableClassTickets.economy--;
        economyPrice += economyPrice*0.03;
        return economyPrice;
    } else if (availableClassTickets.economy >= 2) {
        availableClassTickets.economy--;
        economyPrice += economyPrice*0.05;
        return economyPrice;
    } else if (availableClassTickets.economy === 1) {
        availableClassTickets.economy--;
        economyPrice = 91000;
        return economyPrice;
    } else if (availableClassTickets.economy === 0) {
        alert("Uh oh, our seats are fully booked!")
    }
}


function buyBaliBusiness() {
    if (availableClassTickets.business >= 4) {
        availableClassTickets.business--;
        businessPrice += businessPrice*0.06;
        return businessPrice;
    } else if (availableClassTickets.business >= 2) {
        availableClassTickets.business--;
        businessPrice += businessPrice*0.10;
        return businessPrice;
    } else if (availableClassTickets.business === 1) {
        availableClassTickets.business--;
        businessPrice = 91000;
        return businessPrice;
    } else if (availableClassTickets.business === 0) {
        alert("Uh oh, our seats are fully booked!")
    }
}

function buyBaliFirst() {
    if (availableClassTickets.first >= 2) {
        availableClassTickets.first--;
        firstPrice += firstPrice*0.15;
        return firstPrice;
    } else if (availableClassTickets.first === 1) {
        availableClassTickets.first--;
        firstPrice = 191000;
        return firstPrice;
    } else if (availableClassTickets.first === 0) {
        alert("Uh oh, our seats are fully booked!")
    }
}


//Indicates what output to be displayed when user selects options
function displayResult() {
 if (kualaLumpur.selected && economyClass.selected) {
    buyTicket();
    document.querySelector("#outputCost").innerText = "*Ticket price from $" + basicPrice.toFixed(2);
    document.querySelector("#outputSeats").innerText = "**Only " + availableTickets + " seats left!";
 } else if (baliIndo.selected && economyClass.selected) {
    buyBaliEconomy();
    document.querySelector("#outputCost").innerText = "*Ticket price from $" + economyPrice.toFixed(2);
    document.querySelector("#outputSeats").innerText = "**Only " + availableClassTickets.economy + " seats left!";
 } else if (baliIndo.selected && businessClass.selected) {
    buyBaliBusiness();
    document.querySelector("#outputCost").innerText = "*Ticket price from $" + businessPrice.toFixed(2);
    document.querySelector("#outputSeats").innerText = "**Only " + availableClassTickets.business + " seats left!";
 } else if (baliIndo.selected && firstClass.selected) {
    buyBaliFirst();
    document.querySelector("#outputCost").innerText = "*Ticket price from $" + firstPrice.toFixed(2);
    document.querySelector("#outputSeats").innerText = "**Only " + availableClassTickets.first + " seats left!";
 }
}


//to clear output text when user changes options from dropdown menu
function emptyOutput(e) {
    document.querySelector("#outputCost").innerText = "";
    document.querySelector("#outputSeats").innerText = "";
}

destinationOptions.addEventListener('change', emptyOutput);