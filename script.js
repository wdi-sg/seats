console.log("hello script js");

var ticketPrice = 50;
var incrementPrice = 0.05 * 50;
var planeSeats = 10;

// function ticketCalculate(){

//     ticketPrice = ticketPrice + incrementPrice;
//     planeSeats -=;

//         if (planeSeats === 0){
//             alert ("TOO BAD NO MORE SEATS");
//         }
//     return `Your plane ticket costs ${ticketPrice}`;

// }

var inputHappened = function(currentInput){
  console.log( currentInput );

  if (planeSeats === 10){
    planeSeats --;
    return `Your plane ticket costs $${ticketPrice.toFixed(2)}`
  } else {
   ticketPrice = ticketPrice + incrementPrice;
    planeSeats --;

        if (planeSeats < 0){
            alert ("TOO BAD NO MORE SEATS");
        }
    console.log(ticketPrice);
    return `Your plane ticket costs $${ticketPrice.toFixed(2)}`;
    }
};