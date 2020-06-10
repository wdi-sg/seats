console.log("hello script js");

let seats = 10; //total number of seats
let price = 50; //price of each seats


function inputHappened(currentInput){
  console.log(currentInput);
  if (currentInput != ""){
    if(seats < 10 && seats > 0){
        seats--;
        price = price * 1.05;
    } else if (seats == 10){
        seats--;
    }
    return "You have bought a seat, the price of your seat is $" + price +".";
  }
};