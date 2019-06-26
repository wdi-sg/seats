console.log("hello script js");

var availableEconSeats = 15;
var seatsEconLeft = 15;
var seatPrice = 50;
let message;

var availableFirstSeats = 4;
var seatsFirstLeft = 4;



var inputHappened = function(currentInput){
var input = currentInput;
// for (seats=10; seats!= 0; seats--){



switch (input){
    case 'buy first class':
        if (seatsFirstLeft != 0){
    console.log(input);
    if (seatsFirstLeft === availableFirstSeats){
        message = ``;
    }
    if (seatsFirstLeft<availableFirstSeats){
        seatPrice = seatPrice + (seatPrice * (15/100));
        message = `Price will increase by 15%.`
        if (seatsFirstLeft === 2){
            message = `The last seat price will be special..`}
    }
    if (seatsFirstLeft===1){
        seatPrice = 191000;
        message = `Told you it's special..`
    }
    seatsFirstLeft = seatsFirstLeft - 1;
    let output = `Your ticket price is $${seatPrice.toFixed(2)}. There are ${seatsFirstLeft} First Class seat(s) left. ${message}` ;
    display(output);
}  else if (input != 'buy'){
    let output = `Please enter the word "buy".`
    display(output);
} else {
    let output = `Seats sold out`;
    display(output);
}
        break;


    case 'buy economy class':
        if (seatsEconLeft != 0){
    console.log(input);
    if (seatsEconLeft === availableEconSeats){
        message = ``;
    }
    if (seatsEconLeft<availableEconSeats && seatsEconLeft>Math.floor(availableEconSeats/2)){
        seatPrice = seatPrice + (seatPrice * (3/100));
        if (seatsEconLeft === (Math.floor(availableEconSeats/2)+1)){
            message = `Price will increase by 5%.`}
        else {message = `Price will increase by 3%.`}
    }
    if (seatsEconLeft<=Math.floor(availableEconSeats/2)){
        seatPrice = seatPrice + (seatPrice * (5/100));
        if (seatsEconLeft === 2){
            message = `The last seat price will be special..`}
    }
    if (seatsEconLeft===1){
        seatPrice = 91000;
        message = `Told you it's special..`
    }
    seatsEconLeft = seatsEconLeft - 1;
    let output = `Your ticket price is $${seatPrice.toFixed(2)}. There are ${seatsEconLeft} Economy seat(s) left. ${message}` ;
    display(output);
}  else if (input != 'buy'){
    let output = `Please enter the word "buy".`
    display(output);
} else {
    let output = `Seats sold out`;
    display(output);
}

        break;




    case 'buy business class':
        console.log('business');
        break;




    default:
        console.log(`u didn't type properly`);
}



















}







// console.log("hello script js");

// var availableSeats = 10;
// var seatsLeft = 10;
// var seatPrice = 50;
// let message;

// var inputHappened = function(currentInput){
// var input = currentInput;
// console.log(input);
// // for (seats=10; seats!= 0; seats--){


// if (input === "buy" && seatsLeft != 0){
//     console.log(input);
//     if (seatsLeft === availableSeats){
//         message = ``;
//     }
//     if (seatsLeft<availableSeats && seatsLeft>(availableSeats/2)){
//         seatPrice = seatPrice + (seatPrice * (3/100));
//         if (seatsLeft === ((availableSeats/2)+1)){
//             message = `Price will increase by 5%.`}
//         else {message = `Price will increase by 3%.`}
//     }
//     if (seatsLeft<=(availableSeats/2)){
//         seatPrice = seatPrice + (seatPrice * (5/100));
//         if (seatsLeft === 2){
//             message = `The last seat price will be special..`}
//     }
//     if (seatsLeft===1){
//         seatPrice = 91000;
//         message = `Told you it's special..`
//     }
//     seatsLeft = seatsLeft - 1;
//     let output = `Your ticket price is $${seatPrice.toFixed(2)}. There are ${seatsLeft} seat(s) left. ${message}` ;
//     display(output);
// }  else if (input != 'buy'){
//     let output = `Please enter the word "buy".`
//     display(output);
// } else {
//     let output = `Seats sold out`;
//     display(output);
// }
// }