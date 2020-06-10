var totalSeat = 10;
var startPrice = 50;

document.getElementById("pricing").innerHTML = startPrice +" for your ticket";
document.getElementById("seatLeft").innerHTML = totalSeat+" seats left";
function buyTicket(){
  if(totalSeat <= 10 && totalSeat > 1){
    document.getElementById("thankYouMessage").innerHTML = "Thank you please pay me "+ startPrice+" NOW!"
    totalSeat -= 1;
    startPrice = Number(startPrice * 1.05).toFixed(2);
    document.getElementById("seatLeft").innerHTML = totalSeat+" seats left";
    document.getElementById("pricing").innerHTML = startPrice +" for your ticket";
    console.log(totalSeat);
    console.log(startPrice);
    return startPrice;
    return totalSeat;
  }
  else if (totalSeat == 1 ){
    document.getElementById("thankYouMessage").innerHTML = "Thank you please pay me "+ startPrice+" NOW!"
    document.getElementById("pricing").innerHTML = "call us to pay big money for ticket";
    document.getElementById("seatLeft").innerHTML = "no seats left, come back tomorrow";
  }
}

