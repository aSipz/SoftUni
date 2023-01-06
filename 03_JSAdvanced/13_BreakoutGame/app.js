const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', onMouse);

let lastTime = 0;
let delta = 0;
const stepSize = 20;
const rate = 1000 / stepSize;
const width = canvas.width;
const height = canvas.height;
const brick = {
    width: 50,
    height: 15,
    color: 'yellow'
}
const pad = {
    width: 100,
    height: 20,
    color: 'blue'
}
const ball = {
    x: 400,
    y: 400,
    vel: {
        x: 10,
        y: 10
    },
    radius: 10,
    color: 'red'
}
const mouse = {
    x: 0,
    y: 0
}

function tick() {
    ball.x += ball.vel.x / rate;
    ball.y += ball.vel.y / rate;

    if ((ball.x + ball.radius > width && ball.vel.x > 0) || (ball.x + ball.radius < 0 && ball.vel.x < 0)) {
        ball.vel.x *= -1;
    }
    if ((ball.y + ball.radius > height && ball.vel.y > 0) || (ball.y + ball.radius < 0 && ball.vel.y < 0)) {
        ball.vel.y *= -1;
    }
}

function render() {
    clear();
    drawPad(mouse.x);
    drawBall(ball.x, ball.y)
}

function drawBrick(x, y) {
    ctx.fillStyle = brick.color;
    ctx.fillRect(x, y, brick.width, brick.height)
}

function drawPad(x) {
    if (x < pad.width / 2) {
        x = pad.width / 2 + 5;
    }
    if (x > width - pad.width / 2) {
        x = width - pad.width / 2 - 5;
    }
    ctx.fillStyle = pad.color;
    ctx.fillRect(x - pad.width / 2, 570, pad.width, pad.height)
}

function drawBall(x, y) {
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, ball.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, 800, 600);
}

function onMouse(e) {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
}

function main(time) {
    delta += time - lastTime;
    if (delta > 1000) {
        delta = 20;
    }
    while (delta >= 20) {
        delta -= 20;
        tick();
    }
    render();
    requestAnimationFrame(main)
}

function start() {
    requestAnimationFrame(main)
}

start();