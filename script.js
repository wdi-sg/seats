console.log("hello script js");

var destination = ""
var ticketClass = ""
var seatsLeftFirst = 4;
var seatsLeftBiz = 6;
var seatsLeftEcon = 15;
var ticketPriceFirst = 50;
var ticketPriceBiz = 50;
var ticketPriceEcon = 50;


var inputHappened = function(currentInput){
    //If Bali
    if (currentInput === "Bali"){

        destination = "Bali"

        document.getElementById("input").value = "";

        return `Do you want first class, business class, or economy class ticket`
    }

    //Check if First Class
    else if (currentInput === "buy first class" && destination === "Bali"){
        //determine ticket Class
        ticketClass = "first"

        //initialize input box
        document.getElementById("input").value = "";

        return `There are ${seatsLeftFirst} seats left, the price of your ticket is $${ticketPriceFirst}. Please type buy to buy this seat.`;
    }

    //Check if Biz class
    else if (currentInput === "buy business class" && destination === "Bali"){
        //determine ticket Class
        ticketClass = "biz"

        //initialize input box
        document.getElementById("input").value = "";

        return `There are ${seatsLeftBiz} seats left, the price of your ticket is $${ticketPriceBiz}. Please type buy to buy this seat.`;
    }

    //Check if Economy Class
    else if (currentInput === "buy economy class" && destination === "Bali"){
        //determine ticket Class
        ticketClass = "economy"

        //initialize input box
        document.getElementById("input").value = "";

        return `There are ${seatsLeftEcon} seats left, the price of your ticket is $${ticketPriceEcon}. Please type buy to buy this seat.`;
    }

    else if (currentInput === "buy" && destination === "Bali"){

        // First Class Ticket Buy
        if(ticketClass === "first"){
            if(seatsLeftFirst > 1){
                ticketPriceFirst = (ticketPriceFirst * 1.15).toFixed(2);
            }else if(seatsLeftFirst === 1){
                ticketPriceFirst = 91000;
            }else{
                return "There are no more first class seats left"
            }

            //Deduct seat
            seatsLeftFirst--;

            //initialize input box
            document.getElementById("input").value = "";

            return `Thank you for your purchase. your first class ticket is $${ticketPriceFirst}. There are ${seatsLeftFirst} seats left`

        // Business Class Ticket Buy
        }else if(ticketClass === "biz"){
            if(seatsLeftBiz > 5){
                ticketPriceBiz = (ticketPriceBiz * 1.06).toFixed(2);
            }else if(seatsLeftBiz > 1 && seatsLeftBiz < 6){
                ticketPriceBiz = (ticketPriceBiz * 1.10).toFixed(2);
            }else if(seatsLeftBiz === 1){
                ticketPriceBiz = 91000;
            }else{
                return "There are no more business class seats left"
            }

            //Deduct seat
            seatsLeftBiz--;

            //initialize input box
            document.getElementById("input").value = "";

            return `Thank you for your purchase. your business class ticket is $${ticketPriceBiz}. There are ${seatsLeftBiz} seats left`


        // Economy Class Ticket Buy
        }else if(ticketClass === "economy"){
            if(seatsLeftBiz > 5){
                ticketPriceBiz = (ticketPriceBiz * 1.03).toFixed(2);
            }else if(seatsLeftBiz > 1 && seatsLeftBiz < 6){
                ticketPriceBiz = (ticketPriceBiz * 1.05).toFixed(2);
            }else if(seatsLeftBiz === 1){
                ticketPriceBiz = 91000;
            }else {
                return "There are no more economy class seats left"
            }

            //Deduct Seat
            seatsLeftEcon--;

            //initialize input box
            document.getElementById("input").value = "";

            return `Thank you for your purchase. your economy class ticket is $${ticketPriceEcon}. There are ${seatsLeftBiz} seats left`

        }
    }

    else if(currentInput === "cancel"){
        destination = "";
        ticketClass = "";

        return `You have cancelled your order. Please choose destination then seat again.`
    }

    else if(currentInput === "KL"){
        destination = "Bali"

        document.getElementById("input").value = "";

        return `Type Buy to purchase ticket.`
    }

    else if(currentInput === "buy" && destination === "KL"){
        // 10 seat plane stuff.
    }
};

// var cabinPlane = function(currentInput){
//     //Check user input
//   //If user buys first class
//   if (currentInput === "buy first class"){

//     if(seatsLeftFirst > 1){
//         ticketPriceFirst = (ticketPriceFirst * 1.15).toFixed(2);
//     }else if(seatsLeftFirst === 1){
//         ticketPriceFirst = 91000;
//     }else{
//         return "There are no more first class seats left"
//     };

//     seatsLeftFirst--;

//     //initialize input box
//     document.getElementById("input").value = "";

//     return `There are ${seatsLeftFirst} seats left, the price of your ticket is $${ticketPriceFirst}`;
//   }

//   //If user buys business class
//   else if(currentInput === "buy business class"){

//     if(seatsLeftBiz > 5){
//         ticketPriceBiz = (ticketPriceBiz * 1.06).toFixed(2);
//     }else if(seatsLeftBiz > 1 && seatsLeftBiz < 6){
//         ticketPriceBiz = (ticketPriceBiz * 1.10).toFixed(2);
//     }else if(seatsLeftBiz === 1){
//         ticketPriceBiz = 91000;
//     }else{
//         return "There are no more business class seats left"
//     }


//     seatsLeftBiz--;

//     //initialize input box
//     document.getElementById("input").value = "";

//     return `There are ${seatsLeftBiz} seats left, the price of your ticket is $${ticketPriceBiz}`;
//   }

//   //If user buys Economy class
//   else if(currentInput === "buy economy class"){
//     if(seatsLeftBiz > 5){
//         ticketPriceBiz = (ticketPriceBiz * 1.03).toFixed(2);
//     }else if(seatsLeftBiz > 1 && seatsLeftBiz < 6){
//         ticketPriceBiz = (ticketPriceBiz * 1.05).toFixed(2);
//     }else if(seatsLeftBiz === 1){
//         ticketPriceBiz = 91000;
//     }else{
//         return "There are no more economy class seats left"
//     }

//     seatsLeftEcon--;

//     //initialize input box
//     document.getElementById("input").value = "";

//     return `There are ${seatsLeftEcon} seats left, the price of your ticket is $${ticketPriceEcon}`;
//   }

//   else{
//     //initialize input box
//     document.getElementById("input").value = "";

//     return "Please type in 'buy first class' or 'buy business class' or 'buy economy class' in the white box to buy ticket"
//   }
// }