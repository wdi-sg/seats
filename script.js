console.log("hello script js");

var availableEconSeats = 15;
var seatsEconLeft = 15;
var seatEconPrice = 50;


var availableFirstSeats = 4;
var seatsFirstLeft = 4;
var seatFirstPrice = 50;

var availableBizSeats = 6;
var seatsBizLeft = 6;
var seatBizPrice = 50;

let message;

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
                seatFirstPrice = 50 + (50 * (15/100));
                message = `Price will increase by 15%.`
                    if (seatsFirstLeft === 2){
                    message = `The last seat price will be special..`}
            }
            if (seatsFirstLeft===1){
            seatFirstPrice = 191000;
            message = `Told you it's special..`
            }
            seatsFirstLeft = seatsFirstLeft - 1;
            let output = `Your ticket price is $${seatFirstPrice.toFixed(2)}. There are ${seatsFirstLeft} First Class seat(s) left. ${message}` ;
            display(output);
        }   else {
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
                seatEconPrice = 50 + (50 * (3/100));
                if (seatsEconLeft === (Math.floor(availableEconSeats/2)+1)){
                    message = `Price will increase by 5%.`}
                else {message = `Price increased by 3%.`}
            }
            if (seatsEconLeft<=Math.floor(availableEconSeats/2)){
                seatEconPrice = 50 + (50 * (5/100));
                if (seatsEconLeft === 2){
                    message = `The last seat price will be special..`}
            }
            if (seatsEconLeft===1){
                seatEconPrice = 91000;
                message = `Told you it's special..`
            }
                seatsEconLeft = seatsEconLeft - 1;
                let output = `Your ticket price is $${seatEconPrice.toFixed(2)}. There are ${seatsEconLeft} Economy seat(s) left. ${message}` ;
                display(output);
        }   else {
            let output = `Seats sold out`;
            display(output);
        }

        break;




    case 'buy business class':
        if (seatsBizLeft != 0){
            console.log(input);
            if (seatsBizLeft === availableBizSeats){
                message = ``;
            }
            if (seatsBizLeft<availableBizSeats && seatsBizLeft>Math.floor(availableBizSeats/2)){
                seatBizPrice = seatBizPrice + (seatBizPrice * (6/100));
                if (seatsBizLeft === (Math.floor(availableBizSeats/2)+1)){
                    message = `Price will increase by 10%.`}
                else {message = `Price will increase by 6%.`}
            }
            if (seatsBizLeft<=Math.floor(availableBizSeats/2)){
                seatBizPrice = seatBizPrice + (seatBizPrice * (10/100));
                if (seatsBizLeft === 2){
                    message = `The last seat price will be special..`}
            }
            if (seatsBizLeft===1){
                seatBizPrice = 91000;
                message = `Told you it's special..`
            }
                seatsBizLeft = seatsBizLeft - 1;
                let output = `Your ticket price is $${seatBizPrice.toFixed(2)}. There are ${seatsBizLeft} Economy seat(s) left. ${message}` ;
                display(output);
        }   else {
            let output = `Seats sold out`;
            display(output);
        }
        break;




    default:
        let output = `Please enter the word "buy" followed by the class of seat.`
            display(output);
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