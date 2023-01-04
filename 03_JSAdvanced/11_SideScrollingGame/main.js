const gameStart = document.querySelector('.game-start');
const gameScore = document.querySelector('.game-score');
const gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
const gamePoints = gameScore.querySelector('.points');
const startBtn = gameStart.querySelector('.start');
const difficultySelector = Array.from(gameStart.querySelectorAll('.difficulty'));

let keys = {};
let difficulty = {
    'Easy': 1,
    'Medium': 4,
    'Hard': 8
}
let player = {
    x: 150,
    y: 100,
    width: 0,
    height: 0,
    lastTimeFiredFireball: 0
};
let game = {
    speed: 2,
    movingMultiplier: 4,
    fireBallMultiplier: 5,
    fireInterval: 500,
    cloudSpawnInterval: 3000,
    bugSpawnInterval: 1000,
    bugSpeedMultiplier: 3,
    bugKillBonus: 2000,
    difficultyMultiplier: 0
};
let scene = {
    score: 0,
    lastCloudSpawn: 0,
    lastBugSpawn: 0,
    isActiveGame: true
};

gameStart.addEventListener('click', onGameStart);
gameStart.addEventListener('click', chooseDifficulty);
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

function onGameStart(e) {
    if (e.target.className != 'start') {
        return;
    }

    // check for difficulty
    let isSelected = false;
    for (const selector of difficultySelector) {
        if (selector.className.includes('chosen')) {
            isSelected = true;
            break;
        }
    }
    if (!isSelected) {
        let messageDiv = document.createElement('div');
        messageDiv.textContent = 'Please select difficulty';
        messageDiv.classList.add('error');
        gameStart.appendChild(messageDiv);
        return;
    }

    gameStart.classList.add('hide');
    gameScore.classList.remove('hide');
    gameArea.style.cursor = 'none';
    const wizard = document.createElement('div');
    wizard.classList.add('wizard');
    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';
    gameArea.appendChild(wizard);

    player.width = wizard.offsetWidth;
    player.height = wizard.offsetHeight;

    window.requestAnimationFrame(gameAction);
}

function gameAction(timestamp) {
    const wizard = document.querySelector('.wizard');

    // gravity
    let isInAir = (player.y + player.height) <= gameArea.offsetHeight;
    if (isInAir) {
        player.y += game.speed;
    }

    // movement
    if (keys.ArrowUp && player.y > 0) {
        player.y -= game.speed * game.movingMultiplier;
    }
    if (keys.ArrowDown && isInAir) {
        player.y += game.speed * game.movingMultiplier;
    }
    if (keys.ArrowLeft && player.x > 0) {
        player.x -= game.speed * game.movingMultiplier;
    }
    if (keys.ArrowRight && player.x + player.width < gameArea.offsetWidth) {
        player.x += game.speed * game.movingMultiplier;
    }
    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';

    // fire
    if (keys.Space && timestamp - player.lastTimeFiredFireball > game.fireInterval) {
        wizard.classList.add('wizard-fire');
        addFireBall(player);
        player.lastTimeFiredFireball = timestamp;
    } else {
        wizard.classList.remove('wizard-fire');
    }

    // fireballs
    let fireBalls = document.querySelectorAll('.fire-ball');
    fireBalls.forEach(fireBall => {
        fireBall.x += game.speed * game.fireBallMultiplier;
        fireBall.style.left = fireBall.x + 'px';
        if (fireBall.x + fireBall.offsetWidth > gameArea.offsetWidth) {
            fireBall.parentElement.removeChild(fireBall);
        }
    });

    // add bugs
    if (timestamp - scene.lastBugSpawn > game.bugSpawnInterval + 5000 * Math.random() / game.difficultyMultiplier) {
        let bug = document.createElement('div');
        bug.classList.add('bug');
        bug.x = gameArea.offsetWidth - 60;
        bug.style.left = bug.x + 'px';
        bug.style.top = (gameArea.offsetHeight - 60) * Math.random() + 'px';
        gameArea.appendChild(bug);
        scene.lastBugSpawn = timestamp;
    }

    //modify bugs
    let bugs = document.querySelectorAll('.bug');
    bugs.forEach(bug => {
        bug.x -= game.speed * game.bugSpeedMultiplier;
        bug.style.left = bug.x + 'px';
        if (bug.x + bug.offsetWidth <= 0) {
            bug.parentElement.removeChild(bug);
        }
    });

    //collision detection
    bugs.forEach(bug => {
        if (isCollision(wizard, bug)) {
            gameOverAction();
        }
        fireBalls.forEach(ball => {
            if (isCollision(ball, bug)) {
                game.score += game.bugKillBonus;
                bug.parentElement.removeChild(bug);
                ball.parentElement.removeChild(ball)
            }
        });
    });
    // add clouds
    if (timestamp - scene.lastCloudSpawn > game.cloudSpawnInterval + 20000 * Math.random()) {
        let cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.x = gameArea.offsetWidth - 200;
        cloud.style.left = cloud.x + 'px';
        cloud.style.top = (gameArea.offsetHeight - 200) * Math.random() + 'px';
        gameArea.appendChild(cloud);
        scene.lastCloudSpawn = timestamp;
    }

    //modify clouds
    let clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        cloud.x -= game.speed;
        cloud.style.left = cloud.x + 'px';
        if (cloud.x + cloud.offsetWidth <= 0) {
            cloud.parentElement.removeChild(cloud);
        }
    });

    // score
    scene.score++;
    gamePoints.textContent = scene.score;

    // speed increase
    if (timestamp % 10000 == 0) {
        game.speed += 0.1;
    }

    if (scene.isActiveGame) {
        window.requestAnimationFrame(gameAction);
    }
}

