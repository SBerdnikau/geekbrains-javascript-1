console.log("2. Начиная с этого урока, мы начинаем работать с функционалом интернет-магазина.\
стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в\
массиве.");
console.log("2.1. Организуйте такой массив для хранения товаров в корзине \
2.2. Организуйте функцию countBasketPrice, которая будет считать стоимость корзины.");

let products = ["water","beer","juice"];
let prices = [10,20,30];//60
let order = [ products , prices  ];

order.forEach(function(order) {
    console.log(order);
});

function countBasketPrice(prices){
return  prices.reduce(function(sum, current) {
        let result = sum + current;
        return result;
    });
}

let summa = countBasketPrice(prices);
console.log( "Стоимость корзины товаров: " + summa ); 


