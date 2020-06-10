document.querySelector('#input').addEventListener('change', function(event){
  var currentInput = event.target.value;
  var result = inputHappened(currentInput);
  display( result );
});

var display = function( data ){
  var output = document.querySelector('#output');
  output.innerText = data;
}

let planeSeat = 10;
let economicSeats = 15;
let businessSeats = 6;
let firstClassSeats = 4;
let ecoPrice = 50;
let busPrice = 50;
let firstPrice = 50;


var inputHappened = function(currentInput){
  if(currentInput==="buy economy class"){
    document.querySelector('#input').value="";
  while (economicSeats>=0) {
    if(economicSeats===1){
      return "Economy seats sold out"
    } else if(economicSeats===15){
      ecoPrice = ecoPrice*1;
    } else if(economicSeats>7){
      ecoPrice = ecoPrice*1.05;
  } else if(economicSeats>2){
    ecoPrice = ecoPrice*1.03;
  } else if(economicSeats===2){
    ecoPrice = 91000;
  }
  economicSeats--;
    return "Thank you. For Economy, the price is $"+ Math.ceil(ecoPrice) + " and there are still " + economicSeats + " seats left";
  }
}else if(currentInput==="buy business class"){
  document.querySelector('#input').value="";
while (businessSeats>=0) {
  if(businessSeats===1){
    return "Seats sold out"
  } else if(businessSeats===6){
    busPrice = busPrice*1;
  } else if(businessSeats>4){
    busPrice = busPrice*1.06;
} else if(businessSeats>2){
  busPrice = busPrice*1.1;
} else if(businessSeats===2){
  busPrice = 91000;
}
businessSeats--;
  return "Thank you. For business class, the price is $"+ Math.ceil(busPrice) + " and there are still " + businessSeats + " seats left";
}
}else if(currentInput==="buy first class"){
  document.querySelector('#input').value="";
while (firstClassSeats>=0) {
  if(firstClassSeats===1){
    return "Seats sold out"
} else if(firstClassSeats>2){
  firstPrice = firstPrice*1.5;
} else if(firstClassSeats===2){
  firstPrice = 91000;
}
firstClassSeats--;
  return "Thank you. For first class, the price is $"+ Math.ceil(firstPrice) + " and there are still " + firstClassSeats + " seats left";
}
}
else{
  return "Please type buy to buy the ticket."
} 
};






// if(currentInput==="buy plane seat"){
//   document.querySelector('#input').value="";
// while (planeSeat>=0) {
//   if(planeSeat===1){
//     return "Economy seats sold out"
//   } else if(planeSeat===10){
//     seatPrice = seatPrice*1;
//   } else if(planeSeat>5){
//   seatPrice = seatPrice*1.05;
// } else if(planeSeat>2){
// seatPrice = seatPrice*1.03;
// } else if(planeSeat===2){
//   seatPrice = 91000;
// }
// planeSeat--;
//   return "Thank you. The price is $"+ Math.ceil(seatPrice) + " and there are still " + planeSeat + " seats left";
// }
// }