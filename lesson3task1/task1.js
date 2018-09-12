
console.log("1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100");

// Create array numbers 0 - 100 
var numbers = [];
var i = 1;
while ( i < 100 ){
    i++;
    numbers.push( i );
}

// Delete even all numbers
var a = 2;
var b = 2;
while (a <= 100){
    a += b;
    numbers.splice(numbers.indexOf(a), 1);
}

//Delete all numbers are divided into odd to 10
a = 4;
b = 3;
while (a < 100){
    if (a % b ===0 && numbers.indexOf(a) !== -1){
        numbers.splice(numbers.indexOf(a), 1);
    }else {
        a++;
    }
}

a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && numbers.indexOf(a) !== -1) {
        numbers.splice(numbers.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && numbers.indexOf(a) !== -1) {
        numbers.splice(numbers.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log(numbers);
