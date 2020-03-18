    //declaration of values
    var seatSold = 0;
    var originalSeatPrice = 50;
//actual functions runnin
    var inputHappened = function(currentInput){
        while (seatSold<11){
    var incrementPerSeatSold = (parseInt(seatSold + 1) * 0.05);
    console.log("Number of seats sold: "+seatSold);
    console.log("increase in price:" + incrementPerSeatSold);
    var currentSeatPrice = (originalSeatPrice + incrementPerSeatSold);
    console.log ("Current seat price: " + currentSeatPrice);
    seatSold = (seatSold + 1);
    var output = "Sold!";
  return output;
}
};