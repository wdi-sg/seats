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
  if (currentInput && (seats === 10)){
	  	seats -= 1;
	  	console.log('seats remaining: ' + seats);
	  	console.log('no markup');
	  	price = 50;
  		return '1 ticket sold at ' + '$' + price + '. The next ticket will be more expensive.';

  } else if (currentInput && (seats > 5)){
	  	seats -= 1;
	  	console.log('seats remaining: ' + seats);
	  	console.log('markup of three percent');
  		price = addThreePercent(price);
  		return '1 ticket sold at ' + '$' + price + '. There are ' + (seats-4) + ' tickets left before price increase.';

  } else if (currentInput && (seats > 1)){
  		seats -= 1;
  		console.log('seats remaining: ' + seats);
  		console.log('markup of five percent');
  		price = addFivePercent(price);
  		return '1 ticket sold at ' + '$' + price + '. There are ' + (seats) + ' tickets left before price increase.';

  } else if (seats === 1){
  		seats -= 1;
  		console.log('seats remaining: ' + seats);
  		price = 91000;

  } else if (seats === 0){
  		return 'We have sold out';

  } else {
  		return 'I don\'t understand you';

  };
  return '1 ticket sold at ' + '$' + price;
};
