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
const TicketKiosk = {
    numberOfSeats: 10,
    seatsRemaining: 10,
    baseTicketPrice: 50,
    maxTicketPrice: 9100,
    ticketPrice: 50,
    get additionalFee() {
        // return TicketKiosk.seatsRemaining > 5 ? 3 : 5;
        if (TicketKiosk.seatsRemaining > 5) {
            return 3;
        }
        return 5;
    },
    get percentOfBasePrice() {
        return (TicketKiosk.additionalFee / 100) * TicketKiosk.baseTicketPrice;
    },
    //... Array = Make an array,
    //if seat <= 4, it will take 3%, else 5%
    get currentPercentageRate() {
        let percentageRate = 0;
        [...Array(TicketKiosk.seatsTaken).keys()].forEach(seat => {
            percentageRate += ((seat <= 4 ? 3 : 5) / 100) * TicketKiosk.baseTicketPrice;
        });
        return percentageRate;
    },
    get seatsTaken() {
        return TicketKiosk.numberOfSeats - TicketKiosk.seatsRemaining;
    },
    sellTicket: () => {
        if (TicketKiosk.seatsRemaining === 1) return TicketKiosk.seatsRemaining--;
        if (TicketKiosk.seatsRemaining === 2) {
            TicketKiosk.ticketPrice = TicketKiosk.maxTicketPrice;
        } else {
            TicketKiosk.ticketPrice = TicketKiosk.ticketPrice + TicketKiosk.percentOfBasePrice;
        }
        TicketKiosk.seatsRemaining--;
    },
    refundTicket: () => {
        TicketKiosk.seatsRemaining++;
        if (TicketKiosk.seatsRemaining === 1) {
            TicketKiosk.ticketPrice = TicketKiosk.baseTicketPrice + TicketKiosk.currentPercentageRate;
        } else {
            TicketKiosk.ticketPrice = TicketKiosk.ticketPrice - TicketKiosk.percentOfBasePrice;
        }
    },
    //`$${object.property.toFixed(2)}` where 2 is the decimal place
    showTicketPrice: () => {
        currentPriceOutput.innerHTML = TicketKiosk.seatsRemaining === 0 ? `No tickets available` : `$${TicketKiosk.ticketPrice.toFixed(2)}`;
    },
    showSeatsRemaining: () => {
        seatsRemainingOutput.innerHTML = TicketKiosk.seatsRemaining;
    }
};

numberOfPassengersInput.addEventListener('change', event => {
    if (TicketKiosk.seatsRemaining < TicketKiosk.numberOfSeats - parseInt(event.target.value)) {
        TicketKiosk.refundTicket();
    } else {
        TicketKiosk.sellTicket();
    }
    TicketKiosk.showTicketPrice();
    TicketKiosk.showSeatsRemaining();
});