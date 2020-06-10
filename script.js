console.log("hello script js");

const cabinPlane = {
  tier: {
    firstClass: {
      numberOfSeats: 4,
    },
    businessClass: {
      numberOfSeats: 6,
    },
    economyClass: {
      numberOfSeats: 15,
    },
  },
  destination: "Bali",
};

const smallPlane = {
  numberOfSeats: 10,
  destination: "KL",
};

let seatNumber1 = cabinPlane.tier.firstClass.numberOfSeats;
let seatNumber2 = cabinPlane.tier.businessClass.numberOfSeats;
let seatNumber3 = cabinPlane.tier.economyClass.numberOfSeats;
let tierChoosen;
let destination;

let chooseDestination = (e) => {
  destination = document.querySelector("#destination").value;
  console.log(destination);

  const tierMsg = document.createElement("div");
  tierMsg.className = "tierMsg";
  document.querySelector(".bigContainer").appendChild(tierMsg);

  if (destination === "bali") {
    tierMsg.innerHTML = "Please choose tier";

    const tierContainer = document.createElement("div");
    tierContainer.className = "tierContainer";
    document.querySelector(".tierMsg").appendChild(tierContainer);
    console.log("tierContainer", tierContainer);

    const tierOptions = ["firstClass", "businessClass", "economyClass"];
    for (let i = 0; i < tierOptions.length; i++) {
      const tierInput = document.createElement("input");
      const tierLabel = document.createElement("label");
      tierInput.id = tierOptions[i];
      tierInput.type = "radio";
      tierInput.value = tierOptions[i];
      tierLabel.innerText = tierOptions[i];
      document.querySelector(".tierContainer").appendChild(tierInput);
      document.querySelector(".tierContainer").appendChild(tierLabel);
      document
        .querySelector(".tierContainer")
        .addEventListener("change", chooseTier);
    }
  }else if (destination === "KL") {
    tierMsg.innerHTML = `The cost of the ticket is ${
      50 + 50 * 0.06
    }. Would you like to buy?`;
    createBuyButton();
    document.querySelector(".buyCancel").addEventListener("change", purchase);
  }else{
    tierMsg.innerHTML = "Plase insert a valid destination, type bali or KL"
  }

  
};

let chooseTier = function (e) {
  let seatCost;
  tierChoosen = e.target.value;
  console.log("tierChoosen", tierChoosen);

  if (tierChoosen === "firstClass" && seatNumber1 > 5) {
    console.log(seatNumber1);
    seatCost = 50 + 0.15 * 50;
  } else if (
    tierChoosen === "firstClass" &&
    1 < seatNumber1 &&
    seatNumber1 < 5
  ) {
    seatCost = 50 + 0.06 * 50;
  } else if (tierChoosen === "firstClass" && seatNumber1 === 1) {
    seatCost = 191000;
  }

  if (tierChoosen === "businessClass" && seatNumber2 > 3) {
    console.log(seatNumber1);
    seatCost = 50 + 0.1 * 50;
  } else if (
    tierChoosen === "businessClass" &&
    1 < seatNumber2 &&
    seatNumber2 < 3
  ) {
    seatCost = 50 + 0.06 * 50;
  } else if (tierChoosen === "businessClass" && seatNumber2 === 1) {
    seatCost = 91000;
  }

  if (tierChoosen === "economyClass" && seatNumber3 > 7) {
    console.log(seatNumber1);
    seatCost = 50 + 0.3 * 50;
  } else if (
    tierChoosen === "economyClass" &&
    1 < seatNumber3 &&
    seatNumber3 < 7
  ) {
    seatCost = 50 + 0.05 * 50;
  } else if (tierChoosen === "economyClass" && seatNumber3 === 1) {
    seatCost = 91000;
  }

  let displayMsg = document.createElement("div");
  displayMsg.innerText = `The cost of the seat is ${seatCost}. Would you like to buy?`;
  displayMsg.className = "displayMsg";

  document.querySelector(".bigContainer").appendChild(displayMsg);
  createBuyButton();
  document.querySelector(".buyCancel").addEventListener("change", purchase);
};
let createBuyButton = function () {
  const buyCancel = document.createElement("div");
  buyCancel.className = "buyCancel";
  document.querySelector(".bigContainer").appendChild(buyCancel);

  const buy = document.createElement("input");
  const buyLabel = document.createElement("label");
  buy.className = "buy";
  buy.type = "radio";
  buy.value = "buy";
  buyLabel.innerText = "buy";
  document.querySelector(".buyCancel").appendChild(buy);
  document.querySelector(".buyCancel").appendChild(buyLabel);

  const cancel = document.createElement("input");
  const cancelLabel = document.createElement("label");
  cancel.className = "cancel";
  cancel.type = "radio";
  cancel.value = "cancel";
  cancelLabel.innerText = "cancel";
  document.querySelector(".buyCancel").appendChild(cancel);
  document.querySelector(".buyCancel").appendChild(cancelLabel);
};

let purchase = function (e) {
  let purchaseMsg;
  let purchaseOption = e.target.value;
  console.log("purchaseOption", purchaseOption);

  if (purchaseOption === "buy" && tierChoosen === "firstClass") {
    seatNumber1 = seatNumber1 - 1;
    console.log("seatNumber1", seatNumber1);
    purchaseMsg = `Congratulations, you have bougth a ticket, there is only ${seatNumber1} seats left`;
  }
  if (purchaseOption === "buy" && tierChoosen === "businessClass") {
    seatNumber2 = seatNumber2 - 1;
    console.log("seatNumber2", seatNumber2);
    purchaseMsg = `Congratulations, you have bougth a ticket, there is only ${seatNumber2} seats left`;
  }
  if (purchaseOption === "buy" && tierChoosen === "economyClass") {
    seatNumber1 = seatNumber3 - 1;
    console.log("seatNumber3", seatNumber3);
    purchaseMsg = `Congratulations, you have bougth a ticket, there is only ${seatNumber3} seats left`;
  }
  if (purchaseOption === "buy" && destination === "KL") {
    smallPlane.numberOfSeats = smallPlane.numberOfSeats - 1;
    console.log("smallPlane.numberOfSeats ", smallPlane.numberOfSeats);
    purchaseMsg = `Congratulations, you have bougth a ticket, there is only ${smallPlane.numberOfSeats} seats left`;
  }
  if (purchaseOption === "cancel") {
    purchaseMsg = `Ohh, you have missed the chance`;
  }

  console.log("purchaseMsg", purchaseMsg);
  const purchaseDisplay = document.createElement("div");
  console.log("purchaseDisplay", purchaseDisplay);
  purchaseDisplay.className = "purchaseDisplay";
  purchaseDisplay.innerText = purchaseMsg;
  document.querySelector(".bigContainer").appendChild(purchaseDisplay);

  const continueShopping = document.createElement("button");
  console.log("purchaseDisplay", purchaseDisplay);
  continueShopping.className = "continueShopping";
  continueShopping.type = "button"
  continueShopping.innerText = "continueShopping";
  document.querySelector(".bigContainer").appendChild(continueShopping);
  document.querySelector(".continueShopping").addEventListener("click",clearShopping)
  

};

let clearShopping = (e)=>{

document.querySelector('#destination').value ="";
document.querySelector('.bigContainer').innerHTML = "";
console.log("here");

}
document
  .querySelector("#destination")
  .addEventListener("change", chooseDestination);
 
