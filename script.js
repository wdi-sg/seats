console.log("hello script js");

var econLeft = 10;
var businessLeft = 6;
var firstLeft = 4;
var surcharge = 1;
var price = 50
var category;


//Function to clear user input.
function clearInput() {
    document.getElementById("input").value = ""
}
//Function that runs every time a new input is detected.
var inputHappened = function(currentInput) {
  clearInput();

  //FOR ECONOMY CLASS TICKETS
  if (currentInput==="e"){
    econLeft--;
    if (econLeft===9) {
      return `Seats left = ${econLeft}. The price of your ticket was $${price}.`
    } else if (econLeft > 4) {
      surcharge = 1.03;
    } else if (econLeft > 0) {
      surcharge = 1.05;
    } else if (econLeft===0) {
      return `Last seat was $91,000.`
    } else {
      return `There are no more seats available in economy.`
    }
    var econPrice = (price*surcharge).toFixed(2);
    return `Seats left in economy class = ${econLeft}. The price of your ticket was $${econPrice}.`

//FOR BUSINESS CLASS TICKETS
} else if (currentInput==="b") {
    businessLeft--;
    if (businessLeft===5) {
      return `Seats left = ${businessLeft}. The price of your ticket was $${price}.`
    } else if (businessLeft > 3) {
      surcharge = 1.06;
    } else if (businessLeft > 0) {
      surcharge = 1.10;
    } else if (businessLeft===0) {
      return `Last seat was $91,000.`
    } else {
      return `There are no more seats available in business.`
    }
    var businessPrice = (price*surcharge).toFixed(2);
    return `Seats left in business class = ${businessLeft}. The price of your ticket was $${businessPrice}.`
} else if (currentInput==="f") {
    firstLeft--;
    if (firstLeft===3) {
      return `Seats left = ${firstLeft}. The price of your ticket was $${price}.`
    } else if (firstLeft > 0) {
      surcharge = 1.15;
    } else if (firstLeft===0) {
      return `Last seat was $191,000.`
    } else {
      return `There are no more seats available in first class.`
    }
    var firstPrice = (price*surcharge).toFixed(2);
    return `Seats left in first class = ${firstLeft}. The price of your ticket was $${firstPrice}.`
  } else {
    return `Invalid input detected.`
  }

};
