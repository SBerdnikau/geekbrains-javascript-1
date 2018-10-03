function random(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
};

var game = {
	size: 20,
	snake: [],
	score: 0,
	food: null,
	bomb: null,
	directions: {
		up:{row:-1, col:0},
		down:{row:1, col: 0},
		left:{row:0, col:-1},
		right:{row:0, col:1}
	},
	direction: null,
	createBoard: function(){
		var table = document.createElement('table');
		table.id = 'game';
		table.classList.add('game-table');

		for ( var i = 0; i < this.size; i++ ) {
			var tr = document.createElement('tr');

			for ( var j = 0; j < this.size; j++ ) {
				td = document.createElement('td');
				td.classList.add('game-table-cell');
				td.setAttribute('id', 'cell-' + i + '-' + j);
				tr.appendChild(td);
			}
			table.appendChild(tr);
		} 

		document.getElementById('snake-field').appendChild(table);		
	},
	createSnake: function(){
		this.snake.push({row: random(0,19), col: random(0,19)});
		this.snake.push({row: this.snake[0].row + 1, col: this.snake[0].col });
	},
	render: function(){
		var td;
		var elements = document.getElementsByTagName('td');
		var count = document.getElementById('scoreText');

		count.innerHTML = 'Счёт - ' + this.score;

		for ( var i = 0; i < elements.length; i++ ) {
			elements[i].classList.remove('snake-unit');
			elements[i].classList.remove('food-unit');
			elements[i].classList.remove('bomb-unit');
		}

		for(var i=0; i<this.snake.length; i++){
			var row = this.snake[i].row;
			var col = this.snake[i].col;

			if(row<0 || row>19 || col<0 || col>19 ){
				if(row<0){
					this.snake[i].row = 19;
				}
				if(col<0){
					this.snake[i].col = 19;
				}
				if(row>19){
					this.snake[i].row = 0;
				}
				if(col>19){
					this.snake[i].col = 0;
				}
			}
			td = document.getElementById('cell-' + this.snake[i].row + '-' + this.snake[i].col);
			td.classList.add('snake-unit');

		}

		for ( var i = 0; i < this.snake.length; i++ ) {
			var cell = this.snake[i];
			var id = 'cell-' + cell.row + '-' + cell.col;
			document.getElementById(id).classList.add('snake-unit');
		}

		if ( this.food.row && this.food.col ) {
			var id = 'cell-' + this.food.row + '-' + this.food.col;
			document.getElementById(id).classList.add('food-unit');
		}

		if ( this.bomb.row && this.bomb.col ) {
			var id = 'cell-' + this.bomb.row + '-' + this.bomb.col;
			document.getElementById(id).classList.add('bomb-unit');
		}
	},
	isSnakeCell: function(row, col){
		for ( var i = 0; i < this.snake.length; i++ ) {
			if(row == this.snake[i].row && col == this.snake[i].col){
				return true;
			}
		}
		return false;
	},
	isFoodCell: function(row,col){
		return this.food && this.food.row == row && this.food.col == col;
	},
	isBombCell: function(row,col){
		return this.bomb && this.bomb.row == row && this.bomb.col == col;
	},
	createFood: function(){
		var pool = [];
		for ( var i = 0; i < this.size; i++ ) {
			for ( var j = 0; j < this.size; j++ ) {
				if ( !this.isSnakeCell(i, j)  ) {
					pool.push({row: i, col: j});
				}
			}
		} 
		if(pool.length){
			this.food  = pool[random(0, pool.length)];
		}
	},
	createBomb: function(){
		var poolBomb = [];
		for ( var i = 0; i < this.size; i++ ) {
			for ( var j = 0; j < this.size; j++ ) {
				if ( !this.isSnakeCell(i, j)    ) {
					poolBomb.push({row: i, col: j});
				}
			}
		} 
		if(poolBomb.length){
			this.bomb  = poolBomb[random(0, poolBomb.length)];
		}
	},
	setEvents: function(){
		this.intervalId = setInterval(this.move.bind(this), 500);
		document.addEventListener('keydown', this.changeDirection.bind(this));
	},
	changeDirection: function(e){
		switch ( e.keyCode ) {
			case 37:
				this.direction = this.directions.left;
				break;
			case 38:
			 	this.direction = this.directions.up;
			 	break;
			case 39:
			 	this.direction = this.directions.right;
			 	break;
			case 40:
				this.direction = this.directions.down;
				break;
			default:
				break;
		}
	},
	checkCell: function(row, col){
		if ( row < 0 || row >= this.size || col < 0 || col >= this.size ) {
			//return false;
		}

		if ( this.isSnakeCell(row, col) ) {
			return false;
		}

		if(this.isBombCell(this.snake[0].row, this.snake[0].col)){
			return false;

		}

		return true;
	},
	over: function(){
		alert('Игра завершена');
		clearInterval(this.intervalId);
	},
	move: function(){
		//определи где сл. ячейка
		var row = this.snake[0].row + this.direction.row;
		var col = this.snake[0].col + this.direction.col;

		if ( !this.checkCell(row, col) ) {
			return this.over();
		}

		// добавить элемент в начало змеи
		this.snake.unshift({row: row, col: col});

		// удаляем элемент из хвоста змеи - таким образом змея двигается
		if ( !this.food || this.food.row != row || this.food.col != col ) {
			// еды нет
			this.snake.pop();
		} else {
			// еду съели
			this.createFood();
			this.createBomb();
		}
		this.score = this.snake.length -2;
		this.render();
	},
	run: function(){
		this.direction = this.directions.up;
		this.createBoard();
		this.createSnake();
		this.createFood();
		this.createBomb();

		this.render();
		this.setEvents();
	},
	init: function(){
		var start = 0;
		var button_1 = document.createElement('button');
		button_1.innerHTML = 'Начать игру';
		button_1.classList.add('button');
		document.body.appendChild(button_1);

		var button_2 = document.createElement('button');
		button_2.innerHTML = 'Завершить игру';
		button_2.classList.add('button');
		button_2.style.display = 'none';
		document.body.appendChild(button_2);

		//замыкание №1 для кнопки button_1
		button_1.onclick = function(){
			button_1.style.display = 'none';
			button_2.style.display = 'block';
			if(start == 0){
				game.run();
				start = 1;
				button_1.remove();
			}
		};

		//замыкание №2 для кнопки button_2
		button_2.onclick = function(){
			game.over();
		};

	}
};

window.addEventListener('load', function(){
	game.init();
});