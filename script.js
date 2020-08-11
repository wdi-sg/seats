console.log("hello script js");

//price of the seat
var seatprice=50
//state 0 is the default, 1 scammed you into reading this
var state = 0
var firstclassprice = 0
var businessclassprice = 0
var economyclassprice = 0
var f = 0
var b = 0
var e = 0
var i = 0
var t = 0

document.getElementById('output').innerHTML = "KL or Bali?"

var inputHappened = function(currentInput){
  console.log( currentInput );
  // if (state === 0 ){
  //       if (currentInput.toLowerCase() === "bali"){
  //       document.getElementById('input').value = "";
  //       return = "enter buy or cancel";}
  //           if(currentInput.toLowerCase() === "buy"){}}





             if (currentInput.toLowerCase() === "first class"){
                document.getElementById('input').value = "";
                firstclassprice = seatprice*Math.pow(1.15,f);
                output = "first class price" + firstclassprice + "buy or cancel";
                return output} else if (currentInput.toLowerCase() === "buy"){
                        document.getElementById('input').value = "";
                        while (f<3){
                        firstclassprice = seatprice*Math.pow(1.15,f);
                        f++;
                        firstclassseatsleft = 4 - f
                        output = "First class seat is sold for "+ firstclassprice + "," + firstclassseatsleft + " seats left";
                        return output}

                        while (f=3){
                            firstclasslastseat = 191000;
                            f++;
                            output = "Last Ticket is sold at "+ firstclasslastseat;
                            return output}

                        while (f>3){
                            console.log(f);
                            output ="TRY AGAIN NEXT TIME";
                            return output}
                        }

             if (currentInput.toLowerCase() === "business class"){
                document.getElementById('input').value = ""
                while (b<3){
                    businessclassprice = seatprice*Math.pow(1.06,b);
                    b++;
                    businessclassseatsleft = 6 - b
                    output = "Business class seat is sold for "+ businessclassprice + "," + businessclassseatsleft + " seats left";
                    return output}

                while (b>2 && b<5){
                    previousseatprice = seatprice*Math.pow(1.06,2)
                    businessclassprice = previousseatprice*Math.pow(1.10,b-2);
                    b++;
                    businessclassseatsleft = 6 - b
                    output = "Business class seat is sold for "+ businessclassprice + "," + businessclassseatsleft + " seats left";
                    return output}

                while (b=5){
                    businessclasslastseat = 91000;
                    b++;
                    output = "Last Ticket is sold at "+ businessclasslastseat;
                    return output}

                while (b>5){
                    output ="TRY AGAIN NEXT TIME";
                    return output}
            }

            else if (currentInput.toLowerCase() === "economy class"){
                document.getElementById('input').value = ""
                if (f<8){
                    economyclassprice = seatprice*Math.pow(1.03,f);
                    f++;
                    economyclassseatsleft = 15 - f
                    output = "First class seat is sold for "+ economyclassprice + "," + economyclassseatsleft + " seats left";
                    return output}

                if (f>7 && f<14){
                    previousseatprice = seatprice*Math.pow(1.03,6)
                    economyclassprice = previousseatprice*Math.pow(1.05,f-6);
                    f++;
                    economyclassseatsleft = 15 - f
                    output = "First class seat is sold for "+ economyclassprice + "," + economyclassseatsleft + " seats left";
                    return output}

                if (f=14){
                    economyclasslastseat = 91000;
                    f++;
                    output = "Last Ticket is sold at "+ economyclasslastseat;
                    return output}

                if (f>14){
                    output ="TRY AGAIN NEXT TIME";
                    return output}
            }

        };