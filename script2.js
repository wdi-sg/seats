console.log("hello script js");


// var totalSeats = 10;
// var baseSeatPrice = 50;
// var seatsFilled = 0;
// var currentSeatPrice;
// var firstHalfpriceIncrease = 0.03*50;
// var secHalfpriceIncrease = 0.05*50;
// var lastSeat = $91,000;

// var inputHappened = function(currentInput){

//     if (seatsFilled > 10){
//         return "Tickets Sold Out - The plane is full.";

//     } else if (seatsFilled <= 5){
//         currentSeatPrice = baseSeatPrice + (seatsFilled * firstHalfpriceIncrease);
//         seatsFilled = seatsFilled + 1;
//         console.log( currentInput );
//         return "Please pay $" + currentSeatPrice + "!";

//     } else if (seatsFilled > 5 && seatsFilled <= 9){
//         currentSeatPrice = baseSeatPrice + (seatsFilled * secHalfpriceIncrease);
//         seatsFilled = seatsFilled + 1;
//         console.log( currentInput );
//         return "Please pay $" + currentSeatPrice + "!";

//     } else {
//         return "Last Seat! Please Pay $" + lastSeat ".";
//     }

var totalSeats = 10;
var baseSeatPrice = 50;
var seatsFilled = 0;
var currentSeatPrice;
var firstHalfpriceIncrease = 1.5;
var secHalfpriceIncrease = 2.5;
var lastSeat = 91000;

var inputHappened = function(currentInput){

    // if (seatsFilled > 10){
    //     return "Tickets Sold Out - The plane is full.";

    // }
    // else
    if (seatsFilled === 0){
      seatsFilled++;
      return "Please pay $" + baseSeatPrice + "!";
    }
     else if (seatsFilled <=4){
        baseSeatPrice = baseSeatPrice + firstHalfpriceIncrease;
        seatsFilled++;
        console.log( currentInput );
        return "Please pay $" + baseSeatPrice + "!";

    } else if (seatsFilled >=5 && seatsFilled < 10){
        baseSeatPrice = baseSeatPrice + secHalfpriceIncrease;
        seatsFilled++;
        console.log( currentInput )
        return "Please pay $" + baseSeatPrice + "!";

    } else if  (seatsFilled >= 10){
        seatsFilled++;
        return "Last Seat! Please Pay $" + lastSeat + ".";
console.log(seatsFilled);
    }

  }


