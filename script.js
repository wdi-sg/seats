console.log("hello script js");

var seatsLeft = 10;
var seatPrice;

var seatSold = function(){
  //first seat functionality
  if (seatsLeft === 10){
    seatPrice = 50;
    firstSeat = false;
  }

  //first half functionality
  if (seatsLeft < 10 && seatsLeft > 5){
    seatPrice = seatPrice * 1.03;
  }

  //second half functionality
  if (seatsLeft > 1 && seatsLeft <=5){
    seatPrice = seatPrice * 1.05;
  }

  //last seat functionality
  if (seatsLeft === 1){
    seatPrice = "91,000"
  }

  seatsLeft--;

}

var inputHappened = function(currentInput){
  //console.log( currentInput );
  var output;

  seatSold();
  console.log(seatsLeft);
  if (seatsLeft === 9 || seatsLeft === 5 || seatsLeft === 1){
    output =  `Your seat was purchased for $${seatPrice}. There are ${seatsLeft} seats left. The next seat will be more expensive`;
  } else {
    output =  `Your seat was purchased for $${seatPrice}`;
  }

  return output;
};