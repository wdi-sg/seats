console.log("hello script js");
var seats = 10, price = 50, oriPrice = 50, increment = 0;
var inputHappened = function(currentInput){
    if(seats == 1){
        oriPrice += increment;
        return "No more seats left and the final price of is $" + oriPrice + ".";}
    increment = price * 0.05;
    seats--, oriPrice += increment;
    return "Price of seat is $" + oriPrice.toFixed(2) + ". " + seats + "/10 seats left";
};