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
var currentPrice = 0;
var availableClassSeats = 15;//airplane2.economySeats + airplane2.businessSeats + airplane2.firstSeats;

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
var calculateCurrentPrice = function(){
  var seatsTaken = airplane.seats - currentTicket;
  //for the first half of the plane
  if(seatsTaken > 0 && seatsTaken < (airplane.seats/2)){
    currentPrice = airplane.basePrice + (airplane.basePrice * .03);
  }
  else if(seatsTaken >= (airplane.seats/2) && seatsTaken < (airplane.seats-1)){
    currentPrice = airplane.basePrice + (airplane.basePrice * .05);
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

var buyTicket = function(){
  if(checkAvailableSeats()){
    if(document.getElementById('destination').value == 'kl'){
      calculateCurrentPrice();
      currentSeats--;
      return "Your ticket costs $" + currentPrice;
    } else if(document.getElementById('destination').value == 'bali'){

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
