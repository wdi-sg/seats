
//defining tickets available and original price
var availableTickets = 10;
var basicPrice = 50;

var availableClassTickets = {
    economy: 15,
    business: 6,
    first: 4,
}

//to store user information in cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function buyTicket() {
    if (availableTickets >= 6) {
    for(var i = 0; i < 6; i++) {
        basicPrice += (basicPrice*0.03);
        return(basicPrice.toFixed(2));
    }
    } else if (availableTickets >= 2) {
        for(var i = 6; i < 10; i++) {
        basicPrice += (basicPrice*0.05);
        return(basicPrice.toFixed(2));
    }
    } else if (availableTickets === 1) {
        basicPrice = 91000;
        return(basicPrice);
    }
}

function classPriceCalculation(price) {
  var firstEconomyPrice = (price*1.03).toFixed(2);
  var secondEconomyPrice = (price*1.05).toFixed(2);
  var firstBusinessPrice = (price*1.06).toFixed(2);
  var secondBusinessPrice = (price*1.10).toFixed(2);
  var firstClassPrice = (price*1.15).toFixed(2);
}