console.log("hello script js");

let seats = 10; //total number of seats
let price = 50; //price of each seats

function inputHappened(currentInput){
  console.log(currentInput);
  let input = currentInput.toLowerCase(); //convert currentInput to lower case
  if (input == "yes"){
  //if input equals to yes then run the if else statement below
    if(seats >= 6 && seats <= 9){
        //seat 2 to 5 is 3% more than previous price
        seats--;
        price = price * 1.03;
    } else if (seats >= 2 && seats <= 5){
        //seat 6 to 9 is 5% more than previous price
        seats--;
        price = price * 1.05;
    } else if (seats > 0 && seats == 1){
        //seat 10 is $91000
        seats--;
        price = 91000;
    } else if (seats == 10){
        //seat 1 is $50
        seats--;
        price = 50;
    } else {
        //alert("No more seat left");
        return "No more seat left"
    }
    alert(seats + " more seats to price change");
    document.getElementById('input').value = "";
    return "You have bought a seat, the price of your seat is $" + price;
  } else if (input != "YES"){
    //if input not equals to yes then ask user to key in yes to buy ticket
    document.getElementById('input').value = "";
    return "Please key in YES to buy ticket"
  }
}