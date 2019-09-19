const input = document.getElementById("input");
input.placeholder = "Buy a ticket (y/n)?";

let numOfTicketsSold = 0;

const plane = {
  seats: 10,
};

let seatPrice = 0;

const inputHappened = function(currentInput) {
  if (!isNaN(Number(currentInput))) {
    return `${currentInput} not allowed. Key in y or n.`;
  }
  if (currentInput.toLowerCase() === "y") {
    seatPrice =
      numOfTicketsSold === 0 ? 50 : (seatPrice = (seatPrice * 1.05).toFixed(2));
  } else {
    return "Ok...";
  }
  plane.seats -= 1;
  numOfTicketsSold += 1;
  return `You paid for $${seatPrice} for an Airplane seat.`;
};
