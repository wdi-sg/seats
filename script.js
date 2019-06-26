console.log("hello script js");
var economyTicketPrice = 50;
var economySeats = 15;
var businessTicketPrice = 50;
var businessSeats = 6;
var firstClassTicketPrice = 50;
var firstClassSeats = 4;


var inputHappened = function(currentInput){

  switch(currentInput){
    case "buy economy class":
        economyClass();
        break;
    case "buy business class":
        businessClass();
        break;
    case "buy first class":
        firstClass();
        break;
    default:
        display("What?");
        break;
  }
}


var economyClass = function(){
    if(economySeats > 1){
        economySeats -= 1;
        display(`Tickets left: ${economySeats}\nYour ticket price is \$${economyTicketPrice.toFixed(2)}.`)
        economyTicketPrice  *= ticketPriceCalEco(economySeats);
        console.log(economySeats+" *"+ticketPriceCalEco()+" = "+economyTicketPrice);
    }
    else if(economySeats === 1){
        economySeats -= 1;
        economyTicketPrice  = 91000;
        display(`Tickets left: ${economySeats}\nYour ticket price is \$${economyTicketPrice.toFixed(2)}.`)
    }
    else {
        display("Tickets for Economy class is sold out sorry...\n Try Business or First class.")
    }
}

var ticketPriceCalEco = function(){
    if(economySeats>8)
        return 1.03
    else if(economySeats > 1 && economySeats <=8)
        return 1.05
}


var businessClass = function(){
    if(businessSeats > 1){
        businessSeats -= 1;
        display(`Tickets left: ${businessSeats}\nYour ticket price is \$${businessTicketPrice.toFixed(2)}.`)
        businessTicketPrice  *= ticketPriceCalBuis(businessSeats);
        console.log(businessSeats+" *"+ticketPriceCalBuis()+" = "+businessTicketPrice);
    }
    else if(businessSeats === 1){
        businessSeats -= 1;
        businessTicketPrice  = 91000;
        display(`Tickets left: ${businessSeats}\nYour ticket price is \$${businessTicketPrice.toFixed(2)}.`)
    }
    else {
        display("Tickets for Business class sold out sorry...\n Try Economy or First class.")
    }
}


var ticketPriceCalBuis = function(){
    if(businessSeats>3)
        return 1.06
    else if(businessSeats > 1 && businessSeats <=3)
        return 1.10
}


var firstClass = function(){
    if(firstClassSeats > 1){
        firstClassSeats -= 1;
        display(`Tickets left: ${firstClassSeats}\nYour ticket price is \$${firstClassTicketPrice.toFixed(2)}.`)
        firstClassTicketPrice  += 50*0.15
        console.log(firstClassSeats+" = "+firstClassTicketPrice);
    }
    else if(firstClassSeats === 1){
        firstClassSeats -= 1;
        firstClassTicketPrice  = 191000;
        display(`Tickets left: ${firstClassSeats}\nYour ticket price is \$${firstClassTicketPrice.toFixed(2)}.`)
    }
    else {
        display("Tickets for First class is sold out sorry...\n Try Business or Economy class.")
    }
}