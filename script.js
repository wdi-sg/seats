document.querySelector('#input').addEventListener('change', function(event){
  var currentInput = event.target.value;
  var result = inputHappened(currentInput);
  display( result );
});

var display = function( data ){
  var output = document.querySelector('#output');
  output.innerText = data;
}

let planeSeats = 10;
let seatPrice = 50;


var inputHappened = function(currentInput){
  while (planeSeats>=0) {
    if(planeSeats===1){
      return "Seats sold out"
    } else if(planeSeats>5){
    seatPrice = seatPrice*1.05;
  } else if(planeSeats>2){
  seatPrice = seatPrice*1.03;
  } else if(planeSeats===2){
    seatPrice = 91000;
  }
  planeSeats--;
    return "The price is $"+ seatPrice + " and there are still " + planeSeats + " seats left";
  }
};