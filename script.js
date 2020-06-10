console.log("hello script js");

const seatCapacity = 10;
const lastSeatPrice = 91000;
var seatsLeft = seatCapacity;
var currSeatPrice = 50;
var seatsLeftTillNextBracket=seatCapacity*0.5;;

//function implements a seat sale
//updates the latest price, updates seatsleft
var seatSale = function(){
    //update seats left
    seatsLeft -= 1;
    //update seatsLeftTillNextBracket
    updateSeatsLeftTillNextBracket();
    document.querySelector("#msg").innerText = "Seats left till next bracket: "+seatsLeftTillNextBracket
    var sellingPrice = currSeatPrice;
    //update current seat price - 5% over previous price
    updatePrice();
    //output price of the seat solde
    if(seatsLeft<0){
        return "no seats left";
    }
    else {
        return sellingPrice;
    }
}

//update price based on boss requirement
var updatePrice = function(){

    console.log("seatsLeft: " + seatsLeft);
    console.log("oldSeatPrice: " + currSeatPrice);
    //last seat
    if(seatsLeft==1){
        currSeatPrice = lastSeatPrice;
    }
    //second half of the plane
    else if(seatsLeft/seatCapacity <=0.5){
        currSeatPrice *= 1.05;
    }
    //first half of plane
    else {
        currSeatPrice *= 1.03;
    }
    console.log("currSeatPrice: " + currSeatPrice);
}

//function updates the global variable seatsleft till next bracket
var updateSeatsLeftTillNextBracket = function(){
    if (seatsLeft > seatCapacity*0.5){
        seatsLeftTillNextBracket=seatsLeft - seatCapacity*0.5;
    }
    else if (seatsLeft <= seatCapacity*0.5) {
        seatsLeftTillNextBracket=seatsLeft - 1;
    }
    if (seatsLeft<=0){
            seatsLeftTillNextBracket=0;
    }
    console.log("seatsLeftTillNextBracket:" + seatsLeftTillNextBracket);
}

//validate inputs
//allowable inputs
//only text
//only buy first class, buy business class, buy economy class
var isInputValid = function(input){
    var allowableInputs = [
    'BUY FIRST CLASS'
    ,'BUY BUSINESS CLASS'
    ,'BUY ECONOMY CLASS'
    ];
    return allowableInputs.includes(input.toUpperCase());
}


//Event listeners
document.querySelector('#input').addEventListener('change', function(event){
        var currentInput = event.target.value;
        var result = inputHappened(currentInput);
        display( result );
      });

      var display = function( data ){
        var output = document.querySelector('#output');
        output.innerText = data;
      }

var inputHappened = function(currentInput){
  // console.log( currentInput );
  if (isInputValid(currentInput)==false){
    console.log("is input valid: " + isInputValid(currentInput));
    return "";
  }
  return seatSale();;
};