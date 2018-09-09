let val, pow;

val = parseInt(prompt("Введите число для возведения в степень: "));
pow = parseInt(prompt("Введите степень числа: "));

function power(val, pow){
    if( pow != 1 ){
        return val * power(val, pow - 1);
    }else{
        return val;
    }
}

alert( val + " в степени " + pow + " = "  +  power(val,pow) );