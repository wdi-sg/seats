
// further 1 
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
  else if (seatsSold > 0 && seatsSold <= 5) {
    console.log(1.03);
    output = originalPrice * Math.pow(1.03,seatsSold);
    return output.toFixed(2);
  }
  else if (seatsSold > 5 && seatsSold <= 9) {
    console.log(1.05);
    output = originalPrice * Math.pow(1.03, 5) * Math.pow(1.05, seatsSold-5);
    return output.toFixed(2);
  }
  else {
    output = 91000;
    return output;
  }
}
