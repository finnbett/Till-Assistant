//todo: create spans for each input that will calc the total cash.
//0.1$ if the value was 1


function calc10c() {
    var tenc = (parseInt(document.getElementById("10c").value) * 0.1).toFixed(2)
   if (tenc < 1) {
       
       document.getElementById('10ctotal').innerHTML= tenc + '&#162;'
   } else {

       document.getElementById('10ctotal').innerHTML= '$' + tenc
   }

    
    
}

function calc20c() {
    var twentyc = (parseInt(document.getElementById("20c").value) * 0.2).toFixed(2)
    console.log(twentyc)
    if(twentyc < 1) {
        document.getElementById('20ctotal').innerHTML = twentyc + '&#162;'
    } else {
        document.getElementById('20ctotal').innerHTML= '$' + twentyc
    }

}
function calc50c() {
    var fiftyc = (parseInt(document.getElementById("50c").value) * 0.5).toFixed(2)
    if (fiftyc < 1) {
        document.getElementById('50ctotal').innerHTML= fiftyc + '&#162;'
    } else {
        document.getElementById('50ctotal').innerHTML= '$' + fiftyc
    }

}
function calc$1() {
    var oned = (parseInt(document.getElementById("$1").value) * 1).toFixed(2)
    document.getElementById('$1total').innerHTML= '$' + oned

}
function calc$2() {
    var twod = (parseInt(document.getElementById("$2").value) * 2).toFixed(2)
    console.log(twod)
    document.getElementById('$2total').innerHTML= '$' + twod
    

}
function calc$5() {
    var fived = (parseInt(document.getElementById("$5").value) * 5).toFixed(2)
    document.getElementById('$5total').innerHTML= '$' +fived

}
function calc$10() {
    var tend = (parseInt(document.getElementById("$10").value) * 10).toFixed(2)
    document.getElementById('$10total').innerHTML= '$' + tend

}
function calc$20() {
    var twentyd = (parseInt(document.getElementById("$20").value) * 20).toFixed(2)
    document.getElementById('$20total').innerHTML= '$' + twentyd

}
function calc$50() {
    var fiftyd = (parseInt(document.getElementById("$50").value) * 50).toFixed(2)
    document.getElementById('$50total').innerHTML= '$' + fiftyd

}
function calc$100() {
    var hundred = (parseInt(document.getElementById("$100").value) * 100).toFixed(2)
    document.getElementById('$100total').innerHTML= '$' + hundred

}
function calc(){
    var float = parseInt(document.getElementById("float").value);
    
    // these are the quantity of notes and coins converted to actual value:
    var tenc = parseInt(document.getElementById("10c").value) * 0.1;
    var twentyc = parseInt(document.getElementById("20c").value) * 0.2;
    var fiftyc = parseInt(document.getElementById("50c").value) * 0.5;
    var oned = parseInt(document.getElementById("$1").value) * 1;
    var twod = parseInt(document.getElementById("$2").value) * 2;
    var fived = parseInt(document.getElementById("$5").value) * 5;
    var tend = parseInt(document.getElementById("$10").value) * 10;
    var twentyd = parseInt(document.getElementById("$20").value) * 20;
    var fiftyd = parseInt(document.getElementById("$50").value) * 50;
    var hundred = parseInt(document.getElementById("$100").value) * 100;
    //This function will add all of the coin and note varibles together and subtract the float variable from this total and output the result to the <span> with the id of "result" on the click of calulate.
    var output = document.getElementById("output").innerHTML = ((tenc + twentyc + fiftyc + oned + twod + fived + tend + twentyd + fiftyd + hundred)-(float)).toFixed(2)
    console.log(typeof output)
    if (isNaN(output)) {
        document.getElementById("output").innerHTML = "please add numbers to all fields"
    }
    if(float < 0){
        document.getElementById("output").innerHTML = "Invalid float"
    }
}