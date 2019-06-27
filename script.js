console.log("hello script js");

var checkIfNumber = function(numberString) {

    var parsedInput = parseInt(numberString);

    var isNotNumberBoolean = isNan(parsedInput);

    return !isNotNumberBoolean;
};

var emptySeat = 50;
var planeSeats = 10;
console.log("$" + emptySeat);

var seatPrice = function(emptySeat, numberOfSeats) {
    if (numberOfSeats <= planeSeats) {
        for (var i = 0; i < numberOfSeats; i++) {
            emptySeat = emptySeat * 1.05;
        }
        planeSeats = planeSeats - numberOfSeats;
    } else {
        return ("Error, sold out.");
    }
    return ("Seat Price: " + emptySeat);
}

var inputHappened = function(currentInput) {
    var numberOfSeats = parseInt(currentInput);
    if (numberOfSeats <= 10) {
        display( seatPrice(emptySeat, numberOfSeats))
    } else {
        display("Error,sold out")
    }
}