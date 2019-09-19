const input = document.getElementById("input");
input.placeholder = "Buy a ticket (y/n)?";

let numOfTicketsSold = 0;

const plane = {
  seats: 10,
};

let seatPrice = 0;

const inputHappened = function(currentInput) {
  let ticketsLeft = "";
  if (!isNaN(Number(currentInput))) {
    input.value = "";
    return `${currentInput} not allowed. Key in y or n.`;
  }
  if (currentInput.toLowerCase() === "y") {
    if (numOfTicketsSold === 0) {
      seatPrice = 50;
      ticketsLeft =
        "Price of tickets will increase from the next purchase onwards.";
    } else if (numOfTicketsSold < plane.seats - 5) {
      seatPrice = (seatPrice * 1.03).toFixed(2);
      console.log(1.03);
      ticketsLeft = `Number of tickets left to price increase: ${plane.seats -
        5 -
        numOfTicketsSold}`;
    } else if (numOfTicketsSold < plane.seats - 1) {
      seatPrice = (seatPrice * 1.05).toFixed(2);
      console.log(1.05);
      ticketsLeft = `Number of tickets left to price increase: ${plane.seats -
        1 -
        numOfTicketsSold}`;
    } else if (numOfTicketsSold === plane.seats - 1) seatPrice = 91000;
    else return "Sorry, all tickets are sold out!";
  } else {
    input.value = "";
    return "Ok...";
  }
  numOfTicketsSold += 1;
  input.value = "";
  return `You paid $${seatPrice} for an Airplane seat.\n${ticketsLeft}`;
};
