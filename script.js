console.log("hello script js");

var seats = 10;
var seatPrice = 50;

var inputHappened = function(currentInput){
  console.log( currentInput );
  var value = currentInput.trim();

  if (value) {
    if (seats <= 0) {
      return "Sold Out!"
    } else {
      while (seats > 0) {
        seatPrice *= 1.05;
        var output = "Seats left: " + (seats - 1)+ " price: " + seatPrice;
        console.log(output)
        seats--
        break;
      }
      console.log(seats)
      return output;
    }
  } else {
    return "You key nothing!"
  }
};

// function name(name) {
//   console.log("Hello " + name)
// };





//check if there is any input
//if there is no input, code will print "you key nothing!"
//if there is input, code will check if seats is lesser or equal to 0, it will return "sold out"
// if the seat is more than 0, code will run the while loop and return the output of the while loop



// for (seats = 9; 0 < seats; seats--) {
//   seatPrice *= 1.05;
//   var output = "Seats left: " + seats + " price: " + seatPrice;
//   console.log(output)
// }

// while (seats > 0) {
//   seatPrice *= 1.05;
//   var output = "Seats left: " + seats + " price: " + seatPrice;
//   console.log(output)
//   seats--
// }

// Total seats = 10
// Price of each seat = $50
// Every time the total seat is decreased by 1, the price of each ticket goes up by 5%
// Every time a seat is purchased, the updated price of the seat would be shown to the user

// Let totalSeats be x
// let seatPrice be $50
// let updated seatPrice be 

// totalSeat - 1 , updateadSeatPrice = ((5% * $50)+50)

// console.log (seatPrice)