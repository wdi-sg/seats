///////////////////////////////////////////////////////////////
// 1. The following portion are declares all initial variables
//////////////////////////////////////////////////////////////

//Initialize default Economy variables
var noOfEconomySeats = 15;
var noOfEconomySeatsLeft = noOfEconomySeats;
var originalEconomyPrice = 50;

//Initialize default Business variables
var noOfBusinessSeats = 6;
var noOfBusinessSeatsLeft = noOfBusinessSeats;
var originalBusinessPrice = 50;

//Initialize default First Class variables
var noOfFirstSeats = 4;
var noOfFirstSeatsLeft = noOfFirstSeats;
var originalFirstPrice = 50;

//Initialize Log Count
var logCount=1;

////////////////////////////////////////////////////////////
// 2. The following portion are functions for Economy Class
///////////////////////////////////////////////////////////

//Display function
var displayEPrice = function( data ){
    var output = document.querySelector('#ePrice');
    output.innerText = data;
};

var displayESeats = function( data ){
    var output = document.querySelector('#eSeats');
    output.innerText = data;
};

var displayELogs = function(){
    var passengerName=document.getElementById('name').value;
    //Create New P-Tag
    var list = document.createElement("li");
    var node = document.createTextNode(`${logCount}. ${passengerName} purchased an Economy Class Seat at $${originalEconomyPrice}.`);
    list.className = "log";
    list.appendChild(node);
    logCount+=1;
    //Append P-Tag to div with log ID
    var element = document.getElementById('logList');
    element.appendChild(list);
}

//Economy Price Change Function
var priceChangeEconomy = function () {
    if (noOfEconomySeatsLeft === 1) {
        originalEconomyPrice = 91000;
    } else if (noOfEconomySeatsLeft > Math.floor(noOfEconomySeats/2)) {
        originalEconomyPrice *= 1.03;
        originalEconomyPrice = originalEconomyPrice.toFixed(2);
    } else {
        originalEconomyPrice *=1.05;
        originalEconomyPrice = originalEconomyPrice.toFixed(2);
    }
}

//Economy Sales function
function sellSeatsEconomy() {

    //Condition where no seats are left
    if (noOfEconomySeatsLeft === 1) {
        displayEPrice(`Current Price of Economy Seats: -`);
        displayESeats(`No more seats left!`);
        return;
    }
    //Purchase Seats
    displayELogs();
    noOfEconomySeatsLeft-=1;
    priceChangeEconomy();
    displayEPrice(`Current Price of Economy Seats: $${originalEconomyPrice}`);
    displayESeats(`No. of Economy Seats left: ${noOfEconomySeatsLeft}`);
}

////////////////////////////////////////////////////////////
// 3. The following portion are functions for Business Class
///////////////////////////////////////////////////////////

//Display function
var displayBPrice = function( data ){
    var output = document.querySelector('#bPrice');
    output.innerText = data;
};

var displayBSeats = function( data ){
    var output = document.querySelector('#bSeats');
    output.innerText = data;
};

var displayBLogs = function(){
    var passengerName=document.getElementById('name').value;
    //Create New P-Tag
    var list = document.createElement("li");
    var node = document.createTextNode(`${logCount}. ${passengerName} purchased an Business Class Seat at $${originalBusinessPrice}.`);
    list.className = "log";
    list.appendChild(node);
    logCount+=1;
    //Append P-Tag to div with log ID
    var element = document.getElementById('logList');
    element.appendChild(list);
}


//Business Price Change Function
var priceChangeBusiness = function () {
    if (noOfBusinessSeatsLeft === 1) {
        originalBusinessPrice = 91000;
    } else if (noOfBusinessSeatsLeft > Math.floor(noOfBusinessSeats/2)) {
        originalBusinessPrice *= 1.06;
        originalBusinessPrice = originalBusinessPrice.toFixed(2);
    } else {
        originalBusinessPrice *=1.1;
        originalBusinessPrice = originalBusinessPrice.toFixed(2);
    }
}

//Business Sales function
function sellSeatsBusiness() {

    //Condition where no seats are left
    if (noOfBusinessSeatsLeft === 1) {
        displayBPrice(`Current Price of Business Seats: -`);
        displayBSeats(`No more seats left!`);
        return;
    }
    //Purchase Seats
    displayBLogs();
    noOfBusinessSeatsLeft-=1;
    priceChangeBusiness();
    displayBPrice(`Current Price of Business Seats: $${originalBusinessPrice}`);
    displayBSeats(`No. of Business Seats left: ${noOfBusinessSeatsLeft}`);
}

//////////////////////////////////////////////////////////
// 4. The following portion are functions for First Class
/////////////////////////////////////////////////////////

//Display function
var displayFPrice = function( data ){
    var output = document.querySelector('#fPrice');
    output.innerText = data;
};

var displayFSeats = function( data ){
    var output = document.querySelector('#fSeats');
    output.innerText = data;
};

var displayFLogs = function(){
    var passengerName=document.getElementById('name').value;
    //Create New P-Tag
    var list = document.createElement("li");
    var node = document.createTextNode(`${logCount}. ${passengerName} purchased an First Class Seat at $${originalFirstPrice}.`);
    list.className = "log";
    list.appendChild(node);
    logCount+=1;
    //Append P-Tag to div with log ID
    var element = document.getElementById('logList');
    element.appendChild(list);
}

//First Class Price Change Function
var priceChangeFirst = function () {
    if (noOfFirstSeatsLeft === 1) {
        originalFirstPrice = 91000;
    } else {
        originalFirstPrice *=1.15;
        originalFirstPrice = originalFirstPrice.toFixed(2);
    }
}

//First Class Sales function
function sellSeatsFirst() {

    //Condition where no seats are left
    if (noOfFirstSeatsLeft === 1) {
        displayFPrice(`Current Price of First Class Seats: -`);
        displayFSeats(`No more seats left!`);
        return;
    }
    //Purchase Seats
    displayFLogs();
    noOfFirstSeatsLeft-=1;
    priceChangeFirst();
    displayFPrice(`Current Price of First Classs Seats: $${originalFirstPrice}`);
    displayFSeats(`No. of First Class Seats left: ${noOfFirstSeatsLeft}`);
}