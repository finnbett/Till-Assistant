
function calc(){
    let cost = parseInt(document.getElementById("cost").value);
    let salePrice = parseInt(document.getElementById("saleprice").value);
    let outPut = (((salePrice-cost)/salePrice)*100);

 
    
    if (outPut != NaN)
    {
        document.getElementById("result").innerHTML = " " +  outPut.toFixed(2) + "%";
    }
    
    
}


function calcMargin(){
    let margin = parseInt(document.getElementById("margin").value);
    let cost2 = parseInt(document.getElementById("cost2").value);
    let salePriceOutPut = ((cost2)/(1-(margin/100)));

    if (salePriceOutPut != NaN){
        document.getElementById("result2").innerHTML = salePriceOutPut.toFixed(2);
    }
}
