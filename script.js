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
	if(ticket.noOfSeats === 10){
		console.log( currentInput );
		var tixPrice = "Ticket is $ " + ticket.basePrice;
		display(tixPrice);
		return "Price is: $ " + tixPrice + " seats left are : " + result;
}	else if(ticket.noOfSeats < 10 && ticket.noOfSeats >5){
		console.log(result);
		var tierChange = result - 5;
		priceUp1 = 1.03;
		var tixPrice = ticket.basePrice * priceUp1;
		display(tixPrice);
  	 	return "Price is: $ " + tixPrice + "\n Seats left are : " + result + "\n" + "No. of ticket before price increases!: " + tierChange;
}	else if(ticket.noOfSeats <= 5 && ticket.noOfSeats >=2){
		console.log(result);
		priceUp = 1.05;
		var tixPrice = ticket.basePrice * priceUp;
		display(tixPrice);
  	 	return "Price is: $ " + tixPrice + "\n Seats left are : " + result;
}
	else if(ticket.noOfSeats === 1){
		alert("THIS IS THE LAST TICKET!!")
		var tixPrice = 91000;
		display(tixPrice);
  	 	return "Price is: $ " + tixPrice + "\n Seats left are : " + result;
}
	return "We are all outta tickets! SOLD OUT"
};