/*
var inputHappened = function(currentInput){
  console.log( currentInput );
  return "WOW SOMETHING HAPPENED";
};
var inputHappened = function(currentInput){
    var countInput = 0;
    var output;
    var originalSeats = 10;
    var originalPrice = 50;
    var remainingSeats = 10;
    var newPrice;
    if (currentInput === true){
        countInput++;
    }
    if(countInput === 0){
        output = "price is:" + originalPrice;
    }
    else if(countInput > 0 && countInput<=10){
        newPrice = (5/100)*originalPrice + originalPrice;
        output = "price is:" + newPrice;
        originalPrice = newPrice;
    }
    else{
        output = "seats full";
    }







      if(remainingSeats === 10){
        remainingSeats--;
        output = "price is:" + originalPrice;
       }
       else if(remainingSeats<=10){
                newPrice = originalPrice + (5/100)*originalPrice;
                output = "ticket price is:" + newPrice;
       }
       else{
            output = "tickets sold out";
       }

    }
    else{
        output = "enter an input";
   }
 return output;
};



var seats = 10;
var originalPrice = 50;
var inputHappened = function(currentInput){
    console.log(currentInput);

    var seatsLeft = 10 - currentInput;
    if(currentInput === 0){
        return "plane is empty";

    }
    else if(currentInput <= 10){
        return originalPrice + (0.05 * originalPrice)
         }
    else
    {
        return "wrong plane";
    }
}
/*var increase = function(originalPrice){
     return originalPrice + (0.05 * originalPrice);
}
newPrice = increase
*/

var userInput =[];
var price = 50;
var seats = 10;
var inputHappened = function(currentInput){
  console.log( currentInput );
  userInput.push(currentInput);
  var newPrice;
  //if(userInput.length === 0){}
  if(seats === 10){
    output = "price is:" + price;

   }

 if(userInput.length > 0){
    seats --;
     if(seats>0){
        newPrice = price + (0.05 * price);
        output = "price is:" + price;
        price = newPrice;
     }
     else{
        output = "seats full";
     }
  }
  return output;
}