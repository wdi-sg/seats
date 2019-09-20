console.log("hello script js");

// Plane Seats

var seats = 10;
var price = 50;
var priceBracket = 5;

var input = document.getElementById("input");

var inputHappened = function(currentInput) {
  var priceIncThree = price + price * 0.03;
  var priceIncFive = price + price * 0.05;

  if (currentInput !== " " && seats > 5 && priceBracket >= 1) {
    seats -= 1;
    price = priceIncThree;
    priceBracket -= 1;
    input.value = "";
    console.log("seats:" + seats);
    console.log("price: " + Math.floor(price));
    console.log(priceBracket);
    return `Purchased: One Seat 
        Price: $${price.toFixed(0)} 
        Seats remaining: ${seats}
        ${priceBracket} Seats until next price bracket`;
  } else if (currentInput !== " " && seats === 5 && priceBracket === 1) {
    seats -= 1;
    price = priceIncFive;
    input.value = "";
    console.log("seats:" + seats);
    console.log("price: " + Math.floor(price));
    return `Purchased: One Seat 
        Price: $${price.toFixed(0)} 
        Seats remaining: ${seats}
        ${priceBracket} Seat until next price bracket`;
  } else if (
    currentInput !== " " &&
    seats <= 5 &&
    seats > 1 &&
    priceBracket === 0
  ) {
    seats -= 1;
    price = priceIncFive;
    input.value = "";
    console.log("seats:" + seats);
    console.log("price: " + Math.floor(price));
    return `Purchased: One Seat 
        Price: $${price.toFixed(0)} 
        Seats remaining: ${seats}
        New Price Bracket  `;
  } else if (currentInput !== " " && seats === 1) {
    seats -= 1;
    input.value = "";
    console.log("seats:" + seats);
    console.log("price: " + Math.floor(price));
    return `Purchased: Last Seat 
        Price: $91,000 `;
  } else if (currentInput !== " " && seats === 0) {
    input.value = "";
    return `Sorry we are SOLD OUT 😔😔`;
  }
};
