console.log("hello script js");

//PART 1 OF HOMEWORK
// var ticketPrice = 50;
// var incrementPrice = 0.05 * 50;
// var planeSeats = 10;


// var inputHappened = function(currentInput){
//   console.log( currentInput );

//   if (planeSeats === 10){
//     planeSeats --;
//     return `Your plane ticket costs $${ticketPrice.toFixed(2)}`
//   } else {
//    ticketPrice = ticketPrice + incrementPrice;
//     planeSeats --;

//         if (planeSeats < 0){
//             alert ("TOO BAD NO MORE SEATS");
//         }
//     console.log(ticketPrice);
//     return `Your plane ticket costs $${ticketPrice.toFixed(2)}`;
//     }
// };

//PART 2 OF HOMEWORK
var ticketPrice = 50;
var threeIncrement = 0.03 * 50;
var fiveIncrement = 0.05 * 50;
var planeSeats = 1;


var inputHappened = function(currentInput){

 console.log(ticketPrice);
    console.log(planeSeats);
      if (planeSeats > 10) {
    alert ("TOO BAD NO MORE SEATS");
    }

       if (planeSeats === 1){
        planeSeats++;

    }
    else if (planeSeats <= 5){
       ticketPrice = ticketPrice + threeIncrement;
        planeSeats++;

    }
    else if (planeSeats <= 9){
        ticketPrice = ticketPrice + fiveIncrement;
        planeSeats++;

    }
    else if (planeSeats === 10){
    ticketPrice = 91000;
    planeSeats++
    return `Your plane ticket costs $${ticketPrice}...have you considered walking?`
    };

    return `Your plane ticket costs $${ticketPrice}`;

    console.log(ticketPrice);
    console.log(planeSeats);
    ;
}