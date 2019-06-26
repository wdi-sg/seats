console.log("hello script js");
/*
When a user selects an option from the drop down menu or types "buy" into the console, the price paid will be the value shown above the output field.
This price will be added to the global ticket sales to keep track of how much the airline will earn and how many seats have been sold. If the user clicks on the buy when the seats are full, there is no sale.
*/

//Global variables created to record information about ticket price, overall sales, and plane capacity for various classes.
var globalTicketSales = 0;
console.log("Total sales is: "+globalTicketSales);

var economyClassMaxCapacity = 15;
document.getElementById("economyclassseatsleft").textContent = economyClassMaxCapacity;
console.log("Plane maximum capacity in economy is: "+economyClassMaxCapacity);
var businessClassMaxCapacity = 6;
document.getElementById("businessclassseatsleft").textContent = businessClassMaxCapacity;
console.log("Plane maximum capacity in business is: "+businessClassMaxCapacity);
var firstClassMaxCapacity = 4;
document.getElementById("firstclassseatsleft").textContent = firstClassMaxCapacity;
console.log("Plane maximum capacity in first class is: "+firstClassMaxCapacity);

var economyClassCurrentCapacity = 0;
console.log("Plane current capacity in economy is: "+economyClassCurrentCapacity);
var businessClassCurrentCapacity = 0;
console.log("Plane current capacity in business is: "+businessClassCurrentCapacity);
var firstClassCurrentCapacity = 0;
console.log("Plane current capacity in first class is: "+firstClassCurrentCapacity);

var economyClassSeatNumber = 1;
console.log("Current seat number being sold in economy is: "+economyClassSeatNumber);
var businessClassSeatNumber = 1;
console.log("Current seat number being sold in business is: "+businessClassSeatNumber);
var firstClassSeatNumber = 1;
console.log("Current seat number being sold in first class is: "+firstClassSeatNumber);

var startingEconomyClassTicketPrice = 50;
document.getElementById("economyclassticketprice").textContent = `$${startingEconomyClassTicketPrice.toFixed(2)}`;
console.log("Current economy class ticket price is: " +startingEconomyClassTicketPrice);
var startingBusinessClassTicketPrice = 50*1.06;
document.getElementById("businessclassticketprice").textContent = `$${startingBusinessClassTicketPrice.toFixed(2)}`;
console.log("Current business class ticket price is: " +startingBusinessClassTicketPrice);
var startingFirstClassTicketPrice = 50*1.15;
document.getElementById("firstclassticketprice").textContent = `$${startingFirstClassTicketPrice.toFixed(2)}`;
console.log("Current first class ticket price is: " +startingFirstClassTicketPrice);

//this code is to display the starting price of $50.
//document.getElementById("ticketprice").textContent = `$${startingTicketPrice}`;
//document.getElementById("seatsleft").textContent = globalPlaneCapacity;

function checkInputValue(){
  var input = document.getElementById("useraction").value;
  var inputConvert = input.toLowerCase();

  switch (input){
    case "buy first class":
      console.log("First class bought!")
      clearInput();
      clearOutput();
      startFirstClassTransaction();
    break;
    case "buy business class":
      console.log("Business class bought!")
      clearInput();
      clearOutput();
      startBusinessClassTransaction();
    break;
    case "buy economy class":
      console.log("Economy class bought!")
      clearInput();
      clearOutput();
      startEconomyClassTransaction();
    break;
    default:
      displayError();
  }
}

function startFirstClassTransaction(){
  if (firstClassCurrentCapacity < firstClassMaxCapacity){
    globalTicketSales += startingFirstClassTicketPrice;
    console.log(globalTicketSales);
    firstClassSeatNumber += 1;
    firstClassCurrentCapacity += 1;
    priceChangeWarningFirstClass();
    document.getElementById("firstclassseatsleft").textContent = firstClassMaxCapacity - firstClassCurrentCapacity;
    adjustFirstClassPrice();
  }else {
    fullyBooked();
  }
}

function startBusinessClassTransaction(){
  if (businessClassCurrentCapacity < businessClassMaxCapacity){
    globalTicketSales += startingBusinessClassTicketPrice;
    console.log(globalTicketSales);
    businessClassSeatNumber += 1;
    businessClassCurrentCapacity +=1;
    priceChangeWarningBusinessClass();
    document.getElementById("businessclassseatsleft").textContent = businessClassMaxCapacity - businessClassCurrentCapacity;
    adjustBusinessClassPrice();
  }else {
    fullyBooked();
  }
}

function startEconomyClassTransaction(){
  if (economyClassCurrentCapacity < economyClassMaxCapacity){
    globalTicketSales += startingEconomyClassTicketPrice;
    console.log(globalTicketSales);
    economyClassSeatNumber += 1;
    economyClassCurrentCapacity += 1;
    console.log(economyClassCurrentCapacity);
    priceChangeWarningEconomyClass();
    document.getElementById("economyclassseatsleft").textContent = economyClassMaxCapacity - economyClassCurrentCapacity;
    adjustEconomyClassPrice();
  }else {
    fullyBooked();
  }
}

