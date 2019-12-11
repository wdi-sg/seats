console.log("hello script js");
var seats = 0;
var initPrice = 50;
var maxSeats1 = 5; //3%
var maxSeats2 = 9; //5%
var maxSeats3 = 10; //$91000
var priceIncMult1 = 0.03
var priceIncMult2 = 0.05
var price3 = 91000
var price = initPrice/(1+priceIncMult1);

var roundDec = function (x,decPlace) {
	e = Math.pow(10,decPlace);
	var rounded = Math.round(e*Number.parseFloat(x))/e;
	console.log(rounded);
	return rounded;
};

var inputHappened = function(currentInput){
	seats++;
	if(seats <= maxSeats1) {
  		priceDec = price * (1+priceIncMult1);
  		price = roundDec(priceDec,2);
  		return "Your seat costs $" + price;
  	} else if (seats <= maxSeats2) {
  		priceDec = price * (1+priceIncMult2);
  		price = roundDec(priceDec,2);
  		return "Your seat costs $" + price;
  	} else if (seats <= maxSeats3) {
  		price = price3;
  		return "Your seat costs $" + price;
  	} else {
  	return "No seats left";
  }
};