function chooseDifficulty(e) {
    if (e.target.className != 'difficulty') {
        return;
    }
    difficultySelector.forEach(element => {
        if (e.target == element) {
            element.classList.add('chosen');
            game.difficultyMultiplier = difficulty[element.textContent];
            let errorDiv = e.target.parentElement.parentElement.querySelector('.error');
            if (errorDiv) {
                errorDiv.parentElement.removeChild(errorDiv);
            }
        } else {
            element.classList.remove('chosen');
        }
    });
}

function gameOverAction() {
    scene.isActiveGame = false;
    gameOver.classList.remove('hide');
    let result = document.createElement('div');
    result.classList.add('result');
    result.innerText = 'Result:\n' + `${scene.score} points`;
    gameOver.appendChild(result);
    gameArea.style.cursor = 'default';
    gameScore.classList.add('hide');

    // best results
    let resultString = localStorage.getItem('results');
    if (!resultString) {
        resultString = '';
    }
    resultString += ' ' + scene.score;
    resultString.trim();
    localStorage.setItem('results', resultString);
    let first = resultString
        .split(' ')
        .map(Number)
        .sort((a, b) => b - a)
        .slice(0, 3);

    let bestResultDiv = document.createElement('div');
    bestResultDiv.innerText = first.join('\n');
    gameOver.appendChild(bestResultDiv);

    //start again
    let startAgain = document.createElement('div');
    startAgain.classList.add('reload');
    startAgain.textContent = 'Try again';
    startAgain.addEventListener('click', () => {
        location.reload();
    })
    gameOver.appendChild(startAgain);
}

function isCollision(firstElement, secondElement) {
    let firstRect = firstElement.getBoundingClientRect();
    let secondRect = secondElement.getBoundingClientRect();
    return !(firstRect.top > secondRect.bottom ||
        firstRect.bottom < secondRect.top ||
        firstRect.right < secondRect.left ||
        firstRect.left > secondRect.right);
}

function addFireBall() {
    let fireBall = document.createElement('div');
    fireBall.classList.add('fire-ball');
    fireBall.style.top = (player.y + player.height / 3 + 5) + 'px';
    fireBall.x = player.x + player.width;
    fireBall.style.left = fireBall.x + 'px';
    gameArea.appendChild(fireBall);
}

function onKeyDown(e) {
    keys[e.code] = true;
}

function onKeyUp(e) {
    keys[e.code] = false;
}