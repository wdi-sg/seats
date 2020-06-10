var originalPrice = 50;
var availableSeats = 10;
var currentPrice = originalPrice;

function calculatePrice() {
  if (availableSeats > 0) {
    currentPrice = currentPrice * 1.05;
    return currentPrice;
  } else if (availableSeats > 5 && availableSeats < 10) {
    currentPrice = currentPrice * 1.03;
    return currentPrice;
  } else if (availableSeats == 10) {
    return originalPrice;
  } else {
    alert("boo, no more tickets")
  }

}
function buyTicket() {
  availableSeats--;
  var result = calculatePrice();
  display(result.toFixed(2) , availableSeats);
}