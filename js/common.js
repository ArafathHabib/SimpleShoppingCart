function taxPhoneIncrease(){
    let tax = document.getElementById('tax-amount').innerText;
    let taxNum = parseFloat(tax);
    let newTax = taxNum + 1219*0.1;
    document.getElementById('tax-amount').innerText = newTax.toFixed(1);
}

function taxPhoneDecrease(){
    let tax = document.getElementById('tax-amount').innerText;
    let taxNum = parseFloat(tax);
    let newTax = taxNum - 1219*0.1;
    document.getElementById('tax-amount').innerText = newTax.toFixed(1);
}

function taxCaseIncrease(){
    let tax = document.getElementById('tax-amount').innerText;
    let taxNum = parseFloat(tax);
    let newTax = taxNum + 59*0.1;
    document.getElementById('tax-amount').innerText = newTax.toFixed(1);
}

function taxCaseDecrease(){
    let tax = document.getElementById('tax-amount').innerText;
    let taxNum = parseFloat(tax);
    let newTax = taxNum - 59*0.1;
    document.getElementById('tax-amount').innerText = newTax.toFixed(1);
}

function increaseInpValue(id){
    let elementInp = document.getElementById(id);
    let inpValueString = document.getElementById(id).value;
    let inpValueNum = parseFloat(inpValueString);
    let newInpValueNum = inpValueNum + 1;
    elementInp.value = newInpValueNum;
}