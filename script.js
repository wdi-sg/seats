var totalSeat = 10;
var startPriceFirstHalf = 50;
var startPriceSecondHalf = 50;
var totalMoneyWeEarn = 50;

document.getElementById("pricing").innerHTML = startPriceFirstHalf +" for your ticket";
document.getElementById("seatLeft").innerHTML = totalSeat+" seats left";
function buyTicket(){
  if(totalSeat <= 10 && totalSeat > 6){
    document.getElementById("thankYouMessage").innerHTML = "Thank you, we made : $"+ totalMoneyWeEarn;
    totalSeat -= 1;
    startPriceFirstHalf = Number(startPriceFirstHalf * 1.03).toFixed(2);
    var seatLeftBeforePriceIncrease = totalSeat - 5;
    document.getElementById("seatLeft").innerHTML = seatLeftBeforePriceIncrease+" seats before price bracket increase";
    document.getElementById("pricing").innerHTML = startPriceFirstHalf +" for your ticket";
    totalMoneyWeEarn = parseFloat(totalMoneyWeEarn) + parseFloat(startPriceFirstHalf);
    console.log(totalSeat);
    console.log(startPriceFirstHalf);
    console.log(totalMoneyWeEarn);
    return seatLeftBeforePriceIncrease;
    return totalMoneyWeEarn;
    return startPriceFirstHalf;
    return totalSeat;
  }
  if(totalSeat <= 6 && totalSeat > 2){
    document.getElementById("thankYouMessage").innerHTML = "Thank you, we made : $"+ totalMoneyWeEarn;
    document.getElementById("pricing").innerHTML = startPriceSecondHalf +" for your ticket";
    var seatLeftBeforePriceIncrease = totalSeat - 2;
    totalSeat -= 1;
    totalMoneyWeEarn = parseFloat(totalMoneyWeEarn) + parseFloat(startPriceSecondHalf);
    startPriceSecondHalf = Number(startPriceSecondHalf * 1.05).toFixed(2);
    document.getElementById("seatLeft").innerHTML = seatLeftBeforePriceIncrease+" seats left before price bracket increase";
    console.log(totalSeat);
    console.log(startPriceSecondHalf);
    console.log(totalMoneyWeEarn);
    return totalMoneyWeEarn;
    return startPriceSecondHalf;
    return totalSeat;
    return seatLeftBeforePriceIncrease;
  }
  if(totalSeat == 2){
    document.getElementById("thankYouMessage").innerHTML = "Thank you, we made : $"+ totalMoneyWeEarn;
    document.getElementById("pricing").innerHTML ="$91,000 for your ticket";
    totalSeat -= 1;
    startPriceSecondHalf = Number(startPriceSecondHalf * 1.05).toFixed(2);
    document.getElementById("seatLeft").innerHTML = totalSeat+" seats left";
    console.log(totalSeat);
    console.log(startPriceSecondHalf);
    return totalMoneyWeEarn;
    return startPriceSecondHalf;
    return totalSeat;
  }
  else if (totalSeat == 1 ){
    totalMoneyWeEarn += 91000;
    document.getElementById("thankYouMessage").innerHTML = "Thank you, we made : $"+ totalMoneyWeEarn;
    document.getElementById("pricing").innerHTML = "call us to pay big money for ticket";
    document.getElementById("seatLeft").innerHTML = "no seats left, come back tomorrow";
    totalSeat -= 1;
  }
  else{
    document.getElementById("thankYouMessage").innerHTML = "No ticket means no ticket";
  }
}

function admin(){
  var password = prompt("Please enter password");
  if (password === "password1"){
    totalSeat = 10;
    startPriceFirstHalf = 50;
    startPriceSecondHalf = 50;
    totalMoneyWeEarn = 50;
    document.getElementById("pricing").innerHTML = startPriceFirstHalf +" for your ticket";
    document.getElementById("seatLeft").innerHTML = totalSeat+" seats left";
    document.getElementById("thankYouMessage").innerHTML = "";
  }
  else {
    document.getElementById("thankYouMessage").innerHTML = "wrong";
  }
}

