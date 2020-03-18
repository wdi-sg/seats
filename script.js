/*
console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  return "WOW SOMETHING HAPPENED";
};
*/
let originalPrice = 50;
let seatsSold = 0;

var inputHappened = function (currentInput) {
  let output;
  seatsSold++;
  console.log(seatsSold);
  if (seatsSold > 10) {
    output = "Sorry, all seats are sold out";
    return output;
  }
  else {
    output = originalPrice * Math.pow(1.05,seatsSold);
    return output.toFixed(2);
  }
}
