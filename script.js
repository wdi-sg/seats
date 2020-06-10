console.log("hello script js");

let seatsAvailable = 10;
let priceSeats = 50;

var inputHappened = function(currentInput){
  console.log( currentInput );
  return customerPrice(currentInput);
};

function customerPrice(currentInput){
  if (currentInput !== ""){
    while(seatsAvailable > 0) {
      if (seatsAvailable == 10){
      priceSeats = priceSeats * 1;
        var result = "You've purchased a ticket for " + priceSeats + " and there are " + seatsAvailable + " seats left.";
        console.log(result);
      }else{
        priceSeats = priceSeats * 1.05;
        priceSeats = priceSeats.toFixed(2);
        var result = "You've purchased a ticket for $" + priceSeats + " and there are " + seatsAvailable + " seats left.";
        console.log(result);
  }
  seatsAvailable--;
  return result;
}
}
  else if (currentInput == ""){
    var waiting = "Please enter the value above to know your price and the number of seats left."
    console.log(waiting);
    return waiting;
  }
}