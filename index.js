let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = []
snake[0] = {
	x: 8 * box,
	y: 8 * box
}

let direction = 'rigth'
let food = {
	x: Math.floor(Math.random() * 15 + 1) * box,
	y: Math.floor(Math.random() * 15 + 1) * box
}
let points = 0

function criarBG(){
	context.fillStyle = 'lightgreen';
	context.fillRect(0,0,16 * box, 16 * box)
}

function create_snake(){
	for(i=0; i < snake.length; i++){
		context.fillStyle = 'blue';
		context.fillRect(snake[i].x, snake[i].y , box, box)
	}
}

function create_food(){
	context.fillStyle = 'red';
	context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update);

function update(event){
	if(event.keyCode == 37 && direction != 'rigth') direction = 'left';
	if(event.keyCode == 38 && direction != 'down') direction = 'up';
	if(event.keyCode == 39 && direction != 'left') direction = 'rigth';
	if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function Start(){
	if(snake[0].x > 15 * box && direction == 'rigth') snake[0].x =0
	if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box
	if(snake[0].y > 15 * box && direction == 'down') snake[0].y =0
	if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box


	for(i=1; i<snake.length; i++){
		if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
			clearInterval(game);
			alert(`Game Over :(    Pontuação final = ${points}`)
		}
	}

	criarBG()
	create_snake()
	create_food()


	let snake_x = snake[0].x;	
	let snake_y = snake[0].y;
	if(direction == 'rigth') snake_x += box;
	if(direction == 'left') snake_x -= box;
	if(direction == 'up') snake_y -= box;
	if(direction == 'down') snake_y += box;

	if(snake_x != food.x || snake_y != food.y){
	snake.pop()
	}
	else{food.x = Math.floor(Math.random() * 15 + 1) * box,
		food.y = Math.floor(Math.random() * 15 + 1) * box
		points += 1
	}

	let newHead = {
		x: snake_x,
		y: snake_y
	}
	snake.unshift(newHead);

}


let game = setInterval(Start, 100)