console.log("hello script js");


var totalNumOfSeats = 10;
var currentSeatPrice = 50;
var numOfSeatsSold=0

// newPrice needs to increase by 5% for every seat gone
// if there are 10 seats then sell at original price
var newPrice = function () {
    if (totalNumOfSeats === 10) {
        var result = currentSeatPrice;
        return result;
    } else if (totalNumOfSeats < 10) {
       var result= currentSeatPrice + (numOfSeatsSold * 0.05 * currentSeatPrice);
       return result;
    }
}

var inputHappened = function(currentInput){
    if (currentInput === "buy" && (totalNumOfSeats >0)) {
            display(`The price is $${newPrice()}`);
            numOfSeatsSold ++;
            totalNumOfSeats --;
            console.log(numOfSeatsSold);
            console.log(totalNumOfSeats);
    } else if (currentInput === "buy" && (totalNumOfSeats=== 0)) {
        display("no more seats!");
    }
};