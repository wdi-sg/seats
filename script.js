var numberOfTakenSeats = 1;
var ticketPrice = 50;

var inputHappened = function(currentInput) {
    inputLC = currentInput.toLowerCase();
    console.log(inputLC);
        if (inputLC === "buy") {
            if (numberOfTakenSeats === 1) {
                ticketPrice = (numberOfTakenSeats * ticketPrice);
                console.log(ticketPrice);
                var data = `Your tickets costs $${ticketPrice}.`;
                console.log(data);
                display(data);
            } else if (numberOfTakenSeats > 1 && numberOfTakenSeats <=10 ) {
                ticketPrice = (ticketPrice * 1.05);
                console.log(ticketPrice);
                data = `Your tickets costs $${ticketPrice}.`;
                console.log(data);
                display(data);
            }
            numberOfTakenSeats += 1;
            console.log(numberOfTakenSeats);
            }
            else {
                display("Please input buy");
            }
        };