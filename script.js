//count of seats bought
var economyBought = 0;
var businessBought = 0;
var firstClassBought = 0;
//price of each cabin
var economyPrice = 50;
var businessPrice = 50;
var firstClassPrice = 50;

//buy ticket function
var buyTicket = function(currentInput){
    //assign currentInput to cabin variable and converting it to lowercase
    var cabin = currentInput.toLowerCase();

    //check cabin variable
    switch (cabin){
        // if cabin variable is economy
        case "economy" :
            //add to economy seat count
            economyBought++;
            //if there is more than half of cabin seats left
            if (economyBought < 8) {
                economyPrice=(economyPrice*1.03).toFixed(2);
            }
            //if there is less than half of cabin seats left AND if there is at least 2 seats available
            else if (economyBought >= 8 && economyBought <14){
                economyPrice=(economyPrice*1.05).toFixed(2);
            }
            //if it is the last cabin seat
            else if (economyBought === 14){
                economyPrice = 91000;
            }
            let economyMsg = `Economy (${(15-economyBought)} seats left) – $${economyPrice}`
            if (economyBought >=15) {
                economyMsg = "Economy tickets sold out!";
            }
            displayEconomy(economyMsg);
            break;

        // if cabin variable is business
        case "business" :
            //add to business seat count
            businessBought++;
            if (businessBought < 4) {
                businessPrice=(businessPrice*1.06).toFixed(2);
            }
            //if there is less than half of cabin seats left AND if there is at least 2 seats available
            else if (businessBought >= 4 && businessBought <6){
                businessPrice=(businessPrice*1.1).toFixed(2);
            }
            //if it is the last cabin seat
            else if (businessBought === 5){
                businessPrice = 91000;
            }
            let businessMsg = `Business (${(6-businessBought)} seats left) – $${businessPrice}`
            if (businessBought >=6) {
                businessMsg = "Business tickets sold out!";
            }
            displayBusiness(businessMsg);
            break;

        // if cabin variable is first class
        case "first class" :
            //add to first class seat count
            firstClassBought++;
            if (firstClassBought < 3) {
                firstClassPrice=(firstClassPrice*1.06).toFixed(2);
            }
            else if (firstClassBought === 3){
                firstClassPrice = 91000;
            }
            let firstClassMsg = `First Class (${(4-firstClassBought)} seats left) – $${firstClassPrice}`
            //if it is the last cabin seat
            if (firstClassBought >=4) {
                firstClassMsg = "First Class tickets sold out!";
            }
            displayFirstClass(firstClassMsg);
            break;
    }
    /*
    if (currentInput.toLowerCase() === "economy"){
        numberOfBuys ++;
        document.querySelector('#input').value = "";
        if (moreThanHalf()) {
            currentPrice = (currentPrice * 1.03).toFixed(2);
        }
        else {
            if ((totalSeats - numberOfBuys) === 1){
                currentPrice = 91000;
            }
            else {
                currentPrice = (currentPrice * 1.05).toFixed(2);
            }
        }
        displayValue = `Current price: $${currentPrice}. Number of seats left:<br>${(totalSeats-numberOfBuys)}`;
        if (numberOfBuys === totalSeats) {
            displyValue = `Sold Out!<br>Number of seats left:<br>${(totalSeats-numberOfBuys)}`;
            return;
        }
        displayError("");
        display(displayValue);
    }
    else {
        displayError('Please type "buy" to buy a ticket.');
    }
    */
};