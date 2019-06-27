// console.log("hello script js");

// var
// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   display( "WOW SOMETHING HAPPENED" );
// };

//Create initial values
// var numberOfBuys = currentInput + 1;
var price = 50;
var priceSurge = 50 * 0.05;


var inputHappened = function (currentInput) {
   if (currentInput = 1) {
      display(50);
}
    else {
       var newPrice = price + priceSurge;
       display(newPrice);
       // var numberOfBuys = currentInput
       // var newPrice = (numberOfBuys * 2.50) + 50;
       // display(newPrice);
}
};

console.log(typeof currentInput);

    // // if (currentInput.toLowerCase() === "buy") {
    //     price = price + priceSurge;
    //     display(price);