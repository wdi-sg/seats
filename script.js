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
    if (numOfTicketsSold === 0) seatPrice = 50;
    else if (numOfTicketsSold < plane.seats - 5) {
      seatPrice = (seatPrice * 1.03).toFixed(2);
    } else if (numOfTicketsSold < plane.seats - 1) {
      seatPrice = (seatPrice * 1.05).toFixed(2);
    } else if (numOfTicketsSold === plane.seats - 1) seatPrice = 91000;
    else return "Sorry, all tickets are sold out!";
  } else {
    return "Ok...";
  }
  numOfTicketsSold += 1;
  input.value = "";
  return `You paid for $${seatPrice} for an Airplane seat.`;
};
