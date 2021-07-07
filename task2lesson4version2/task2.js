let basket = [
    { name: "macbook", price: 80000, count: 1 },
    { name: "nokia", price: 12000, count: 3 },
    { name: "iphone7", price: 16000, count: 2 }
];

function countBasketPrice(basket) {
    let sum = 0;
    for (let product in basket) {
        sum += basket[product].price * basket[product].count;
    }
    return sum;
}

console.log(basket);
console.log("Total price: " + countBasketPrice(basket));