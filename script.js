console.log("hello script js");

//DO NOT TOUCH
document.querySelector('#input').addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            var input = event.target.value;//currentInput gets the value of what is written
            event.target.value = ""
            if(path === 1){
                document.querySelector("#input").placeholder = "Which Destination?"
                var output = checkFlight(input);
                //var output = checkFlight(input); //call function
                display( output );
            } else if (path === "Bali"){
                var output = checkClass(input);
                //var output = checkFlight(input); //call function
                display( output );
            } else if (path === "KL" || path === "Buy KL tickets"){
                var output = KLPlane(input);
                display(output);
            } else if (path === "First Class" || path === "Buy First Class"){
                var output = firstClass(input);
                display(output);
            } else if (path === "Business Class" || path === "Buy Business Class"){
                var output = businessClass(input);
                display(output);
            } else if (path === "Economy Class" || path === "Buy Economy Class"){
                var output = economyClass(input);
                display(output);
            }
        }
      });

var display = function( data ){
        var output = document.querySelector('#output');
        output.innerText = data;
}

//WORK HERE

var econTicketsBought = 0;
var busTicketsBought = 0;
var fcTicketsBought = 0;
var KLTicketsBought = 0;
var priceOfKLTicket = 50;
var priceOfFCTicket = 50;
var priceOfBusTicket = 50;
var priceOfEconTicket = 50;
var cancel = false;
var path = 1;

// var displayPriceKL = function(input){
//     path = "Buy KL tickets"
//     return `Price of KL tickets: ${priceOfKLTicket}\nPlease select buy or cancel.`
// }

var checkFlight = function(input){
    if(input === "KL"){
        path = "KL"
        return KLPlane();
    } else if(input === "Bali") {
        path = "Bali"
        return checkClass();
    } else if (input === "secret") {
        document.getElementById('secret').style.display = "block";
        return "YOU'VE UNLOCKED THE SECRET PARROT! YOU WILL BE BLESSED WITH GOOD CODING EXPERIENCE!"
    } else {
        return "Please choose:\nKL\nBali";
    }
}


var checkClass = function(input){
    document.querySelector("#input").placeholder = "Which flight class?"
    if(input === "first class"){
        path = "First Class"
        return firstClass();
    } else if (input === "business class"){
        path = "Business Class"
        return businessClass();
    } else if (input === "economy class"){
        path = "Economy Class"
        return economyClass();
    } else {
        return "Choose one:\nfirst class\nbusiness class\neconomy class"
    }
}

var firstClass = function(input){
    if(path === "First Class"){
        if (cancel === false){
            if(fcTicketsBought == 4){
                path = 1;
                return "First Class tickets all sold out!"
            } else if(fcTicketsBought >= 3){
                priceOfFCTicket = 191000.00;
            } else {
                var percentIncrease = 1 + (fcTicketsBought * 0.15);
                priceOfFCTicket = 50 * percentIncrease
                priceOfFCTicket = priceOfFCTicket.toFixed(2);
            }
        } else {
            priceOfFCTicket = priceOfFCTicket;
        }
        //Calculate money
        path = "Buy First Class"
        document.querySelector("#input").placeholder = "Your decision..."
        return `Price of Bali First class tickets: $${priceOfFCTicket}\nPlease select buy or cancel.`
    } else if (path === "Buy First Class"){
        if(input != "buy" && input != "cancel"){
            return "Please enter buy or cancel"
        } else if(input=="cancel"){
            cancel = true;
            path = 1;
            return "Purchase canceled";
        } else if (input == "buy"){
            cancel = false;
            if (fcTicketsBought == 3) {
                path = 1
                fcTicketsBought++;
                return "Thank you for falling into our scam!\nPrice: $191,000\nAll tickets are sold out!";
            } else {
                path = 1;
                fcTicketsBought++;
                var ticketsLeft = 4 - fcTicketsBought;
                return (`Thank you for buying!\nPrice of ticket: ${priceOfFCTicket}\nPlane tickets left: ${ticketsLeft}`);
            }
        }
    }
}



var businessClass = function(input){
    if (path === "Business Class"){
        if (cancel === false){
            if(busTicketsBought == 6){
                path = 1;
                return "Business Class tickets all sold out!"
            } else if(busTicketsBought >= 5){
                priceOfBusTicket = 91000.00;
            } else if (busTicketsBought >= 3){
                priceOfBusTicket = priceOfBusTicket * 1.1
                priceOfBusTicket = priceOfBusTicket.toFixed(2);
            } else if (busTicketsBought > 0){
                priceOfBusTicket = priceOfBusTicket * 1.06
                priceOfBusTicket = priceOfBusTicket.toFixed(2);
            }
        } else {
            priceOfBusTicket = priceOfBusTicket;
        }
        path = "Buy Business Class";
        document.querySelector("#input").placeholder = "Your decision...";
        return `Price of Bali Business class tickets: $${priceOfBusTicket}\nPlease select buy or cancel.`
    } else if (path === "Buy Business Class"){

        if(input != "buy" && input != "cancel"){
            return "Please enter buy or cancel"
        } else if(input == "cancel"){
            cancel = true
            path = 1;
            return "Purchase canceled";
        } else if (input == "buy"){
            cancel = false;
            if (busTicketsBought == 5) {
                path = 1;
                busTicketsBought++;
                return "Thank you for falling into our scam!\nPrice: $91,000\nAll tickets are sold out!"
            } else if (busTicketsBought >= 3){
                path = 1;
                busTicketsBought++;
                var ticketsLeft = 6 - busTicketsBought;
                return `Thank you for buying!\nPrice: $${priceOfBusTicket}\nPlane tickets left: ${ticketsLeft}`
            } else {
                path = 1;
                busTicketsBought++;
                var ticketsLeft = 6 - busTicketsBought;
                return `Thank you for buying!\nPrice: $${priceOfBusTicket}\nPlane tickets left: ${ticketsLeft}`
            }
        }
    }
}

