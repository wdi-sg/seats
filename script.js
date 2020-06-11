console.log("Part 1");

var seatPrice = 50;
var seatLeft = 10;


var seatCalculate = function(price){
  seatPrice += seatPrice * 0.05*(10- seatLeft)
  console.log( newPrice );
  seatLeft -=1
  return newPrice;
};

price1 = seatCalculate(50);
price2 = seatCalculate(50);
price3 = seatCalculate(50);
console.log(price3, seatLeft);

console.log("Part 2");

var seatPrice = 50;
var seatLeft = 10;

var seatCalculate = function(price){
  if (seatLeft > 5){
    seatPrice += seatPrice * 0.03*(10- seatLeft)
    }
  else {
    seatPrice += seatPrice * 0.05*(10- seatLeft)
    }
  console.log( seatPrice );
  seatLeft -=1
  return seatPrice;
}

price1 = seatCalculate(50);
price2 = seatCalculate(50);
price3 = seatCalculate(50);
price4 = seatCalculate(50);
price5 = seatCalculate(50);
price6 = seatCalculate(50);
price7 = seatCalculate(50);
price8 = seatCalculate(50);
price9 = seatCalculate(50);
price10 = seatCalculate(50);
console.log(price10, seatLeft);

console.log("Part 3");
//When outputing a message tell the user how many tickets are left before the price bracket goes up.//
var seatPrice = 50;
var nextPrice = 0
var seatLeft = 10;
message = ""

var seatCalculate = function(price){
  if (seatLeft == 10){
     nextPrice = seatPrice + seatPrice * 0.03*(10- seatLeft)
     message = "1 Tickets are left before price becomes "+ nextPrice
  }
  if (seatLeft > 5){
    seatPrice += seatPrice * 0.03*(10- seatLeft)
    nextPrice = seatPrice + seatPrice * 0.03*(10- seatLeft)
    message = "1 Tickets are left before price becomes "+ nextPrice
    }
  else {
    seatPrice += seatPrice * 0.05*(10- seatLeft)
    nextPrice = seatPrice + seatPrice * 0.03*(10- seatLeft)
    message = "1 Tickets are left before price becomes "+ nextPrice
    }
  console.log( seatPrice );
  seatLeft -=1
  return seatPrice;
}

price1 = seatCalculate(50);
price2 = seatCalculate(50);
price3 = seatCalculate(50);
price4 = seatCalculate(50);
price5 = seatCalculate(50);
price6 = seatCalculate(50);
price7 = seatCalculate(50);
price8 = seatCalculate(50);
price9 = seatCalculate(50);
price10 = seatCalculate(50);
console.log(price10, seatLeft, message);

console.log("Part 4");
//Change the pricing to increase by 3% and 5% over the current price of the ticket. (i.e., each ticket is some percentage more than the last)//
var seatPrice = 50;
var nextPrice = 0
var seatLeft = 10;
message = ""

var seatCalculate = function(price){
  if (seatLeft == 10){
     nextPrice = seatPrice * 1.03
     message = "1 Tickets are left before price becomes "+ nextPrice
  }
  if (seatLeft > 5){
    seatPrice *=  1.03
    nextPrice = seatPrice *1.03
    message = "1 Tickets are left before price becomes "+ nextPrice
    }
  else {
    seatPrice *=  1.05
    nextPrice = seatPrice *1.05
    message = "1 Tickets are left before price becomes "+ nextPrice
    }
  console.log( seatPrice );
  seatLeft -=1
  return seatPrice;
}

price1 = seatCalculate(50);
price2 = seatCalculate(50);
price3 = seatCalculate(50);
price4 = seatCalculate(50);
price5 = seatCalculate(50);
price6 = seatCalculate(50);
price7 = seatCalculate(50);
price8 = seatCalculate(50);
price9 = seatCalculate(50);
price10 = seatCalculate(50);
console.log(price10, seatLeft, message);

//the math seems wrong

//Implement a check of the input. Make sure to show the user a message when they type something invalid.

//The airline upgraded it's fleet of aircraft. Each plane has 3 cabins, economy, business and first class.  15 economy seats, 6 business class seats and 4 first class seats.
var seatClass = "" ;
var seatPrice = 50;
var nextPrice = 0
var seatLeft = 10;
var priceup1 = 0;
var priceup2 = 0;
message = ""

var seatCalculate = function(price){
  if (seatClass == "economy"){
    priceup1= 1.03
    priceup2= 1.05
    seatIntial = 15
    }
  else if (seatClass == "business"){
    priceup1= 1.06
    priceup2= 1.10
    seatIntial = 6
    }
  else if (seatClass == "first-class"){
    priceup1= 1.15
    priceup2= 1.15
    seatIntial = 4
    }

  if (seatLeft == seatIntial){
     nextPrice = seatPrice * priceup1
     message = "1 Tickets are left before price becomes "+ nextPrice
     }
  if (seatLeft==(seatIntial/2)){
    seatPrice *=  priceup1
    nextPrice = seatPrice *priceup2
    message = "1 Tickets are left before price becomes "+ nextPrice
    }
  if (seatLeft > (seatIntial/2)){
    seatPrice *=  priceup1
    nextPrice = seatPrice *priceup1
    message = "1 Tickets are left before price becomes "+ nextPrice
    }
  else {
    seatPrice *=  priceup2
    nextPrice = seatPrice *priceup2
    message = "1 Tickets are left before price becomes "+ nextPrice
    }
  console.log( seatPrice );
  seatLeft -=1
  return seatPrice;
}


