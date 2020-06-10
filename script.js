// Object: A regular plane
var regPlane = {
  totalSeats: 10,
  currPrice: 50.0,
  availSeats: 10,
  soldSeats: 0,
};

// Purpose: returns the price of the next seat w/ compound interest
function getCumNextSeatPrice() {
  // If it is the first seat
  if (regPlane.availSeats === regPlane.totalSeats) {
    return regPlane.currPrice;
  }
  // If this is the last seat
  else if (regPlane.availSeats == 1) {
    return 91000;
  }
  // If it is the first half seats
  else if (regPlane.availSeats > regPlane.totalSeats/2) {
    return regPlane.currPrice * 1.03;
  }
  // If it is the last half seats
  return regPlane.currPrice * 1.05;
}

// Purpose: returns the price of the next seat W/O compound interest
function getNextSeatPrice() {
  if (regPlane.availSeats === regPlane.totalSeats) {
    return regPlane.currPrice;
  }
  // If this is the last seat
  else if (regPlane.availSeats == 1) {
    return 91000;
  }
  // If it is the first half seats
  else if (regPlane.availSeats > regPlane.totalSeats/2) {
    return 50 * 1.03;
  }
  // If it is the last half seats
  return 50 * 1.05;
}

// Purpose: updates seats and current price when seats are sold
function update_seatSold() {
  regPlane.currPrice = getNextSeatPrice();
  regPlane.seatsSold++;
  regPlane.availSeats--;
}

var inputHappened = function(currentInput){
  return update_seatSold();
};

document.querySelector('#input').addEventListener('change', function(event){
    var currentInput = event.target.value;
    inputHappened(currentInput);
    overwrite(regPlane.currPrice);
});

var overwrite = function( data ){
    var output = document.querySelector('#output');
    output.innerText = data;
}