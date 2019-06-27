console.log("hello script js");

//part1
var tixTotal = 10;
var currentPrice = 50;
var priceIncrement = 0.05 * 50;

document.querySelector('#input').addEventListener('change', function(event){
    var currentInput = event.target.value;
    inputHappened(currentInput)
});

//calculate new ticket price
var calculateNewPrice = function() {
    currentPrice = currentPrice + priceIncrement;
};

//minus 1 tix from startTotal
var calculateNewTotal = function() {
    tixTotal = tixTotal - 1;
};

var display = function( data ){
    var output = document.querySelector('#price');
    output.innerText = data;
};

var inputHappened = function(currentInput){
    if(tixTotal === 10) {
        calculateNewTotal();
        console.log(tixTotal);
        display("1 ticket bought at $" + currentPrice);
    }
    else if(tixTotal > 0 && tixTotal < 10) {
        calculateNewTotal();
        console.log(tixTotal);
        calculateNewPrice();
        display("1 ticket bought at $" + currentPrice);
    }
    else {
        display("sold out!");
    }
};

//part2 - comment out part 1 to run.
/*var tixTotal = 10;
var currentPrice = 50;
var priceIncrementA = 0.03 * currentPrice;//1.5
var priceIncrementB = 0.05 * currentPrice;//2.5

document.querySelector('#input').addEventListener('change', function(event){
    var currentInput = event.target.value;
    inputHappened(currentInput)
});

//calculate new price
var calculateNewPrice = function() {
    if (tixTotal >= 5 && tixTotal <= 10) {
        currentPrice = currentPrice + priceIncrementA;
    }
    else {
        currentPrice = currentPrice + priceIncrementB;
}
};

//minus 1 tix from startTotal
var calculateNewTotal = function() {
    tixTotal = tixTotal - 1;
};

var display = function( data ){
    var output = document.querySelector('#price');
    output.innerText = data;
};

var inputHappened = function(currentInput){
    if(tixTotal > 1) {
        calculateNewTotal();
        console.log(tixTotal);
        calculateNewPrice();
        display("1 ticket bought at $" + currentPrice);
    }
    else if (tixTotal === 1) {
        calculateNewTotal();
        console.log(tixTotal);
        display("Last ticket bought at $$91,000");
    }
    else {
        display("sold out!");
    }
};
*/