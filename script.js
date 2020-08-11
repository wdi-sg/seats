console.log("hello script js");

/*
price (number) -> seats (number)
For each ticket sold, the price will increase by 1.05
currentInpunt.trim() will remove the whitespace from the input
*/

var economyPrice = 50;
var businessPrice = 50;
var firstPrice = 50;
var economySeats = 15;
var businessSeats = 6;
var firstSeats = 4;

var inputHappened = function(currentInput){
  console.log( currentInput );
  var value = currentInput;

  if (value === "buy economy class") {
    if (economySeats > 1) {
      economySeats--
      var econ = economy(economySeats);
      return econ;
    } else {
      var output = "Economy.C seats are sold out!";
      return output;
    }  
  } else if (value === "buy business class") {
    if (businessSeats > 1) {
      businessSeats--
      var busi = business(businessSeats);
      return busi;
    } else {
      var output = "Business.C seats are sold out!";
      return output;
    }  
  } else if (value === "buy first class") {
    if (firstSeats > 1) {
      firstSeats--
      var fi = first(firstSeats);
      return fi;
    } else {
      var output = "First.C seats are sold out!";
      return output;
    }  
  } else {
    return "Please key in only (buy first class), (buy business class), (buy economy class)"
  }
};

var economy = function(economySeats) {
  for (var i = 0; i < economySeats; i++) {
    if (economySeats === 1) {
      economyPrice = 91000;
    } else if (economySeats > 5) {
      economyPrice *= 1.03;
      economyPrice = parseFloat(economyPrice.toFixed(2));
    } else {
      economyPrice *= 1.05;
      economyPrice = parseFloat(economyPrice.toFixed(2));
    }
    var output = "Economy ticket left: " + economySeats + " Current price: $" + economyPrice;
      return output;
  }
};

var business = function(businessSeats) {
  for (var i = 0; i < businessSeats; i++) {
    if (businessSeats === 1) {
      businessPrice = 91000;
    } else if (businessSeats > 3) {
      businessPrice *= 1.06;
      businessPrice = parseFloat(businessPrice.toFixed(2));
    } else {
      businessPrice *= 1.1;
      businessPrice = parseFloat(businessPrice.toFixed(2));
    }
    var output = "Business ticket left: " + businessSeats + " Current price: $" + businessPrice;
      return output;
  }
};

var first= function(firstSeats) {
  for (var i = 0; i < firstSeats; i++) {
    if (firstSeats === 1) {
      firstPrice = 191000;
    } else {
      firstPrice *= 1.15;
      firstPrice = parseFloat(firstPrice.toFixed(2));
    }
    var output = "First ticket left: " + firstSeats + " Current price: $" + firstPrice;
      return output;
  }
};