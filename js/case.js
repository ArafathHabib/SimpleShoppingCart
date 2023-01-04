let casePlusBtn = document.getElementById('btn-case-plus');
let caseMinusBtn = document.getElementById('btn-case-minus');

casePlusBtn.addEventListener('click', function(event){
    let caseInput = document.getElementById('case-number-field');
    let caseInputString = caseInput.value;
    let caseInputNum = parseFloat(caseInputString);
    let newCaseInputNum = caseInputNum + 1;
    caseInput.value = newCaseInputNum;

    let caseTotal = document.getElementById('case-total').innerText;
    let CaseTotalNum = parseFloat(caseTotal);
    let newCaseTotal = CaseTotalNum + 59;
    document.getElementById('case-total').innerText = newCaseTotal;

    let subTotal = document.getElementById('sub-total').innerText;
    let subTotalNum = parseFloat(subTotal);
    let newSubTotal = subTotalNum + 59;
    document.getElementById('sub-total').innerText = newSubTotal;

    taxCaseIncrease();

    let finalTotal = document.getElementById('final-total').innerText;
    let FinalTotalNum = parseFloat(finalTotal);
    let newFinalTotalNum = FinalTotalNum + 59 + 5.9;
    document.getElementById('final-total').innerText = newFinalTotalNum.toFixed(1);
})

caseMinusBtn.addEventListener('click', function(event){
    let caseInput = document.getElementById('case-number-field');
    let caseInputString = caseInput.value;
    let caseInputNum = parseFloat(caseInputString);
    let newCaseInputNum = caseInputNum - 1;
    if(newCaseInputNum < 1){
        return false;
    }else{
        caseInput.value = newCaseInputNum;

        let caseTotal = document.getElementById('case-total').innerText;
        let CaseTotalNum = parseFloat(caseTotal);
        let newCaseTotal = CaseTotalNum - 59;
        document.getElementById('case-total').innerText = newCaseTotal;

        let subTotal = document.getElementById('sub-total').innerText;
        let subTotalNum = parseFloat(subTotal);
        let newSubTotal = subTotalNum - 59;
        document.getElementById('sub-total').innerText = newSubTotal;

        taxCaseDecrease()

        let finalTotal = document.getElementById('final-total').innerText;
        let FinalTotalNum = parseFloat(finalTotal);
        let newFinalTotalNum = FinalTotalNum - 59 - 5.9;
        document.getElementById('final-total').innerText = newFinalTotalNum.toFixed(1);
    }
})
