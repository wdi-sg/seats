console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };

//inputHappened is seat purchase
let seatAvalibility = 10;
let priceOfSeat = 50;

var inputHappened = function(currentInput){

	console.log("Your seats cost $"+priceOfSeat+" ");

	if (seatAvalibility > 5){

		seatAvalibility -= 1;
		priceOfSeat = priceOfSeat*1.03;
		console.log(seatAvalibility+" Seats Left");
		console.log("Price of next seat is $"+priceOfSeat);
		display(seatAvalibility+" Seats Left");
		display("Price of next seat is $"+priceOfSeat);
		
	}

	else if (seatAvalibility >= 5 && seatAvalibility > 0){
		seatAvalibility += 1;
		priceOfSeat = (priceOfSeat*1.05);
		console.log(seatAvalibility+" Seats Left");
		console.log("Price of next seat is $"+priceOfSeat);
		display(seatAvalibility+" Seats Left");
		display("Price of next seat is $"+priceOfSeat);

	}

	else if (seatAvalibility === 0){

		priceOfSeat = 91000;
		console.log(seatAvalibility+" Seats Left");
		console.log("Price of next seat is $"+priceOfSeat);
				
		display("Price of next seat is $"+priceOfSeat);
	}

	else if (seatAvalibility < 0){
		
		display("There are no seats left");
	}

	else {
		console.log("Youre purchase is cancelled");
		display("Price of next seat is $"+priceOfSeat)

	}
};