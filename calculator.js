let sum = document.getElementById("sum");
let limit = 2147483647;

let num1 = 0;
let num2 = 0;

let isCalculating = false;


function addNum(x) {
    if (!isCalculating) {
        clearFunc()
    }

    isCalculating = true;
    sum.innerHTML += x
    num1 += x;
    console.log(num1)
}

function addOperator() {
    calcFunc()
    isCalculating = true;
    sum.innerHTML += " + <br>"
    num2 += Number(num1);
    num1 = 0;
}

/*
function minusOperator() {
    calcFunc()
    isCalculating = true;
    sum.innerHTML += " - <br>"
    num2 += Number(num1);
    num1 = 0;
} */


function writeOutput() {
    
}

function calcFunc() {
    sum.innerHTML = Number(num1) + Number(num2)
    isCalculating = false;

    console.log(num1, num2)
}

function clearFunc() {
    sum.innerHTML = ""
    num1 = 0;
    num2 = 0;
}