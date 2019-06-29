console.log("hello script js");
console.log("start log");

var display = function(balance, price){
    var output1 = document.querySelector(".balance");
    output1.innerText = balance;

    var output2 = document.querySelector(".price");
    output2.innerText = price;
};

var newTPrice = function(){
    var oldTPrice = parseFloat(document.querySelector(".price").innerText);
    var e = (5/100) * oldTPrice
    return oldTPrice + e;
}

var newTBalance = function(){
    var oldTbalance = parseInt(document.querySelector(".balance").innerText);
    var newTbalance = oldTbalance-1;
    if (newTbalance === 0){
        soldOut();
        return newTbalance;
    }

    return newTbalance;
}


var updateInfo = function(){
    display(newTBalance(), newTPrice());
}



var validate = function(){
    var r = confirm("You sure?");
    if (r === true) {
        alert("Thank you for your purchase!");
        updateInfo();
    } else {
        alert("Thank you!")
    }
}

var soldOut = function(){
    document.getElementsByID("#button").setAttribute("type", "")

    document.getElementsByID("#button").setAttribute("value", "SOLD OUT")
}


console.log((0.05*50)+50)
console.log((0.05*52.5)+52.5)
console.log((0.05*55.125)+55.125)
console.log((0.05*57.88125)+57.88125)
console.log((0.05*60.77531)+60.77531)

console.log((0.05*55.125)+55.125)



console.log("end log")

// var tempInput;
// var tempUnit;
// var counter;

// document.getElementsByTagName("input").addEventListener('change', function(event){

//     console.log("start log")

//     tempInput = event.target.value;
//     tempUnit = event.target.class;

//     alert(event.target.id + " and " + event.target.class);

//     console.log(typeof event.target.classname)
//     console.log(tempInput + " of " + tempUnit);
//     console.log("end log");
// });