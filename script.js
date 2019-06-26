




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

var startPrice = 50;
var eachIncrement = 2.5;
var numberOfBuys = 0;
var increaseToPrice = 0;
var currentPrice = 50;

//function = each increment * number of buys = increase to price
var calcIncreaseToPrice = function(eachIncrement, numberOfBuys) {
    increaseToPrice = eachIncrement * numberOfBuys;
}

//initial call to establish base increase to price
calcIncreaseToPrice(eachIncrement, numberOfBuys);

//function = starting price + increase to price = current price
var calcCurrentPrice = function(startPrice, increaseToPrice){
    currentPrice = startPrice + increaseToPrice;
}

//initial call to establish initial current price
calcCurrentPrice(startPrice, increaseToPrice);



console.log("Initial value of increaseToPrice :" + increaseToPrice);
console.log("Initial value of currentPrice :" + currentPrice);

// when input,
// show current price
// update number of buys
var inputHappened = function(currentInput, currentPrice){
  console.log( "You entered: " + currentInput );
  console.log("You paid: " + currentPrice);


};