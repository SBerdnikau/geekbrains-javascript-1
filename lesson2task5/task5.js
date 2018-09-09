let a, b;

a = parseInt(prompt("Введите число а: "));
b = parseInt(prompt("Введите число b: "));

function summa(a,b){
  return a + b;
}

function subtraction(a,b){
    return a - b;
}

function devision(a,b){
    return a / b;
}

function multiply(a,b) {
    return a * b;
}

function remainderOfDivison( a,b){
    return a % b;
}

let summ = summa(a,b);
let subtr = subtraction(a,b);
let dev = devision(a,b);
let mult =  multiply(a,b); 
let remOfDiv= remainderOfDivison( a,b);

alert( a + "+" + b + " = "+ summ  + 
"\n" +  a + "-" + b + " = "+ subtr +
"\n" +  a + "*" + b + " = "+ mult  +
"\n" +  a + "/" + b + " = "+ dev   +
"\n" +  a + "%" + b + " = "+ remOfDiv   );