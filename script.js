console.log("hello script js");
//Part 5
var seatsRemaining = 10;
var seatsSold = 0;
var standardPrice = 50;
var priceIncrement1 = 1.03;
var priceIncrement2 = 1.05;
var currentPrice;
var tixRemaining1 = 4
var tixRemaining2 = 4

function tixStringMaker(tix) {
    if (tix > 1) {
        return (tix + " tickets remaining before price bracket goes up.")
    } else if (tix == 1) {
        return (tix + " ticket remaining before price bracket goes up.")
    } else if (tix == 0) {
        return ("Price bracket goes up for the next ticket.")
    }
}

var inputPrompt = document.getElementById("input");
inputPrompt.placeholder = "Buy ticket? Y/N?";
function clear(){
    inputPrompt.value= "";
}
var inputHappened = function(currentInput) {
    console.log(currentInput);
    currentInput = currentInput.toLowerCase();
    if (currentInput.includes("y")) {
        if (seatsRemaining == 10) {
            console.log(seatsRemaining);
            currentPrice = standardPrice;
            seatsRemaining = seatsRemaining - 1;
            seatsSold = seatsSold + 1;
            var tixString = tixStringMaker(tixRemaining1);
            clear();
            return ("Seat sold for $" + standardPrice + ", " + seatsRemaining + " seats remaining. " + tixString);
        } else if (seatsRemaining < 10 && seatsRemaining >= 6) {
            console.log(seatsRemaining);
            currentPrice = currentPrice * priceIncrement1;
            currentPrice = currentPrice.toFixed(2);
            seatsRemaining = seatsRemaining - 1;
            seatsSold = seatsSold + 1;
            tixRemaining1 = tixRemaining1 - 1;
            var tixString = tixStringMaker(tixRemaining1);
            clear();
            return ("Seat sold for $" + currentPrice + ", " + seatsRemaining + " seats remaining. " + tixString);
        } else if (seatsRemaining < 6 && seatsRemaining > 1) {
            console.log(seatsRemaining);
            currentPrice = currentPrice * priceIncrement2;
            currentPrice = currentPrice.toFixed(2);
            seatsRemaining = seatsRemaining - 1;
            seatsSold = seatsSold + 1;
            tixRemaining2 = tixRemaining2 - 1;
            var tixString = tixStringMaker(tixRemaining2);
            clear();
            return ("Seat sold for $" + currentPrice + ", " + seatsRemaining + " seats remaining. " + tixString);
        } else if (seatsRemaining == 1) {
            console.log(seatsRemaining);
            currentPrice = 91000;
            seatsRemaining = seatsRemaining - 1;
            seatsSold = seatsSold + 1;
            clear();
            return ("Seat sold for $" + currentPrice + ", " + seatsRemaining + " seats remaining.");
        } else {
            clear();
            return "No more seats available.";
        }
    } else if (currentInput.includes("n")) {
        alert("No tickets purchased.");
        clear();
        return "";
    } else {
        alert("Invalid option. Try again");
        clear();
        return "";

    }


};