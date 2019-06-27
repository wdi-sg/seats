console.log("hello script js");
/*
When a user selects an option from the drop down menu or types "buy" into the console, the price paid will be the value shown above the output field.
This price will be added to the global ticket sales to keep track of how much the airline will earn and how many seats have been sold. If the user clicks on the buy when the seats are full, there is no sale.
*/

alert("buy first class - Buys a first class ticket.\nbuy business class - Buys a business class ticket.\nbuy economy class - Buys an economy class ticket.");


//Global variables created to record information about ticket price, overall sales, and plane capacity for various classes.

var globalTicketSales = 0; //variable used to contain total sales figure generated from sales of different plane cabins.
console.log("Total sales is: "+globalTicketSales);

//creation of variables XXXMaxCapacity to set conditionals used in later part of the code.
var economyClassMaxCapacity = 15;
document.getElementById("economyclassseatsleft").textContent = economyClassMaxCapacity;
console.log("Plane maximum capacity in economy is: "+economyClassMaxCapacity);
var businessClassMaxCapacity = 6;
document.getElementById("businessclassseatsleft").textContent = businessClassMaxCapacity;
console.log("Plane maximum capacity in business is: "+businessClassMaxCapacity);
var firstClassMaxCapacity = 4;
document.getElementById("firstclassseatsleft").textContent = firstClassMaxCapacity;
console.log("Plane maximum capacity in first class is: "+firstClassMaxCapacity);

//creation of variables XXXCurrentCapacity which will determine how many seats are left in each plane cabin.
var economyClassCurrentCapacity = 0;
console.log("Plane current capacity in economy is: "+economyClassCurrentCapacity);
var businessClassCurrentCapacity = 0;
console.log("Plane current capacity in business is: "+businessClassCurrentCapacity);
var firstClassCurrentCapacity = 0;
console.log("Plane current capacity in first class is: "+firstClassCurrentCapacity);

//creation of variables XXXSeatNumber which will provide conditional status for price adjustment for each plane cabin.
var economyClassSeatNumber = 1;
console.log("Current seat number being sold in economy is: "+economyClassSeatNumber);
var businessClassSeatNumber = 1;
console.log("Current seat number being sold in business is: "+businessClassSeatNumber);
var firstClassSeatNumber = 1;
console.log("Current seat number being sold in first class is: "+firstClassSeatNumber);

//variables created to indicate starting price for each cabin.
var startingEconomyClassTicketPrice = 50*1.03;
document.getElementById("economyclassticketprice").textContent = `$${startingEconomyClassTicketPrice.toFixed(2)}`;
console.log("Current economy class ticket price is: " +startingEconomyClassTicketPrice);
var startingBusinessClassTicketPrice = 50*1.06;
document.getElementById("businessclassticketprice").textContent = `$${startingBusinessClassTicketPrice.toFixed(2)}`;
console.log("Current business class ticket price is: " +startingBusinessClassTicketPrice);
var startingFirstClassTicketPrice = 50*1.15;
document.getElementById("firstclassticketprice").textContent = `$${startingFirstClassTicketPrice.toFixed(2)}`;
console.log("Current first class ticket price is: " +startingFirstClassTicketPrice);

//first function call when user enters information in the input field
function checkInputValue(){
  var input = document.getElementById("useraction").value;
  var inputConvert = input.toLowerCase();
//switch case to determine which type of action user is taking.
  switch (inputConvert){
    case "buy first class":
      console.log("First class bought!")
      clearInput(); //clears input field upon verification of input.
      clearOutput(); //clears any error generated from user invalid entry.
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
      displayError(); //when user enters an invalid format.
  }
}
//function that totals global sales, increments seat and capacity numbers, and alerts and checks for price change
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
//function that compares seat number with maximum capacity. Adjusts price of tickets accordingly.
function adjustFirstClassPrice(){
  if (firstClassSeatNumber == firstClassMaxCapacity){
    startingFirstClassTicketPrice = 191000;
    document.getElementById("firstclassticketprice").textContent = `$${startingFirstClassTicketPrice.toFixed(2)}`;
  }
}

function adjustBusinessClassPrice(){
  if ((businessClassSeatNumber > businessClassMaxCapacity/2) && (businessClassSeatNumber < (businessClassMaxCapacity-1))){
    startingBusinessClassTicketPrice = 50 * 1.10;
    document.getElementById("businessclassticketprice").textContent = `$${startingBusinessClassTicketPrice.toFixed(2)}`;
  }else if (businessClassSeatNumber == businessClassMaxCapacity){
    startingBusinessClassTicketPrice = 91000;
    document.getElementById("businessclassticketprice").textContent = `$${startingBusinessClassTicketPrice.toFixed(2)}`;
  }
}

function adjustEconomyClassPrice(){
  if ((economyClassSeatNumber > Math.round(economyClassMaxCapacity/2)) && (economyClassSeatNumber < (economyClassMaxCapacity-1))){
    startingEconomyClassTicketPrice = 50 * 1.05;
    document.getElementById("economyclassticketprice").textContent = `$${startingEconomyClassTicketPrice.toFixed(2)}`;
  }else if (economyClassSeatNumber == economyClassMaxCapacity){
    startingEconomyClassTicketPrice = 91000;
    document.getElementById("economyclassticketprice").textContent = `$${startingEconomyClassTicketPrice.toFixed(2)}`;
  }
}
//function that compares current capacity of each cabin to the maximum occupancy. Provides feedback on current status of cabin capacity. Alerts user of impending price change.
function priceChangeWarningFirstClass(){
  if (firstClassCurrentCapacity < firstClassMaxCapacity-1){
    var difference = (firstClassMaxCapacity-1) - firstClassCurrentCapacity;
    document.getElementById("firstclasspricechange").textContent = `${difference} more seats before the next change, hurry and grab your seats!`
  }else if (firstClassCurrentCapacity == (firstClassMaxCapacity-1)) {
    document.getElementById("firstclasspricechange").textContent = `Last ticket!`
  }else if (firstClassCurrentCapacity == firstClassMaxCapacity) {
    document.getElementById("firstclasspricechange").textContent = `Sorry! We are fully booked here!`
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
    document.getElementById("businessclasspricechange").textContent = `Sorry! We are fully booked here!`
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
    document.getElementById("economyclasspricechange").textContent = `Sorry! We are fully booked here!`
  }
}

//function that alerts user that selected cabin is fully booked.
function fullyBooked(){
  document.getElementById("output").innerHTML = "Sorry, we are fully booked here!";
}
//function that clears the input field in preparation for next entry.
function clearInput(){
  document.getElementById("useraction").value = "";
}
//function that lets user know if invalid format.
function displayError(){
  document.getElementById("output").innerHTML = `The box only accepts the phrase "buy xxx class" (xxx can be first, business, or economy)`;
  clearInput();
}
//function that clears the output box. For aesthetic purposes.
function clearOutput(){
  document.getElementById("output").innerHTML = "";
}
