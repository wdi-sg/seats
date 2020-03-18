
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


//console.log("hello script js");
/*
var inputHappened = function(currentInput){
  console.log( currentInput );
  return "WOW SOMETHING HAPPENED";
};
*/