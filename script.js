let seats = {
  economy: 15,
  business: 6,
  firstClass: 4
};
let seatCost = 50;
let currentInput;
document.getElementById("output").innerHTML =
  "Please choose the cabin: buy economy, buy business or buy first class";
function inputHappened(currentInput) {
  if (currentInput == "buy economy") {
    if (seats.economy === 1) {
      return "the price of the last ticket is $ 91";
    }
    if (seats.economy !== 0) {
      document.getElementById("input").value = "";
      if (7 < seats.economy <= 15) {
        seats.economy = seats.economy - 1;
        seatCost = seatCost * 0.05 + seatCost;
        return (
          "there are " +
          " " +
          seats.economy +
          " " +
          "seats availables. The cost of the ticket is: " +
          seatCost +
          " " +
          "dollars." + "Please choose the cabin: buy economy, buy business or buy first class"
        );
      } else {
        seats.economy = seats.economy - 1;
        seatCost = seatCost * 0.05 + seatCost;
        return (
          "there are " +
          " " +
          seats.economy +
          " " +
          "seats availables. The cost of the ticket is: " +
          seatCost +
          " " +
          "dollars." + "Please choose the cabin: buy economy, buy business or buy first class"
        );
      }
    } else {
      return "Sorry, no available economy class seats";
    }
  } else if (currentInput === "buy business") {
    if (seats.business === 1) {
      return "the price of the last ticket is $ 91";
    }
    if (seats.business  !== 0) {
      document.getElementById("input").value = "";

      if (3 < seats.business  <= 6) {
        seats.business  = seats.business  - 1;
        seatCost = seatCost * 0.06 + seatCost;
        console.log(seatCost);
        return (
          "there are " +
          " " +
          seats.business  +
          " " +
          "seats availables. The cost of the ticket is: " +
          seatCost +
          " " +
          "dollars." + "Please choose the cabin: buy economy, buy business or buy first class"
        );
      } else {
        seats.business  = seats.business  - 1;
        seatCost = seatCost * 0.1 + seatCost;
        return (
          "there are " +
          " " +
          seats.business  +
          " " +
          "seats availables. The cost of the ticket is: " +
          seatCost +
          " " +
          "dollars." + "Please choose the cabin: buy economy, buy business or buy first class"
        );
      }
    } else {
      return "Sorry, no available business class seats";
    }
  } else if (currentInput === "buy first class") {
    if (seats.firstClass === 1) {
      return "the price of the last ticket is $ 191";
    }
    if (seats.firstClass !== 0) {
      document.getElementById("input").value = "";

      if (seats.firstClass <= 4) {
        seats.firstClass = seats.firstClass - 1;
        seatCost = seatCost * 0.15 + seatCost;
        console.log(seatCost);
        return (
          "there are " +
          " " +
          seats.firstClass +
          " " +
          "seats availables. The cost of the ticket is: " +
          seatCost +
          " " +
          "dollars." + "Please choose the cabin: buy economy, buy business or buy first class"
        );
      }
    }
  } else {
    return "Sorry, no available first class seats";
  }
}
