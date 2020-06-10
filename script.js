
let seats = 10
let price  = 50
var inputHappened = function(currentInput){
  if(currentInput != ""){
    if(seats==1){
      price = 91000
    }
    else if(seats <10){
      if(seats <10 && seats>5){
        seats--
        price*=1.03     //compounding
      }
      else{
        seats--
        price*=1.05     //compounding
      }
    }
    else if(seats==10){
      seats--}
    }
    return "you bought a ticket at " + "$" + price.toFixed(2) + "\n" + seats + " seats remaining "
  }

function count(){
  for(i=10 ; i>0 ; i--)
  console.log(i +" seats left")}

document.getElementById('buy').value = null;


// switch(expression) {
//   case x:

//       seats--;
//       price*=1.05}
//     else if (seats===1){
//       seats= 91000}
//     else if (seats==10){
//       seats--}

//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }