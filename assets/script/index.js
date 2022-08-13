"use strict";

const calcSum = () => {
    const firstNumber = document.getElementById('firstNumberSum').value;
    const secondNumber = document.getElementById('secondNumberSum').value;
    const result = +firstNumber + +secondNumber;
    document.getElementById('resultSum').innerHTML= result;
    return result;
}

const calcSubtract = () => {
    const firstNumber = document.getElementById('firstNumberSubtract').value;
    const secondNumber = document.getElementById('secondNumberSubtract').value;
    const result = firstNumber - secondNumber;
    document.getElementById('resultSubtract').innerHTML= result;
    return result;
}

const calcMultiply = () => {
    const firstNumber = document.getElementById('firstNumberMultiply').value;
    const secondNumber = document.getElementById('secondNumberMultiply').value;
    const result = firstNumber * secondNumber;
    document.getElementById('resultMultiply').innerHTML= result;
    return result;
}

const calcDivide = () => {
    const firstNumber = document.getElementById('firstNumberDivide').value;
    const secondNumber = document.getElementById('secondNumberDivide').value;
    const result = firstNumber / secondNumber;
    document.getElementById('resultDivide').innerHTML= result;
    return result;
}
