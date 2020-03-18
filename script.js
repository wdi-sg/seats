console.log("hello script js");
var questionCount=0;



var tenSeater = {
    maxSeat: 10,
    planeSeats:10,
    planePrice:50,
    increaseFirstHalf:1.06,
    increaseSecondHalf:1.1,
    seatsNumber: ["A1","A2","A3","A4","A5","B1","B2","B3","B4","B5"]

};

var cabinEconomy ={
        maxSeat: 15,
    planeSeats:15,
    planePrice:50,
    increaseFirstHalf:1.03,
    increaseSecondHalf:1.05,
    seatsNumber: ["E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","E13","E14","E15"]
};

var cabinBusiness ={
        maxSeat: 6,
    planeSeats:6,
    planePrice:50,
    increaseFirstHalf:1.06,
    increaseSecondHalf:1.1,
    seatsNumber: ["B1","B2","B3","B4","B5","B6"]

}

var cabinFirstClass ={
        maxSeat: 6,
    planeSeats:6,
    planePrice:50,
    increaseFirstHalf:1.06,
    increaseSecondHalf:1.1,
    seatsNumber: ["B1","B2","B3","B4","B5","B6"]

}

var chosenSeat;
var unconfirmedPlane;
var outputMessage;
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

  chosenSeat=currentInput;
  checkSeats(tenSeater);

    console.log(unconfirmedPlane);
    output=outputMessage
  return output;

};



//function to check seats
var checkSeats=function(plane){
for(var i = 0; i<plane.seatsNumber.length;i++)
  {
    console.log(plane.seatsNumber[i]);
    if(chosenSeat===plane.seatsNumber[i])
    {
        plane.planeSeats--;
        plane.seatsNumber[i]="";
        if(plane.planeSeats>5){
            outputMessage=`Thank you for flying with ABC airline. Your seat number is ${plane.seatsNumber[i]} and it cost $${plane.planePrice}. The number of seats left before the price increase is ${plane.planeSeats-5}. Seats avaliable are ${plane.seatsNumber}.`;

        }

        else
        {
            outputMessage=`Thank you for flying with ABC airline. Your seat number is ${plane.seatsNumber[i]} and it cost $${plane.planePrice}.Seats avaliable are ${plane.seatsNumber}.`;
        }


        plane.planePrice=calculatePriceIncrease(plane);

    }

  }

  if(output===""){
    outputMessage=`The seat number is invalid. Try again later.Seats avaliable are ${plane.seatsNumber}.`;
  }

    alert(`Good morning. The current seat avaliable is ${plane.seatsNumber}.`);
    unconfirmedPlane=plane;
};


//function for price increase
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