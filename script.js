console.log("hello script js");
var questionCount=0;



var tenSeater = {
    maxSeat: 10,
    planeSeats:10,
    planePrice:50,
    increaseFirstHalf:1.03,
    increaseSecondHalf:1.05,
    seatsNumber: ["A1","A2","A3","A4","A5","B1","B2","B3","B4","B5"]

};


var inputHappened = function(currentInput){
  var output="";
  console.log(currentInput);
  switch(questionCount){
    case 0:
    break;
    case 1:
    break;
    case 2:
    break;
    default:
    break;
  }
  checkSeats(tenSeater);
  for(var i = 0; i<tenSeater.seatsNumber.length;i++)
  {
    console.log(tenSeater.seatsNumber[i]);
    if(currentInput===tenSeater.seatsNumber[i])
    {
        tenSeater.planeSeats--;
        tenSeater.seatsNumber[i]="";
        if(tenSeater.planeSeats>5){
            output=`Thank you for flying with ABC airline. Your seat number is ${tenSeater.seatsNumber[i]} and it cost $${tenSeater.planePrice}. The number of seats left before the price increase is ${tenSeater.planeSeats-5}. Seats avaliable are ${tenSeater.seatsNumber}.`;

        }

        else
        {
            output=`Thank you for flying with ABC airline. Your seat number is ${tenSeater.seatsNumber[i]} and it cost $${tenSeater.planePrice}.Seats avaliable are ${tenSeater.seatsNumber}.`;
        }


        tenSeater.planePrice=calculatePriceIncrease(tenSeater);

    }

  }

  if(output===""){
    output=`The seat number is invalid. Try again later.Seats avaliable are ${tenSeater.seatsNumber}.`;
  }

    alert(`Good morning. The current seat avaliable is ${tenSeater.seatsNumber}.`);
  return output;

};
var checkSeats=function(plane){

};



var calculatePriceIncrease=function(plane){
        if(plane.planeSeats>(plane.maxSeat/2))

        {

            plane.planePrice=plane.planePrice*plane.increaseFirstHalf;
        }
        else if (plane.planeSeats>2){
            console.log("2nd half");
            plane.planePrice=plane.planePrice*plane.increaseSecondHalf;

        } else
        {
            plane.planePrice=91000;
        }
        return plane.planePrice;

};
alert(`Good morning. The current seat avaliable is ${tenSeater.seatsNumber}.`);