console.log(`script.js logging initiated`);

const totalFirstClSeats = 4;
const totalBizSeats = 6;
const totalEconSeats = 15;
const originalPrice = 50;
const lastSeatPrice = 91000;
const lastFCSeatPrice = 191000;
var econSeatsLeft = totalEconSeats;
var bizSeatsLeft = totalBizSeats;
var firstClSeatsLeft = totalFirstClSeats;
var econSeatsSold = totalEconSeats - econSeatsLeft;
var bizSeatsSold = totalBizSeats - bizSeatsLeft;
var firstClSeatsSold = totalFirstClSeats - firstClSeatsLeft;
var salesEconPrice = originalPrice;
var salesBizPrice = originalPrice;
var salesFirstClPric = originalPrice;

// Main Function to coordinate the sequence of processes
var inputHappened = function(currentInput) {
    // set no. of seats sold in one trasaction as 1, could be extended in future application if user can choose to buy more than 1 ticket.
    console.log(`input : ${currentInput}`);
    var upCaseInput = currentInput.toUpperCase();
    var noOfSeatsSold = 1;
    if (chkValidInput(upCaseInput)) {
        switch (upCaseInput) {
            case "F" :
                firstClSeatPurchased(noOfSeatsSold);
                var currentPrice = Math.round(calculatePriceOfFCSeat(firstClSeatsSold) * 100) / 100;
                display(`The price is ${currentPrice}. ${econSeatsLeft} economy seats left. ${bizSeatsLeft} biz class seats left. ${firstClSeatsLeft} 1st Class seats left.`);
                break;
            case "B" :
                bizSeatPurchased(noOfSeatsSold);
                var currentPrice = Math.round(calculatePriceOfBizSeat(bizSeatsSold) * 100) / 100;
                display(`The price is ${currentPrice}. ${econSeatsLeft} economy seats left. ${bizSeatsLeft} biz class seats left. ${firstClSeatsLeft} 1st Class seats left.`);
                break;
            case "E" :
                econSeatPurchased(noOfSeatsSold);
                var currentPrice = Math.round(calculatePriceOfEconSeat(econSeatsSold) * 100) / 100;
                display(`The price is ${currentPrice}. ${econSeatsLeft} economy seats left. ${bizSeatsLeft} biz class seats left. ${firstClSeatsLeft} 1st Class seats left.`);
                break;
            default :
                alert('Error!');


        }



            //var currentPrice = calculatePriceOfSeat(seatsSold);


    } else {
      display(`Invalid Input: ${econSeatsLeft} economy seats left. ${bizSeatsLeft} biz class seats left. ${firstClSeatsLeft} 1st Class seats left.`);
    }


};


var chkValidInput = function(upCaseInput) {
    if ( (upCaseInput === "F" && firstClSeatsLeft > 0) || (upCaseInput === "B" && bizSeatsLeft > 0) || (upCaseInput === "E" && econSeatsLeft > 0) ) {
        return true;
    } else {
        return false;
    }
};

// Logging the sales of seats, and seats left
var firstClSeatPurchased = function(noOfSeatsSold) {
    firstClSeatsLeft = firstClSeatsLeft - noOfSeatsSold;
    firstClSeatsSold = firstClSeatsSold + noOfSeatsSold;
    console.log("seats left: " + firstClSeatsLeft);
    console.log("seats sold: " + firstClSeatsSold);
}

var bizSeatPurchased = function(noOfSeatsSold) {
    bizSeatsLeft = bizSeatsLeft - noOfSeatsSold;
    bizSeatsSold = bizSeatsSold + noOfSeatsSold;
    console.log("seats left: " + bizSeatsLeft);
    console.log("seats sold: " + bizSeatsSold);
}

var econSeatPurchased = function(noOfSeatsSold) {
    econSeatsLeft = econSeatsLeft - noOfSeatsSold;
    econSeatsSold = econSeatsSold + noOfSeatsSold;
    console.log("seats left: " + econSeatsLeft);
    console.log("seats sold: " + econSeatsSold);
}
///////////////////////////////////////////////

