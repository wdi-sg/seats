console.log("hello script js");

let firstClassSeats = 4; //total number of first class seats
let bizClassSeats = 6; //total number of biz class seats
let ecoClassSeats = 15; //total number of eco class seats
let price = 50; //price of each seats

function inputHappened(currentInput){
  console.log(currentInput);
  let input = currentInput.toLowerCase(); //convert currentInput to lower case

  if (input == "buy first class"){
  //if input equals to 'buy first class' then run the if else statement below
    if(firstClassSeats >= 2 && firstClassSeats <= 3){
        //seat 2 to 3 is 15% more than previous price
        firstClassSeats--;
        price = price * 1.15;
    } else if (firstClassSeats > 0 && firstClassSeats == 1){
        //seat 4 is $191000
        firstClassSeats--;
        price = 191000;
    } else if (firstClassSeats == 4){
        //seat 1 is $50
        firstClassSeats--;
        price = 50;
    } else {
        //alert("No more seat left");
        return "No more seat left"
    }
    alert(firstClassSeats + " more seats to price change");
    document.getElementById('input').value = "";
    return "You have bought a first seat, the price of your seat is $" + price;
  } else if (input == "buy business class"){
    if(bizClassSeats >= 4 && bizClassSeats <= 5){
        //seat 2 to 3 is 6% more than previous price
        bizClassSeats--;
        price = price * 1.06;
    } else if (bizClassSeats >= 2 && bizClassSeats <= 3){
        //seat 4 to 5 is 10% more than previous price
        bizClassSeats--;
        price = price * 1.10;
    } else if (bizClassSeats > 0 && bizClassSeats == 1){
        //seat 6 is $91000
        bizClassSeats--;
        price = 91000;
    } else if (bizClassSeats == 6){
        //seat 1 is $50
        bizClassSeats--;
        price = 50;
    } else {
        //alert("No more seat left");
        return "No more seat left"
    }
    alert(bizClassSeats + " more seats to price change");
    document.getElementById('input').value = "";
    return "You have bought a business seat, the price of your seat is $" + price;
  } else if (input == "buy economy class"){
    if(ecoClassSeats >= 8 && ecoClassSeats <= 14){
        //seat 2 to 7 is 6% more than previous price
        ecoClassSeats--;
        price = price * 1.06;
    } else if (ecoClassSeats >= 2 && ecoClassSeats <= 7){
        //seat 8 to 14 is 10% more than previous price
        ecoClassSeats--;
        price = price * 1.10;
    } else if (ecoClassSeats > 0 && ecoClassSeats == 1){
        //seat 15 is $91000
        ecoClassSeats--;
        price = 91000;
    } else if (ecoClassSeats == 15){
        //seat 1 is $50
        ecoClassSeats--;
        price = 50;
    } else {
        //alert("No more seat left");
        return "No more seat left"
    }
    alert(ecoClassSeats + " more seats to price change");
    document.getElementById('input').value = "";
    return "You have bought a economy seat, the price of your seat is $" + price;
  } else if (input != "buy first class" || input != "buy business class" || input !="buy economy class"){
    //if input not equals to 'buy ..... class', ask user to key the correct phrase
    document.getElementById('input').value = "";
    return "Please key in YES to buy ticket"
  }
}