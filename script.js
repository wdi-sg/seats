var totalTicket= 10;
const ticketCost= 52.5;
const ticket2Cost=50;
var currCost= 0;
var ticketSold=0;
var ticketsLeft=10;
 document.getElementById("ticketsLeft").innerHTML = ticketsLeft;
document.getElementById("totalTicket").innerHTML = totalTicket;
document.getElementById("ticketCost").innerHTML = ticketCost;

function buyTicket(){
  totalTicket-=1;
  ticketSold +=1;

  ticketsLeft=totalTicket

  // currCost=ticket2Cost+(0.05*ticket2Cost*ticketSold);
  if (totalTicket<=10 && totalTicket>5) {
    currCost=ticket2Cost+0.03*ticket2Cost
  }
  else if (totalTicket<=5 && totalTicket>=2) {
    currCost=ticket2Cost+0.05*ticket2Cost
  }
  else if(totalTicket==1) {
    currCost="91000"
  }
  else if(totalTicket==0){
    currCost="NIL"
  }
  else {
  const button = document.querySelector('buy');
    button.disabled = true;
  }
  document.getElementById("ticketCost").innerHTML = currCost;
  document.getElementById("totalTicket").innerHTML = totalTicket;
    document.getElementById("ticketsLeft").innerHTML = ticketsLeft;
 }


