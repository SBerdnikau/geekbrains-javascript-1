// ЗАДАНИЕ 1 - Корзина магазина

"use strict";

let goods = [
	{   id: 1,
		title: 'Смартфон Apple iPhone SE 32GB Space Grey',
		price: 19990,
		qty: 0,
		path: 'smartfon_apple_iphone_se_32gb_space_grey'
	},
	{   id: 2,
		title: 'Цифровой зеркальный фотоаппарат Canon EOS 4000D Kit 18-55 III DC',
		price: 22490,
		qty: 0,
		path: 'tsifrovoy_fotoapparat_canon_eos_4000d_kit_18_55_iii_dc_778956'
	},
	{   id: 3,
		title: 'Холодильник Liebherr Cef 4025',
		price: 39990,
		qty: 0,
		path: 'liebherr_cef_4025_402443'
	},
	{   id: 4,
		title: 'Ресивер AV Yamaha RX-V385, черный',
		price: 20990,
		qty: 0,
		path: 'resiver_av_yamaha_rx_v385_chernyy_873739'
	},
];

let basket = { // объект корзины
  	goods: [], // массив объектов товаров в корзине
  	qty: 0, // количество товаров в корзине
  	price: 0, // цена всех товаров корзины
  	addToBasket: function(id, qty) {
  		let item = getGoodById(id);
  	  	if(item) { 
  	  		for (var i = 0; i < basket.goods.length; i++) {
  	  			if (basket.goods[i].id == id) basket.goods[i].qty += qty;
  	  		}
  	  	}
        else {
        	this.goods.push(goods[id - 1]);
        	goods[id - 1].qty += qty;
        }
        this.sumBasket();
  	},
  	sumBasket: function() { // метод суммирования количества товаров и цены корзины
  		this.qty = 0;
 		this.price = 0;
    	for (var i = 0; i < this.goods.length; i++) {
    		this.price += this.goods[i].qty * this.goods[i].price;
    		this.qty += this.goods[i].qty;
    	}
  	},
  	clearBasket: function(e) { // метод очистки корзины
  		clearPrintToBasket(e);
  		this.qty = 0;
  		this.price = 0;
		for (var i = this.goods.length; i > 0; i--) {
			this.goods.pop();
		}  	
		for (var i = 0; i < goods.length; i++) {
			goods[i].qty = 0;
		} 	
  	}
};

let h1 = document.getElementsByTagName('h1');
let bigPic = document.getElementById('big-pic');
let smallPic1 = document.getElementById('small-pic-1');
let smallPic2 = document.getElementById('small-pic-2');
let smallPic3 = document.getElementById('small-pic-3');

function printGoods(e) {
	let divGoods = document.createElement('div');
	let goodsH1 = document.createElement('h1');
	divGoods.className = 'goods';
	goodsH1.innerHTML = 'Каталог товаров';
	document.body.appendChild(divGoods);
	divGoods.appendChild(goodsH1);
	for (var i = 0; i < goods.length; i++) {
		let h2 = document.createElement('h2');
		let img = document.createElement('img');
		let price = document.createElement('p');
		let form = document.createElement('form');
		let button = document.createElement('button');
		h2.innerHTML = goods[i].title;
		img.src = 'img/' + goods[i].path  + '_' + '1' + '.jpg';
		price.innerHTML = 'Цена: ' + goods[i].price + ' p.';
		button.innerHTML = 'купить';
		button.onclick = onButtonClick;
		button.className = goods[i].id;
		divGoods.appendChild(h2);
		divGoods.appendChild(img);
		divGoods.appendChild(price);
		divGoods.appendChild(button);
	}
	let divBasket = document.createElement('div');
	let basketH1 = document.createElement('h1');
	divBasket.className = 'basket';
	basketH1.innerHTML = 'Корзина';
	document.body.appendChild(divBasket);
	divBasket.appendChild(basketH1);
	printBasket(e);
}


let qty = document.createElement('h5');
let sum = document.createElement('h5');
let button = document.createElement('button');
let basketH1 = document.getElementsByTagName('h1');
let title = document.getElementsByTagName('h6');


function printBasket(e) {
	qty.innerHTML = 'Всего товаров в корзине: ' + basket.qty;
	sum.innerHTML = 'Стоимость корзины: ' + basket.price;
	button.innerHTML = 'очистить';
	button.onclick = onButtonClear;

	basketH1[1].appendChild(qty);
	basketH1[1].appendChild(sum);
	basketH1[1].appendChild(button);
}

function getGoodById(id) {
for (var i = 0; i < basket.goods.length; i++) {
		if (basket.goods[i].id == id) return (true);
    	}
    	return false;
}

function clearPrintToBasket(e) {
	let basketH1 = document.getElementsByTagName('h1');
	let h6 = document.getElementsByTagName('h6');
	
		for (var i = h6.length - 1; i >= 0; i--) {
			basketH1[1].removeChild(h6[i]);
		}
	
}

function addPrintToBasket(e) {
    clearPrintToBasket(e);
    console.log(basket.goods);
	let basketH1 = document.getElementsByTagName('h1');
	for (var i = 0; i < basket.goods.length; i++) {
		let h6 = document.createElement('h6');
		let qty = document.createElement('h6');
		h6.innerHTML = basket.goods[i].title;
		qty.innerHTML = 'Кол-во: ' + basket.goods[i].qty;
		basketH1[1].appendChild(h6);
		basketH1[1].appendChild(qty);
	}
}

function onButtonClear(e) {
	basket.clearBasket(e);
	printBasket(e);
}

function onButtonClick(e) {
	basket.addToBasket(e.target.className, 1);
	printBasket(e);
	addPrintToBasket(e);
}

function printImg() {
  	for (var i = 0; i < goods.length; i++) {
  		h1.innerHTML = goods[i].title;
  	 	bigPic.src = goods[i].path + '_' + '1' + '.jpg';
  	 	smallPic1.src = goods[i].path + '_' + '1' + '.jpg';
  	 	smallPic2.src = goods[i].path + '_' + '2' + '.jpg';
  	 	smallPic3.src = goods[i].path + '_' + '3' + '.jpg';
  	 	
  	}
};

window.onload = printGoods;


// тесты

