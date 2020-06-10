console.log("hello script js");

let pSeats = 10;
const initialPrice = 50;
let seatPrice = 0;
let selectedNo = 0;
let cost = 0;
let timesUserInput = 0;
const firstHalf = 5;
let taken = 0;
let pendingTaken = 0;

// const firstPlane = {
//     occupied : 0
// }

var inputHappened = function(currentInput){
  let outputVal;
  console.log(`currentInputVal: ${currentInput}`); //FOR CHECKING IF THIS FN WORKS
  console.log(`no of timesUserInput pre-fn: ${timesUserInput}`); //FOR CHECKING SUBMISSION COUNT
  outputVal = bookSeats(currentInput);
  console.log(`no of timesUserInput after fn: ${timesUserInput}`); //FOR CHECKING SUBMISSION COUNT
  return outputVal;
};


//EXERCISE 1 - FUNCTION TO BOOK TICKETS FOR 10-SEATS PLANE
function bookSeats(selectedNo){
    console.log(selectedNo); //TEST IF FUNCTION WORKS
    let val = parseInt(selectedNo); //CONVERT INPUT TO NUMBER
    pendingTaken = taken + val;
    console.log('pending ' +pendingTaken);
    console.log(typeof val)
    console.log(typeof taken)
  if(pSeats > 0) { //1ST CRITERIA IF-ST IS TO CHECK IF ANY SEATS LEFT
    if(!isNaN(selectedNo) && selectedNo > 0) { //2ND CRITERIA FOR FN IS TO CHECK IF INPUT IS A NUM AND IF ITS NOT A NEGATIVE NUM
        if(selectedNo <= 10 && selectedNo <= pSeats) { //2ND-01 CRITERIA IF SELECTEDNO LESS OR EQUAL TO 10 WHILE SELECTION IS LESS  OR EQUAL TO THAN AVAILABLE SEATS
            if (pSeats === 1) {
                cost = 91000;
                pSeats = pSeats - selectedNo;
                taken = 10 - pSeats;
                msg = `Last Seat Total Cost : $${cost}, \n remaining seats: ${pSeats}, \n taken: ${taken}`
            }
            else if (pSeats > 5 && pendingTaken <=5 ) { //2ND-01-01 CRITERIA CHECK IF ITS FIRST TIME USER INPUT, COMPUTE THE COST AT $50 AT 1ST TIX + $50*1.05 FOR BALANCE SELECTEDNO
                cost = priceInc3()*selectedNo;
                pSeats = pSeats - selectedNo; //NO OF SEATS REMAINING AFTER THIS TRANSACTION
                taken = 10 - pSeats; //MATH OPERATION FINALLY WORKS FOR TAKEN (DOESNT WORK FOR taken + selectedNo)
                msg = `1st Total Cost : $${cost}, \n remaining seats: ${pSeats}, \n taken: ${taken}`
                // timesUserInput++; //AFTER FIRST TRANSACTION, INCREMENT THE NO OF TIMES USER INPUT SO THE NEXT TIME USER TRANSACT, THE NEXT ELSEIF BLOCK WILL EXECUTE
            } else if (pSeats > 5 && pendingTaken > 5){
                console.log('this is TK+S '+ pendingTaken);
                let noDiscTix = pendingTaken - 5;
                let toDiscTix = val - noDiscTix;
                cost = priceInc5()*noDiscTix + priceInc3()*toDiscTix;
                pSeats = pSeats - selectedNo; //NO OF SEATS REMAINING AFTER THIS TRANSACTION
                taken = 10 - pSeats;
                msg = `2nd Total Cost : $${cost}, \n remaining seats: ${pSeats}, \n taken: ${taken}`
                // timesUserInput++; NO NEED TO KNOW IF ITS THE THIRD OR N TIMES
            } else {
                cost = priceInc5()*selectedNo;
                pSeats = pSeats - selectedNo; //NO OF SEATS REMAINING AFTER THIS TRANSACTION
                taken = 10 - pSeats;
                msg = `3rd Total Cost : $${cost}, \n remaining seats: ${pSeats}, \n taken: ${taken}`
            }
        } else if (selectedNo>10) { //2ND-02 CRITERIA BLOCK TRANSACTION IF SELECTEDNO IS GREATER THAN TOTAL AVAILABLE SEATS
            msg = `there are only ${pSeats} available`
        } else { //2ND-03 CRITERIA BLOCKS TRANSACTION DUE TO INSUFFICIENT SEATS AVAILABLE TO MATCH BUYER'S SELECTEDNO
            msg = `only ${pSeats} seats remaining`
        }
    } else { //2ND-ELSE CRITERIA FOR FN IF INPUT IS NOT A NUM
        if (pSeats === 1 && selectedNo !== ""){
                cost = 91000;
                pSeats = pSeats - 1;
                taken = 10 - pSeats;
                msg = `Last Seat Total Cost : $${cost}, \n remaining seats: ${pSeats}, \n taken: ${taken}`
                alert("Sorry we don't recognize your input however we've blocked the last ticket for you.")
        } else if (pSeats > 5 && selectedNo !== "") { //2ND-ELSE-01 CRITERIA CHECK IF ITS FIRST TIME USER INPUT & TO AVOID PROMPT-FN-BUYING WHEN USER CLEARS THE INPUT BOX
            cost = priceInc3()*1; //COMPUTE 1 NO X $50 FOR WHATEVER LETTERS TYPED
            pSeats = pSeats - 1;
            taken = 10 - pSeats;
            msg = `1st-SingleTix - Total Cost : $${cost}, \n remaining seats: ${pSeats} \n taken: ${taken}`
            // timesUserInput++;
            alert("Sorry we don't recognize your input however we've blocked a ticket for you.")
        } else if (pSeats > 0 && selectedNo !== "") { //2ND-ELSE-02 CRITERIA CHECK IF ITS 2ND TIME ONWARDS USER INPUT, COMPUTE THE COST AT $50 X 1 X 1.05
            cost = priceInc5()*1; //COMPUTE 1 NO X $50 X 1.05 FOR WHATEVER LETTERS TYPED
            pSeats = pSeats - 1;
            taken = 10 - pSeats;
            msg = `2nd-Single-Tix - Total Cost : $${cost}, \n remaining seats: ${pSeats} \n taken: ${taken}`
            // timesUserInput++; NO NEED TO KNOW IF ITS THE THIRD OR N TIMES
            alert("Sorry we don't recognize your input however we've blocked a ticket for you.")
        }
    }
  } else { //1ST CRITERIA ELSE-ST IF NO SEATS LEFT
    msg = "sorry, sold out"
  }
console.log("this is " + cost); //CHECK COST OUTPUT
console.log("this is seats left : " + pSeats); //CHECK REMAINING SEATS OUTPUT
return msg;
}



