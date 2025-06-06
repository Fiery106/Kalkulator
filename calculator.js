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
    num1 += x;
}

function addOperator() {
   //add operator
   num2 += Number(num1);
   num1 = 0;
   console.log(num2)
}


function minusOperator() {
   //add operator
   num2 -= Number(num1);
   num1 = 0;
   console.log(num2)
} 


function writeOutput() {
    
}

function calcFunc(x = "") {
    let total = Number(num1) + num2;
    console.log(total)
    num1 = total;
    isCalculating = false;
}

function clearFunc() {
    sum.innerHTML = ""
    num1 = 0;
    num2 = 0;
}