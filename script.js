console.log("hello script js");

// ticket price = 50 + ( 5 * N )

var ticketPrice = 50;
var inputCount = 0;

var increase = function ( a ){
    return 5 * a ;
};

var inputHappened = function(currentInput){

    if (inputCount > 8){
        console.log("SOLD OUT!");
        return "Tickets Sold Out.";
    }



var result = increase(inputCount);

ticketPrice = result + 50;

inputCount = inputCount + 1;

var seatsLeft = 10 - inputCount;

return "Ticket price is: $"+ticketPrice +" | Seats remaining: "+seatsLeft;
};

/*A plane has 10 seats.

When the plane is empty a seat is $50.

For each seat sold the ticket price goes up 5% over the original price of $50.

When a user types anything into the input, consider that seat sold and show the user the price of their seat.

How to start
Think about what different steps are asked to be implemented in this program.

How can you implement each and add them on top of each other?

How does this task break down into different parts?

A suggested order might be:

calculate the price of a seat when it never changes. ( it is always $50 )
add on keeping track of how many seats are left on the plane
add on the price increase functionality
Remember that each time you complete a part of the assignment, you should make a commit in git.
*/