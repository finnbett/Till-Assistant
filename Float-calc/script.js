
function calc(){
    let float = parseInt(document.getElementById("float").value);
    
    // these are the quantity of notes and coins converted to actual value:
        let tenc = parseInt(document.getElementById("10c").value) * 0.1;
        let twentyc = parseInt(document.getElementById("20c").value) * 0.2;
        let fiftyc = parseInt(document.getElementById("50c").value) * 0.5;
        let oned = parseInt(document.getElementById("$1").value) * 1;
        let twod = parseInt(document.getElementById("$2").value) * 2;
        let fived = parseInt(document.getElementById("$5").value) * 5;
        let tend = parseInt(document.getElementById("$10").value) * 10;
        let twentyd = parseInt(document.getElementById("$20").value) * 20;
        let fiftyd = parseInt(document.getElementById("$50").value) * 50;
        let hundred = parseInt(document.getElementById("$100").value) * 100;
    //This function will add all of the coin and note varibles together and subtract the float variable from this total and output the result to the <span> with the id of "result" on the click of calulate.
    let output = document.getElementById("output").innerHTML = (tenc + twentyc + fiftyc + oned + fived + tend + twentyd + fiftyd + hundred)-(float)
}