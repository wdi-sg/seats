console.log("hello script js");

//Initial number of economy seats and price
var econNumberSeats = 15;
var econSeatPrice = 50;
display(`There are ${econNumberSeats} Economy Class seats left and ticket price is \$${econSeatPrice}`);

//initial number of business class seats and price
var busNumberSeats = 6;
var busSeatPrice = 300;
display2(`There are ${busNumberSeats} Business Class seats left and ticket price is \$${busSeatPrice}`);

//initial number of first class seats and price
var firstNumberSeats = 4;
var firstSeatPrice = 1000;
display3(`There are ${firstNumberSeats} First Class seats left and ticket price is \$${firstSeatPrice}`);

//button function to buy economy class tickets
//price increase is $1.50 when more than half
//price increase is $2.50 when less than half
//last ticket is $91,000
function buyETicket() {
    alert(`Ticket Bought at ${econSeatPrice}!`);
    econNumberSeats = econNumberSeats-1;
    if (econNumberSeats === 1) {
        console.log(econNumberSeats);
        econSeatPrice = 91000;
        console.log(econSeatPrice);
        display(`There is ${econNumberSeats} Economy Class seat left and ticket price is \$${econSeatPrice}`);
    } else if (econNumberSeats === 0) {
        console.log(econNumberSeats);
        console.log(econSeatPrice);
        display(`Sorry Economy Class tickets sold out!`);
    } else if (econNumberSeats <8) {
        console.log(econNumberSeats);
        econSeatPrice = econSeatPrice + (50*0.05);
        console.log(econSeatPrice);
        console.log(econNumberSeats);
        display(`There are ${econNumberSeats} Economy class seats left and ticket price is \$${econSeatPrice}`);
    } else {
        console.log(econNumberSeats);
        console.log(econSeatPrice);
        econSeatPrice = econSeatPrice + (50*0.03);
        console.log(econSeatPrice);
        display(`There are ${econNumberSeats} Economy Class seats left and ticket price is \$${econSeatPrice}`);
    }
}

//button function to buy business class tickets
//price increase is $18 when more than half
//price increase is $30 when less than half
//last ticket is $91,000
function buyBTicket() {
    alert(`Ticket Bought at ${busSeatPrice}!`);
    console.log(typeof busNumberSeats);
    busNumberSeats = busNumberSeats-1;
    if (busNumberSeats === 1) {
        console.log(busNumberSeats);
        busSeatPrice = 91000;
        console.log(busSeatPrice);
        display2(`There is ${busNumberSeats} Business Class seat left and ticket price is \$${busSeatPrice}`);
    } else if (busNumberSeats === 0) {
        console.log(busNumberSeats);
        console.log(busSeatPrice);
        display2(`Sorry Business Class tickets sold out!`);
    } else if (busNumberSeats <3) {
        console.log(busNumberSeats);
        busSeatPrice = busSeatPrice + (300*0.1);
        console.log(busSeatPrice);
        display2(`There are ${busNumberSeats} Business Class seats left and ticket price is \$${busSeatPrice}`);
    } else {
        console.log(busNumberSeats);
        busSeatPrice = busSeatPrice + (300*0.06);
        console.log(busSeatPrice);
        display2(`There are ${busNumberSeats} Business Class seats left and ticket price is \$${busSeatPrice}`);
    }
}

//button function to buy first class tickets
//price increase is $150 when more than half
function buyFTicket() {
    alert(`Ticket Bought at ${firstSeatPrice}!`);
    firstNumberSeats = firstNumberSeats-1;
    if (firstNumberSeats === 0) {
        display3(`Sorry First Class tickets sold out!`);
    } else {
    console.log(firstNumberSeats);
    firstSeatPrice = firstSeatPrice + (1000*0.15);
    console.log(firstSeatPrice)
    display3(`There are ${firstNumberSeats} First Class seats left and ticket price is \$${firstSeatPrice}`);
    }
}







// //If UX wants input instead of button
// var inputHappened = function(currentInput){
//      if (currentInput === "buyETicket") {
//         alert(`Ticket Bought at ${econSeatPrice}!`);
//         econNumberSeats = econNumberSeats-1;
//         display(`There are ${econNumberSeats} seat left and ticket price is \$${econSeatPrice}`)
//     } else if (econNumberSeats === 1) {
//         console.log(econNumberSeats);
//         econSeatPrice = 91000;
//         console.log(econSeatPrice);
//         display(`There are ${econNumberSeats} seat left and ticket price is \$${econSeatPrice}`);
//     } else if (econNumberSeats === 0) {
//         console.log(econNumberSeats);
//         console.log(econSeatPrice);
//         display(`Sorry Economy Class tickets sold out!`);
//     } else if (econNumberSeats <8) {
//         console.log(econNumberSeats);
//         econSeatPrice = econSeatPrice + (50*0.05);
//         console.log(econSeatPrice);
//         console.log(econNumberSeats);
//         display(`There are ${econNumberSeats} seats left and ticket price is \$${econSeatPrice}`);
//     } else {
//          console.log(econNumberSeats);
//         console.log(econSeatPrice);
//         econSeatPrice = econSeatPrice + (50*0.03);
//         console.log(econSeatPrice);
//         display(`There are ${econNumberSeats} seats left and ticket price is \$${econSeatPrice}`);
//     }
// }