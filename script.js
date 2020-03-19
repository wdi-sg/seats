console.log("hello script js");
var seatCounter = 0;
var businessClassSeatCounter = 0;
var firstClassSeatCounter = 0;
var economySeat = 15;
var businessClassSeat = 6;
var firstClassSeat = 4;
var normalPrice = 50;
var businessClassPrice = 50;
var firstClassPrice = 50;
var economyClassPrice = 50;


var inputHappened = function(currentInput){
    if(currentInput !== "buy first class" && currentInput !== "buy economy class" && currentInput !== "buy business class"){
        return "Invalid input.";
    }else{
        if(currentInput === "buy economy class"){
          seatCounter = seatCounter + 1;
        if(seatCounter < 7){
          economyClassPrice = Math.floor(economyClassPrice + (economyClassPrice / 100 * (3 * seatCounter)));
          return `Price: $${economyClassPrice}, ${economySeat - seatCounter} seats left.`;
        }else if(seatCounter > 6 && seatCounter < 15){
          economyClassPrice = Math.floor(economyClassPrice + (economyClassPrice / 100 * (5 * seatCounter)));
          return `Price: $${economyClassPrice}, ${economySeat - seatCounter} seats left.`;
        }else if(seatCounter === 15){
          economyClassPrice = 91000;
          return `Price: $${economyClassPrice}, ${economySeat - seatCounter} seat left.`;
        }else {
          return `Seat sold out.`;
        }
      }

      if(currentInput === "buy business class"){
          businessClassSeatCounter = businessClassSeatCounter + 1;
        if(businessClassSeatCounter < 4){
          businessClassPrice = Math.floor(businessClassPrice + (businessClassPrice / 100 * (6 * businessClassSeatCounter)));
          return `Price: $${businessClassPrice}, ${businessClassSeat - businessClassSeatCounter} seats left.`;
        }else if(businessClassSeatCounter > 3 && businessClassSeatCounter < 6){
          businessClassPrice = Math.floor(businessClassPrice + (businessClassPrice / 100 * (10 * businessClassSeatCounter)));
          return `Price: $${businessClassPrice}, ${businessClassSeat - businessClassSeatCounter} seats left.`;
        }else if(businessClassSeatCounter === 6){
          businessClassPricerice = 91000;
          return `Price: $${businessClassPrice}, ${businessClassSeat - businessClassSeatCounter} seat left.`;
        }else {
          return `Seat sold out.`;
        }
      }

      if(currentInput === "buy first class"){
          firstClassSeatCounter = firstClassSeatCounter + 1;
        if(firstClassSeatCounter < 4){
          firstClassPrice = Math.floor(firstClassPrice + (firstClassPrice / 100 * (15 * firstClassSeatCounter)));
          return `Price: $${firstClassPrice}, ${firstClassSeat - firstClassSeatCounter} seats left.`;
        }else if(firstClassSeatCounter === 4){
          firstClassPrice = 191000;
          return `Price: $${firstClassPrice}, ${firstClassSeat - firstClassSeatCounter} seat left.`;
        }else {
          return `Seat sold out.`;
        }
      }
    }
};