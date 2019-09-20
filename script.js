console.log("hello script js");

//planeSeats is 10
//when seats sold is 0 price is 50
//when seats sold is 1 price increase by 5% from price
//when there is input, seat is sold
//plane seat is reduced by 1
//seats sold is increased by 1
//price increment is 5% per ticket sold
// purchasePrice is 50 * 100% + (5% * number of ticket sold)

var planeSeats = 10;
var seatsSold = 0;
var purchasePrice = 50


// for first half i.e. 1-5 seatsSold, price * 1.03
// for  5-9 seatsSolds, price * 1.05
// 10th seat is 91, 000

var inputHappened = function(currentInput){
    if (seatsSold === 0) {
    planeSeats = planeSeats - 1;
    seatsSold = seatsSold + 1;
    console.log(seatsSold);
        return `This seat costs $${parseInt(purchasePrice).toFixed(2)}. Price increase on next ticket bought!`
    }   if (seatsSold > 0 && seatsSold < 5) {
        var seatsBeforePriceIncrease = 5
    planeSeats = planeSeats - 1;
    seatsSold = seatsSold + 1;
    console.log('this is working!!' + seatsSold)
        purchasePrice = purchasePrice * 1.03;
        return `This seat costs $${(purchasePrice).toFixed(2)}. ${seatsBeforePriceIncrease - seatsSold} seats left before price increase!`;
    } else if (seatsSold < 9) {
    planeSeats = planeSeats - 1;
    seatsSold = seatsSold + 1;
    console.log('next set' + seatsSold);
        purchasePrice = purchasePrice * 1.05;
        return `This seat costs $${(purchasePrice).toFixed(2)}.`;
    } else {
        return 'This seat costs $91,000 :) Sorri'
    }
}

// var inputHappened = function(currentInput){
//     if (seatsSold === 0) {
//     planeSeats = planeSeats - 1;
//     seatsSold = seatsSold + 1;
//     console.log(seatsSold);
//         return purchasePrice;
//     }   if (seatsSold > 0 && seatsSold < 10) {
//     planeSeats = planeSeats - 1;
//     seatsSold = seatsSold + 1;
//     // console.log('this is working!!')
//         console.log(seatsSold)
//         purchasePrice = purchasePrice * 1.05;
//         return purchasePrice;
//     } else {
//         return 'Solly no more seats!!'
//     }
// }