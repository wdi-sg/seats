document.querySelector('#input').addEventListener('change', function(event){
  var currentInput = event.target.value;
  var result = inputHappened(currentInput);
  display( result );
});

var display = function( data ){
  var output = document.querySelector('#output');
  output.innerText = data;
}

let economicSeats = 15;
let businessSeats = 6;
let firstClassSeats = 4;
let seatPrice = 50;
let currentPrice = 0;


var inputHappened = function(currentInput){
  if(currentInput==="buy economy class"){
    document.querySelector('#input').value="";
  while (economicSeats>=0) {
    if(economicSeats===1){
      return "Economy seats sold out"
    } else if(economicSeats===15){
      seatPrice = seatPrice*1;
    } else if(economicSeats>7){
    seatPrice = seatPrice*1.05;
  } else if(economicSeats>2){
  seatPrice = seatPrice*1.03;
  } else if(economicSeats===2){
    seatPrice = 91000;
  }
  economicSeats--;
    return "Thank you. For Economy, the price is $"+ Math.ceil(seatPrice) + " and there are still " + economicSeats + " seats left";
  }
}else if(currentInput==="buy business class"){
  document.querySelector('#input').value="";
while (businessSeats>=0) {
  if(businessSeats===1){
    return "Seats sold out"
  } else if(businessSeats===6){
    seatPrice = seatPrice*1;
  } else if(businessSeats>4){
  seatPrice = seatPrice*1.06;
} else if(businessSeats>2){
seatPrice = seatPrice*1.1;
} else if(businessSeats===2){
  seatPrice = 91000;
}
businessSeats--;
  return "Thank you. For business class, the price is $"+ Math.ceil(seatPrice) + " and there are still " + businessSeats + " seats left";
}
}else if(currentInput==="buy first class"){
  document.querySelector('#input').value="";
while (firstClassSeats>=0) {
  if(firstClassSeats===1){
    return "Seats sold out"
} else if(firstClassSeats>2){
seatPrice = seatPrice*1.5;
} else if(firstClassSeats===2){
  seatPrice = 91000;
}
firstClassSeats--;
  return "Thank you. For first class, the price is $"+ Math.ceil(seatPrice) + " and there are still " + firstClassSeats + " seats left";
}
}
else{
  return "Please type buy to buy the ticket."
} 
};