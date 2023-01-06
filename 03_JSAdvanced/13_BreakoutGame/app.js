const canvas = document.getElementById('canvas');
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d');

window.addEventListener('mousemove', onMouse);

let isActive = true;
let lastTime = 0;
let delta = 0;
let score = 0;
const speed = 8;
const width = canvas.width;
const height = canvas.height;
const brick = {
    width: 80,
    height: 35,
    color: 'yellow'
}
const bricksArray = [];
const pad = {
    width: 100,
    height: 20,
    color: 'blue',
    vPos: 570,
    start: 0,
    end: 0
}
const ball = {
    x: 400,
    y: 370,
    vel: getVector(speed, Math.PI / 4),
    radius: 10,
    color: 'red'
}
const limits = {
    left: ball.radius,
    right: width - ball.radius,
    top: ball.radius,
    bottom: height - ball.radius
}
const mouse = {
    x: 0,
    y: 0
}

function tick() {
    ball.x += ball.vel.x;
    ball.y += ball.vel.y;

    // bounce from sides
    if ((ball.x > limits.right && ball.vel.x > 0) || (ball.x < limits.left && ball.vel.x < 0)) {
        ball.vel.x *= -1;
    }
    if (ball.y < limits.top && ball.vel.y < 0) {
        ball.vel.y *= -1;
    }

    //touch pad
    if (ball.y + ball.radius >= pad.vPos && ball.x > pad.start && ball.x < pad.end && ball.vel.y > 0) {
        ball.vel.y *= -1;

        let x = ball.vel.x + (1 - (ball.x - pad.start + pad.width) / pad.width);
        let y = Math.sqrt(speed ** 2 - x ** 2);
        ball.vel.x = x;
        ball.vel.y = -y;
    }

    // touch bottom
    if (ball.y > pad.vPos && ball.vel.y > 0) {
        gameOver();
    }

    for (const b of bricksArray) {
        if (!b.live) {
            continue;
        }
        collision(b);
    }
}

function render() {
    clear();
    for (const b of bricksArray) {
        if (!b.live) {
            continue;
        }
        drawBrick(b.x, b.y, b.color)
    }
    drawPad(mouse.x);
    drawBall(ball.x, ball.y);

}

function drawBrick(x, y, color) {
    ctx.fillStyle = `rgb(
        ${color[0]},
        ${color[1]},
        255)`;
    ctx.fillRect(x + 7, y + 7, brick.width - 14, brick.height - 14);
}

function drawPad(x) {
    if (x < pad.width / 2) {
        x = pad.width / 2 + 5;
    }
    if (x > width - pad.width / 2) {
        x = width - pad.width / 2 - 5;
    }
    ctx.fillStyle = pad.color;
    ctx.fillRect(x - pad.width / 2, pad.vPos, pad.width, pad.height);
    pad.start = x - pad.width / 2;
    pad.end = pad.start + pad.width;
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
    if (!isActive) {
        return;
    }

    delta = time - lastTime;
    if (delta > 100) {
        delta = 20;
    }
    if (delta >= 20) {
        lastTime = time;
        delta = 0;
        tick();
    }
    render();
    requestAnimationFrame(main)
}

function getVector(speed, dir) {
    return {
        x: Math.cos(dir) * speed,
        y: Math.sin(dir) * speed
    }
}

function collision(b) {
    if ((ball.x + ball.radius > b.x + 7)
        && (ball.x - ball.radius < b.x + brick.width - 14)
        && (ball.y + ball.radius > b.y + 7)
        && (ball.y - ball.radius < b.y + brick.height - 14)) {

        if ((ball.y + ball.radius < b.y + 7 || ball.y - ball.radius > b.y + brick.height - 14)
            && (ball.x + ball.radius > b.x + 7 && ball.x - ball.radius < b.x + brick.width - 14)) {
            ball.vel.x *= -1;
        } else {
            ball.vel.y *= -1;
        }

        b.live = false;
        score += 100;
    }
}

function start() {
    isActive = true;
    for (let row = 0; row < 7; row++) {
        for (let cell = 0; cell < Math.floor((width - 70) / brick.width); cell++) {
            bricksArray.push({
                x: cell * brick.width + 35,
                y: row * brick.height + 50,
                color: [255 - row * 35, row * 35],
                live: true
            });
        }
    }
    requestAnimationFrame(main);
}

function gameOver() {
    isActive = false;
    const choice = confirm(`Game over!\nYour score: ${score}\n\nPlay again?`);
    if (choice) {
        ball.x = 400;
        ball.y = 370;
        ball.vel = getVector(speed, Math.PI / 4);
        bricksArray.length = 0;
        score = 0;
        start();
    }
}

start();