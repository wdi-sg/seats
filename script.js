console.log("hello script js");

var currentSeatsLeft = 10;
var ticketPrice = 50;
var seats = 0;

var inputHappened = function(currentInput){
    if (currentInput = "buy"){
        console.log("Bought!");
        display("You purchased a ticket!");

        seats = seats + 1;
        console.log(seats + " 9 seats left!");
        display("Your seat cost $50. There are 9 seats left.");
    }
};





//  a user input, check if there are still seats left. If true, then numOfSeatsLeft -1, then currentTicketPrice + 5% .Else can display sold out