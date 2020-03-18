let seats = 10;
let seatCost = 50;
let currentInput;
document.getElementById("output").innerHTML =
  "There are 10 sits availables. The cost of the ticket is 50 dolars";
function inputHappened(currentInput) {
  if (currentInput == seatCost) {
    if (seats === 1) {
      return "the price of the last ticket is $ 91";
    }
    if (seats !== 0) {
      document.getElementById("input").value = "";

      if (5 < seats <= 10) {
        seats = seats - 1;
        seatCost = seatCost * 0.05 + seatCost;
        console.log(seatCost);
        return (
          "there are " +
          " " +
          seats +
          " " +
          "seats availables. The cost of the ticket is: " +
          seatCost +
          " " +
          "dolars"
        );
      } else {
        seats = seats - 1;
        seatCost = seatCost * 0.05 + seatCost;
        return (
          "there are " +
          " " +
          seats +
          " " +
          "seats availables. The cost of the ticket is: " +
          seatCost +
          " " +
          "dolars"
        );
      }
    } else {
      return "Sorry, no more available sits";
    }
  } else {
    document.getElementById("input").value = "";
    return "Please insert the correct amount of the price ticket " + seatCost;
  }
}
