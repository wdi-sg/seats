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

        // var clearField = function () {

        //document.querySelector('#input').value
    // }
    // else{
        // console.log("Type buy or leave");
    // }