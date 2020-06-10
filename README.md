# seats

![https://media.giphy.com/media/WKJpCXfvBHyla/giphy.gif](https://media.giphy.com/media/WKJpCXfvBHyla/giphy.gif)

Implement a program for a kiosk that sells airline tickets.

### Requirements:

A plane has 10 seats.

When the plane is empty a seat is $50.

For each seat sold the ticket price goes up 5% over the original price of $50.

When a user types anything into the input, consider that seat sold and show the user the price of their seat.

### How to start
Think about what different steps are asked to be implemented in this program.

How can you implement each and add them on top of each other?

How does this task break down into different parts?

A suggested order might be:

- calculate the price of a seat when it never changes. ( it is always $50 )
- add on keeping track of how many seats are left on the plane
- add on the price increase functionality

Remember that each time you complete a part of the assignment, you should make a **commit** in git.

### further
The airline boss requests finer-grained pricing:

For the first half of the seats, the price goes up 3% over the original price of $50.

For the second half it goes up by 5% over the original price of $50.

The last seat is $91,000.

### further
When outputing a message tell the user how many tickets are left before the price bracket goes up.

### further
Change the pricing to increase by 3% and 5% over the *current* price of the ticket. (i.e., each ticket is some percentage more than the last)

### further
Implement a check of the input. Make sure to show the user a message when they type something invalid.

### further
The airline upgraded it's fleet of aircraft. Each plane has 3 cabins, economy, business and first class.

The user can now type in "buy first class" and the kiosk will sell them a first class seat, same for the other cabins.

A plane now has 15 economy seats, 6 business class seats and 4 first class seats.

##### The pricing models have also changed:

##### For economy pricing is the same.

For the first half of the seats, the price goes up 3%.

For the second half it goes up by 5%.

The last seat is $91,000.

##### For business class:

For the first half of the seats, the price goes up 6%.

For the second half it goes up by 10%.

The last seat is $91,000.

##### For first class:

All seats goes up by 15% over the original price of $50.

The last seat is $191,000.

### further
The airline wants to use the entire fleet of aircraft. (Up to now you've only been using one plane)

Flights to KL use the 10 seat plane.

Flights to Bali use the 3 cabin plane.

Let the user type in their destination.

Show them the price of the ticket.

If they then type "buy", sell that ticket.

If they type "cancel", don't sell the ticket.



HINTS

var availableSeats = 10;
var originalPrice = 50;
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
// TODO: read from cookie if anyone selected the value
var currentTicket = 0;
if(getCookie('availableTicket') == "") {
  availableSeats -= availableSeats;
  setCookie('availableTicket', availableSeats, 1);
} else {
  currentTicket = getCookie('availableTicket');
  document.getElementById("totalTicket").value = currentTicket;
}
function buyTicket() {
  // validate if ticket still available
  if(checkAvailableTicket()) {
    // TODO: process buying ticket
  } else {
    document.getElementById("error").value = 'No more tickets';
    const button = document.querySelector('buy');
    button.disabled = true;
  }
}
// TODO
function basicPriceCalculation(price) {
}
// TODO
function classPriceCalculation(price) {
}
function checkAvailableTicket() {
  if(availableSeats > 0) {
    return true;
  } else {
    return false;
  }
}





4:59
index:
4:59
var availableSeats = 10;
var originalPrice = 50;
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
// TODO: read from cookie if anyone selected the value
var currentTicket = 0;
if(getCookie('availableTicket') == "") {
  availableSeats -= availableSeats;
  setCookie('availableTicket', availableSeats, 1);
} else {
  currentTicket = getCookie('availableTicket');
  document.getElementById("totalTicket").value = currentTicket;
}
function buyTicket() {
  // validate if ticket still available
  if(checkAvailableTicket()) {
    // TODO: process buying ticket
  } else {
    document.getElementById("error").value = 'No more tickets';
    const button = document.querySelector('buy');
    button.disabled = true;
  }
}
// TODO
function basicPriceCalculation(price) {
}
// TODO
function classPriceCalculation(price) {
}
function checkAvailableTicket() {
  if(availableSeats > 0) {
    return true;
  } else {
    return false;
  }
}
4:59
css:
4:59
#error {
  color:red;
}

MORE HINTS

var availableSeats = 10;
var originalPrice = 50;
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
// TODO: read from cookie if anyone selected the value
var currentTicket = 0;
if(getCookie('availableTicket') == "") {
  availableSeats -= availableSeats;
  setCookie('availableTicket', availableSeats, 1);
} else {
  currentTicket = getCookie('availableTicket');
  document.getElementById("totalTicket").value = currentTicket;
}
function buyTicket() {
  // validate if ticket still available
  if(checkAvailableTicket()) {
    // TODO: process buying ticket
  } else {
    document.getElementById("error").value = 'No more tickets';
    const button = document.querySelector('buy');
    button.disabled = true;
  }
}
// TODO
function basicPriceCalculation(price) {
}
// TODO
function classPriceCalculation(price) {
}
function checkAvailableTicket() {
  if(availableSeats > 0) {
    return true;
  } else {
    return false;
  }
}





4:59
index:
4:59
var availableSeats = 10;
var originalPrice = 50;
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
// TODO: read from cookie if anyone selected the value
var currentTicket = 0;
if(getCookie('availableTicket') == "") {
  availableSeats -= availableSeats;
  setCookie('availableTicket', availableSeats, 1);
} else {
  currentTicket = getCookie('availableTicket');
  document.getElementById("totalTicket").value = currentTicket;
}
function buyTicket() {
  // validate if ticket still available
  if(checkAvailableTicket()) {
    // TODO: process buying ticket
  } else {
    document.getElementById("error").value = 'No more tickets';
    const button = document.querySelector('buy');
    button.disabled = true;
  }
}
// TODO
function basicPriceCalculation(price) {
}
// TODO
function classPriceCalculation(price) {
}
function checkAvailableTicket() {
  if(availableSeats > 0) {
    return true;
  } else {
    return false;
  }
}
4:59
css:
4:59
#error {
  color:red;
}

updated hint for html:
New
5:31
<html>
  <body>
    <div class="container">
      <h2>seats</h2>
          <h4>Avalaible tickets: <span id="totalTicket"></span></h4>
          <select id="mySelect" onchange="updateTicket();">
            <option value="kl">KL</option>
            <option value="bali">Bali</option>
          </select>
          <input class="user-input" type="button" id="buy" value="Buy" onclick="buyTicket();"/>
      <h4>Ticket costs:  <span id="ticketCost"></span></h4>
      <p id="error" style="display:none;"></p>
    </div>
  </body>
</html>