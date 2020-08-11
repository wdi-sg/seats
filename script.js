

var cabinObj = {
                seats:[15,6,4],
                price:[50,50,50],
                }

var planeObj = {
                seats:10,
                price:50,
                }

var destination;
var status;

var inputHappened = function(currentInput){

if (currentInput !== "KL" && currentInput !== "Bali" && currentInput !== "buy" && currentInput !== "cancel" && currentInput !== "economy" && currentInput !== "business" && currentInput !== "first"){
    return "Please key in either Bali or KL as destinations. case sensitive! Or if your destination is chosen, please enter buy or cancel"
}

if(currentInput === "KL"){
    destination = "KL";
    return `Price of Ticket is ${planeObj.price}, ${planeObj.seats} seats left. Do you want to buy or cancel? Please enter your response`
}

if(destination == "KL" && currentInput == "cancel"){
return "your transaction has been canceled successfully!"
}

if(destination == "KL" && currentInput == "buy"){

    planeObj.seats--

var yourPrice = planeObj.price;
var output="";

if(planeObj.seats <= 9 && planeObj.seats > 5){
    planeObj.price = planeObj.price * 1.03;
    var remainingSeats = planeObj.seats - 5;
    output = `Congrats you purchased the ticket at $ ${yourPrice}`;
}

if(planeObj.seats <= 5){
    planeObj.price = planeObj.price * 1.05;
    var remainingSeats = planeObj.seats - 1;
    output = `Congrats you purchased the ticket at $ ${yourPrice}`;
}

if(planeObj.seats === 1){
    planeObj.price = 91000;
    output = `Congrats you purchased the ticket at $91 000!`
}

return output + ` Number of seats left: ${planeObj.seats}`;

};


if(currentInput === "Bali"){
    destination = "Bali";
    return `Price of Ticket is ${cabinObj.price[0]} for economy (${cabinObj.seats[0]} seats left), ${cabinObj.price[1]} for business (${cabinObj.seats[1]} seats left), and ${cabinObj.price[2]} for first class (${cabinObj.seats[2]} seats left). Do you want to buy or cancel? Please enter your response`
}

if (destination === "Bali" && currentInput === "buy"){
    status = "buy"
    return "Please select the type of seat";
}

if (currentInput === "cancel"){
    return "Your transaction has been canceled successfully";
}


if (status === "buy" && destination == "Bali"){
    if(currentInput === "economy"){
    var yourPrice = cabinObj.price[0];
    cabinObj.seats[0]--;
    var output = "";


if(cabinObj.seats[0] <= 14 && cabinObj.seats[0] > 7){
    cabinObj.price[0] = cabinObj.price[0] * 1.03;
    var remainingSeats = cabinObj.seats[0] - 7;
    output = `Hurry up, ${remainingSeats} seats left before it gets more expensive! Your Purchase Price is ${yourPrice}
    Next Price is ${cabinObj.price[0]}`
}

if(cabinObj.seats[0] <= 7 && cabinObj.seats[0] > 1){
    cabinObj.price[0] = cabinObj.price[0] * 1.05;
    var remainingSeats = cabinObj.seats[0] - 1;
    output = `Hurry up, ${remainingSeats} seats left before it gets really expensive! Your Purchase Price is ${yourPrice}
    Next Price is ${cabinObj.price[0]}`
}

if(cabinObj.seats[0] === 1){
    cabinObj.price[0] = 91000;
    output = `Sorry, last seat left. The price is $91 000!`
}


if(cabinObj.seats[0] === 0){
    output = "Sorry all seats sold out!"
}


}

if(currentInput === "business"){
    var yourPrice = cabinObj.price[1];
    cabinObj.seats[1]--;
    var output = "";


if(cabinObj.seats[1] <= 5 && cabinObj.seats[1] > 3){
    cabinObj.price[1] = cabinObj.price[1] * 1.06;
    var remainingSeats = cabinObj.seats[1] - 3;
    output = `Hurry up, ${remainingSeats} seats left before it gets more expensive! Your Purchase Price is ${yourPrice}
    Next Price is ${cabinObj.price[1]}`
}

if(cabinObj.seats[1] <= 3 && cabinObj.seats[1] > 1){
    cabinObj.price[1] = cabinObj.price[1] * 1.1;
    var remainingSeats = cabinObj.seats[1] - 1;
    output = `Hurry up, ${remainingSeats} seats left before it gets really expensive! Your Purchase Price is ${yourPrice}
    Next Price is ${cabinObj.price[1]}`
}

if(cabinObj.seats[1] === 1){
    cabinObj.price[1] = 91000;
    output = `Sorry, last seat left. The price is $91 000!`
}

if(cabinObj.seats[1] === 0){
    output = "Sorry all seats sold out!"
}

}

if(currentInput === "first"){
    var yourPrice = cabinObj.price[2];
    cabinObj.seats[2]--;
    var output = "";


if(cabinObj.seats[2] <= 3 && cabinObj.seats[2] > 1){
    cabinObj.price[2] = cabinObj.price[2] * 1.15;
    var remainingSeats = cabinObj.seats[2] - 1;
    output = `Hurry up, ${remainingSeats} seats left before it gets more expensive! Your Purchase Price is ${yourPrice}
    Next Price is ${cabinObj.price[2]}`
}


if(cabinObj.seats[2] === 1){
    cabinObj.price[2] = 191000;
    output = `Sorry, last seat left. The price is $191 000!`
}

if(cabinObj.seats[2] === 0){
    output = "Sorry all seats sold out!"
}

}


return output;

};



}






