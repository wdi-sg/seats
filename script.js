console.log("hello script js");
var seatCounter = 0;
var seat = 10;
var normalPrice = 50;
var price = 50;
var secondSeatCounter = 0;

var inputHappened = function(currentInput){
  seatCounter = seatCounter + 1;
    if (seatCounter === 1){
        price = price + (normalPrice / 100 * (3 * seatCounter));
        return `Price: $${price}, ${seat - seatCounter} seats left.`;
    }else if(seatCounter < 6){
        price = price + (price / 100 * (3 * seatCounter));
        return `Price: $${price}, ${seat - seatCounter} seats left.`;
    }else if(seatCounter > 5 && seatCounter < 10){
        price = price + (price / 100 * (5 * seatCounter));
        return `Price: $${price}, ${seat - seatCounter} seats left.`;
    }else if(seatCounter === 10){
        price = 91000;
        return `Price: $${price}, ${seat - seatCounter} seat left.`;
    }else {
      return `Seat sold out.`;
    }
};