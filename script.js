console.log("hello script js");
/*
var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};
*/
/*
1. goal: sell airline tickets
2. planeSeats = 10
3. planeFirstSeatPrice = 50
4. planeSecondSeatPrice = 0.05*50
5. user have to click buy
6. show output: seat sold and price seat
*/

/*
var planeSeats = 10;
var seatPrice = 50;

var inputHappened = function(userInput){
    //if(userInput === "buy"){
        console.log("You have purchase at: $" + seatPrice)
        planeSeats = planeSeats - 1;
        console.log("Seats available: " + planeSeats);
        seatPrice = (seatPrice * 0.05) + seatPrice;
        console.log("Next seat price: $" + seatPrice);
        if(planeSeats === 0){
            console.log("There is no available seats.")
            display("There is no available seats.")
        }
        else{
            display("You have purchase at: $" + seatPrice)
    }
}
*/

//first half seat price increase by 3%
//second half seat price increase by 5%
//last seat = $91k
/*
var planeSeats = 10;
var seatPriceFirst = 50;
var seatPriceSecond = 50;

var inputHappened = function(userInput){
    //if(userInput === "buy"){
        console.log("You have purchase at: $" + seatPriceFirst)
        planeSeats = planeSeats - 1;
        console.log("Seats available: " + planeSeats);
        if (planeSeats > 5){
            seatPriceFirst = (seatPriceFirst * 0.03) + seatPriceFirst;
            console.log("Next seat price: $" + seatPriceFirst);
            display("You have purchase at: $" + seatPriceFirst);
        }
        else if (planeSeats <= 5 && planeSeats >= 2){
            seatPriceSecond = (seatPriceSecond * 0.05) + seatPriceSecond;
            console.log("Next seat price: $" + seatPriceSecond)
            if(planeSeats === 1){
                console.log("Next seat price: $91,000.");
            }
            display("You have purchase at: $" + seatPriceSecond)
        }
        else if (planeSeats === 1){
            console.log("You have purchase the last seat for: $91,000.");
            display("You have purchase at: $91,000")
        }
        else {
            console.log("There is no available seats.")
            display("There is no available seats.")
        }

    }
    */


var planeSeats = 10;
var seatPriceFirst = 50;
var seatPriceSecond = 50;

var inputHappened = function(userInput){
    //if(userInput === "buy"){
        console.log("You have purchase at: $" + seatPriceFirst);
        planeSeats = planeSeats - 1;
        console.log("Seats available: " + planeSeats);
        if (planeSeats > 5){
            seatPriceFirst = (seatPriceFirst * 0.03) + seatPriceFirst;
            console.log("Next seat price: $" + seatPriceFirst);

            display("You have purchase at: $" + seatPriceFirst);

            display2(planeSeats + " seats left before before price increment");
        }
        else if (planeSeats <= 5 && planeSeats >= 2){
            seatPriceSecond = (seatPriceSecond * 0.05) + seatPriceSecond;
            console.log("Next seat price: $" + seatPriceSecond)
            if(planeSeats === 1){
                console.log("Next seat price: $91,000.");
            }
            display("You have purchase at: $" + seatPriceSecond);
            display2(planeSeats + " seats left before before price increment");
        }
        else if (planeSeats === 1){
            console.log("You have purchase the last seat for: $91,000.");
            display("You have purchase at: $91,000");
            display2(" ");
        }
        else {
            console.log("There is no available seats.")
            display("There is no available seats.");
            display2(" ");
        }

    }