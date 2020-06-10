console.log("hello script js");

// const seatCapacity = 10;
// const lastSeatPrice = 91000;
// var seatsLeft = seatCapacity;
// var currSeatPrice = 50;
// var seatsLeftTillNextBracket=seatCapacity*0.5;

//initialize small plane variables
var smallPlane = {
    seatCapacity: 10,
    currSeatPrice: 50,
    firstMultiplier: 1.03,
    secondMultiplier: 1.05,
    lastSeatPrice: 91000
}
//initialize dependent variables
smallPlane.seatsLeft = smallPlane.seatCapacity;
smallPlane.seatsLeftTillNextBracket = Math.floor(smallPlane.seatCapacity*0.5);

//initialize big plane variables
var bigPlane = {
    firstClass: {
        seatCapacity: 4,
        currSeatPrice: 50,
        firstMultiplier: 1.15,
        secondMultiplier: 1.15,
        lastSeatPrice: 191000
    },
    businessClass: {
        seatCapacity: 6,
        currSeatPrice: 50,
        firstMultiplier: 1.06,
        secondMultiplier: 1.1,
        lastSeatPrice: 91000
    },
    economyClass: {
        seatCapacity: 15,
        currSeatPrice: 50,
        firstMultiplier: 1.03,
        secondMultiplier: 1.05,
        lastSeatPrice: 91000
    }
}
//initialize dependent variables
bigPlane.firstClass.seatsLeft = bigPlane.firstClass.seatCapacity;
bigPlane.firstClass.seatsLeftTillNextBracket = bigPlane.firstClass.seatCapacity*0.5;
bigPlane.businessClass.seatsLeft = bigPlane.businessClass.seatCapacity;
bigPlane.businessClass.seatsLeftTillNextBracket = Math.floor(bigPlane.businessClass.seatCapacity*0.5);
bigPlane.economyClass.seatsLeft = bigPlane.economyClass.seatCapacity;
bigPlane.economyClass.seatsLeftTillNextBracket = Math.floor(bigPlane.economyClass.seatCapacity*0.5);

//function implements a seat sale
//updates the latest price, updates seatsleft
//planeType: bigPlane, smallPlane
//classType: firstClass, businessClass, economyClass
var seatSale = function(planeType, classType){
    var msgE = document.querySelector("#msg")
    //update seats left
    switch(planeType){
        case "smallPlane":
        break;
        case "bigPlane":
            //update seats left
            bigPlane[classType].seatsLeft-=1;
            console.log("seats left:" + bigPlane[classType].seatsLeft);
            //update seats left till next bracket
            updateSeatsLeftTillNextBracket(planeType,classType);
            if(bigPlane[classType].seatsLeft==0){
                msgE.innerText = "No seats left for " + classType
            } else {
                msgE.innerText = classType+ " Seats left till next bracket: "+bigPlane[classType].seatsLeftTillNextBracket
            }
            break;
    }
    //display selling price
    var sellingPrice;
    switch(planeType){
        case "smallPlane":
            sellingPrice = smallPlane.currSeatPrice;
        break;
        case "bigPlane":
            if (bigPlane[classType].seatsLeft<0){
                sellingPrice=0;
            }
            else if(bigPlane[classType].seatsLeft==0){
                sellingPrice=bigPlane[classType].lastSeatPrice;
            }
            else {
                sellingPrice = bigPlane[classType].currSeatPrice;
            }
        break;
    }
    console.log("sellingprice: " + sellingPrice);

    //update current next seat price
    updatePrice(planeType, classType);
    //output price of the seat sold
    // if(seatsLeft<0){
    //     return "no seats left";
    // }
    // else {
        console.log("planetype", planeType);
        console.log("classType", classType);

        return sellingPrice;
    // }
}

