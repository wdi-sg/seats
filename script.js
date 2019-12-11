console.log("hello script js");


var seats = 10;
var seatPrice = 50;
var store = seatPrice
var firstIncrease = store * 0.03;
var secondIncrease = store * 0.05;



var economySeats = 15;
var economySeatPrice = 50;
var seatsBeforePriceIncrease; 

var storeEconomyStartingPrice = economySeatPrice;
var firstEconomyIncrease = storeEconomyStartingPrice * 0.03;
var secondEconomyIncrease = storeEconomyStartingPrice * 0.05;

var businessSeats = 6;
var businessSeatPrice = 50;
var storeBusinessStartingPrice = businessSeatPrice;
var firstBusinessIncrease = storeBusinessStartingPrice * 0.06;
var secondBusinessIncrease = storeBusinessStartingPrice * 0.10;

var firstSeats = 4;
var firstSeatPrice = 50;
var storeFirstStartingPrice = firstSeatPrice;
var firstPriceIncrease = storeFirstStartingPrice * 0.15;

var plane;
var seatType;

var grandCount = 0

var inputHappened = function(currentInput){
  
  if (typeof(currentInput) == "Number") {
  	return "invalid input, please type a string"
  } else {


  	if(grandCount == 0){
  		//choose Plane;
  		plane = currentInput;
  		grandCount = 1;
  		return plane+" plane chosen. if large plane is chosen, choose economy, business or firstClass. if normal plane is chosen, return any to proceed"
  	} else if(grandCount == 1){
  		if (plane == 'normal'){
  			grandCount = 2;
  			return seatPrice+" buy or cancel";
  		} else if(plane == 'large'){
  			seatType = currentInput
  			grandCount = 2;
  			return "economy: "+economySeatPrice+" business: "+businessSeatPrice+" first: "+firstSeatPrice+" buy or cancel?"
  		}



  	} 
  		//grandCount = 1;
  	
  	if(plane == 'normal'){


 var yourSeatPrice = seatPrice;
  seats--;

  if(seats > 5){
  	seatPrice = seatPrice * 1.03;
  } else if (seats <= 5 && seats > 1){
  	seatPrice = seatPrice * 1.05;
  } else if (seats === 1){
  	seatPrice = 91000;
  }

  if (seats > 5) { 
  		seatsBeforePriceIncrease = Math.max(seats - 5,0);
  	} else {
  		seatsBeforePriceIncrease = Math.max(seats - 1,0);
  	};

grandCount = 0;
return "You bought a seat at "+yourSeatPrice+" dollars. There are "+seats+" seats left. Number of seats before price increase: "+seatsBeforePriceIncrease+" normal or large plane next?"






  	} else if (plane = 'large'){

  	if(seatType == 'economy'){

  	console.log( currentInput );
  	var yourSeatPrice = economySeatPrice;
  	economySeats--;

  	if(economySeats > 7){
  		economySeatPrice = economySeatPrice + firstEconomyIncrease;
  	} else if (economySeats <= 7 && economySeats > 1){
  		economySeatPrice = economySeatPrice + secondEconomyIncrease;
  	} else if (economySeats === 1){
  		economySeatPrice = 91000;
  	}

   
  	if (economySeats > 7) { 
  		seatsBeforePriceIncrease = Math.max(economySeats - 7,0);
  	} else {
  		seatsBeforePriceIncrease = Math.max(economySeats - 1,0);
  	};

  	grandCount = 0;

  return "You bought a seat at "+yourSeatPrice+" dollars. There are "+economySeats+" seats left. Number of seats before price increase: "+seatsBeforePriceIncrease+" normal or large plane next"
	} else if (seatType == 'business') {

var yourSeatPrice = businessSeatPrice;
  	businessSeats--;

  	if(businessSeats > 3){
  		businessSeatPrice = businessSeatPrice + firstBusinessIncrease;
  	} else if (businessSeats <= 3 && businessSeats > 1){
  		businessSeatPrice = businessSeatPrice + secondBusinessIncrease;
  	} else if (businessSeats === 1){
  		businessSeatPrice = 91000;
  	}

   
  	if (businessSeats > 3) { 
  		seatsBeforePriceIncrease = Math.max(businessSeats - 3,0);
  	} else {
  		seatsBeforePriceIncrease = Math.max(businessSeats - 1,0);
  	};

  	grandCount = 0;

  return "You bought a seat at "+yourSeatPrice+" dollars. There are "+businessSeats+" seats left. Number of seats before price increase: "+seatsBeforePriceIncrease+" normal or large plane next?"


} else if (seatType == 'firstClass'){

	var yourSeatPrice = firstSeatPrice;
  	firstSeats--;

  	if(firstSeats > 1){
  		firstSeatPrice = firstSeatPrice + firstPriceIncrease
  	} else if (firstSeats === 1){
  		firstSeatPrice = 91000;
  	}

   
  	if (firstSeats > 1) { 
  		seatsBeforePriceIncrease = Math.max(firstSeats - 1,0);
  	} else {
  		seatsBeforePriceIncrease = 0
  	};

grandCount = 0;

  return "You bought a seat at "+yourSeatPrice+" dollars. There are "+firstSeats+" seats left. Number of seats before price increase: "+seatsBeforePriceIncrease+" normal or large plane next?"
}
}
}
}


