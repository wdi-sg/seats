console.log("hello script js");

var seatsLeft = 10;

//Function to clear user input.
function clearInput() {
    document.getElementById("input").value = ""
}
//Function that runs every time a new input is detected.
var inputHappened = function(currentInput) {
    clearInput(); //Clears input.
    //If user gives a valid input "a", run the following commands:
    if (currentInput === "a") {
        //If there are still seats, calculate inflation and final price of the ticket.
        seatsLeft--;
        console.log(seatsLeft); //For debugging.
        var inflation;
        //Inflation for first half of seats
        if (seatsLeft > 5) {
            inflation = 1.00 + 0.03 * (9 - seatsLeft);
            console.log(inflation)
            //Inflation for second half of seats
        } else if (seatsLeft > 1) {
            inflation = 1.12 + 0.05 * (5 - seatsLeft);
            console.log(inflation);
            //Fixed price for last ticket.
        } else if (seatsLeft === 1) {
            return `You got the last ticket and the price is $91,000.`
        } else {
            return `Seats are sold out.`
        }
        //Calculate the final price of the ticket with the conditional inflation, to 2 decimal places.
        var price = (50 * inflation).toFixed(2);
        //Give the final output with details.
        return `There are ${seatsLeft} seats left. Your price is $${price}.`;
        //If user gives an input other than "buy".
    } else {
        return `Sorry, that was an invalid input.`
    }
};
