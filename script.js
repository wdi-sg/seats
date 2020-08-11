console.log("hello script js");
var ecoSeats = 15, bizSeats = 6, firstSeats = 4;
var ecoPrice = 50, bizPrice = 50, firstPrice = 50;
var currentPriceEco = 50, currentPriceBiz = 50, currentPriceFirst = 50;
var state = 0, klSeats = 15, currentPriceEcoKl = 50;
var inputHappened = function(currentInput){
    if(currentInput.toLowerCase() == "bali"){
            state = 1;
            return output();
        }
    if(currentInput.toLowerCase() == 'kl'){
        state = 2;
        return outputEcoKl(10);
    }
    if(currentInput.toLowerCase() == "cancel"){
        state = 0;
        return "Do you want to go to KL or Bali?";
    }
    if(state == 1) {
        if(currentInput.toLowerCase() == "buy first class"){
            increasePrice("f", firstSeats);
            return output(firstSeats);
        }
        if(currentInput.toLowerCase() == "buy business class"){
                increasePrice("b", bizSeats);
                return output(bizSeats);
        }
        if(currentInput.toLowerCase() == "buy economy class"){
                increasePrice("e", ecoSeats);
                return output(ecoSeats);
        }
        else
            return "Please input valid buy option. [Buy first class, Buy Business class or Buy Economy class.] \n\n" + output();
    }
    if(state == 2){
        if(currentInput.toLowerCase() == "buy"){
            increasePrice("ek", klSeats);
            return outputEcoKl(klSeats);
        }
        else
            return "Please input 'buy' to buy ticket or 'cancel' to go back to the previous menu. \n" + outputEcoKl(klSeats);
    }
    else
        return "Please input valid destination, 'KL' or 'Bali'.";
};
function increasePrice(x, seats) {
    switch(x) {
        case "f":{
            firstSeats--;
            if(seats !== 2)
                {currentPriceFirst *= 1.15; break;}
            else
                {currentPriceFirst = 191000; break;}
        }
        case "b": {
            bizSeats--;
            if(seats == 2)
                {currentPriceBiz = 91000; break;}
            else if(seats < 4)
                {currentPriceBiz *= 1.1; break;}
            else
                {currentPriceBiz *= 1.06; break;}
        }
        case "e": {
            ecoSeats--;
            if(seats == 2)
                {currentPriceEco = 91000; break;}
            else if(seats < 9)
                {currentPriceEco *= 1.05; break;}
            else
                {currentPriceEco *= 1.03; break;}
        }
        case "ek": {
            klSeats--;
            if(seats == 2)
                {currentPriceEcoKl = 91000; break;}
            else if(seats < 9)
                {currentPriceEcoKl *= 1.05; break;}
            else
                {currentPriceEcoKl *= 1.03; break;}
        }
    }
}
function output() {
    return outputEco(ecoSeats) + outputBiz(bizSeats) + outputFirst(firstSeats);
}
function outputEco(x) {
    return x <= 0 ? "Current available seats are: \n No more seats for Economy Class." : "Current available seats are: \n Economy: " + ecoSeats + "/15 seats. Current Price: $" + currentPriceEco.toFixed(2);
}
function outputBiz(x) {
    return x <= 0 ? "\n No more seats for Business Class." : ".\n Business: " + bizSeats + "/6 seats. Current Price: $" + currentPriceBiz.toFixed(2);
}
function outputFirst(x) {
    return x <= 0 ? "\n No more seats for First Class \n Type 'cancel' to go back." : ".\n First Class: " + firstSeats + "/4 seats. Current Price: $" + currentPriceFirst.toFixed(2) + ". \n Type 'cancel' to go back.";
}
function outputEcoKl(x) {
    return x <= 0 ? "Current available seats are: \n No more seats for Economy Class to KL. \n Type 'cancel' to go back." : "Current available seats are: \n Economy: " + klSeats + "/15 seats. Current Price: $" + currentPriceEcoKl.toFixed(2) + "\n Type 'cancel' to go back.";
}