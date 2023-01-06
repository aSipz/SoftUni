const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

let timer = null;
const width = canvas.width;
const height = canvas.height;
const gSize = 15;
const gridSize = width / gSize;
const apple = {
    x: 5,
    y: 15
}
const snake = {
    x: 10,
    y: 10,
    size: 3
}
const game = {
    interval: 150,
    speed: { x: 1, y: 0 },
    inputSpeed: { x: 1, y: 0 }
}
const tail = []
const movement = {
    ArrowUp() {
        if (game.speed.y == 1) {
            return;
        }
        game.inputSpeed.x = 0;
        game.inputSpeed.y = -1;
    },
    ArrowDown() {
        if (game.speed.y == -1) {
            return;
        }
        game.inputSpeed.x = 0;
        game.inputSpeed.y = 1;
    },
    ArrowLeft() {
        if (game.speed.x == 1) {
            return;
        }
        game.inputSpeed.x = -1;
        game.inputSpeed.y = 0;
    },
    ArrowRight() {
        if (game.speed.x == -1) {
            return;
        }
        game.inputSpeed.x = 1;
        game.inputSpeed.y = 0;
    }
}

window.addEventListener('keydown', (e) => {
    movement[e.key]();
})

function tick() {
    // snake movement
    tail.push({
        x: snake.x,
        y: snake.y
    });
    while (tail.length > snake.size) {
        tail.shift();
    }
    game.speed.x = game.inputSpeed.x;
    game.speed.y = game.inputSpeed.y;
    snake.x += game.speed.x;
    if (snake.x < 0) {
        snake.x = gSize - 1;
    }
    if (snake.x > gSize - 1) {
        snake.x = 0;
    }
    tail.y = snake.y;
    snake.y += game.speed.y;
    if (snake.y < 0) {
        snake.y = gSize - 1;
    }
    if (snake.y > gSize - 1) {
        snake.y = 0;
    }

    // check collision
    for (const segment of tail) {
        if (snake.x == segment.x && snake.y == segment.y) {
            gameOver();
        }
    }

    // eating apple
    if (snake.x == apple.x && snake.y == apple.y) {
        snake.size++;
        generateApple();
    }
}

function drawScene() {
    clear();
    drawGrid();
    drawRect(snake.x, snake.y, 'orange');
    tail.forEach(segment => {
        drawRect(segment.x, segment.y, 'green');
    });
    drawRect(apple.x, apple.y, 'red');
}

function generateApple() {
    apple.x = Math.trunc(Math.random() * gSize);
    apple.y = Math.trunc(Math.random() * gSize);
    if (apple.x == snake.x && apple.y == snake.y) {
        generateApple();
    }
    tail.forEach(segment => {
        if (apple.x == segment.x && apple.y == segment.y) {
            generateApple();
        }
    });
}

function main() {
    tick();
    drawScene()
}

function drawRect(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * gridSize + 3, y * gridSize + 3, gridSize - 6, gridSize - 6);
}

function clear() {
    ctx.clearRect(0, 0, width, height);
}

function drawGrid() {
    ctx.strokeStyle = `#888888`;
    ctx.beginPath();
    for (let x = 1; x < gSize; x++) {
        ctx.moveTo(x * gridSize, 0);
        ctx.lineTo(x * gridSize, height);
    }
    for (let y = 1; y < gSize; y++) {
        ctx.moveTo(0, y * gridSize);
        ctx.lineTo(width, y * gridSize);
    }
    ctx.closePath();
    ctx.stroke();
}

function gameOver() {
    clearInterval(timer);
    const choice = confirm(`Game over!\nYour score: ${(snake.size - 3) * 10}\n\nPlay again?`);
    if(choice) {
        start();
    }
}

function start() {
    snake.x = 10;
    snake.y = 10;
    snake.size = 3;
    tail.length = 0;
    game.speed.x = 1;
    game.speed.y = 0;
    game.inputSpeed.x = 1;
    game.inputSpeed.y = 0;

    generateApple();
    timer = setInterval(main, game.interval);
}

start();