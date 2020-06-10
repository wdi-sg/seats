console.log("hello script js");
var airplane = {
  seats: 10,
  basePrice: 50
}
var airplane2 = {
  economySeats: 15,
  businessSeats: 6,
  firstSeats: 4,
  basePrice: 50
}
var currentSeats = airplane.seats;
var currentEconomySeats = airplane2.economySeats;
var currentBusinessSeats = airplane2.businessSeats;
var currentFirstSeats = airplane2.firstSeats;
var currentPrice = airplane.basePrice;
var availableClassSeats = airplane2.economySeats + airplane2.businessSeats + airplane2.firstSeats;

function setCookie(cname, cvalue, exdays){
  var d= new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname){
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++){
    var c = ca[i];
    while (c.charAt(0) == ' '){
      c = c.substring(1);
    }
    if(c.indexOf(name) == 0){
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var currentTicket = 0;
  if(getCookie('availableTicket') == "") {
    setCookie('availableTicket', currentSeats, 1);
  } else {
    if(document.getElementById("destination").value == 'kl') {
      currentTicket = getCookie('availableTicket');
      document.getElementById("totalTicket").innerHTML = currentTicket;
      console.log("kl cookie run " + currentTicket);
      }
  }
  if(getCookie('availableClassTicket') == "") {
    setCookie('availableClassTicket', availableClassSeats, 1);
    } else {
      if(document.getElementById("destination").value == 'bali') {
        currentTicket = getCookie('availableClassTicket');
        document.getElementById("totalTicket").innerHTML = currentTicket;
        } 
    }
function updateTicket() {
      if(getCookie('availableTicket') != "") {
        if(document.getElementById("destination").value == 'kl') {
          currentTicket = getCookie('availableTicket');
          document.getElementById("totalTicket").innerHTML = currentTicket;
          console.log("kl cookie change");
        }
      }
      if(getCookie('availableClassTicket') != "") {
        if(document.getElementById("destination").value == 'bali') {
          currentTicket = getCookie('availableClassTicket');
          document.getElementById("totalTicket").innerHTML = currentTicket;
          console.log("bali ticket change");
        }
      }
}
var calculateEconomyPrice = function(){
  var seatsTaken = airplane2.economySeats - currentEconomySeats;
  //for the first half of the plane
  if(seatsTaken > 0 && seatsTaken < (airplane2.economySeats/2)){
    currentPrice = currentPrice + (airplane2.basePrice * .03);
  }
  else if(seatsTaken >= (airplane2.economySeats/2) && seatsTaken < (airplane2.economySeats-1)){
    currentPrice = currentPrice + (airplane2.basePrice * .05);
  }
  else if(seatsTaken == 0) { //first seat
    currentPrice = airplane2.basePrice;
  }
  else if(seatsTaken == (airplane2.economySeats-1)){
    currentPrice = 91000;
  }
  else{
    currentPrice = 0;
  }
}

var calculateBusinessPrice = function(){
  var seatsTaken = airplane2.businessSeats - currentBusinessSeats;
  //for the first half of the plane
  if(seatsTaken > 0 && seatsTaken < (airplane2.businessSeats/2)){
    currentPrice = currentPrice + (airplane2.basePrice * .06);
  }
  else if(seatsTaken >= (airplane2.businessSeats/2) && seatsTaken < (airplane2.businessSeats-1)){
    currentPrice = currentPrice + (airplane2.basePrice * .1);
  }
  else if(seatsTaken == 0) { //first seat
    currentPrice = airplane2.basePrice;
  }
  else if(seatsTaken == (airplane2.businessSeats-1)){
    currentPrice = 91000;
  }
  else{
    currentPrice = 0;
  }
} 
var calculateFirstPrice = function(){
  var seatsTaken = airplane2.firstSeats - currentFirstSeats;
  //for the first half of the plane
  if(seatsTaken >= 0 && seatsTaken < (airplane2.firstSeats-1)){
    currentPrice = currentPrice + (airplane2.basePrice * .15);
  }
  else if(seatsTaken == (airplane2.firstSeats-1)){
    currentPrice = 191000;
  }
  else{
    currentPrice = 0;
  }
} 

var calculateCurrentPrice = function(){
  var seatsTaken = airplane.seats - currentSeats;
  //for the first half of the plane
  if(seatsTaken > 0 && seatsTaken < (airplane.seats/2)){
    currentPrice = currentPrice + (airplane.basePrice * .03);
  }
  else if(seatsTaken >= (airplane.seats/2) && seatsTaken < (airplane.seats-1)){
    currentPrice = currentPrice + (airplane.basePrice * .05);
  }
  else if(seatsTaken == 0) { //first seat
    currentPrice = airplane.basePrice;
  }
  else if(seatsTaken == (airplane.seats-1)){
    currentPrice = 91000;
  }
  else{
    currentPrice = 0;
  }
}

var calculateBaliPrice = function(flightClass){
    if(flightClass == "first"){
      //calculate first class price here
      calculateFirstPrice();
      currentFirstSeats--;
    } else if(flightClass == "business"){
      //calculate business class price here
      calculateBusinessPrice();
      currentBusinessSeats--;
    } else if(flightClass == "economy"){
      //calculate economy class price here
      calculateEconomyPrice();
      currentEconomySeats--;
    } else {
      //return error
      return "error";
    }


    
}
var minusCookieTicket = function(){
  if(document.getElementById('destination').value == 'kl'){
    //set cookie to new value here
    setCookie('availableTicket', (currentSeats - 1), 1);
  } else {
    setCookie('availableClassTicket', (currentTicket - 1), 1);
  }
}
var buyTicket = function(){
  if(checkAvailableSeats()){
    if(document.getElementById('destination').value == 'kl'){
      calculateCurrentPrice();
      currentSeats--;
      return "Your ticket costs $" + currentPrice;
    } else if(document.getElementById('destination').value == 'bali'){
//bali price calculation to run here
      calculateBaliPrice(document.getElementById('flightClass').value);
      return "Your ticket costs $" + currentPrice;
    }
    
  }else {
    return "All tickets are sold out.";
  }
}

var checkAvailableSeats = function(){
  //validate available seats, boolean return.
  if(currentSeats > 0){
    return true;
  } else{
    return false;
  }
}