var economyClass = function(input){
    if(path === "Economy Class" ){
        if (cancel === false){
            if(econTicketsBought == 15){
                path = 1;
                return "Economy Class tickets all sold out!"
            } else if(econTicketsBought >= 5){
                priceOfEconTicket = 91000.00;
            } else if (econTicketsBought >= 3){
                priceOfEconTicket = priceOfEconTicket * 1.05
                priceOfEconTicket = priceOfEconTicket.toFixed(2);
            } else if (econTicketsBought > 0){
                priceOfEconTicket = priceOfEconTicket * 1.03
                priceOfEconTicket = priceOfEconTicket.toFixed(2);
            }
        } else {
            priceOfEconTicket = priceOfEconTicket;
        }
        path = "Buy Economy Class";
        document.querySelector("#input").placeholder = "Your decision...";
        return `Price of Bali Economy class tickets: $${priceOfEconTicket}\nPlease select buy or cancel.`
    } else if (path === "Buy Economy Class"){
        if(input != "buy" && input != "cancel"){
            return "Please enter buy or cancel"
        } else if(input == "cancel"){
            cancel = true;
            path = 1;
            return "Purchase canceled";
        } else if (input == "buy"){
            cancel = false;
            if (econTicketsBought == 14) {
                path = 1
                econTicketsBought++;
                return "Thank you for falling into our scam!\nPrice: $91,000\nAll tickets are sold out!"
            } else if (econTicketsBought > 7){ //5 Tickets bought is more than 4, and 5 ticket bought is half, thus the next ticket sold is 6.
                path = 1;
                econTicketsBought++;
                var ticketsLeft = 15 - econTicketsBought;
                return `Thank you for buying!\nPrice: $${priceOfEconTicket}\nPlane tickets left: ${ticketsLeft}`
            } else {
                path = 1;
                econTicketsBought++;
                var ticketsLeft = 15 - econTicketsBought;
                return `Thank you for buying!\nPrice: $${priceOfEconTicket}\nPlane tickets left: ${ticketsLeft}`
            }
        }
    }
};

var KLPlane = function(input){
    //Define Price of KL Tickets
    if (path === "KL"){
        if(cancel === false){
            if(KLTicketsBought == 10){
                path = 1;
                return "KL tickets all sold out!"
            } else if(KLTicketsBought  >= 9){
                priceOfKLTicket = 91000.00;
            } else if (KLTicketsBought > 4) {
                priceOfKLTicket = priceOfKLTicket * 1.05
                priceOfKLTicket = priceOfKLTicket.toFixed(2)
            } else if (KLTicketsBought > 0) {
                priceOfKLTicket = priceOfKLTicket * 1.03
                priceOfKLTicket = priceOfKLTicket.toFixed(2)
            }
        } else {
            priceOfKLTicket = priceOfKLTicket;
        }

        path = "Buy KL tickets"
        document.querySelector("#input").placeholder = "Your decision..."
        return `Price of KL tickets: $${priceOfKLTicket}\nPlease select buy or cancel.`
    } else if (path === "Buy KL tickets") {
        if(input != "buy" && input != "cancel"){
            return "Please enter buy or cancel"
        } else if(input=="cancel"){
            path = 1;
            cancel = true;
            return "Purchase canceled";
        } else if (input == "buy"){
            cancel = false;
            if (KLTicketsBought == 9) {
                KLTicketsBought++;
                path = 1;
                return "Thank you for falling into our scam!\nPrice: $91,000\nAll tickets are sold out!"
            } else if (KLTicketsBought > 4){ //5 Tickets bought is more than 4, and 5 ticket bought is half, thus the next ticket sold is 6.
                KLTicketsBought++;
                var ticketsLeft = 10 - KLTicketsBought;
                path = 1;
                return `Thank you for buying!\nPrice: $${priceOfKLTicket}\nPlane tickets left: ${ticketsLeft}`
            } else {
                KLTicketsBought++;
                var ticketsLeft = 10 - KLTicketsBought;
                path = 1;
                return `Thank you for buying!\nPrice: $${priceOfKLTicket}\nPlane tickets left: ${ticketsLeft}`
            }
        }
    }
};