console.log("hello script js");

let seatsAvailable = 10;
document.getElementById("ticketsLeft").innerHTML = seatsAvailable;
//A plane has 10 seats.

let priceSeats = 50;
let bracketChange = "You get the best price available";
document.getElementById("bracketChange").innerHTML = bracketChange;
//When the plane is empty a seat is $50. So it's our base price.

var inputHappened = function(currentInput){
  console.log( currentInput );
  return customerPrice(currentInput);
};

function customerPrice(currentInput){
//If something is written in input then
  if (currentInput !== ""){
    //And the number of seats still available is greater than 0
    while(seatsAvailable >= 0) {
        //Then, when the plane is empty a seat is $50.
        if (seatsAvailable == 10){
        priceSeats = priceSeats * 1;
        var result = "You've purchased a ticket for $" + priceSeats;
        console.log(result);
        document.getElementById("ticketsLeft").innerHTML = seatsAvailable - 1;
        //document.getElementById("bracketChange").innerHTML = FORMULA TO FIND? + " before you enter a new price category";//
        }
          //For the first half of the seats, the price goes up 3% over the original price of $50.
          else if (seatsAvailable < 10 && seatsAvailable > 5){
            priceSeats = priceSeats * 1.03;
            priceSeats = priceSeats.toFixed(2);
            var result = "You've purchased a ticket for $" + priceSeats;
            console.log(result);
            document.getElementById("ticketsLeft").innerHTML = seatsAvailable - 1;
            }
                //For the second half it goes up by 5% over the original price of $50.
                else if (seatsAvailable <= 5 && seatsAvailable > 1){
                priceSeats = priceSeats * 1.05;
                priceSeats = priceSeats.toFixed(2);
                var result = "You've purchased a ticket for $" + priceSeats;
                console.log(result);
                document.getElementById("ticketsLeft").innerHTML = seatsAvailable - 1;
                }
                    //The last seat is $91,000.
                    else if (seatsAvailable == 1){
                    priceSeats = 91000;
                    var result = "You've purchased a ticket for $" + priceSeats;
                    console.log(result);document.getElementById("ticketsLeft").innerHTML = seatsAvailable - 1;
                    }
            //if none of the conditions above are matched, let the user know there are no more seats left.
            else{
            var result = "There are no more seats available on this flight, please choose an alternative option.";
            console.log(result);
            }
        seatsAvailable--;
        return result;
        }
    }
    else if (currentInput == ""){
    var waiting = "Please enter the value above to know your price and the number of seats left."
    console.log(waiting);
    return waiting;
    }
}

/* new version */