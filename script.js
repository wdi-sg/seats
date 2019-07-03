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

//part 1
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

//part 2
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

//part 3
/*
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
*/


//the price of the tickets will increase by 3% and 5%
//part 4
/*
var planeSeats = 10;
var seatPrice = 50;

var inputHappened = function(userInput){
    //if(userInput === "buy"){
        console.log("You have purchase at: $" + seatPrice);
        planeSeats = planeSeats - 1;
        console.log("Seats available: " + planeSeats);
        if (planeSeats > 5){
            seatPrice = (seatPrice * 0.03) + seatPrice;
            console.log("Next seat price: $" + seatPrice);

            display("You have purchase at: $" + seatPrice);

            display2(planeSeats + " seats left before before price increment");
        }
        else if (planeSeats <= 5 && planeSeats >0){
            seatPrice = (seatPrice * 0.05) + seatPrice;
            console.log("Next seat price: $" + seatPrice);

            display("You have purchase at: $" + seatPrice);
            display2(planeSeats + " seats left before before price increment");
        }

        else {
            console.log("There is no available seats.")
            display("There is no available seats.");
            display2(" ");
        }

    }
*/

//part 5
/*
var planeSeats = 10;
var seatPrice = 50;

display2("Please enter 'buy' or leave");
var inputHappened = function(userInput){
    if(userInput == "buy"){
        console.log(userInput);
        console.log("You have purchase at: $" + seatPrice);
        planeSeats = planeSeats - 1;
        console.log("Seats available: " + planeSeats);
        if (planeSeats > 5){
            seatPrice = (seatPrice * 0.03) + seatPrice;
            console.log("Next seat price: $" + seatPrice);

            display("You have purchase at: $" + seatPrice);

            display2(planeSeats + " seats left before before price increment");
        }
        else if (planeSeats <= 5 && planeSeats >0){
            seatPrice = (seatPrice * 0.05) + seatPrice;
            console.log("Next seat price: $" + seatPrice);

            display("You have purchase at: $" + seatPrice);
            display2(planeSeats + " seats left before before price increment");
        }

        else {
            console.log("There is no available seats.")
            display("There is no available seats.");
            display2(" ");
        }
    }
    else{
        display2("Please enter 'buy' or leave");
        console.log("Please enter 'buy' or leave");
    }
}
*/

//3 cabins (economy business first class)
//economy seats = 15
    //priceseat 15 -8 is 3% and 7 -1 is 5%

//business = 6
    //priceseat 6-4 is 6% and 3-1 10%

//firstclass = 4
    //allseats is 15%

var seatPrice = 50;
var economy = 15;
var business = 6;
var first = 4;
var economyPrice = 0;
var businessPrice = 0;
var firstPrice = 0;

display("Welcome to JY airline. Please enter first, business or economy to purchase your seats. Thank You");
var seatPriceEconomy = function(seatPrice){
    if(economy === 15){
        economy = economy - 1;
        display("You have purchase at: $" + seatPrice);
        display2("Seat available in Economy Class: " + economy);
    }
    else if(economy <= 14 && economy > 7){
        economyPrice = (seatPrice * 0.03) + seatPrice;
        economy = economy - 1;
        display("You have purchase at: $" + economyPrice);
        display2("Seat available in Economy Class: " + economy);
    }
    else if(economy <= 7 && economy > 1){
        economyPrice = (seatPrice * 0.05) + seatPrice;
        economy = economy - 1;
        display("You have purchase at: $" + economyPrice);
        display2("Seat available in Economy Class: " + economy);
    }
    else if(economy === 1){
        economy = economy - 1
        display("You have purchase the last seat at: $91,000");
    }
    else if(economy <= 0){
        display2("No available seat");
    }
}

var seatPriceBusiness = function(seatPrice){
    if(business === 6){
        business = business - 1;
        display("You have purchase at: $" + seatPrice);
        display2("Seat available in Business Class: " + business);
    }
    else if(business < 6 && business >= 4){
        businessPrice = (seatPrice * 0.06) + seatPrice;
        business = business - 1;
        display("You have purchase at: $" + businessPrice);
        display2("Seat available in Business Class: " + business);
    }
    else if(business < 4 && business > 1){
        businessPrice = (seatPrice * 0.1) + seatPrice;
        business = business - 1;
        display("You have purchase at: $" + businessPrice);
        display2("Seat available in Business Class: " + business);
    }
    else if(business === 1){
        business = business - 1
        display("You have purchase the last seat at: $91,000");
    }
    else if(business <= 0){
         display2("No available seat");
    }
}


var seatPriceFirst = function(seatPrice){
    if(first === 4){
        first = first - 1;
        display("You have purchase at: $" + seatPrice);
        display2("Seat available in First Class: " + first);
    }
    else if(first>1){
        firstPrice = (seatPrice * 0.15) + seatPrice;
        first = first - 1;
        display("You have purchase at: $" + firstPrice);
        display2("Seat available in Business Class: " + first);
    }
    else if(first === 1){
        first = first - 1
        display("You have purchase the last seat at: $191,000");
    }
    else if(first <= 0){
        display2("No available seat")
    }
}

console.log("Please Enter 'first', 'business' or 'economy' to puchase your seat");
var inputHappened = function(userInput){
    if (userInput == "first"){
        seatPriceFirst(seatPrice);
    }
    else if (userInput == "business"){
        seatPriceBusiness(seatPrice);
    }
    else if (userInput == "economy"){
        seatPriceEconomy(seatPrice);
    }
    else{
        display2("You have entered an INVALID entry")
    }
}