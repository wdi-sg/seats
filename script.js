console.log("hello script js");
var seatCounter = 0;
var seat = 10;
var normalPrice = 50;
var price;
var secondSeatCounter = 0;

var inputHappened = function(currentInput){
  seatCounter = seatCounter + 1;
    if (seatCounter < 6){
        price = normalPrice + (normalPrice / 100 * (3 * seatCounter));
        console.log(price);
        return price;
    }else if(seatCounter > 5 && seatCounter < 10){
        price = price + 2.5;
        console.log(price);
        return price;
    }else if(seatCounter === 10){
        price = 91000;
        return price;
    }else {
      return `Seat sold out.`;
    }
};