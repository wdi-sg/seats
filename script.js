console.log("hello script js");

//define ticket price
var ticketPrice = 50;
//number of empty seats
var emptySeats = 10;

//price of ticket purchased
var inputHappened = function(currentInput){
    console.log(currentInput);

if(isNaN(currentInput)){
    return output = "please try again"
}

if(currentInput > 10){
    return output = "the maximum puchase is 10."
}

if(emptySeats <= 0) {
    return output = "Plane is full, please wait for next flight";
}

if(currentInput == 1) {
    ticketCost = ticketPrice;
    emptySeats - 1;
    return output = "Thank you for your purchase, the ticket was $" + ticketCost;
} else if(currentInput >= 2 && currentInput <= 10){
    ticketCost = ticketPrice + (currentInput * (ticketPrice * 0.05));
    return output = "Thank you for your purchase, the ticket was $" + ticketCost;
}
}