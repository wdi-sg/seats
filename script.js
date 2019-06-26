




// console.log(50 / 100 * 5);
// //ORIGINAL INPUT CODE
// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };



// code:
// create global variable starting price = 50
// every subsequent ticket = +2.5
//price increase (2.5) and number of buys (number) --> total increase to price
//current price = starting price + total increase to price
//function inputHappened MUST calculate starting price + total increase to price AND add to the numberOfBuys counter

var startPrice = 50;      //standard 50
var eachIncrement = 2.5;  //for part1, standard 2.5
var numberOfBuys = 0;     //not relevant part1
var increaseToPrice = 0;  //func(eachInc*noOfBuys)
var currentPrice = 0;    //func(start + incToPrice)

var calEachIncrement = function(numberOfBuys) {}

//function = each increment * number of buys = increase to price
var calcIncreaseToPrice = function(eachIncrement, numberOfBuys) {
    if (numberOfBuys === 0){
        eachIncrement = 0;
        increaseToPrice = 0;
    } else if (numberOfBuys > 0 && numberOfBuys <= 5) {
        eachIncrement = 50 / 100 * 3;
        console.log ("Each ticket went up " + eachIncrement);
        increaseToPrice += eachIncrement * numberOfBuys;
    } else if (numberOfBuys > 5 && numberOfBuys <= 9) {
        eachIncrement = 50 / 100 * 5;
        console.log ("Each ticket went up " + eachIncrement);
        increaseToPrice += eachIncrement * numberOfBuys;
    } else if (numberOfBuys === 10) {
        increaseToPrice = 0;
        currentPrice = 9100;
        return;
    } else {
        display("OUT OF TICKETS");
        return;
    }
};

// call
// calcIncreaseToPrice(eachIncrement, numberOfBuys);

//function = starting price + increase to price = current price
var calcCurrentPrice = function(startPrice, increaseToPrice){
    currentPrice = startPrice + increaseToPrice;
};

// initial call
calcCurrentPrice(startPrice, increaseToPrice);



console.log("Initial value of increaseToPrice :" + increaseToPrice);
console.log("Initial value of currentPrice :" + currentPrice);

// when input,
// get and update increase to price, get current price
// update number of buys
var inputHappened = function(currentInput, calcIncreaseToPrice, calcCurrentPrice) {
    calcIncreaseToPrice;
    numberOfBuys += 1;
    calcCurrentPrice;
    console.log("Increase to price was " + increaseToPrice);
    console.log("Number of tickets bought: " + numberOfBuys);
    display("You paid: " + currentPrice);
};