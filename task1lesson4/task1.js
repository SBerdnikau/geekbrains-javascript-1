/*
функция( число )
если не число и не в диапазоне от 0 до 999
    то выводим сообщение
        возвращаем пустой объект
    иначе преобразуем в объект
          разбиваеи обьект по разрядам
          возвращаем объект    
*/

let number = 245;

function convertionNumToObj(num) {
    let numbers = {
        one: null,
        ten: null,
        hundreds: null
    };

    if (isNaN && (num > 0 && num <= 999)) {
        var digits = [];
        while (num) {
            digits.push(num % 10);
            num = Math.floor(num / 10);
        }
        numbers.one = digits[0];
        numbers.ten = digits[1];
        numbers.hundreds = digits[2];
        return numbers;
    } else {
        console.log("Ошибка ввода: Введите число (от 0 до 999)");
        return numbers;
    }
}

//test 1
console.log(convertionNumToObj(1234));

//test 2 
console.log(convertionNumToObj(-12));

//test 3
console.log(convertionNumToObj(456));

//test 4
console.log(convertionNumToObj(86));

//test 5
console.log(convertionNumToObj(7));