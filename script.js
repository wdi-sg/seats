console.log("hello script js");
var econFree = 15;
var econBooked = 0;
var businessFree = 6
var businessBooked = 0;
var firstFree = 4;
var firstBooked = 0;
var control = false;
var econ = false;
var business = false;
var first = false;
// var econFree = 10;
// var econBooked = 0;
var price = 50;
var cost;
var y = 0;
var priceIncreased = 1;
var classSelected;

document.querySelector('#output').innerText = 'Hi! There are ' + econFree + ' tickets left for sale! \n Please choose among "economy" or "business" or "first" class.';

var inputHappened = function(currentInput){
    classSelected = currentInput;
    console.log( currentInput );
    console.log(classSelected);
    if(!control){
        if(classSelected === 'economy'){
            econ = true;
            console.log('test');
            return output = 'Please enter any number to buy a ticket! \n There are ' + econFree + ' seats left.';
        }
        else if (classSelected === 'business'){
            business = true;
            console.log('test1');
            return output = 'Please enter any number to buy a ticket! \n There are ' + businessFree + ' seats left.';
        }
        else if (classSelected === 'first'){
            first = true;
            console.log('test2');
            return output = 'Please enter any number to buy a ticket! \n There are ' + firstFree + ' seats left.';
        }
    }
    if(econ){
        if(parseFloat(currentInput)){
            if(econFree > 8 && econFree <= 15 && econBooked < 7 && econBooked >= 0){
                increase3();
                econFree--;
                econBooked++;
                cost = price * priceIncreased;
                return output = 'Your plane ticket costs $' + cost + '\n There are ' + econFree + ' seats left for sale!';
            }
                else if(econFree > 1 && econFree <= 8 && econBooked < 14 && econBooked >= 7 ){
                    increase5();
                    econFree--;
                    econBooked++;
                    cost = price * priceIncreased;
                    return output = 'Your plane ticket costs $' + cost + '\n There are ' + econFree + ' seats left for sale!';
                }
                else if(econFree ===1 && econBooked === 14){
                    econFree--;
                    econBooked++;
                    return output = 'You bought the last ticket which costs $21000!';
                }
                else if(econFree === 0 && econBooked === 15){
                    return output = 'Sorry we are fully booked.';
                }
            }
            else{
                return output = 'Invalid input! Please try again.'
            }
    }
    if(business){
        if(parseFloat(currentInput)){
            if(businessFree > 3 && businessFree <= 6 && businessBooked < 3 && businessBooked >= 0){
                increase6();
                businessFree--;
                businessBooked++;
                cost = price * priceIncreased;
                return output = 'Your plane ticket costs $' + cost + '\n There are ' + businessFree + ' seats left for sale!';
            }
                else if(businessFree > 1 && businessFree <= 3 && businessBooked < 5 && businessBooked >= 3 ){
                    increase10();
                    businessFree--;
                    businessBooked++;
                    cost = price * priceIncreased;
                    return output = 'Your plane ticket costs $' + cost + '\n There are ' + businessFree + ' seats left for sale!';
                }
                else if(businessFree ===1 && businessBooked === 5){
                    businessFree--;
                    businessBooked++;
                    return output = 'You bought the last ticket which costs $91000!';
                }
                else if(businessFree === 0 && businessBooked === 6){
                    return output = 'Sorry we are fully booked.';
                }
            }
            else{
                return output = 'Invalid input! Please try again.'
            }
    }
    if(first){
        if(parseFloat(currentInput)){
            if(firstFree > 1 && firstFree <= 4 && firstBooked < 3 && firstBooked >= 0){
                increase15();
                firstFree--;
                firstBooked++;
                cost = price * priceIncreased;
                return output = 'Your plane ticket costs $' + cost + '\n There are ' + firstFree + ' seats left for sale!';
            }
                else if(firstFree ===1 && firstBooked === 3){
                    firstFree--;
                    firstBooked++;
                    return output = 'You bought the last ticket which costs $191000!';
                }
                else if(firstFree === 0 && econBooked === 4){
                    return output = 'Sorry we are fully booked.';
                }
            }
            else{
                return output = 'Invalid input! Please try again.'
            }
    }
    else{
        return output = "Invalid input! Please try again."
    }
};


var increase5 = function(){
    while ( y < econBooked){
        priceIncreased = priceIncreased * 1.05;
        y++;
        console.log(priceIncreased + ' priceIncreased');
    }
}
var increase3 = function(){
    while ( y < econBooked){
        priceIncreased = priceIncreased * 1.03;
        y++;
        console.log(priceIncreased + ' priceIncreased');
    }
}
var increase6 = function(){
    while ( y < businessBooked){
        priceIncreased = priceIncreased * 1.06;
        y++;
        console.log(priceIncreased + ' priceIncreased');
    }
}
var increase10 = function(){
    while ( y < businessBooked){
        priceIncreased = priceIncreased * 1.1;
        y++;
        console.log(priceIncreased + ' priceIncreased');
    }
}
var increase15 = function(){
    while ( y < firstBooked){
        priceIncreased = priceIncreased * 1.15;
        y++;
        console.log(priceIncreased + ' priceIncreased');
    }
}