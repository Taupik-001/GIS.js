let gameBoard = document.querySelector("#gameBoard")
let ctx = gameBoard.getContext("2d")
let scoreText = document.querySelector("#scoreText")
let gameWidth = gameBoard.width
let gameHeight = gameBoard.height
let boardBackground = "black"
let snakeColor = "skyblue"
let snakeBorder = "red"
let foodColor = "red"
let foodBorder = "skyblue"
let unitSize = 25
let running = false
let xVelocity = unitSize
let yVelocity = 0
let sec = 0;
let foodX
let foodY
let score = 0

///karakter snake nya
let snake = [
    // {x:unitSize * 4, y:0},
    // {x:unitSize * 3, y:0},  
    // {x:unitSize * 2, y:0},
    // {x:unitSize, y:0},
    {x:0, y:0}
]

window.addEventListener("keydown", changeDirection)

// function playtheGame(){
//     document.getElementById("test").innerHTML = '<button onclick="gameStart()">Play Again</button>'
// }

function gameStart(){
    running = true
    scoreText.textContent = score
    runTime()
    createFood()
    drawFood()
    nextTick()
}

function nextTick(){
    if(running){
        setTimeout(()=>{
            clearBoard()
            drawFood()
            moveSnake()
            drawSnake()
            checkGameOver()
            nextTick()
        }, 90)
    }
    else if(running == false){
        displayGameOver()
    }
}

function clearBoard(){
    ctx.fillStyle = boardBackground
    ctx.fillRect(0, 0, gameWidth, gameHeight)
}

//food spawning
function createFood(){
        function randomFood(min, max){
            const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize
            return randNum
        }
        foodX = randomFood(0, gameWidth - unitSize)
        foodY = randomFood(0, gameWidth - unitSize)
}

//style food
function drawFood(){
    ctx.fillStyle = foodColor
    ctx.strokeStyle = foodBorder
    ctx.fillRect(foodX, foodY, unitSize, unitSize)
}

//pergerakan karakter
function moveSnake(){
    const head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    }
    snake.unshift(head)
    // if food is eaten
    if(snake[0].x == foodX && snake[0].y == foodY){
        score+= 1
        scoreText.textContent = score
        createFood()
    }
    else{
        snake.pop()
    }
}

//create a snake
function drawSnake(){
    ctx.fillStyle = snakeColor
    ctx.strokeStyle = snakeBorder
    snake.forEach(snakePart=> {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    })
}

function changeDirection(event){
    const keyPressed = event.keyCode
    // console.log(keyPressed)

    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40
    // W 87
    // A 65
    // S 83
    // D 68

    const goingLeft = (xVelocity == -unitSize)
    const goingRight = (xVelocity == unitSize)
    const goingUp = (yVelocity == -unitSize)
    const goingDown = (yVelocity == unitSize)

    switch(true){
        case(keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize
            yVelocity = 0
            break

        case(keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize
            yVelocity = 0
            break

        case(keyPressed == UP && !goingDown):
            xVelocity = 0
            yVelocity = -unitSize
            break

        case(keyPressed == DOWN && !goingUp):
            xVelocity = 0
            yVelocity = unitSize
            break
    }
}

function checkGameOver(){
    switch(true){
        // // Game over if snake head touch the left side of the canvas
        case (snake[0].x < 0):
            running = false
            break

        // // Game over if snake head touch the right side of the canvas
        case (snake[0].x >= gameWidth):
            running = false
            break

        // // Game over if snake head touch the top side of the canvas
        case (snake[0].y < 0):
            running = false
            break

        // // Game over if snake head touch the bottom side of the canvas
        case (snake[0].y >= gameHeight):
            running = false
            break
    }

    //Game over if Head snake touch one of the body snake
    for (let i = 1; i < snake.length; i+=1){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false
        }
    }
}

function displayGameOver(){
    ctx.font = "50px MV Boli"
    ctx.fillStyle = "silver"
    ctx.textAlign = "center"
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2)
    document.getElementById("restart").innerHTML = '<button onclick="resetGame()">Play Again</button>'
}

function resetGame(){
    window.location.reload()
    score = 0
    xVelocity = unitSize
    yVelocity = 0
    snake = [
        // {x:unitSize * 4, y:0},
        // {x:unitSize * 3, y:0},  
        // {x:unitSize * 2, y:0},
        // {x:unitSize, y:0},
        {x:0, y:0}
    ]
    gameStart()
}


function time(val) {
    return val > 9 ? val : "0" + val;
  }
  
  function runTime() {
    const timeInterval = setInterval(() => {
      document.getElementById("seconds").innerHTML = ":" + time(++sec % 60);
      document.getElementById("minutes").innerHTML = ":" + time(parseInt((sec / 60) % 60));
      document.getElementById("hours").innerHTML = time(parseInt(sec / 3600));
  
      if (running == false) {
        clearInterval(timeInterval);
      }
    }, 1000);
  }