//update price based on boss requirement
var updatePrice = function(planeType,classType){

    switch(planeType){
        case "smallPlane":
        break;
        case "bigPlane":
            switch(classType){
                case "firstClass":
                        //last seat
                        if(bigPlane[classType].seatsLeft==1){
                            bigPlane[classType].currSeatPrice = bigPlane[classType].lastSeatPrice;
                        }
                        else {
                            bigPlane[classType].currSeatPrice *= bigPlane[classType].firstMultiplier;
                        }
                break;
                case "businessClass":
                case "economyClass":
                    //last seat
                    if(bigPlane[classType].seatsLeft==1){
                        bigPlane[classType].currSeatPrice = bigPlane[classType].lastSeatPrice;
                    }
                    //second half of the plane
                    else if (bigPlane[classType].seatsLeft / bigPlane[classType].seatCapacity <= 0.5){
                        bigPlane[classType].currSeatPrice *= bigPlane[classType].secondMultiplier;
                    }
                    //first half of the plane
                    else{
                        bigPlane[classType].currSeatPrice *= bigPlane[classType].firstMultiplier;
                    }
                break;
            }
        break;
    }
}

//function updates the global variable seatsleft till next bracket
var updateSeatsLeftTillNextBracket = function(planeType,classType){

    switch(planeType){
        case "smallPlane":
            if (smallPlane.seatsLeft > smallPlane.seatCapacity*0.5){
                smallPlane.seatsLeftTillNextBracket=smallPlane.seatsLeft - smallPlane.seatCapacity*0.5;
            }
            else if (smallPlane.seatsLeft <= smallPlane.seatCapacity*0.5) {
                smallPlane.seatsLeftTillNextBracket=smallPlane.seatsLeft - 1;
            }
            if (smallPlane.seatsLeft<=0){
                    smallPlane.seatsLeftTillNextBracket=0;
            }
            console.log("Small Plane seatsLeftTillNextBracket:" + smallPlane.seatsLeftTillNextBracket);
        break;
        case "bigPlane":
            switch(classType){
                case "firstClass":
                        bigPlane.firstClass.seatsLeftTillNextBracket=bigPlane.firstClass.seatsLeft-1;
                break;
                case "businessClass":
                case "economyClass":
                    //first half
                    if (bigPlane[classType].seatsLeft > Math.floor(bigPlane[classType].seatCapacity*0.5)){
                        bigPlane[classType].seatsLeftTillNextBracket=bigPlane[classType].seatsLeft - Math.floor(bigPlane[classType].seatCapacity*0.5);
                        console.log("here")
                    }
                    //second half
                    else if (bigPlane[classType].seatsLeft <= Math.floor(bigPlane[classType].seatCapacity*0.5)) {
                        bigPlane[classType].seatsLeftTillNextBracket=bigPlane[classType].seatsLeft - 1;
                    }
                    if (bigPlane[classType].seatsLeft<=0){
                            bigPlane[classType].seatsLeftTillNextBracket=0;
                    }
                        break;
                    }
            console.log("Big Plane seatsLeftTillNextBracket:" + classType + bigPlane[classType].seatsLeftTillNextBracket);
        break;
    }
}

//validate inputs
//allowable inputs
//only text
//only buy first class, buy business class, buy economy class
var isInputValid = function(input){
    var allowableInputs = [
    'BUY FIRST CLASS'
    ,'BUY BUSINESS CLASS'
    ,'BUY ECONOMY CLASS'
    ];
    return allowableInputs.includes(input.toUpperCase());
}


//Event listeners
document.querySelector('#input').addEventListener('change', function(event){
        var currentInput = event.target.value;
        var result = inputHappened(currentInput);
        display( result );
      });

      var display = function( data ){
        var output = document.querySelector('#output');
        output.innerText = data;
      }

var inputHappened = function(currentInput){
  // console.log( currentInput );
  if (isInputValid(currentInput)==false){
    console.log("is input valid: " + isInputValid(currentInput));
    return "";
  }
  var res=null;
  switch(currentInput.toUpperCase()){
    case "BUY FIRST CLASS":
        res = seatSale("bigPlane","firstClass");
    break;
    case "BUY BUSINESS CLASS":
        res = seatSale("bigPlane","businessClass");
    break;
    case "BUY ECONOMY CLASS":
        res = seatSale("bigPlane","economyClass");
    break;
  }
  return res;
};