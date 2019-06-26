console.log("hello script js");
console.log("Script is running");

var inputHappened = function(currentInput){
if (currentInput==="buy") {
var boughtSeat = "Seat bought for 50"
} else {
var boughtSeat = "Type in buy to purchase a seat"
}


  display(boughtSeat);
};

//function calculatePay (hoursWorked){
//    var hourlyRate = 100
//    if (hoursWorked>40) {
  //      var normalPay = 40*hourlyRate
    //    var extraPay = (hoursWorked-40)*hourlyRate*1.5;
      //  var totalPay = normalPay+extraPay
   //     console.log("Total if overtime "+totalPay)
    //} else {
    //    var totalPay = hoursWorked*hourlyRate
      //  console.log("Total if regular "+totalPay)
    //}
    //var message = "You got paid " + totalPay;
 //   console.log(message);
  //  console.log("Outside stuff "+normalPay)
 //   console.log("Outside stuff "+extraPay)
   // console.log("Outside stuff "+totalPay)
//    return message;
//}

//calculatePay(41)