//plane has 10 seats, base price is 50 and increases by 5% for each ticket sold.
var planeSeats = 10;
var seatsSold = 0;

var basePrice = 50;
var newPrice;
console.log("Plane tickets sold: "+seatsSold);
//once input happened, consider ticket sold and display sale price

var inputHappened = function(userInput) {
    if (seatsSold===0){
        seatsSold++;
        newPrice=basePrice
        console.log(seatsSold);
        console.log(newPrice);
        return "Your ticket is: $"+ newPrice;
    }
    else if (seatsSold<10){
        newPrice = basePrice*1.05;
        seatsSold++;
        console.log(seatsSold);
        console.log(newPrice);
        return "Your ticket is: $"+ newPrice;
    }
    else{
        return "Sorry, seats are sold out.";
    }
}