////////////////////////////////////////////
// Calculate prices of the various cabins //
////////////////////////////////////////////
var calculatePriceOfFCSeat = function(firstClSeatsSold) {
    console.log("inside calculatePriceOfFCSeat : " + firstClSeatsSold);
    if (firstClSeatsSold > 0 && firstClSeatsSold < 4) {
        salesFirstClPrice = originalPrice * 1.15;
        console.log("SP:" + salesFirstClPrice);

    } else {
        salesFirstClPrice = lastFCSeatPrice;
    }
    return salesFirstClPrice;
};

var calculatePriceOfBizSeat = function(bizSeatsSold) {
    console.log("inside calculatePriceOfBizSeat : " + bizSeatsSold);
    var interest1 = 0.06;
    var interest2 = 0.10;
    if (bizSeatsSold === 1) {
        salesEconPrice = originalPrice;
    } else if (bizSeatsSold > 1 && bizSeatsSold < 4) {
        console.log(`sales:${salesBizPrice} / int:${salesBizPrice*interest1}`);
        salesBizPrice = Math.round((salesBizPrice + (salesBizPrice * interest1)) * 100) / 100;
        console.log("SP:" + salesBizPrice);

    } else if (bizSeatsSold > 3 && bizSeatsSold < 6) {
        console.log(`sales:${salesBizPrice} / int:${salesBizPrice*interest2}`);
        salesBizPrice = Math.round((salesBizPrice + (salesBizPrice * interest2)) * 100) / 100;
        console.log("SP:" + salesBizPrice);
    } else {
        salesBizPrice = lastSeatPrice;
    }
    return salesBizPrice;
};

var calculatePriceOfEconSeat = function(econSeatsSold) {
    console.log("inside calculatePriceOfEconSeat : " + econSeatsSold);
    var interest1 = 0.03;
    var interest2 = 0.05;
    if (econSeatsSold > 0 && econSeatsSold < 8) {
        console.log(`sales:${salesEconPrice} / int:${salesEconPrice*interest1}`);
        salesEconPrice = Math.round((salesEconPrice + (salesEconPrice * interest1)) * 100) / 100;
        console.log("SP:" + salesEconPrice);

    } else if (econSeatsSold > 7 && econSeatsSold < 15) {
        console.log(`sales:${salesEconPrice} / int:${salesEconPrice*interest2}`);
        salesEconPrice = Math.round((salesEconPrice + (salesEconPrice * interest2)) * 100) / 100;
        console.log("SP:" + salesEconPrice);
    } else {
        salesEconPrice = lastSeatPrice;
    }
    return salesEconPrice;
};

/*
var calculatePriceOfSeat = function(seatsSold) {
  console.log("inside calculatePriceOfSeat" + seatsSold);
  var salesPrice = 50 * ((seatsSold - 1) * 0.05) + 50; // ticket price formula y = 50 ((n - 1) * 0.05 ) + 50;
  return salesPrice;

};

var calculatePriceOfSeat2 = function(seatsSold) {
    console.log("inside calculatePriceOfSeat2 : " + seatsSold);
    var interest1 = 0.03;
    var interest2 = 0.05;
    if (seatsSold === 1) {
        salesPrice = originalPrice;
    } else if (seatsSold > 1 && seatsSold < 6) {
        console.log(`sales:${salesPrice} / int:${salesPrice*interest1}`);
        salesPrice = Math.round((salesPrice + (salesPrice * interest1)) * 100) / 100;
        console.log("SP:" + salesPrice);

    } else if (seatsSold > 5 && seatsSold < 10) {
        console.log(`sales:${salesPrice} / int:${salesPrice*interest1}`);
        salesPrice = Math.round((salesPrice + (salesPrice * interest2)) * 100) / 100;
        console.log("SP:" + salesPrice);
    } else {
        salesPrice = lastSeatPrice;
    }
    return salesPrice;
};
*/
