let arg1, arg2, operation;

   arg1 = parseInt(prompt("Введите аргумент числа arg1: "));
   arg2 = parseInt(prompt("Введите аргумент числа arg2: "));
   operation = prompt("Введите операцию для числа arg1 и arg2: ");

 function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '-':  return arg1 - arg2 ;
                   break;
        case '*':  return arg1 * arg2;
                   break;
        case '+':  return arg1 + arg2;
                   break;                      
    }
 }

 let answer = mathOperation(arg1, arg2, operation);

 alert(answer);