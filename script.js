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
    seatsNumber: ["E1","E2","E3","E4","E5","E6","E7","E8","E9","E10","E11","E12","E13","E14","E15"],
    maxPrice:91000
};

var cabinBusiness ={
        maxSeat: 6,
    planeSeats:6,
    planePrice:50,
    increaseFirstHalf:1.06,
    increaseSecondHalf:1.1,
    seatsNumber: ["B1","B2","B3","B4","B5","B6"],
    maxPrice:91000

}

var cabinFirstClass ={
        maxSeat: 4,
    planeSeats:4,
    planePrice:50,
    increaseFirstHalf:1.15,
    increaseSecondHalf:1.15,
    seatsNumber: ["F1","F2","F3","F4"],
    maxPrice:191000

}

var Destination; //1 for KL and 2 for Bali
var chosenSeat;
var cabinType;
var unconfirmedPlane;
var outputMessage;
var reply;
var inputHappened = function(currentInput){
  var output="";
  console.log(currentInput);
  switch(questionCount){
    case 0:
    if(currentInput==="1"){

        Destination=1;
        questionCount++;
        outputMessage=`Please choose your seat number. Seat avaliable are ${tenSeater.seatsNumber}`;
    }
    else if (currentInput==="2"){

        Destination=2;
        questionCount++;
        outputMessage="Please choose 1 for Economy class. 2 for Business Class. 3 for First Class";
    } else{
        defaultError();
        questionCount=0;
    }

    break;
    case 1:

    if(Destination===1){
        outputMessage="";
        chosenSeat=currentInput;
  checkSeats(tenSeater);
    } else
    if(currentInput==="1" || currentInput==="2" || currentInput==="3"){
        cabinType=currentInput;
        questionCount++;
        currentInput="";
        if(cabinType==="1")
            {
                outputMessage=`Please choose your seat number. Seat avaliable are ${cabinEconomy.seatsNumber}`;

            }
            else  if(cabinType==="2")
            {
                outputMessage=`Please choose your seat number. Seat avaliable are ${cabinBusiness.seatsNumber}`;

            } else
                        {
                outputMessage=`Please choose your seat number. Seat avaliable are ${cabinFirstClass.seatsNumber}`;

            }
    }
    else
    {

        defaultError();
        questionCount=0;
    }


    break;
    case 2:

    if(Destination===1){
            reply=currentInput.toLowerCase();
            if(reply==="y"){
                tenSeater=unconfirmedPlane;
                unconfirmedPlane="";
                questionCount=0;
                outputMessage=`Thank you. Please choose your destination. 1 for KL, 2 for Bali`;
            }
            else if(reply==="n"){
                unconfirmedPlane="";
                questionCount=0;
                outputMessage=`Thank you. Please choose your destination. 1 for KL, 2 for Bali`;
            }
                else
    {
        defaultError();
        questionCount=0;
    }

    }
    else if(Destination===2){

        if(cabinType==="1"){
        outputMessage="";
        chosenSeat=currentInput;
        checkSeats(cabinEconomy);
        }else
        if(cabinType==="2"){
        outputMessage="";
        chosenSeat=currentInput;
        checkSeats(cabinEconomy);
        } else
        if (cabinType==="3"){
        outputMessage="";
        chosenSeat=currentInput;
        checkSeats(cabinFirstClass);
        }



    }
    break;

    case 3:

        if(cabinType==="1"){
            reply=currentInput.toLowerCase();
            if(reply==="y"){
                cabinEconomy=unconfirmedPlane;
                unconfirmedPlane="";
                questionCount=0;
                outputMessage=`Thank you. Please choose your destination. 1 for KL, 2 for Bali`;
            }
            else if(reply==="n"){
                unconfirmedPlane="";
                questionCount=0;
                outputMessage=`Thank you. Please choose your destination. 1 for KL, 2 for Bali`;
            }
                else
    {
        defaultError();
        questionCount=0;
    }
        }
        else
        if(cabinType==="2"){
            reply=currentInput.toLowerCase();
            if(reply==="y"){
                tenSeater=unconfirmedPlane;
                unconfirmedPlane="";
                questionCount=0;
                outputMessage=`Thank you. Please choose your destination. 1 for KL, 2 for Bali`;
            }
            else if(reply==="y"){
                unconfirmedPlane="";
                questionCount=0;
                outputMessage=`Thank you. Please choose your destination. 1 for KL, 2 for Bali`;
            }
                else
    {
        defaultError();
        questionCount=0;
    }
        } else
        if (cabinType==="3"){
            reply=currentInput.toLowerCase();
            if(reply==="y"){
                tenSeater=unconfirmedPlane;
                unconfirmedPlane="";
                questionCount=0;
                outputMessage=`Thank you. Please choose your destination. 1 for KL, 2 for Bali`;
            }
            else if(reply==="y"){
                unconfirmedPlane="";
                questionCount=0;
                outputMessage=`Thank you. Please choose your destination. 1 for KL, 2 for Bali`;
            }
                else
    {
        defaultError();
        questionCount=0;
    }
        }

    break;
    default:
    break;
  }

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
            outputMessage=`Thank you for flying with ABC airline. Your seat number is ${chosenSeat} and it cost $${plane.planePrice}. The number of seats left before the price increase is ${plane.planeSeats-5}. Seats avaliable are ${plane.seatsNumber}. Is this your choice? (Y/N)`;
            if(Destination===1)
            {

                questionCount=2;
            } else {


                questionCount=3;
            }

        }

        else
        {
            outputMessage=`Thank you for flying with ABC airline. Your seat number is ${chosenSeat} and it cost $${plane.planePrice}.Seats avaliable are ${plane.seatsNumber}.Is this your choice? (Y/N)`;
            if(Destination===1)
            {
                questionCount=2;
            } else {
    console.log("in bali check");

                questionCount=3;
            }
        }


        plane.planePrice=calculatePriceIncrease(plane);

    }

  }

  if(outputMessage===""){
    if(plane.seatsNumber===0){
        outputMessage='We are currently sold out. Please contact hot desk. Please choose your destination. 1 for KL, 2 for Bali'
        questionCount=0;
    }
    else{
        outputMessage=`The seat number is invalid. Try again later.Seats avaliable are ${plane.seatsNumber}.Please choose your destination. 1 for KL, 2 for Bali`;}
        questionCount=0
  }


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
            plane.planePrice=plane.maxPrice;
        }
        return plane.planePrice;

};
var defaultError=function()
{
outputMessage="You have keyed an invalid option.Please choose your destination. 1 for KL, 2 for Bali";
};



alert(`Good morning. Please choose your destination. 1 for KL, 2 for Bali`);