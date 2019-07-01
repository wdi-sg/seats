console.log("hello script js");

// Base capacity and px
var seatCount_eco = 15; // economy class max capacity
var seatCount_bus = 6; // business class max capacity
var seatCount_fir = 4; // first class max capacity
var basePx = 50;

var seatSellCount_eco = 0;
var seatSellCount_bus = 0;
var seatSellCount_fir = 0;
var seatPrice = 0;
var flagSoldOut = 0;
var message = '';

// this function will be called in index.html
var inputHappened = function(currentInput){
    console.log("currentInput: " + currentInput);
    flagSoldOut = 0;
    // there must seat to sell
    if (currentInput === 'buy economic class' & seatCount_eco > 0){
        // increment each time seat are sold
        seatSellCount_eco++;
        // retrieve relevant seat price based on seat index#
        seatPrice_eco = eco_pxList[seatSellCount_eco];
        var remainingSeatCount_eco = seatCount_eco - seatSellCount_eco;

        if(remainingSeatCount_eco < 0){
            flagSoldOut = 1;
        };
        message = "Quote for seat sold: " + "$" +seatPrice_eco + "\n" + "Remaining seats left: " + remainingSeatCount_eco;

    } else if (currentInput === 'buy business class' & seatCount_bus > 0){
        seatSellCount_bus++;
        seatPrice_bus = bus_pxList[seatSellCount_bus];
        var remainingSeatCount_bus = seatCount_bus - seatSellCount_bus;

        if(remainingSeatCount_bus < 0){
            flagSoldOut = 1;
        };
        message = "Quote for seat sold: " + "$" +seatPrice_bus + "\n" + "Remaining seats left: " + remainingSeatCount_bus;
    } else if (currentInput === 'buy first class' & seatCount_fir > 0){
        seatSellCount_fir++;
        seatPrice_fir = fir_pxList[seatSellCount_fir];
        var remainingSeatCount_fir = seatCount_fir - seatSellCount_fir;

        if(remainingSeatCount_fir < 0){
            flagSoldOut = 1;
        };
        message = "Quote for seat sold: " + "$" +seatPrice_fir + "\n" + "Remaining seats left: " + remainingSeatCount_fir;
    }
    if (flagSoldOut == 1)
    {
        message = "So sorry, this class has sold out.";
    }
    display(message);
};



// relative price increase
var incrThreePerc = function(x){
        return x * 1.03;
    };

var incrFivePerc = function(x){
        return x * 1.05;
    };

var incrSixPerc = function(x){
        return x * 1.06;
    };

var incrTenPerc = function(x){
        return x * 1.10
    };

var incrFifteenPerc = function(x){
        return x * 1.15
    };


// Seat index# and their respective price
var eco_pxList = {
        1 : incrThreePerc(basePx),
        2 : incrThreePerc(basePx),
        3 : incrThreePerc(basePx),
        4 : incrThreePerc(basePx),
        5 : incrThreePerc(basePx),
        6 : incrThreePerc(basePx),
        7 : incrThreePerc(basePx),
        8 : incrFivePerc(basePx),
        9 : incrFivePerc(basePx),
        10 : incrFivePerc(basePx),
        11 : incrFivePerc(basePx),
        12 : incrFivePerc(basePx),
        13 : incrFivePerc(basePx),
        14 : incrFivePerc(basePx),
        15: 91000
    };

var bus_pxList = {
        '1' : incrSixPerc(basePx),
        '2' : incrSixPerc(basePx),
        '3' : incrSixPerc(basePx),
        '4' : incrTenPerc(basePx),
        '5' : incrTenPerc(basePx),
        '6': 91000
    };

var fir_pxList = {
        '1' : incrFifteenPerc(basePx),
        '2' : incrFifteenPerc(basePx),
        '3' : incrFifteenPerc(basePx),
        '4' : 191000
    };
