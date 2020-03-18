console.log("hello script js");

// helper functions
const addThreePercent = function(price){
	return price * 1.03;
};

const addFivePercent = function(price){
	return price * 1.05;
};

// all seats empty
let seats = 10;
let price = 50;


var inputHappened = function(currentInput){
  console.log('User typed ${currentInput}');
  if (currentInput && (seats === 10)){
  	seats -= 1;
  	console.log('seats remaining: ' + seats);
  	price = 50;
  } else if (currentInput && (seats > 0)){
  	seats -= 1;
  	console.log('seats remaining: ' + seats);
  		price = addFivePercent(price);
  } else if (seats === 0){
  	return 'We have sold out!';
  } else {
  	return 'I don\'t understand you';
  };
  return 'No. ' + (10-seats) + ' Seat sold at ' + '$' + price;
};