function adjustFirstClassPrice(){
  if (firstClassSeatNumber == firstClassMaxCapacity){
    startingFirstClassTicketPrice = 191000;
    document.getElementById("firstclassticketprice").textContent = startingFirstClassTicketPrice.toFixed(2);
  }
}

function adjustBusinessClassPrice(){
  if ((businessClassSeatNumber > businessClassMaxCapacity/2) && (businessClassSeatNumber < (businessClassMaxCapacity-1))){
    startingBusinessClassTicketPrice = 50 * 1.10;
    document.getElementById("businessclassticketprice").textContent = startingBusinessClassTicketPrice.toFixed(2);
  }else if (businessClassSeatNumber == businessClassMaxCapacity){
    startingBusinessClassTicketPrice = 91000;
    document.getElementById("businessclassticketprice").textContent = startingBusinessClassTicketPrice.toFixed(2);
  }
}

function adjustEconomyClassPrice(){
  if ((economyClassSeatNumber > Math.round(economyClassMaxCapacity/2)) && (economyClassSeatNumber < (economyClassMaxCapacity-1))){
    startingEconomyClassTicketPrice = 50 * 1.05;
    document.getElementById("economyclassticketprice").textContent = startingEconomyClassTicketPrice.toFixed(2);
  }else if (economyClassSeatNumber == economyClassMaxCapacity){
    startingEconomyClassTicketPrice = 91000;
    document.getElementById("economyclassticketprice").textContent = startingEconomyClassTicketPrice.toFixed(2);
  }
}

function priceChangeWarningFirstClass(){
  if (firstClassCurrentCapacity < firstClassMaxCapacity-1){
    var difference = (firstClassMaxCapacity-1) - firstClassCurrentCapacity;
    document.getElementById("firstclasspricechange").textContent = `${difference} more seats before the next change, hurry and grab your seats!`
  }else if (firstClassCurrentCapacity == (firstClassMaxCapacity-1)) {
    document.getElementById("firstclasspricechange").textContent = `Last ticket!`
  }else if (firstClassCurrentCapacity == firstClassMaxCapacity) {
    document.getElementById("firstclasspricechange").textContent = `Sorry! We are fully booked!`
  }
}

function priceChangeWarningBusinessClass(){
  if (businessClassCurrentCapacity < (businessClassMaxCapacity/2)){
    var difference = (businessClassMaxCapacity/2) - businessClassCurrentCapacity;
    document.getElementById("businessclasspricechange").textContent = `${difference} more seats before the next change, hurry and grab your seats!`
  }else if (businessClassCurrentCapacity >= (businessClassMaxCapacity/2) && businessClassCurrentCapacity < (businessClassMaxCapacity-1)){
    var difference = (businessClassMaxCapacity-1) - businessClassCurrentCapacity;
    document.getElementById("businessclasspricechange").textContent = `${difference} more seats before the next change, hurry and grab your seats!`
  }else if (businessClassCurrentCapacity == businessClassMaxCapacity-1){
    document.getElementById("businessclasspricechange").textContent = `Last ticket!`
  }else if (businessClassCurrentCapacity == businessClassMaxCapacity){
    document.getElementById("businessclasspricechange").textContent = `Sorry! We are fully booked!`
  }
}

function priceChangeWarningEconomyClass(){
  if (economyClassCurrentCapacity < (economyClassMaxCapacity/2)){
    var difference = Math.round((economyClassMaxCapacity/2) - economyClassCurrentCapacity);
    document.getElementById("economyclasspricechange").textContent = `${difference} more seats before the next change, hurry and grab your seats!`
  }else if ((economyClassCurrentCapacity > (economyClassMaxCapacity/2)) && economyClassCurrentCapacity < economyClassMaxCapacity-1){
    var difference = Math.round((economyClassMaxCapacity-1) - economyClassCurrentCapacity);
    document.getElementById("economyclasspricechange").textContent = `${difference} more seats before the next change, hurry and grab your seats!`
  }else if (economyClassCurrentCapacity == (economyClassMaxCapacity-1)){
    document.getElementById("economyclasspricechange").textContent = `Last ticket!`
  }else if (economyClassCurrentCapacity == economyClassMaxCapacity){
    document.getElementById("economyclasspricechange").textContent = `Sorry! We are fully booked!`
  }
}


function fullyBooked(){
  document.getElementById("output").innerHTML = "Sorry, we are fully booked!";
}

function makeSelection(){
  document.getElementById("output").innerHTML = "Please select from the drop down box!";
}

function clearInput(){
  document.getElementById("useraction").value = "";
}

function displayError(){
  document.getElementById("output").innerHTML = `The box only accepts the phrase "buy xxx class" (xxx can be first, business, or economy)`;
  clearInput();
}

function clearOutput(){
  document.getElementById("output").innerHTML = "";
}
