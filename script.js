
//defining tickets available and original price
var availableTickets = 10;
var basicPrice = 50;

var availableClassTickets = {
    economy: 15,
    business: 6,
    first: 4,
}
var economyPrice = 50;


//to store user information in cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//to hide certain options in second dropdown when user selects an item from first dropdown
    var destinationOptions = document.querySelector("#options");
    var kualaLumpur = document.querySelector("#kl");
    var baliIndo = document.querySelector("#bali");
    var economyClass = document.querySelector("#economy");
    var businessClass = document.querySelector("#business");
    var firstClass = document.querySelector("#first");

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
function buyTicket() {
    if (availableTickets >= 6) {
    for(var i = 0; i < 6; i++) {
        basicPrice += (basicPrice*0.03);
        return (basicPrice);
    }
    } else if (availableTickets >= 2) {
        for(var i = 6; i < 10; i++) {
        basicPrice += (basicPrice*0.05);
        return (basicPrice);
    }
    } else if (availableTickets === 1) {
        basicPrice = 91000;
        return (basicPrice);
    }
}

function buyBaliEconomy() {
    if (availableClassTickets.economy >= 8) {
    for(var i = 0; i < 8; i++) {
        economyPrice += (economyPrice*0.03);
        return (economyPrice);
    }
    } else if (availableClassTickets.economy >= 2) {
        for(var i = 6; i < 10; i++) {
        economyPrice += (economyPrice*0.05);
        return (economyPrice);
    }
    } else if (availableClassTickets.economy === 1) {
        economyPrice = 91000;
        return (economyPrice);
    }
}

function displayResult() {
 if (kualaLumpur.selected && economyClass.selected) {
    buyTicket();
    document.querySelector("#outputCost").innerText = "*Ticket price from $" + basicPrice.toFixed(2);
    document.querySelector("#outputSeats").innerText = "**Only " + availableTickets + " seats left!"
 } else if (baliIndo.selected && economyClass.selected) {
    buyBaliEconomy();
    document.querySelector("#outputCost").innerText = "*Ticket price from $" + economyPrice.toFixed(2);
    document.querySelector("#outputSeats").innerText = "**Only " + availableClassTickets.economy + " seats left!"
 } else if (baliIndo.selected && businessClass.selected) {

 }
}

function emptyOutput(e) {
    document.querySelector("#outputCost").innerText = "";
    document.querySelector("#outputSeats").innerText = "";
}

destinationOptions.addEventListener('change', emptyOutput);