//function for COMPUTING 2ND-TRANSC-ONWARDS SEAT PRICE
function priceInc5() {
    seatPrice = initialPrice*1.05;
    return seatPrice;
}

//function for COMPUTING 1ST-TRANSC SEAT PRICE
function pSeatsEmptyPrice() {
    seatPrice = initialPrice;
    return seatPrice
}

//EXERCISE 2
function priceInc3(){
    seatPrice = initialPrice*1.03;
    return seatPrice;
}




/* WRITING OUT THE LOGIC FOR Q1
FN bookSeats() {
    CONVERT INPUT TO NUMBER OR NAN
    parseInt(xxx) /if it is number, will return number, if it str, it will return NaN

if (pSeats>0 ) {

EVALUATE IF ITS A NUMBER
   if (!isNaN(xxx)) {
    CHECK IF ITS MORE THAN 10
    if (input <= 10) {

        CHECK IF ITS THE FIRST TIME USER INPUT OR MORE & IF ITS LESS THAN 10

            if (timesUserInput === 0) {
                cost = pSeatsEmptyPrice()*selectedNo;
                pSeats = pSeats - selectedNo;
                msg = `Total Cost : ${cost}, remaining seats: ${pSeats}`
            } else if (timesUserInput > 0 && timesUserInput < 10) {
                cost = pSeatsOccupiedPrice()*selectedNo;
                pSeats = pSeats - selectedNo;
                msg = `Total Cost : ${cost}, remaining seats: ${pSeats}`
            }
    } else {
        msg = "only 10 seats available"
    }
  } else {
        CHECK NO OF TIMES USER INPUT
        if (timesUserInput === 0) {
            cost = pSeatsEmptyPrice()*1;
            pSeats = pSeats - 1;
            msg = `Total Cost : ${cost}, remaining seats: ${pSeats}`
        } else if (timesUserInput > 0 && timesUserInput < 10) {
            cost = pSeatsEmptyPrice()*1;
            pSeats = pSeats - 1;
            msg = `Total Cost : ${cost}, remaining seats: ${pSeats}`
        }
  }
} else {
    return "sorry, sold out"
}

function bookSeats(selectedNo){
    console.log(selectedNo);
    parseInt(selectedNo); //CONVERT INPUT TO NUMBER

    if(!isNaN(selectedNo)) {
        if (timesUserInput === 0 && input === 10) {
            cost = pSeatsEmptyPrice()*selectedNo;
            pSeats = pSeats - selectedNo;
            msg = `Total Cost : ${cost}, remaining seats: ${pSeats}`
        } else if (timesUserInput > 0 && timesUserInput < 10 && input < 10) {
            cost = pSeatsOccupiedPrice()*selectedNo;
            pSeats = pSeats - selectedNo;
            msg = `Total Cost : ${cost}, remaining seats: ${pSeats}`
        } else {
            msg = "there are only 10 seats"
        }
    } else {
        if (timesUserInput === 0) {
            cost = pSeatsEmptyPrice()*1;
            pSeats = pSeats - 1;
            msg = `Total Cost : ${cost}, remaining seats: ${pSeats}`
        } else if (timesUserInput > 0 && timesUserInput < 10) {
            cost = pSeatsEmptyPrice()*1;
            pSeats = pSeats - 1;
            msg = `Total Cost : ${cost}, remaining seats: ${pSeats}`
        }
    }
}

*/