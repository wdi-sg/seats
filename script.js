//below are the codes for part 1
    //declaration of values
    var seatSold = 1;
    var originalSeatPrice = 50;
//actual functions runnin
    var inputHappened = function(currentInput){
        while (seatSold<11){
    var incrementPerSeatSold = ((parseInt(seatSold) * 0.05)*50);
    console.log("Number of seats sold: "+seatSold);
    console.log("increase in price:" + incrementPerSeatSold);
    var currentSeatPrice = ((((parseInt(seatSold)-1) * 0.05)*50)+50);
    var nextSeatPrice = (originalSeatPrice + incrementPerSeatSold);
    console.log ("current seat sold at: " + currentSeatPrice);
    console.log ("next seat price: " + nextSeatPrice);
    seatSold = (seatSold + 1);
    var output = "Sold!";
  return output;
}
};