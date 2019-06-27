console.log("hello script js");
var totalSeats = 10;
var originalPrice = 50;

function inputHappened(userInput){
    display("Number of seats left:" + noOfSeatLeft(totalSeats,userInput));
    display2("Cost of Ticket: $" + priceOfTicket(userInput,originalPrice));

};

 function noOfSeatLeft(totalSeats,noOfSeatSelected){
    return parseInt(totalSeats)-parseInt(noOfSeatSelected);
}


 function priceOfTicket(noOfSeatSelected,originalPrice){
    return (originalPrice) + (parseInt(noOfSeatSelected) * (originalPrice *0.05));

}