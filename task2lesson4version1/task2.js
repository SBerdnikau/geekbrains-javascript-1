class Basket {
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }
    display() {
        console.log(this.name, this.price, this.count);
    }
    countBasketPrice() {
        let sum = 0;
        sum = sum + this.price * this.count;
        return sum;
    }
}

function totalPrice() {
    return iphone7.countBasketPrice() + iphonex.countBasketPrice();
};


let iphone7 = new Basket("iphone7", 60000, 2);
iphone7.display();
console.log("Price: " + iphone7.countBasketPrice());

let iphonex = new Basket("iphonex", 80000, 2);
iphonex.display();
console.log("Price: " + iphonex.countBasketPrice());
console.log("Total price: " + totalPrice());