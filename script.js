let seats = 10;
let seatCost = 50;
let currentInput;
document.getElementById("output").innerHTML =
  "There are 10 sits availables. The cost of the ticket is 50 dolars";
function inputHappened(currentInput) {
  if (currentInput !== "") {
    if (seats !== 1) {
      document.getElementById("input").value = "";
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
      return "Sorry, no more available sits";
    }
  }
}
