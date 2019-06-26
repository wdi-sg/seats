console.log("hello script js");
var econNumberSeats = 15;
var econSeatPrice = 50;
display(`There are ${econNumberSeats} Economy Seats left and ticket price is ${econSeatPrice}`);

var busNumberSeats = 6;
var busSeatPrice = 300;
display2(`There are ${busNumberSeats} Business Class seats left and ticket price is ${busSeatPrice}`);

var firstNumberSeats = 4;
var firstSeatPrice = 1000;
display3(`There are ${firstNumberSeats} Business Class seats left and ticket price is ${firstSeatPrice}`);


function buyETicket() {
    alert(`Ticket Bought at ${econSeatPrice}!`);
    econNumberSeats = parseInt(econNumberSeats)-1;
    if (econNumberSeats===1) {
        console.log(econNumberSeats);
        econSeatPrice = 91000;
        currentInputonsole.log(econSeatPrice);
        display(`there are ${econNumberSeats} seats left and ticket price is ${econSeatPrice}`);
    } else if (econNumberSeats <8) {
        console.log(econNumberSeats);
        econSeatPrice = parseInt(econSeatPrice)*1.05;
        console.log(econSeatPrice);
        display(`there are ${econNumberSeats} seats left and ticket price is ${econSeatPrice}`);
    } else {
        console.log(econNumberSeats);
        econSeatPrice = parseInt(econSeatPrice)*1.03;
        console.log(econSeatPrice)
        display(`there are ${econNumberSeats} seats left and ticket price is ${econSeatPrice}`);
}


function buyBTicket() {
    alert(`Ticket Bought at ${busSeatPrice}!`);
    busNumberSeats = parseInt(busNumberSeats)-1;
    if (busNumberSeats < 3) {
        console.log(busNumberSeats);
        busSeatPrice = parseInt(busSeatPrice)*1.1;
        console.log(busSeatPrice)
        display2(`there are ${busNumberSeats} seats left and ticket price is ${busSeatPrice}`);
    } else {
    console.log(busNumberSeats);
    busSeatPrice = parseInt(busSeatPrice)*1.06;
    console.log(busSeatPrice)
    display2(`there are ${busNumberSeats} seats left and ticket price is ${busSeatPrice}`);
}
}

function buyFTicket() {
    alert(`Ticket Bought at ${firstSeatPrice}!`);
    firstNumberSeats = parseInt(firstNumberSeats)-1;
    console.log(firstNumberSeats);
    firstSeatPrice = parseInt(firstSeatPrice)*1.15;
    console.log(firstSeatPrice)
    display3(`there are ${firstNumberSeats} seats left and ticket price is ${firstSeatPrice}`);
}
}


// var inputHappened = function(currentInput){
//      if (currentInput === "buyETicket") {
//         alert(`Ticket Bought at ${econSeatPrice}!`);
//     econNumberSeats = parseInt(econNumberSeats)-1;
//     if (econNumberSeats<8) {
//         console.log(econNumberSeats);
//     econSeatPrice = parseInt(econSeatPrice)*1.03;
//     console.log(econSeatPrice)
//     display(`there are ${econNumberSeats} seats left and ticket price is ${econSeatPrice}`);
//     } else {
//     console.log(econNumberSeats);
//     econSeatPrice = parseInt(econSeatPrice)*1.05;
//     console.log(econSeatPrice)
//     display(`there are ${econNumberSeats} seats left and ticket price is ${econSeatPrice}`);
//     }
// }