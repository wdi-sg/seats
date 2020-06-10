let seat = 10; //total no. of seats
let price = 50; //assume price will be compounded

function inputHappened(currentInput){
    console.log(currentInput);
    if(currentInput != "") {
        if(seat >= 6 && seat <= 9) {
            //seats #2–5 cost 3% more compounded
            seat--;
            price = price * 1.03; //price is used bec amt is compounded
        } else if(seat >= 2 && seat <= 5) {
            //seats #6–9 is 5% more compounded
            seat--;
            price = price * 1.05;
        } else if(seat > 0 && seat == 1) {
            //last seat is 91,000
            seat--;
            price = 91000;
        } else if(seat == 10) {
            //first seat is 50;
            seat--;
            price = 50;
        } else {
            //notify no more seat left
            return "No more seat left";
        }
        alert(seat + " seat(s) left");
        return "Seat selected, the price of your seat is $ " + price + ".";
    }
}