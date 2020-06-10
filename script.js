console.log("hello script js");

//define ticket price
var ticketPrice = 50;
//number of empty seats
var emptySeats = 10;
var nextTicket = ticketPrice;

var inputHappened = function(currentInput){
    console.log(currentInput);

if(emptySeats === 0) {
    return output = "Plane is full, please wait for next flight";
}
    document.getElementById("input").value = ""
    emptySeats--;
    console.log(emptySeats);
    ticketPrice = nextTicket;
    nextTicket = ticketPrice * 1.05;
    console.log(nextTicket);
    return output = "Thank you for your purchase, the ticket was $" + ticketPrice;
}