// Part  5
// var cabinObj = {
//                 seats:[15,6,4],
//                 price:[50,50,50],
//                 }


// var inputHappened = function(currentInput){


// var tier = currentInput.split(" ")[1];

// if(currentInput !== "buy first class" && currentInput !== "buy business class" && currentInput !== "buy economy class"){
//     return "Sir/Mdm, please enter the right ticket class in the right format."
// }



// if(tier === "economy"){
//     var yourPrice = cabinObj.price[0];
//     cabinObj.seats[0]--;
//     var output = "";


// if(cabinObj.seats[0] <= 14 && cabinObj.seats[0] > 7){
//     cabinObj.price[0] = cabinObj.price[0] * 1.03;
//     var remainingSeats = cabinObj.seats[0] - 7;
//     output = `Hurry up, ${remainingSeats} seats left before it gets more expensive! Your Purchase Price is ${yourPrice}
//     Next Price is ${cabinObj.price[0]}`
// }

// if(cabinObj.seats[0] <= 7 && cabinObj.seats[0] > 1){
//     cabinObj.price[0] = cabinObj.price[0] * 1.05;
//     var remainingSeats = cabinObj.seats[0] - 1;
//     output = `Hurry up, ${remainingSeats} seats left before it gets really expensive! Your Purchase Price is ${yourPrice}
//     Next Price is ${cabinObj.price[0]}`
// }

// if(cabinObj.seats[0] === 1){
//     cabinObj.price[0] = 91000;
//     output = `Sorry, last seat left. The price is $91 000!`
// }


// if(cabinObj.seats[0] === 0){
//     output = "Sorry all seats sold out!"
// }


// }

// if(tier === "business"){
//     var yourPrice = cabinObj.price[1];
//     cabinObj.seats[1]--;
//     var output = "";


// if(cabinObj.seats[1] <= 5 && cabinObj.seats[1] > 3){
//     cabinObj.price[1] = cabinObj.price[1] * 1.06;
//     var remainingSeats = cabinObj.seats[1] - 3;
//     output = `Hurry up, ${remainingSeats} seats left before it gets more expensive! Your Purchase Price is ${yourPrice}
//     Next Price is ${cabinObj.price[1]}`
// }

// if(cabinObj.seats[1] <= 3 && cabinObj.seats[1] > 1){
//     cabinObj.price[1] = cabinObj.price[1] * 1.1;
//     var remainingSeats = cabinObj.seats[1] - 1;
//     output = `Hurry up, ${remainingSeats} seats left before it gets really expensive! Your Purchase Price is ${yourPrice}
//     Next Price is ${cabinObj.price[1]}`
// }

// if(cabinObj.seats[1] === 1){
//     cabinObj.price[1] = 91000;
//     output = `Sorry, last seat left. The price is $91 000!`
// }

// if(cabinObj.seats[1] === 0){
//     output = "Sorry all seats sold out!"
// }

// }

// if(tier === "first"){
//     var yourPrice = cabinObj.price[2];
//     cabinObj.seats[2]--;
//     var output = "";


// if(cabinObj.seats[2] <= 3 && cabinObj.seats[2] > 1){
//     cabinObj.price[2] = cabinObj.price[2] * 1.15;
//     var remainingSeats = cabinObj.seats[2] - 1;
//     output = `Hurry up, ${remainingSeats} seats left before it gets more expensive! Your Purchase Price is ${yourPrice}
//     Next Price is ${cabinObj.price[2]}`
// }


// if(cabinObj.seats[2] === 1){
//     cabinObj.price[2] = 191000;
//     output = `Sorry, last seat left. The price is $191 000!`
// }

// if(cabinObj.seats[2] === 0){
//     output = "Sorry all seats sold out!"
// }

// }


// return output;

// };


//Part 4
// var planeObj = {
//                 seats:10,
//                 price:50,
//                 users:[],
//                 }


// var inputHappened = function(currentInput){

// if(!isNaN(parseInt(currentInput)) || currentInput === " " ||currentInput.length<=0){
//     return "Sir/Mdm please key in a valid name"
// }

// planeObj.users.push(currentInput);
// planeObj.seats--

// var yourPrice = planeObj.price;
// var output=""

// if(planeObj.seats <= 9 && planeObj.seats > 5){
//     planeObj.price = planeObj.price * 1.03;
//     var remainingSeats = planeObj.seats - 5;
//     output = `Hurry up, ${planeObj.users[planeObj.users.length-1]}, ${remainingSeats} seats left before it gets more expensive!`
// }

// if(planeObj.seats <= 5){
//     planeObj.price = planeObj.price * 1.05;
//     var remainingSeats = planeObj.seats - 1;
//     output = `Hurry up, ${planeObj.users[planeObj.users.length-1]}, ${remainingSeats} seats left before it gets really expensive!`
// }

// if(planeObj.seats === 1){
//     planeObj.price = 91000;
//     output = `Sorry, ${planeObj.users[planeObj.users.length-1]}, last seat left. The price is $91 000!`
// }

// return output;

// };
