
//Give starting instructions.
document.getElementById("output").innerText = `Hi! To get started, type "e", "b" or "f" for a ticket.`
//Function to clear user input.
function clearInput() {
    document.getElementById("input").value = ""
}

//Defining states.
var econLeft = 10;
var businessLeft = 6;
var firstLeft = 4;
var surcharge = 1;
var econPrice = 50;
var businessPrice = 50;
var firstPrice = 50
var category;
var userInputs = [];

//Function that runs every time a new input is detected.
var inputHappened = function(currentInput) {
  clearInput();

  //FOR ECONOMY CLASS TICKETS.
  if (currentInput==="e"){
    econLeft--;
    if (econLeft===9) {
      return `Seats left = ${econLeft}. The price of your ticket was $${econPrice}.`
    } else if (econLeft > 4) {
      surcharge = 1.03;
    } else if (econLeft > 0) {
      surcharge = 1.05;
    } else if (econLeft===0) {
      return `Last seat was $91,000.`
    } else {
      return `There are no more seats available in economy.`
    }
    econPrice = (econPrice*surcharge).toFixed(2);
    return `Seats left in economy class = ${econLeft}. The price of your ticket was $${econPrice}.`

//FOR BUSINESS CLASS TICKETS.
} else if (currentInput==="b") {
    businessLeft--;
    if (businessLeft===5) {
      return `Seats left = ${businessLeft}. The price of your ticket was $${businessPrice}.`
    } else if (businessLeft > 3) {
      surcharge = 1.06;
    } else if (businessLeft > 0) {
      surcharge = 1.10;
    } else if (businessLeft===0) {
      return `Last seat was $91,000.`
    } else {
      return `There are no more seats available in business.`
    }
    businessPrice = (businessPrice*surcharge).toFixed(2);
    return `Seats left in business class = ${businessLeft}. The price of your ticket was $${businessPrice}.`

//FOR FIRST CLASS TICKETS.
} else if (currentInput==="f") {
    firstLeft--;
    if (firstLeft===3) {
      return `Seats left = ${firstLeft}. The price of your ticket was $${firstPrice}.`
    } else if (firstLeft > 0) {
      surcharge = 1.15;
    } else if (firstLeft===0) {
      return `Last seat was $191,000.`
    } else {
      return `There are no more seats available in first class.`
    }
    firstPrice = (firstPrice*surcharge).toFixed(2);
    return `Seats left in first class = ${firstLeft}. The price of your ticket was $${firstPrice}.`
  } else {
    return `Invalid input detected.`
  }
};
