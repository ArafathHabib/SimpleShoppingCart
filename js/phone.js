let phnMinusBtn = document.getElementById('btn-phone-minus');
let phnPlusBtn = document.getElementById('btn-phone-plus');

phnPlusBtn.addEventListener('click', function(event){
    let phoneInput = document.getElementById('phone-number-field');
    let phoneInputString = document.getElementById('phone-number-field').value;
    let phoneInputNum = parseFloat(phoneInputString);
    let newPhoneNum = phoneInputNum + 1;
    phoneInput.value = newPhoneNum;

    let newTotalMoney = 1219 * newPhoneNum;
    document.getElementById('phone-total').innerText = newTotalMoney;

    let subTotal = document.getElementById('sub-total').innerText;
    let subTotalNum = parseFloat(subTotal);
    let newSubTotalNum = subTotalNum + 1219;
    document.getElementById('sub-total').innerText = newSubTotalNum;
    
    taxPhoneIncrease()

    let finalTotal = document.getElementById('final-total').innerText;
    let finalTotalNum = parseFloat(finalTotal);
    let newFinalTotalNum = finalTotalNum + 1219 + 121.9;
    document.getElementById('final-total').innerText = newFinalTotalNum.toFixed(1);
})

phnMinusBtn.addEventListener('click', function(event){
    let phoneInput = document.getElementById('phone-number-field');
    let phoneInputString = document.getElementById('phone-number-field').value;
    let phoneInputNum = parseFloat(phoneInputString);
    let newPhoneNum = phoneInputNum - 1;
    if (newPhoneNum < 1){
        return false;
    }else{
        phoneInput.value = newPhoneNum;

    let newTotalMoney = 1219 * newPhoneNum;
    document.getElementById('phone-total').innerText = newTotalMoney;

    let subTotal = document.getElementById('sub-total').innerText;
    let subTotalNum = parseFloat(subTotal);
    let newSubTotalNum = subTotalNum - 1219;
    document.getElementById('sub-total').innerText = newSubTotalNum;

    taxPhoneDecrease();

    let finalTotal = document.getElementById('final-total').innerText;
    let finalTotalNum = parseFloat(finalTotal);
    let newFinalTotalNum = finalTotalNum - 1219 - 121.9;
    document.getElementById('final-total').innerText = newFinalTotalNum.toFixed(1);
    }
})