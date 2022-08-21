"use strict";

const calcSum = () => {
    const firstNumber = document.getElementById('firstNumberSum').value;
    const secondNumber = document.getElementById('secondNumberSum').value;
    const result = +firstNumber + +secondNumber;
    document.getElementById('resultSum').innerHTML = result;
    return result;
}

const calcSubtract = () => {
    const firstNumber = document.getElementById('firstNumberSubtract').value;
    const secondNumber = document.getElementById('secondNumberSubtract').value;
    const result = firstNumber - secondNumber;
    document.getElementById('resultSubtract').innerHTML = result;
    return result;
}

const calcMultiply = () => {
    const firstNumber = document.getElementById('firstNumberMultiply').value;
    const secondNumber = document.getElementById('secondNumberMultiply').value;
    const result = firstNumber * secondNumber;
    document.getElementById('resultMultiply').innerHTML = result;
    return result;
}

const calcDivide = () => {
    const firstNumber = document.getElementById('firstNumberDivide').value;
    const secondNumber = document.getElementById('secondNumberDivide').value;
    if (secondNumber == 0) {
        const result = "На ноль делить нельзя!";
        document.getElementById('resultDivide').innerHTML = result;
    } else {
        const result = firstNumber / secondNumber;
        document.getElementById('resultDivide').innerHTML = result;
        return result;
    }
}

const changeBackground = (sender) => {
    sender.classList.add("background-change");
}

const clearInput = (sender) => {
    sender.parentNode.parentNode.getElementsByTagName('input')[0].value = '';
    sender.parentNode.parentNode.getElementsByTagName('input')[1].value = '';
    sender.parentNode.parentNode.querySelector('.main__result').innerHTML = '';
}

const clearInputs = (sender) => {
    sender.parentNode.parentNode.getElementsByTagName('input')[0].value = '';
    sender.parentNode.parentNode.getElementsByTagName('input')[1].value = '';
    sender.parentNode.parentNode.getElementsByTagName('input')[2].value = '';
    sender.parentNode.parentNode.getElementsByTagName('input')[3].value = '';
    sender.parentNode.parentNode.getElementsByTagName('input')[4].value = '';
    sender.parentNode.parentNode.getElementsByTagName('input')[5].value = '';
    sender.parentNode.parentNode.getElementsByTagName('input')[6].value = '';
    sender.parentNode.parentNode.getElementsByTagName('input')[7].value = '';
    sender.parentNode.parentNode.getElementsByTagName('div')[4].innerHTML = '';
    sender.parentNode.parentNode.getElementsByTagName('div')[10].innerHTML = '';
    sender.parentNode.parentNode.getElementsByTagName('div')[16].innerHTML = '';
    sender.parentNode.parentNode.getElementsByTagName('div')[22].innerHTML = '';
}