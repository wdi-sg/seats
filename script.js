console.log("hello script js");

var seats = 0;
var seatsRemainEconomy = 15;
var seatsRemainBusiness = 6;
var seatsRemainFirst = 4;
var seatsRemain = 10;
var price = 50;
var totalPrice;
var classSeat = [];

var inputHappened = function(currentInput){
    classSeat.push(currentInput);
    console.log(classSeat[0]);
    console.log(classSeat[1]);
    clear ();

    if (classSeat[0]=="KL") {

        if (isNaN(parseFloat(currentInput))==true)  {
            console.log("test2");
            clear();
            return output = "No. of tickets";
        }
        else if (isNaN(parseFloat(currentInput))==false)  {

            if ((seatsRemain-parseFloat(currentInput)) >= 0) {
                seats = seats + parseFloat(currentInput);
                //purchase all 10 tickets
                if(seatsRemain==10) {
                    totalPrice = price * parseFloat(currentInput);
                }
                //1-7 half of the seats
                if(seatsRemain>5 && seatsRemain<10) {
                    totalPrice = (price*1.03)* parseFloat(currentInput);
                }
                //1-7 half of the seats
                if(seatsRemain>1 && seatsRemain <6) {
                    totalPrice = (price*1.05)* parseFloat(currentInput);
                }
                //last seat price.
                if (currentInput == 1 && seatsRemain==1) {
                    totalPrice = 91000;
                }

            }
            if ((seatsRemain-parseFloat(currentInput)) < 0) {
                clear();
                return output = "Not enough seats! Please try again!\nSeats Remaining: "+seatsRemain;
            }
            seatsRemain = seatsRemain - parseFloat(currentInput);
            clear();
            return output = "You have purchased "+parseFloat(currentInput)+
            " seats tickets, the total cost is: $"+totalPrice.toFixed(2)+
            "\nTickets Remaining: "+seatsRemain;
        }
    }
    if (classSeat[0]=="Bali") {

        if (classSeat[1]=="economy") {

            if (isNaN(parseFloat(currentInput))==true)  {
                console.log("test2");
                clear();
                return output = "No. of tickets";
            }
            else if (isNaN(parseFloat(currentInput))==false)  {

                if ((seatsRemainEconomy-parseFloat(currentInput)) >= 0) {
                    seats = seats + parseFloat(currentInput);

                        //purchase all 15 tickets
                        if(seatsRemainEconomy==15) {
                            totalPrice = price * parseFloat(currentInput);
                        }
                        //8-14 of the seats, price up 3%
                        if(seatsRemainEconomy>7 && seatsRemainEconomy<15) {
                            totalPrice = (price*1.03)* parseFloat(currentInput);
                        }
                        //1-7 half of the seats
                        if(seatsRemainEconomy>1 && seatsRemainEconomy<=7) {
                            totalPrice = (price*1.05)* parseFloat(currentInput);
                        }
                        //last seat price.
                        if (currentInput == 1 && seatsRemainEconomy==1) {
                            totalPrice = 91000;
                        }
                }
                if ((seatsRemainEconomy-parseFloat(currentInput)) < 0) {
                    clear();
                    return output = "Not enough seats! Please try again!\nSeats Remaining: "+seatsRemainEconomy;
                }
                seatsRemainEconomy = seatsRemainEconomy - parseFloat(currentInput);
                clear();
                return output = "You have purchased "+parseFloat(currentInput)+
                " economy tickets, the total cost is: $"+totalPrice.toFixed(2)+"\nTickets Remaining: "+
                seatsRemainEconomy;
            }
        }
        if (classSeat[1]=="business") {

            if (isNaN(parseFloat(currentInput))==true)  {
                console.log("test2");
                clear();
                return output = "No. of tickets";
            }
            else if (isNaN(parseFloat(currentInput))==false)  {

                if ((seatsRemainBusiness-parseFloat(currentInput)) >= 0) {
                    seats = seats + parseFloat(currentInput);

                        //purchase all 6 tickets
                        if(seatsRemainBusiness==6) {
                            totalPrice = price * parseFloat(currentInput);
                        }
                        //4-6 of the seats, price up 3%
                        if(seatsRemainBusiness>3 && seatsRemainBusiness<6) {
                            totalPrice = (price*1.06)* parseFloat(currentInput);
                        }
                        //2-3 half of the seats
                        if(seatsRemainBusiness>1 && seatsRemainBusiness<=3) {
                            totalPrice = (price*1.10)* parseFloat(currentInput);
                        }
                        //last seat price.
                        if(currentInput == 1 && seatsRemainBusiness==1) {
                            totalPrice = 91000;
                        }
                }
                if ((seatsRemainBusiness-parseFloat(currentInput)) < 0) {
                    clear();
                    return output = "Not enough seats! Please try again!\nSeats Remaining: "+seatsRemainBusiness;
                }
                seatsRemainBusiness = seatsRemainBusiness - parseFloat(currentInput);
                clear();
                return output = "You have purchased "+parseFloat(currentInput)+
                " business class tickets, the total cost is: $"+totalPrice.toFixed(2)+"\nSeats Remaining: "+
                seatsRemainBusiness;
            }
        }
        if (classSeat[1]=="first") {

            if (isNaN(parseFloat(currentInput))==true)  {
                console.log("test2");
                clear();
                return output = "No. of tickets";
            }
            else if (isNaN(parseFloat(currentInput))==false)  {

                if ((seatsRemainFirst-parseFloat(currentInput)) >= 0) {
                    seats = seats + parseFloat(currentInput);

                        //purchase all 4 tickets
                        if(seatsRemainFirst > 1) {
                            totalPrice = (price*1.15)* parseFloat(currentInput);
                        }
                        //last seat price.
                        if (currentInput == 1 && seatsRemainFirst==1) {
                            totalPrice = 191000;
                        }
                }
                if ((seatsRemainFirst-parseFloat(currentInput)) < 0) {
                    clear();
                    return output = "Not enough seats! Please try again!\nSeats Remaining: "
                    +seatsRemainFirst;
                }
                seatsRemainFirst = seatsRemainFirst - parseFloat(currentInput);
                clear();
                return output = "You have purchased "+parseFloat(currentInput)+
                " business class tickets, the total cost is: $"+totalPrice.toFixed(2)
                +"\nSeats Remaining: "+seatsRemainFirst;
            }
        }
        if (isNaN(parseFloat(classSeat[1]))==false) {
            classSeat.splice(1);
            return output = "Enter \"economy\" or \"business\" or \"first\"!";
        }
        if (isNaN(parseFloat(classSeat[1]))==true) {
            classSeat.splice(1);
            return output = "Enter \"economy\" or \"business\" or \"first\"!";
        }
    }
    if (isNaN(parseFloat(classSeat[0]))==false) {
        classSeat.splice(0);
        return output = "Enter \"Bali\" or \"KL\"!";
    }
    if (isNaN(parseFloat(classSeat[0]))==true) {
        classSeat.splice(0);
        return output = "Enter \"Bali\" or \"KL\"!";
    }
};

var clear = function () {
    document.getElementById("input").value = "";
}