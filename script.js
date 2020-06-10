document.querySelector('#input').addEventListener('change', function(event){
  var currentInput = event.target.value;
  var result = inputHappened(currentInput);
  display( result );
});

var display = function( data ){
  var output = document.querySelector('#output');
  output.innerText = data;
}

let planeseats = 10;
let seatPrice = 50;


var inputHappened = function(currentInput){
  while (planeseats>=0) {
    if(planeseats===0){
      return "Seats sold out"
    }
    seatPrice = seatPrice*1.05;
    planeseats--;
    return "The price is $"+ Math.ceil(seatPrice) + " and there are still " + planeseats + " seats left";
  }
};