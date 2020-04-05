
var i = 10;
var inputHappened = function(currentInput){
  console.log("hello");
  if (i <10 && i> 0){
    console.log (i+" tickets left with" );
    i = i-1 ;
    var output = "Your ticket cost $52.50 and we are left with " + (i) + " tickets.";
    return output;
  } else if (i === 10) {
    console.log ("50");
    i = i-1 ;
    console.log (i+" tickets left." );
    var output = "Your ticket cost $50 and we are left with " + i + "tickets.";
    return output;
  }else {
    console.log ("no more")}
    return "SOLD OUT!!!"
};

/*The airline boss requests finer-grained pricing:

For the first half of the seats, the price goes up 3% over the original price of $50.

For the second half it goes up by 5% over the original price of $50.

The last seat is $91,000.*/




//console.log("hello script js");
/*
var inputHappened = function(currentInput){
  console.log( currentInput );
  return "WOW SOMETHING HAPPENED";
};
*/