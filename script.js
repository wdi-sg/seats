//below are the codes for part 1
    //declaration of values
    var seatSold = 1;
    var originalSeatPrice = 50;
    var partOnePriceIncrease = 1.5;
    var partTwoPriceIncrease = 2.5;
    var currentPrice = 50;
    var ticketsLeft = 10;
//actual functions runnin
    var inputHappened = function(currentInput){
        while (seatSold<11){
            if(seatSold<5){
    console.log("Number of seats sold: "+seatSold);
    console.log("increase in price:" + partOnePriceIncrease);
    console.log ("current seat sold at: " + currentPrice);
    var nextSeatPrice = (currentPrice + partOnePriceIncrease);
    console.log ("next seat price: " + nextSeatPrice);
    currentPrice = nextSeatPrice
    seatSold = (seatSold + 1);
    ticketsLeft = (ticketsLeft -1);
    var output = "We are left with: " + ticketsLeft + "tickets!";
  return output;
} else if (seatSold>=5 && seatSold<9){
    console.log("Number of seats sold: "+seatSold);
    console.log("increase in price:" + partTwoPriceIncrease);
    console.log ("current seat sold at: " + currentPrice);
    var nextSeatPrice1 = (currentPrice + partTwoPriceIncrease);
    console.log ("next seat price: " + nextSeatPrice1);
    currentPrice = nextSeatPrice1
    seatSold = (seatSold + 1);
        ticketsLeft = (ticketsLeft -1);
    var output = "We are left with: " + ticketsLeft + "tickets!";
  return output;
}else if (seatSold===9){
    console.log("Number of seats sold: "+seatSold);
    console.log("increase in price:" + partTwoPriceIncrease);
    console.log ("current seat sold at: " + currentPrice);
    var nextSeatPrice2 = 91000;
    console.log ("next seat price: " + nextSeatPrice2);
    currentPrice = nextSeatPrice2
    seatSold = (seatSold + 1);
        ticketsLeft = (ticketsLeft -1);
    var output = "We are left with: " + ticketsLeft + "tickets!";
  return output;
}else if (seatSold===10){
    console.log("Number of seats sold: "+seatSold);
    console.log("increase in price:" + partTwoPriceIncrease);
    console.log ("current seat sold at: " + currentPrice);
    console.log ("next seat price: We are sold out for today!");
    seatSold = (seatSold + 1);
    var output = "Sorry there are no tickets left. Please try again tomorrow!";
      return output;
}
}
};



/*below are the codes for part 1
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
};*/