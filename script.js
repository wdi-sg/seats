console.log("hello script js");

var ticket = {
noOfSeats: 10,
basePrice: 50
};
var seatsLeft = function(a, b){ 
	var sub = a - b;
	console.log('hi');
	return sub;
};

var inputHappened = function(currentInput){
	var result = seatsLeft(ticket.noOfSeats, 1);
	 	ticket.noOfSeats = result;
		priceUp = 1.05;
		var tixPrice = ticket.basePrice * priceUp;
		display(tixPrice);
  	 	return "Price is: $ " + tixPrice + " & seats left are : " + result;
};