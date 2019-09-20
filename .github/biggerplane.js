console.log("hello script js");




var priceBreakdown = {
    seats: {
        economy: 15,
        business: 6,
        first: 4
    };
     classArray:{
        economy: 0,
        business: 1,
        first: 2
    };
    increment:{
        economy: [1.03,1.05],
        business: [1.06,1.10],
        first: [15,15]
    };
    ticketPrice: {
        economy: 50,
        business: 50,
        first: 50
    }
    stupidPrice: {
        economy: 91000,
        business: 91000,
        first: 191000
    }
}



function (classInput) {

var result = priceBreakdown.ticketPrice.classInput * priceBreakdown.increment.classInput;

priceBreakdown.seats.classInput --;

priceBreakdown.ticketPrice.classInput = result


}


// var planeSeats = [15,6,4] //number of seats by class
// var priceIncrement = [1.03,1.06,1.15] //increment first half
// var secondIncrement = [1.05,1.10,1.15]//increment second half
// var stupidPrice = [91000,91000,191000]//price of last seat
// var ticketPrice = [50,50,50]
// var classArray;

// function priceCalc(classInput){
//     if(classInput === economy){
//         classArray = 0;
//     }
//     else if(classInput === business)
//         classArray = 1;
//     )
//     else(classInput === premium) {
//         classArray = 2;
//     }

//        ticketPrice[classArray] = ticketPrice[classArray]*priceIncrement[classArray]
//        planeSeats[classArray]--;