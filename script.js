
var startPrice = 50;      //standard 50
//var eachIncrement = 0;  for part1, standard 2.5
var numberOfBuys = 0;     //not relevant part1
var increaseToPrice = 0;  //func(eachincrement*noOfBuys)
var currentPrice = 0;    //func(start + increaseToPrice)

//increase to price += number of buys * increment
var calcIncreaseToPrice = function(numberOfBuys) {
    if ((numberOfBuys) === 0) {
        increaseToPrice = 0;
    } else if (numberOfBuys < 5) {
        increaseToPrice += 50 / 100 * 3;
        console.log ("Price increased by $" + increaseToPrice);
    } else if (numberOfBuys >= 5 && numberOfBuys < 9) {
        increaseToPrice += 50 / 100 * 5;
        console.log ("Price increased by $" + increaseToPrice);
    } else if (numberOfBuys === 9) {
        increaseToPrice = 0;
        startPrice = 91000;
        console.log("Welcome aboard, Mr. Wayne.");
        return;
    } else {
        display("OUT OF TICKETS");
        return;
    }
}
// call is:
// calcIncreaseToPrice(numberOfBuys);


//function = starting price + increase to price = current price
var calcCurrentPrice = function(startPrice, increaseToPrice){
    currentPrice = startPrice + increaseToPrice;
    display("You paid: $" + currentPrice);
};
// initial call to set initial price (50 + 0)
//calcCurrentPrice(startPrice, increaseToPrice);



console.log("Initial value of increaseToPrice :" + increaseToPrice);
console.log("Initial value of currentPrice :" + currentPrice);

// when input,
// get and update increase to price, get current price
// update number of buys
var inputHappened = function(currentInput) {
    calcIncreaseToPrice(numberOfBuys);
    calcCurrentPrice(startPrice, increaseToPrice);
    numberOfBuys += 1;
    console.log("Number of tickets bought: " + numberOfBuys);
    console.log("You paid: " + currentPrice);
};
