//A plane has 10 seats.
var planeSeats = 10;
var seatsSold = 1;

var newPrice = 50;

//starting value
var inputEntry = false;
console.log("Has input: "+inputEntry);
var data = null;

var inputHappened = function(userInput) {

    if ( userInput === false )
    {
 data = inputEntry;
    userInput = true;
    console.log(userInput);

        return "The seat is $"+newPrice;
        seatsSold ++;
        console.log(seatsSold);
    }
    while ((seatsSold <= 10) && (userInput = true))
    {
        if (seatsSold != 1) {
        var newPrice = newPrice*1.05;
        }
        return "The seat is $"+newPrice;
        console.log(newPrice);
        seatsSold ++;
        console.log(seatsSold);
        userInput=false;
    }
}
