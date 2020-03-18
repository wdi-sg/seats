console.log("hello script js");

var seatsLeftFirst = 4;
var seatsLeftBiz = 6;
var seatsLeftEcon = 15;
var ticketPriceFirst = 50;
var ticketPriceBiz = 50;
var ticketPriceEcon = 50;

var inputHappened = function(currentInput){
  console.log( currentInput );

  //Check user input
  //If user buys first class
  if (currentInput === "buy first class"){

    if(seatsLeftFirst > 1){
        ticketPriceFirst = (ticketPriceFirst * 1.15).toFixed(2);
    }else if(seatsLeftFirst === 1){
        ticketPriceFirst = 91000;
    }else{
        return "There are no more first class seats left"
    };

    seatsLeftFirst--;

    //initialize input box
    document.getElementById("input").value = "";

    return `There are ${seatsLeftFirst} seats left, the price of your ticket is $${ticketPriceFirst}`;
  }

  //If user buys business class
  else if(currentInput === "buy business class"){

    if(seatsLeftBiz > 5){
        ticketPriceBiz = (ticketPriceBiz * 1.06).toFixed(2);
    }else if(seatsLeftBiz > 1 && seatsLeftBiz < 6){
        ticketPriceBiz = (ticketPriceBiz * 1.10).toFixed(2);
    }else if(seatsLeftBiz === 1){
        ticketPriceBiz = 91000;
    }else{
        return "There are no more business class seats left"
    }


    seatsLeftBiz--;

    //initialize input box
    document.getElementById("input").value = "";

    return `There are ${seatsLeftBiz} seats left, the price of your ticket is $${ticketPriceBiz}`;
  }

  //If user buys Economy class
  else if(currentInput === "buy economy class"){
    if(seatsLeftBiz > 5){
        ticketPriceBiz = (ticketPriceBiz * 1.03).toFixed(2);
    }else if(seatsLeftBiz > 1 && seatsLeftBiz < 6){
        ticketPriceBiz = (ticketPriceBiz * 1.05).toFixed(2);
    }else if(seatsLeftBiz === 1){
        ticketPriceBiz = 91000;
    }else{
        return "There are no more economy class seats left"
    }

    seatsLeftEcon--;

    //initialize input box
    document.getElementById("input").value = "";

    return `There are ${seatsLeftEcon} seats left, the price of your ticket is $${ticketPriceEcon}`;
  }

  else{
    //initialize input box
    document.getElementById("input").value = "";

    return "Please type in 'buy first class' or 'buy business class' or 'buy economy class' in the white box to buy ticket"
  }

};