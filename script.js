console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  return "WOW SOMETHING HAPPENED";
};
var basePrice = 50;
for (var i = 0;i<=10;i ++){
	currentPrice= i + basePrice + 2.5 ;
	console.log("Your seat has been confirmed and it cost" + currentPrice)
}
