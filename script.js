console.log("hello script js");
var seatsLeft = numSeats(90950, 3, 5, 50);
var currentPrice = 50, oriPrice = 50, increment = 0;
var planeSeats = numSeats(90950, 3, 5, 50);
var inputHappened = function(currentInput){
    if(seatsLeft == 1){
        currentPrice += 2.5;
        return "No more seats left and the final price of is $" + currentPrice + ".";
    }
    if(currentInput == "skipPart1"){
        while(seatsLeft > Math.ceil(planeSeats/2)){
            increasePrice(0.03);
        }
        return "Price of seat is $" + currentPrice.toFixed(2) + ". " + seatsLeft + "/" + planeSeats + " seats left";
    }
    if(currentInput == "skipPart2"){
        while(seatsLeft !== 1){
            increasePrice(0.05);
        }
        return "Price of seat is $" + currentPrice.toFixed(2) + ". " + seatsLeft + "/" + planeSeats + " seats left";
    }
    if(seatsLeft > planeSeats/2){
        return increasePrice(0.03);
    }
    else if(seatsLeft < planeSeats/2 && seatsLeft >= 0){
        return increasePrice(0.05);
    }
};
function numSeats(priceOfLastSeat, x, y, price) {
    return 2 * priceOfLastSeat/((x * price /100 + y * price/100));
}
function increasePrice(x) {
    currentPrice += oriPrice * x;
    seatsLeft--;
    return "Price of seat is $" + currentPrice.toFixed(2) + ". " + seatsLeft + "/" + planeSeats + " seats left";
}