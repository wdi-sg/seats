
// --------------- WORKING CALCULATOR ------------------------

// console.log("hello script js");

// let count = 0;
// let total = 0;
// let operation = '';

// // Main function
// let inputHappened = (userInput) => {

//     if (count===0) {
//         let parsedInput = parseInt(userInput);
//         total = total + parsedInput;
//     } else if (count%2 === 0 ){
//         if (operation === 'm'){
//             let parsedInput = parseInt(userInput);
//             multiply(parsedInput);
//         } else if (operation === 's'){
//             let parsedInput = parseInt(userInput);
//             subtract(parsedInput);
//         } else if (operation === 'd'){
//             let parsedInput = parseInt(userInput);
//             divide(parsedInput);
//         }
//     } else if (count%2 != 0) {
//         if (userInput === 'm'){
//             operation = 'm';
//         } else if(userInput === 's'){
//             operation = 's';
//         } else if(userInput === 'd'){
//             operation = 'd';
//         }
//     }

//     count +=1;
//     console.log(count);
//     console.log(total);
//     console.log(operation);
//     display(total);
// }

// // Operations to add to total
// let multiply = (parsedInput) => {
//     total = total*parsedInput;
// }
// let subtract = (parsedInput) => {
//     total = total-parsedInput;
// }
// let divide = (parsedInput) => {
//     total = total/parsedInput;
// }
// let add = (parsedInput) => {
//     total = total+parsedInput;
// }

// ADDITIONAL TASKS - IF USER INPUTS NOT A NUMBER, PLEASE ASK THEM TO DECLARE OTHERWISE


let seat = 1;
let price = 50;

var inputHappened = function(currentInput){

    if (currentInput === 'buy'){
        if (seat === 1) {
            console.log(`seat 1: ${seat}`)
            display(`There are ${10 - seat} seats left! The current seat is sold for ${price}.`)
        } else if (seat > 1 && seat <= 5) {
            price = price * 1.03;
            display(`There are ${10 - seat} seats left! The current seat is sold for ${price}.`)
        } else if (seat > 5 && seat < 10) {
            price = price * 1.05;
            display(`There are ${10 - seat} seats left! The current seat is sold for ${price}.`)
        } else if (seat === 10) {
            price = "$91,000";
            display(`This is the last seat! You bought it for an astonishing $${price}!`)
        } else {
            display("Sorry, no seats left!")
        }
        seat = seat + 1;
    } else {
        console.log('Your input is wrong!')
    }
    console.log(seat);
    console.log(price);
};