let buy = document.getElementById('buy');
let destinationInput = document.getElementById('destination');
let classInput = document.getElementById('seat class');
let output = document.getElementById('output');
buy.disabled = true;

//EVENT LISTENERS ----------------------------------------------------------------------------------

destinationInput.addEventListener('change', function() {
  if (destinationInput.value === 'KL') {
     if (classInput.value === 'Economy') {
       buy.disabled = false;
       output.innerText = show10S();
     }
     else {
       output.innerText = 'Only ECONOMY seats are available.';
       buy.disabled = true;
     }
  }
  else {
    output.innerText = 'Flight not yet available.';
    buy.disabled = true;
  }
});
classInput.addEventListener('change', function() {
  if (destinationInput.value === 'KL') {
    if (classInput.value === 'Economy') {
      if (economySeats > 0) {
        output.innerText = show10S();
        buy.disabled = false;
      }
      else {
        output.innerText = 'Tickets sold out.';
        buy.disabled = true;
      }
    }
    else {
      output.innerText = 'Only ECONOMY seats are available.';
      buy.disabled = true;
    }
  }
  else {
    output.innerText = 'Flight not yet available.';
    buy.disabled = true;
  }
});
buy.addEventListener('click', function() {
  if (classInput.value === 'Economy' && destinationInput.value === 'KL') {
    buy10S();
    output.innerText = show10S();
  }
  if (economySeats == 0) {
    output.innerText = 'Tickets sold out.';
    buy.disabled = true;
  }
});



//FOR 10-SEATER ---------------------------------------------------------------------------

let ticketPrice = 50;
let totalSeats = 10;
let economySeats = 10;
let basket = 0;


function show10S() {
  if (economySeats == 0) {
    return "Tickets sold out.";
  }
  return 'Price: $' + parseFloat(ticketPrice.toFixed(2)) + ', seats left: ' + economySeats;
}

function buy10S() {
  economySeats--;
  if (economySeats > 0) {
    if (economySeats >= totalSeats/2) {
      ticketPrice*=1.03;
    }
    else if (economySeats < totalSeats/2 && economySeats > 1) {
      ticketPrice*=1.05;
    }
    else if (economySeats === 1) {
      ticketPrice = 91000;
    }
    //basket+=parseFloat(ticketPrice.toFixed(2));
  }
}




//FOR 3-CABIN PLANE --------------------------------------------------------------------

let plane3C = {
  'Economy': {'seats': 15, 'price': 50},
  'Business': {'seats': 6, 'price': 50},
  'First': {'seats': 4, 'price': 50}
}

function show3C(seatClass) {
  if (plane3C[seatClass].seats > 0) {
    return 'Price: $' + parseFloat(plane3C[seatClass].price.toFixed(2)) + ', seats left: ' + plane3C[seatClass].seats;
  }
  else return "Tickets sold out.";
}

function buy3C(seatClass) {
  if (seatClass === 'Economy') {
    if (plane3C[seatClass].seats > 7.5) plane3C[seatClass].price*=1.03;
    else if (plane3C[seatClass].seats > 2) plane3C[seatClass].price*=1.05;
    else plane3C[seatClass].price = 91000;
  }
  else if (seatClass === 'Business') {
    if (plane3C[seatClass].seats > 3) plane3C[seatClass].price*=1.06;
    else if (plane3C[seatClass].seats > 2) plane3C[seatClass].price*=1.1;
    else plane3C[seatClass].price = 91000;
  }
  else if (seatClass === 'First') {
    if (plane3C[seatClass].seats > 2) plane3C[seatClass].price*=1.15;
    else plane3C[seatClass].price = 91000;

  }
  plane3C[seatClass].seats--;
}



