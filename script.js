//Give starting instructions.
document.getElementById("output").innerText = `Hi! To get started, choose your flight path: Bali or KL?`
//Function to clear user input.
function clearInput() {
    document.getElementById("input").value = ""
}

var flights = {
  kl: {
    seats: 10,
    price: 50,
    charge: function(){
      if (this.seats===10) {
        this.price = 50;
      } else if (this.seats > this.halfway) {
        this.price = this.price*1.03;
      } else if (this.seats > 1) {
        this.price = this.price*1.05;
      } else if (this.seats===1) {
        this.price = 91000
      }
      return this.price;
    },
    halfway: 5
  },
  bali: {
    economy: {
      seats: 10,
      price: 50,
      halfway: 5,
      charge: function(){
        if (this.seats===10) {
          this.price = 50;
        } else if (this.seats > this.halfway) {
          this.price = this.price*1.03;
        } else if (this.seats > 1) {
          this.price = this.price*1.05;
        } else if (this.seats===1) {
          this.price = 91000
        }
        return this.price;
      },
    },
    biz: {
      seats: 6,
      price: 50,
      halfway: 3,
      charge: function(){
        if (this.seats===6) {
          this.price = 50;
        } else if (this.seats > this.halfway) {
          this.price = this.price*1.06;
        } else if (this.seats > 1) {
          this.price = this.price*1.10;
        } else if (this.seats===1) {
          this.price = 91000
        }
        return this.price;
      },
    },
    first: {
      seats: 4,
      price: 50,
      charge: function(){
        if (this.seats===4) {
          this.price = 50;
        } else if (this.seats > 1) {
          this.price = this.price*1.15;
        } else if (this.seats===1) {
          this.price = 191000
        }
        return this.price;
      },
    }
  }
}

var inputs = [];

//Defining the seats.
var klSeats = flights.kl.seats;
var econSeats = flights.bali.economy.seats;
var bizSeats = flights.bali.biz.seats;
var firstSeats = flights.bali.first.seats;
var klPrice = (flights.kl.charge()).toFixed(2)
var econPrice = (flights.bali.economy.charge()).toFixed(2);
var bizPrice = (flights.bali.biz.charge()).toFixed(2);
var firstPrice = (flights.bali.first.charge()).toFixed(2);

//Function that runs every time a new input is detected.
var inputHappened = function(currentInput) {
clearInput();
inputs.push(currentInput);
//STEP 2
if (inputs.length===1) {
  //Step 2A: If first input = KL, get seats left and generate price according to seats left. Ask user to buy or cancel.
  if (inputs[0]==="KL") {
    if (flights.kl.seats <=0) {
      output = `Sorry, there are no more seats on the flight to KL. Please enter a new flight path: Bali or KL?`
      inputs = [];
    } else {
      output = `The price for one ticket to KL is $${(flights.kl.charge()).toFixed(2)}. Buy or cancel?`
    }
  //Step 2B: If first input = Bali, ask for cabin class.
  } else if (inputs[0]==="Bali") {
    output = `Do you want: economy(e), business(b) or firstclass(f)?`
  } else {
    output = `Sorry, that was not a valid destination. Please try again by only entering either Bali or KL.`
    inputs = [];
  }

//STEP 3
} else if (inputs.length===2) {
  //IF KL, THEN PROMPT TO BUY OR CANCEL.
  if (inputs[0]==="KL") {
    if (inputs[1]==="buy") {
      output = `Thanks for purchasing your seat to KL. Enter a flight path (Bali or KL) to purchase more tickets.`
      flights.kl.seats--;
      inputs = [];
    } else if (inputs[1]==="cancel") {
      output = `We have cancelled your purchase. Enter a flight path (Bali or KL) to purchase more tickets.`;
      inputs = [];
    }
    //IF BALI, CHECK CABIN CLASS, AND DISPLAY PRICE.
  } else if (inputs[0]==="Bali") {
    if (inputs[1]==="e") {
      if (flights.bali.economy.seats<=0) {
        output = `Sorry, there are no more seats available. Please choose another cabin: business(b) or first class(f).`;
        inputs.pop();
      } else {
      output = `The price for an economy class ticket to Bali is $${(flights.bali.economy.charge()).toFixed(2)}. Would you like to buy or cancel?`
    }
  } else if (inputs[1]==="b") {
    if (flights.bali.biz.seats<=0) {
      output = `Sorry, there are no more seats available. Please choose another cabin: economy(e) or first class (f).`;
      inputs.pop();
    } else {
      output = `The price for a business class ticket to Bali is $${(flights.bali.biz.charge()).toFixed(2)}. Would you like to buy or cancel?`
    }
  } else if (inputs[1]==="f") {
    if (flights.bali.first.seats<=0) {
      output = `Sorry, there are no more seats available. Please choose another cabin: economy(e) or business(b).`;
      inputs.pop();
    } else {
      output = `The price for a first class ticket to Bali is $${(flights.bali.first.charge()).toFixed(2)}. Would you like to buy or cancel?`
    }
  } else {
    output = `Sorry, there was an error. Please try again by entering a new flight path: Bali or KL.`;
    inputs = [];
  }
}

//FOR THIRD INPUT (ONLY APPLIES TO BALI FLIGHTS.) If last input is cancel, just reset everything. If not, deduct seats & reset.
} else if (inputs.length===3) {
  if (inputs[2]==="cancel") {
    output = `We have cancelled your purchase. Enter a flight path (Bali or KL) to purchase more tickets.`;
    inputs = [];
  } else if (inputs[1]==="e" && inputs[2]==="buy") {
    output = `Thanks for purchasing your economy class seat for Bali. Enter a flight path (Bali or KL) to purchase more tickets.`
    inputs = [];
    flights.bali.economy.seats--;
  } else if (inputs[1]==="b" && inputs[2]==="buy") {
    output = `Thanks for purchasing your business class seat for Bali. Enter a flight path (Bali or KL) to purchase more tickets.`
    inputs = [];
    flights.bali.biz.seats--;
  } else if (inputs[1]==="f" && inputs[2]==="buy") {
    output = `Thanks for purchasing your first class seat for Bali. Enter a flight path (Bali or KL) to purchase more tickets.`
    inputs = [];
    flights.bali.first.seats--;
  } else {
    output = `Sorry, there was an error. Please try again by entering a new flight path: Bali or KL.`;
  }
}
return output;

};
