// init global state vars
var seats = 10;
var price = 50;
const originalPrice = 50;

// UI elements
const input = document.getElementById('user-input');

// event listener
input.addEventListener('click', buySeat);

// calculate function
function buySeat(e) {
  seats -= 1;
  getPrice(seats);

  e.preventDefault;
}

function getPrice(seats) {
  if (seats >= 5) {
    price = price + (price*0.3);
    display(price); 
} else if (seats > 1 && seats < 5) {
    price = price + (price*0.5);
    display(price); 
} else if (seats === 1) {
    price = 91000
    display(price); 
} else {
  price = "-";
  display(price);
};
console.log(seats)
}

// display results
function display(data) {
  const price = document.querySelector('#result');
  price.innerText = "$" + data;

  const seatsLeft = document.querySelector('#second-result');

  if (seats >= 5) {
    seatsLeft.innerText = `${seats-4} seat(s) left at this price.`;
  } else if (seats > 1 && seats < 5) {
    seatsLeft.innerText = `${seats-1} seat(s) left at this price.`;
  } else if (seats === 1) {
    seatsLeft.innerText = `only ONE seat left at this price!`;
  } else {
    seatsLeft.innerText = `Sorry, there are no seats left.`;
  } 
}
