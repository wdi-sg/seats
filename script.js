// console.log("hello script js");

// var inputHappened = function(currentInput){
//   console.log( currentInput );
//   return "WOW SOMETHING HAPPENED";
// };

//     document.querySelector('#input').addEventListener('change', function(event){
//         var currentInput = event.target.value;
//         var result = inputHappened(currentInput);
//         display( result );
//       });

//       var display = function( data ){
//         var output = document.querySelector('#output');
//         output.innerText = data;
//       }

const nameInput = document.querySelector('#buyerName');
const numberOfPassengersInput = document.querySelector('#numPassenger');
const seatsRemainingOutput = document.querySelector('#seatsRemaining');
const currentPriceOutput = document.querySelector('#currentPrice');
const plane = {
    numberOfSeats: 10,
    baseTicketPrice: 50,
    ticketPrice: 50,
    additionalFee: 5,
    sellTicket: () => {
        plane.ticketPrice = plane.ticketPrice + ((plane.additionalFee / 100) * plane.baseTicketPrice);
    },
    refundTicket: () => {
        plane.ticketPrice = plane.ticketPrice - ((plane.additionalFee / 100) * plane.baseTicketPrice);
    },
    showTicketPrice: () => {
        currentPriceOutput.innerHTML = plane.ticketPrice;
    }
};

numberOfPassengersInput.addEventListener('change', event => {
    plane.sellTicket();
    plane.showTicketPrice();
    seatsRemainingOutput.innerHTML = plane.numberOfSeats - parseInt(event.target.value);

});