console.log("hello script js");

// Plane Seats

var seats = 10;
var price = 50;


var input = document.getElementById('input');


var inputHappened = function (currentInput) {

    var priceIncThree = price + (price * 0.03)
    var priceIncFive = price + (price * 0.05)


    if (currentInput !== " " && seats > 5) {
        seats -= 1
        price = priceIncThree
        input.value = ''
        console.log("seats:" + seats)
        console.log("price: " + Math.floor(price))
        return `Purchased: One Seat , Price: $${price.toFixed(0)}, Seats remaining: ${seats}  `

    } else if (currentInput !== " " && seats <= 5 && seats > 1) {
        seats -= 1
        price = priceIncFive
        input.value = ""
        console.log("seats:" + seats)
        console.log("price: " + Math.floor(price))
        return `Purchased: One Seat , Price: $${price.toFixed(0)}, Seats remaining: ${seats}  `

    } else if (currentInput !== " " && seats === 1) {
        seats -= 1
        console.log("seats:" + seats)
        console.log("price: " + Math.floor(price))
        return `Purchased: Last Seat, Price: $91,000 `

    } else if(currentInput !== " " && seats === 0){
        return `Sorry we are SOLD OUT 😔😔`
    }

}