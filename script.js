// create object for each plane and cabin and store data and methods
const planeKL = {
  "seats": 10,
  "price": 50,

  getPrice() {
    this.seats -= 1;
    if (this.seats >= 5) {
      this.price = this.price + (this.price*0.03);
      display.displayKL(this.price); 
  } else if (this.seats > 1 && this.seats < 5) {
      this.price = this.price + (this.price*0.05);
      display.displayKL(this.price); 
  } else if (this.seats === 1) {
      this.price = 91000
      display.displayKL(this.price); 
  } else {
    this.price = "-";
    display.displayKL(this.price);
  };
  console.log('KL', this.seats)
  },

  message(){
    const seatsLeft = document.querySelector('#second-result');
  
    if (this.seats >= 7) {
      seatsLeft.innerText = `${this.seats-6} seat(s) left before the price bracket increases.`;
    } else if (this.seats > 1 && this.seats < 7) {
      seatsLeft.innerText = `${this.seats-1} seat(s) left before the price bracket increases`;
    } else if (this.seats === 1) {
      seatsLeft.innerText = `only ONE seat left at this price!`;
    } else {
      seatsLeft.innerText = `Sorry, there are no seats left.`;
    } 
  }
}

const economyCabin = {
  "seats": 15,
  "price": 50,

  getPrice() {
    this.seats -= 1;
    if (this.seats >= 7) {
      this.price = this.price + (this.price*0.03);
      display.displayEconomy(this.price); 
  } else if (this.seats > 1 && this.seats < 7) {
      this.price = this.price + (this.price*0.05);
      display.displayEconomy(this.price); 
  } else if (this.seats === 1) {
      this.price = 91000
      display.displayEconomy(this.price); 
  } else {
    this.price = "-";
    display.displayEconomy(this.price);
  };
  console.log('economy', this.seats)
  },

  message(){
    const seatsLeft = document.querySelector('#second-result');
  
    if (this.seats >= 7) {
      seatsLeft.innerText = `${this.seats-6} seat(s) left before the price bracket increases.`;
    } else if (this.seats > 1 && this.seats < 7) {
      seatsLeft.innerText = `${this.seats-1} seat(s) left before the price bracket increases`;
    } else if (this.seats === 1) {
      seatsLeft.innerText = `only ONE seat left at this price!`;
    } else {
      seatsLeft.innerText = `Sorry, there are no seats left.`;
    } 
  }
}

const businessCabin = {
  "seats": 6,
  "price": 50,

  getPrice() {
    this.seats -= 1;
    if (this.seats >= 3) {
      this.price = this.price + (this.price*0.06);
      display.displayBusiness(this.price); 
  } else if (this.seats > 1 && this.seats < 3) {
      this.price = this.price + (this.price*0.1);
      display.displayBusiness(this.price); 
  } else if (this.seats === 1) {
      this.price = 91000
      display.displayBusiness(this.price); 
  } else {
    this.price = "-";
    display.displayBusiness(this.price);
  };
  console.log('business', this.seats)
  },

  message(){
    const seatsLeft = document.querySelector('#second-result');
  
    if (this.seats >= 3) {
      seatsLeft.innerText = `${this.seats-2} seat(s) left before the price bracket increases.`;
    } else if (this.seats > 1 && this.seats < 3) {
      seatsLeft.innerText = `${this.seats-1} seat(s) left before the price bracket increases`;
    } else if (this.seats === 1) {
      seatsLeft.innerText = `only ONE seat left at this price!`;
    } else {
      seatsLeft.innerText = `Sorry, there are no seats left.`;
    } 
  }
}

const firstCabin = {
  "seats": 4,
  "price": 50,

  getPrice() {
    this.seats -= 1;
    if (this.seats > 1) {
      this.price = this.price + (this.price*0.15);
      display.displayFirst(this.price); 
  } else if (this.seats === 1) {
      this.price = 191000
      display.displayFirst(this.price); 
  } else {
    this.price = "-";
    display.displayFirst(this.price);
  };
  console.log('first', this.seats)
  },

  message(){
    const seatsLeft = document.querySelector('#second-result');
  
    if (this.price !== "-") {
      seatsLeft.innerText = ` `;
    } else {
        seatsLeft.innerText = `Sorry, there are no seats left.`;
    }
  }
}

// UI elements
const input = document.getElementById('user-input');
const btnKL = document.getElementById('btn-KL');
const ticketInput = document.getElementById('selector');
const locationInputKL = document.querySelector('.location-KL');
const locationInputBali = document.querySelector('.location-bali');

// add event listeners
document.addEventListener('DOMContentLoaded', hideCabins);
locationInputKL.addEventListener('click', chooseKL);
locationInputBali.addEventListener('click', chooseBali);
input.addEventListener('click', buySeat);
btnKL.addEventListener('click', buySeat);


// hide cabins function
function hideCabins() {
  document.getElementById('hidden').style.visibility = "hidden";
  document.getElementById('btn-KL').style.visibility = "hidden";
}

// choose location function
function chooseKL() {
  document.getElementById('hidden').style.visibility = "hidden";
  document.getElementById('btn-KL').style.visibility = "visible";
  input.addEventListener('click', buySeat);

  console.log(locationInputKL.value);
}

function chooseBali() {
  document.getElementById('btn-KL').style.visibility = "hidden";
  document.getElementById('hidden').style.visibility = "visible";
}

// buy seat function
function buySeat(e) {
  const ticketClass = ticketInput.value;
  
  if (locationInputKL.value === "KL") {
    planeKL.getPrice();
  } else if (ticketClass === "economy") {
    economyCabin.getPrice();
  } else if (ticketClass === "first") {
    firstCabin.getPrice();
  } else if (ticketClass === "business") {
    businessCabin.getPrice();
  }
  e.preventDefault;
}

// display results for each cabin
const display = {
  displayKL(data) {
    const price = document.querySelector('#result');
    price.innerText = "$" + data;
  
    planeKL.message();
    
  },
  displayEconomy(data) {
    const price = document.querySelector('#result');
    price.innerText = "$" + data;
  
    economyCabin.message();
    
  },
  displayFirst(data) {
    const price = document.querySelector('#result');
    price.innerText = "$" + data;
  
    firstCabin.message(); 
  },
  displayBusiness(data) {
    const price = document.querySelector('#result');
    price.innerText = "$" + data;
  
    const seatsLeft = document.querySelector('#second-result');
  
    businessCabin.message();
  }
}
 
