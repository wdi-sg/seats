var numberOfTakenSeats = 1;
var ticketPrice = 50;

var inputHappened = function(currentInput) {
    inputLC = currentInput.toLowerCase();
    console.log(inputLC);
        if (inputLC === "buy") {
            if (numberOfTakenSeats > 0 && numberOfTakenSeats < 6) {
                ticketPrice = 51.5;
                console.log(ticketPrice);
                var data = `Your tickets costs $${ticketPrice}.`;
                console.log(data);
                display(data);
            } else if (numberOfTakenSeats >= 6 && numberOfTakenSeats < 10 ) {
                ticketPrice = 52.5;
                console.log(ticketPrice);
                data = `Your tickets costs $${ticketPrice}.`;
                console.log(data);
                display(data);
            } else if (numberOfTakenSeats === 10) {
                ticketPrice = 91000;
                console.log(ticketPrice);
                data = `Your tickets costs $${ticketPrice}.`;
                console.log(data);
                display(data);
            } else {
                display("Tickets are sold out!")
            }
            numberOfTakenSeats += 1;
            console.log(numberOfTakenSeats);
            }
            else {
                display("Please input buy");
            }
        };

        //string.include();