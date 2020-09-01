console.log("hello script js");

var seatSold = 0;
var seatCost = 50;

var calculatePrice = function(percent, seatSold){
    var price = seatCost + (seatCost * (seatSold * percent));
    return Math.round(price * 100) / 100;
}

var seatDetails = function(){
    var output;
    if(seatSold < 10){
        seatCost = calculatePrice(0.05, seatSold);
                seatSold++;
        output = "Price of seat is $" + seatCost;
    }else{
        output = "Ticket sold out"
    }
    return output;
}

var inputHappened = function(currentInput){
  console.log( currentInput );
  return seatDetails();
};