console.log("hello script js");
console.log("Script is running");

var inputHappened = function(currentInput){
if (currentInput==="buy") {
    var boughtSeat = "Seat bought for 50";
} else {
    var boughtSeat = "Type in buy to purchase a seat"
}
  display(boughtSeat);
};