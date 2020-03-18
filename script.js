console.log("hello script js");

var seatsremaining = 10;
var Originalticketprice = 50;

//numberOfSeatsChose = currentInput

function calculateSeatsremaining(seatsremaining, currentInput) { if(currentInput < seatsremaining) {    seatsremaining = seatsremaining - currentInput
}else{
    return calculateSeatsremaining;
}
}

function calculateTicketPrice(seatsremaining, Originalticketprice) {
    var seatsremaining = 1
    while (seatremaining < 10) { return Originalticketprice * (Originalticketprice * 5/100); seatsremaining++;
}
};

var inputHappened = function(currentInput){
console.log( currentInput );

if (isNaN(currentInput)) {
    return output = "Invalid input!";
}

if (seatsremaining > 0) {
Originalticketprice = Originalticketprice + (Originalticketprice * 5/100);
seatsremaining --;
return Originalticketprice;
}
else if (currentInput < 10) {
return output = currentInput + "tickets sold!";
calculateTicketPrice();
return output =calculateTicketPrice;
}
else {
return output = "Not process";
}
};