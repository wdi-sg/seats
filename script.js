console.log("hello script js");
var planeSeats =10;
var planePrice=50;
const increaseFirstHalf=1.03;
const increaseSecondHalf=1.05;
var seatsNumber=["A1","A2","A3","A4","A5","B1","B2","B3","B4","B5"];


var inputHappened = function(currentInput){
  var output="";
  console.log(currentInput);
  for(var i = 0; i<seatsNumber.length;i++)
  {
    console.log(seatsNumber[i]);
    if(currentInput===seatsNumber[i])
    {
        console.log("Here");
        output=`Thank you for flying with ABC airline. Your seat number is ${seatsNumber[i]} and it cost $${planePrice}.`;
        seatsNumber[i]="";
        calculatePriceIncrease();
        planeSeats--;
    }
    /*
    else
    {
        output=`The seat number is invalid. Try again later.`;
    }*/
  }

  if(output===""){
    output=`The seat number is invalid. Try again later.`;
  }
    console.log("out of the loop");
    alert(`Good morning. The current seat avaliable is ${seatsNumber}.`);
  return output;

};
var calculatePriceIncrease=function(){
        if(planeSeats>5)
        {planePrice=planePrice*increaseFirstHalf;
        }
        else if (planeSeats>2){
            console.log("2nd half");
            planePrice=planePrice*increaseSecondHalf;

        } else
        {
            planePrice=91000;
        }

}
alert(`Good morning. The current seat avaliable is ${seatsNumber}.`);