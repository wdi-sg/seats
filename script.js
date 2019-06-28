console.log("hello script js");

/*BASIC
Implement a program for a kiosk that sells airline tickets.

A plane has 10 seats.

When the plane is empty a seat is $50.

For each seat sold the ticket price goes up 5% over the original price of $50.

When a user types buy into the input, consider that seat sold and show the user the price of their seat.
*/

/* BASIC CODE

var seatLeft = 10;
var price = 50;

var inputHappened = function (currentInput) {
    if (seatLeft > 0 && seatLeft < 10) {
        newPrice = price * 1.05;
		seatLeft = seatLeft - 1;
        display(`The price is : $${newPrice}`)
		
    }else if (seatLeft === 10){
		display(`The price is : $${price}`); 
		seatLeft = seatLeft - 1;

	}else {
		display(`Sorry, tickets sold out`); 
	}
	console.log('Number of seats left: '+ seatLeft);
};
*/

/* FIRST FURTHER
The airline boss requests finer-grained pricing:

For the first half of the seats, the price goes up 3% over the original price of $50.

For the second half it goes up by 5% over the original price of $50.

The last seat is $91,000.
*/

/* FIRST FURTHER CODE

var seatLeft = 10;
console.log('Number of seats left: '+ seatLeft);
var price = 50;

var inputHappened = function (currentInput) {
    if (seatLeft > 5 && seatLeft < 10) {
        newPrice = price * 1.03; //price should return 51.5
		seatLeft = seatLeft - 1;
        display(`The price is : $${newPrice}`)
		
    }else if (seatLeft > 1 && seatLeft < 6){
		newPrice = price * 1.05; // price should return 52.5
		seatLeft = seatLeft - 1;
        display(`The price is : $${newPrice}`)

	}else if (seatLeft === 1){
		newPrice = '91,000'; 
		display(`The price is : $${newPrice}`); 
		seatLeft = seatLeft - 1;

	}else if (seatLeft === 10){
		display(`The price is : $${price}`); 
		seatLeft = seatLeft - 1;

	} else {
		display(`Sorry, tickets sold out`); 
	}
	console.log('Number of seats left: '+ seatLeft);
};
*/

/* SECOND FURTHER 

When outputing, a message tell the user how many tickets are left before the price bracket goes up.
*/

/* SECOND FURTHER CODE 

var seatLeft = 10;
var seatLeftFirstTier = 4;
var seatLeftSecondTier = 4;
console.log('Number of seats left: '+ seatLeft);
var price = 50;

var inputHappened = function (currentInput) {
	
    if (seatLeft > 5 && seatLeft < 10) {
        newPrice = price * 1.03; //price should return 51.5
		seatLeft = seatLeft - 1;
		seatLeftFirstTier = seatLeftFirstTier - 1;
        display(`The price is : $${newPrice}. 
		You are ${seatLeftFirstTier} tickets away from the next price surge!`)
		
    }else if (seatLeft > 1 && seatLeft < 6){
		newPrice = price * 1.05; // price should return 52.5
		seatLeft = seatLeft - 1;
        seatLeftSecondTier = seatLeftSecondTier - 1;
        display(`The price is : $${newPrice}. 
		You are ${seatLeftSecondTier} tickets away from the next price surge!`)

	}else if (seatLeft === 1){
		newPrice = '91,000'; 
		display(`The price is : $${newPrice}.
		You grabbed the last ticket!`); 
		seatLeft = seatLeft - 1;

	}else if (seatLeft === 10){
		display(`The price is : $${price}.
		You grabbed the last cheapest ticket!`); 
		seatLeft = seatLeft - 1;

	} else {
		display(`Sorry, tickets sold out`); 
	}
	console.log('Number of seats left: '+ seatLeft);
};
*/

/* THIRD FURTHER  -- ######INCOMPLETE

Change the pricing to increase by 3% and 5% over the current price of the ticket. (i.e., each ticket is some percentage more than the last)

*/

/* THIRD FURTHER CODE*/

var seatLeft = 10;
var seatLeftFirstTier = 4;
var seatLeftSecondTier = 4;
console.log('Number of seats left: '+ seatLeft);
var price = 50;

/*Round off prices to 2dp*/
function precise_round(num, dec){
  if ((typeof num !== 'number') || (typeof dec !== 'number')) 
return false; 

  var num_sign = num >= 0 ? 1 : -1;
  return (Math.round((num*Math.pow(10,dec))+(num_sign*0.0001))/Math.pow(10,dec)).toFixed(dec);
}

function isEmpty(currentInput){
    if(currentInput){
        return false;
    }else{
        return true;
    }
}

var inputHappened = function (currentInput) {
	
	
    if ( !isEmpty ){
		display(`Pls type something`); 
	
	 }else if ( typeof currentInput != null && seatLeft > 5 && seatLeft < 10) {
        price = price * 1.03; 
		price = precise_round(price,2);
		seatLeft = seatLeft - 1;
		seatLeftFirstTier = seatLeftFirstTier - 1;
        display(`The price is : $${price}. 
		You are ${seatLeftFirstTier} tickets away from the next big price surge!`)
		
    }else if (typeof currentInput != null  && seatLeft > 1 && seatLeft < 6){
		price = price * 1.05; 
		price = precise_round(price,2);
		seatLeft = seatLeft - 1;
        seatLeftSecondTier = seatLeftSecondTier - 1;
        display(`The price is : $${price}. 
		You are ${seatLeftSecondTier} tickets away from the next big price surge!`)

	}else if (typeof currentInput != null  && seatLeft === 1){
		newPrice = '91,000'; 
		display(`The price is : $${newPrice}.
		You grabbed the last ticket!`); 
		seatLeft = seatLeft - 1;

	}else if (typeof currentInput != null  && seatLeft === 10){
		display(`The price is : $${price}.
		You grabbed the last cheapest ticket!`); 
		seatLeft = seatLeft - 1;

	} else if (typeof currentInput != null  && seatLeft === 0) {
		display(`Sorry, tickets sold out`); 
	}
	console.log('Number of seats left: '+ seatLeft);

};