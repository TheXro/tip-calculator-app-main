'use-strict';

var billAmount = document.querySelector('.inputB');
var customTipAmount = document.querySelector('.inputC');
var people = document.querySelector('.inputP');
var tipAmount = document.querySelector('.tipAmountValueNum');
var totalAmount = document.querySelector('.totalAmountValueNum');
const reset = document.querySelector('.resetBtn');
const btn5 = document.querySelector('.btn5');
const btn10 = document.querySelector('.btn10');
const btn15 = document.querySelector('.btn15');
const btn50 = document.querySelector('.btn50');
const btn25 = document.querySelector('.btn25');


// document.addEventListener('input', function () {
//     if (people.value == 0) { 
//         people.value = 1;
//     }
//     let a = (billAmount.value * customTipAmount.value / 100) / people.value;
//     tipAmount.textContent = a.toFixed(2);
//     let b =  Number(billAmount.value / people.value) + Number(a);
//     totalAmount.textContent = b.toFixed(2);
//     console.log(a+b);
// });

const tipCalc = () => {
    let a = (billAmount.value * customTipAmount.value / 100) / people.value;
    tipAmount.textContent = a.toFixed(2);
    let b = Number(billAmount.value / people.value) + Number(a);
    totalAmount.textContent = b.toFixed(2);
};


btn5.addEventListener('click', function () {
    customTipAmount.value = 5;
    tipCalc();
});

btn10.addEventListener('click', function () {
    customTipAmount.value = 10;
    tipCalc();
});

btn15.addEventListener('click', function () {
    customTipAmount.value = 15;
    tipCalc();
});

btn25.addEventListener('click', function () {
    customTipAmount.value = 25;
    tipCalc();
});

btn50.addEventListener('click', function () {
    customTipAmount.value = 50;
    tipCalc();
});
document.addEventListener('input', function () { 
    if (people.value == 0) {
        document.querySelector('.error').style.display = 'block';
    }
    else {
        tipCalc();
        document.querySelector('.error').style.display = 'none';
    }
});

reset.addEventListener('click', function () {
    billAmount.value = "";
    customTipAmount.value = "";
    people.value = "" ;
    tipAmount.textContent = '0.00';
    totalAmount.textContent = '0.00';
    document.querySelector('.error').style.display = 'none';
});
