let a , b;
a = parseInt(prompt("Введите число a: "));
b = parseInt(prompt("Введите число b: "));
    if( a >= 0 && b >= 0 ){
        alert(a + "-" + b + "=" + (a - b) );
    } else if(a < 0 && b < 0){
        alert(a + "*" + b + "=" + (a * b) );
    } else if( (a >= 0 && b < 0) || (a < 0 && b >= 0) ){
        alert(a + "+" + b + "=" + (a + b) );
    }

