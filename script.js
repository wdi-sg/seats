console.log("hello script js");
var seats = 0;
var maxSeats = 10;
var initPrice = 50;
var priceIncMult = 0.05
var price = initPrice;
count = 0

var roundDec = function (x,decPlace) {
	e = Math.pow(10,decPlace);
	var rounded = Math.round(e*Number.parseFloat(x))/e;
	console.log(rounded);
	return rounded;
};

var inputHappened = function(currentInput){
	seats++;
	if(seats <= maxSeats) {
  	priceDec = initPrice * Math.pow(1+priceIncMult,count);
  	price = roundDec(priceDec,2);
  	count++;
  	return "Your seat costs $" + price;
  } else {
  	return "No seats left";
  }
};
