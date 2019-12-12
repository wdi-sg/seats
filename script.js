console.log("hello script js");

//Global Var
var ecoPlaneSeats = 0;
var busPlaneSeats = 0;
var firstPlaneSeats = 0;
var ecoPrice = 0;
var busPrice = 0;
var firstPrice = 0;
var ecoSeatsLeft;
var busSeatsLeft;
var firstSeatsLeft;

//First class
var firstClass = {
    seats: 4,
    class: "first"
}
//Business class
var businessClass = {
    seats: 6,
    class: "business"
}
//Economy class
var economyClass = {
    seats: 15,
    class: "economy"
}

//Calculate new price
function firstSeatPrice(){
    if(firstPlaneSeats === 0){
       var output = 50;
        firstPrice = output;
        firstPlaneSeats ++;
        firstSeatsLeft = firstClass.seats;
        firstSeatsLeft --;
        return output;
    }else if(firstPlaneSeats >= 1 && firstPlaneSeats < 3){
        var output = firstPrice * (115/100);
        firstPlaneSeats ++;
        firstSeatsLeft --;
        return output;
    }else if (firstPlaneSeats === 3){
        var output = 191000;
        firstPrice = output;
        return output;
    }
}

function busSeatPrice(){
    if(busPlaneSeats === 0){
       var output = 50;
        busPrice = output;
        busPlaneSeats ++;
        busSeatsLeft = businessClass.seats;
        busSeatsLeft--;
        return output;
    }else if(busPlaneSeats >= 1 && busPlaneSeats <= 2){
        var output = busPrice * (106/100);
        busPrice = output;
        busPlaneSeats ++;
        busSeatsLeft--;
        return output;
    }else if(busPlaneSeats >= 3 && busPlaneSeats >= 4){
        var output = busPrice * (110/100);
        busPrice = output;
        busPlaneSeats ++;
        busSeatsLeft--;
        return output;
    }else if (busPlaneSeats === 5){
        var output = 91000;
        price = output;
        return output;
    }
}

function ecoSeatPrice(){
    if(planeSeats === 0){
       var output = 50;
        price = output;
        planeSeats ++;
        seatsLeft--;
        return output;
    }else if(planeSeats >= 1 && planeSeats <= 5){
        var output = price * (103/100);
        price = output;
        planeSeats ++;
        seatsLeft--;
        return output;
    }else if(planeSeats >= 5 && planeSeats <= 9){
        var output = price * (105/100);
        price = output;
        planeSeats ++;
        seatsLeft--;
        return output;
    }else if (planeSeats === 10){
        var output = 91000;
        price = output;
        return output;
    }
}
//checkInput
function checkInput(currentInput){
    if (currentInput === 'economy') {
        var output = 'economy';
        return output;
    } else if (currentInput === 'business'){
        var output = 'business';
        return output;
    } else if (currentInput === 'first'){
        var output = 'first';
        return output;
    }
}

function inputHappened(currentInput){
if(checkInput(currentInput)){
    seatPrice();
        return "Your ticket price $ " + price.toFixed(2) + " number of tickets left" + seatsLeft;
}
}