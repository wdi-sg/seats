var flatPrice = 50
var state = "country"
var country = null
var validOptionsKL = "buy or cancel."
var validOptionsBali = "buy first class, buy economy class, buy business class or cancel."

var firstClass = {
    totalSeats: 4,
    emptySeats: 4,
    price: 50,
    seatsLeft: 3,
    flatRate: 0.15,
    lastSeat: 191000
}
var businessClass = {
    totalSeats: 6,
    emptySeats: 6,
    price: 50,
    seatsLeft: 2,
    compoundRate1: 1.06,
    compoundRate2: 1.10,
    lastSeat: 91000
}
var economyClass = {
    totalSeats: 15,
    emptySeats: 15,
    price: 50,
    seatsLeft: 7,
    compoundRate1: 1.03,
    compoundRate2: 1.05,
    lastSeat: 91000
}

var tenSeats = {
    totalSeats: 10,
    emptySeats: 10,
    price: 50,
    seatsLeft: 4,
    compoundRate1: 1.03,
    compoundRate2: 1.05,
    lastSeat: 91000
}


//tests valid inputs depending on value of state and country variables
function validInput(input){
    if(state=="country"){
        return ["kl", "bali"].includes(input)
    } else if (state=="buyCancel"){
        if (country==="kl"){
            return ["buy", 'cancel'].includes(input)

        } else if (country=="bali"){
            return ["buy business class", "buy economy class", "buy first class", 'cancel'].includes(input)
        }
    }
}

//used to return price of subsequent seat in the purchaseMade functions.
function nextSeatPrice(obj){
    if (obj.emptySeats===1){
        return `The next seat costs ${obj.lastSeat}.`
    } else if (obj.emptySeats>0){
        return `The next seat costs ` + obj.price.toFixed(2) + "."
    } else {
        return ""
    }
}

//calculates price for non-first class (compound appreciation rate)
function purchaseMadeCompound(obj){
    var emptySeats = obj.emptySeats
    var totalSeats = obj.totalSeats
    var halfSeats = Math.ceil(totalSeats/2)

    if (emptySeats == 1) {
        obj.emptySeats -= 1
        return `You paid ${obj.lastSeat}. You bought the last seat in this class/cabin.`
    } else if (emptySeats === 0) {
        return "There are no more empty seats in this class/cabin."
    } else if (emptySeats > halfSeats && emptySeats <= totalSeats){
        var pricePaid = obj.price.toFixed(2)
        obj.emptySeats -= 1
        if (obj.emptySeats == halfSeats + 1){
            obj.price *= obj.compoundRate2
        } else {
            obj.price *= obj.compoundRate1
        }
        obj.seatsLeft = emptySeats - halfSeats -1
    } else if(emptySeats <= halfSeats && emptySeats > 1){
        var pricePaid = obj.price.toFixed(2)
        obj.emptySeats -= 1
        if (obj.emptySeats !== 1){
            obj.price *= obj.compoundRate2
        } else {
            obj.price = obj.lastSeat
        }
        obj.seatsLeft= emptySeats - 2
      }
      var subSeatPrice = nextSeatPrice(obj)
    return `You paid ${pricePaid}. There are ${obj.seatsLeft} seats left in this price bracket. ${subSeatPrice}`

}

//calculates price for first class (flat appreciation rate)
function purchaseMadeFlat(obj){
    var emptySeats = obj.emptySeats
    if (emptySeats == 1) {
        obj.emptySeats -= 1
        return `You paid ${obj.lastSeat}. You bought the last seat in this class.`
      } else if (emptySeats == 0) {
        return "There are no more empty seats."
      } else if (emptySeats <= 4 && emptySeats > 1){
          var pricePaid = obj.price
          obj.emptySeats -= 1
          obj.price += flatPrice*obj.flatRate
          obj.seatsLeft -= 1
      }
      var subSeatPrice = nextSeatPrice(firstClass)
      return `You paid ${pricePaid}. There are ${obj.seatsLeft} seats left in this price bracket. ${subSeatPrice}`

}


//calculates prices for trips to bali in 3-cabin jet
function classSeat(classType){
    if (classType==="buy economy class"){
          var pricePaid = purchaseMadeCompound(economyClass)
    } else if (classType === "buy business class"){
          var pricePaid = purchaseMadeCompound(businessClass)
    } else if (classType === "buy first class") {
        var pricePaid = purchaseMadeFlat(firstClass)
    } else if (classType === "cancel"){
        state = "country"
        return "Enter a country you'd like to see prices for."
    }
    return pricePaid
}

//calculates prices for trips to kl in one-cabin jet
function oneCabin(input) {
    if (input==="buy"){
        var pricePaid = purchaseMadeCompound(tenSeats)
        return pricePaid

    } else if (input == "cancel"){
        state = "country"
        return "Enter a country you'd like to see prices for."
    }
}



var inputHappened = function(currentInput){
    trimmedInput = currentInput.trim().toLowerCase()
    if (state==="country"){
        if (validInput(trimmedInput)) {
            country = trimmedInput
            state = "buyCancel"
            if (country=="kl"){
                var validOptions = validOptionsKL
                var currPrice = tenSeats.price.toFixed(2)
                return `Ticket price: ${currPrice}. Enter ${validOptions}`
            } else if (country == "bali") {
                var validOptions = validOptionsBali
                var fcPrice = firstClass.price.toFixed(2)
                var bcPrice = businessClass.price.toFixed(2)
                var ecPrice = economyClass.price.toFixed(2)
                return `Ticket Prices \nFirst Class: ${fcPrice} \nBusiness Class: ${bcPrice}\nEconomy Class: ${ecPrice}\nEnter ${validOptions}`
            }
        } else {
            return "please enter a valid country - KL or Bali."
        }

    } else if (state==="buyCancel"){
        if(validInput(trimmedInput)){
            if (country=="kl"){
                return oneCabin(trimmedInput)

            } else if (country=="bali"){
                return classSeat(trimmedInput)
            }

        } else {
            return "please enter a valid input: " + validOptions
        }

    }


};