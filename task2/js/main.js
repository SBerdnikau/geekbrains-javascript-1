let catalog = [
    { id: 1, name: "item1", price: 80000, description: "description item1" },
    { id: 2, name: "item2", price: 12000, description: "description item2" },
    { id: 3, name: "item3", price: 16000, description: "description item3" }
];

let cart = {
    catalog: [],
    sum: 0,
    count: 0,
    setProducts: function(catalog) {
        this.catalog = catalog;
        this.countTotalPrice();
    },
    countTotalPrice: function() {
        let sum = 0;
        for (let i = 0; i < this.catalog.length; i++) {
            sum += this.catalog[i].price * this.count[i];
        }
        return sum;
    },
    getCount: function(){
        for(let i=0; i<this.count.length; i++){
            let tmpCount = 0;
            tmpCount = tmpCount + count;
            return tmpCount;
        }
    }
};

cart.setProducts(catalog);

function drawBasket() {
    let doc = document;
    let mainBlock, basket;

    mainBlock = doc.getElementById('wrapper');
    basket = doc.createElement('p');
    basket.className = 'price';
    let sum = cart.countTotalPrice();
    //cart.getCount();
    basket.innerHTML = 'Итого: ' + sum + ' руб. ' ;
    mainBlock.appendChild(basket);

}

drawBasket();

console.log(cart.setProducts(catalog));