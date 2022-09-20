// var button = document.getElementById("starter")
// var timer  = document.getElementById("timer")
// var time = 0
// var myInterval = -1
// myclearinterval = clearInterval(Interterval)
// button.addEventListener("click", function(event){
//     if(myInterval == -1){
//         button.innerHTML = "Pause"
//         myInterval = setInterval(function(){
//             MycontentGame()
//         }, 10)
//     }else {
//         button.innerHTML = "Start"
//         clearInterval(myInterval)
//         myInterval = -1
//     }
// })
let hero = document.getElementById("Hero")
let control = document.getElementById("Control")
function buttonKey(){
    control.innerHTML = "KEY"
}
function buttonWasd(){
    control.innerHTML = "WASD"
}
function buttonJet(){
    hero.innerHTML = "JET"
}
function buttonRocket(){
    hero.innerHTML = "ROCKET"
}
function pausemusic(){
    backsoundTheme.stop()
}


let galaxy = document.querySelector("#PlayCanvas")
let board = galaxy.getContext("2d")
let galaxyWidth = galaxy.width
let galaxyHeight = galaxy.height
let IntervalLevelOne
let IntervalLevelTwo
let IntervalLevelThree


const left = 37
const right = 39
const up = 38
const down = 40
const w = 87
const a = 65
const s = 83
const d = 68


window.addEventListener("keydown", KeyMoveJet)
window.addEventListener("keyup", KeyStopJet)
window.addEventListener("keydown", WASDMoveJet)
window.addEventListener("keyup", WASDStopJet)
window.addEventListener("keydown", KeyMoveRocket)
window.addEventListener("keyup", KeyStopRocket)
window.addEventListener("keydown", WASDMoveRocket)
window.addEventListener("keyup", WASDStopRocket)


function JetCharaKey(){
    jetKey = new property(1201, 0, 80, 120, "TheJet.png", "image")
}
function JetCharaWASD(){
    jetWasd = new property(1201, 0, 80, 120, "TheJet.png", "image")
}
function RocketCharaKey(){
    rocketKey = new property(1201, 0, 130, 120, "TheRocket.png", "image")
}
function RocketCharaWASD(){
    rocketWasd = new property(1201, 0, 130, 120, "TheRocket.png", "image")
}


function LevelOneCanvas(){
    if(hero.innerHTML == "JET" && control.innerHTML == "KEY"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        JetCharaKey()
    }
    else if(hero.innerHTML == "JET" && control.innerHTML == "WASD"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        JetCharaWASD()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "KEY"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        RocketCharaKey()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "WASD"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        RocketCharaWASD()
    }
    ClearLevelTwo = clearInterval(IntervalLevelTwo)
    ClearLeveThree = clearInterval(IntervalLevelThree)
    backsoundTheme = new sound("hula.ogg")
    backsoundTheme.loop()
    LevelOne = new property(0, 0, 1200, 600, "Level1.png", "background")
    testObstacle = new property(100, 200, 30, 50, "blue")
    LevelOneRunning()
}


function LevelTwoCanvas(){
    if(hero.innerHTML == "JET" && control.innerHTML == "KEY"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        JetCharaKey()
    }
    else if(hero.innerHTML == "JET" && control.innerHTML == "WASD"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        JetCharaWASD()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "KEY"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        RocketCharaKey()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "WASD"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        RocketCharaWASD()
    }
    ClearLevelOne = clearInterval(IntervalLevelOne)
    ClearLeveThree = clearInterval(IntervalLevelThree)
    LevelTwo = new property(0, 0, 1200, 600, "Level1.png", "background")
    testObstacle = new property(100, 200, 30, 50, "red")
    LevelTwoRunning()
}
function LevelThreeCanvas(){
    if(hero.innerHTML == "JET" && control.innerHTML == "KEY"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        JetCharaKey()
    }
    else if(hero.innerHTML == "JET" && control.innerHTML == "WASD"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        JetCharaWASD()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "KEY"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        RocketCharaKey()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "WASD"){
        ClearLevelTwo = clearInterval(IntervalLevelTwo)
        ClearLeveThree = clearInterval(IntervalLevelThree)
        RocketCharaWASD()
    }
    ClearLevelOne = clearInterval(IntervalLevelOne)
    ClearLevelTwo = clearInterval(IntervalLevelTwo)
    LevelThree = new property(0, 0, 1200, 600, "Level1.png", "background")
    testObstacle = new property(100, 200, 30, 50, "green")
    LevelThreeRunning()
}


function LevelOneRunning(){
    ClearLevelOne = clearInterval(IntervalLevelOne)
    IntervalLevelOne = setInterval(LevelOneContent, 10)
}
function LevelTwoRunning(){
    ClearLevelTwo = clearInterval(IntervalLevelTwo)
    IntervalLevelTwo = setInterval(LevelTwoContent, 10)
}
function LevelThreeRunning(){
    ClearLeveThree = clearInterval(IntervalLevelThree)
    IntervalLevelThree = setInterval(LevelThreeContent, 10)
}


// to create all of the property
function property(x, y, width, height, color, type){
    this.x = x
    this.y = y
    this.goingX = 0
    this.goingY = 0
    this.speedHitX = 0
    this.speedHitY = 0
    this.width = width
    this.height = height
    this.color = color
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    //to update the property
    this.update = function() {
        ctx = board
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        if (type == "background") {
            ctx.drawImage(this.image, 
                this.x + this.width, 
                this.y,
                this.width, this.height);
        }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.movementObj = function(){
        this.x += this.speedHitX
        this.y += this.speedHitY
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }
    //to make the all of properti moving
    this.movement = function(){
        this.x += this.goingX
        this.y += this.goingY
        this.hitTop();
        this.hitBottom();
        this.hitRight();
        this.hitLeft();
    }
    this.hitTop = function(){
        var rocktop = this.height - this.height
        if(this.y < rocktop){
            this.y = rocktop
        }
    }
    this.hitBottom = function() {
        var rockbottom = galaxy.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
    }
    this.hitLeft = function(){
        var rockLeft = galaxy.width - this.width
        if(this.x > rockLeft){
            // jet.goingX = -5
            this.x = rockLeft
        }
    }

    this.hitRight = function(){
    	var rockRight = this.width - this.width
        if (this.x < rockRight) {
            // jet.goingX = 5
        	this.x = rockRight
        }
    }
    this.crashWith = function(otherobj){
        var myleft = this.x
        var myright = this.x + (this.width)
        var mytop = this.y
        var mybottom = this.y + (this.height)
        var otherleft = otherobj.x
        var otherright = otherobj.x + (otherobj.width)
        var othertop = otherobj.y
        var otherbottom = otherobj.y + (otherobj.height)
        var crash = true
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash
    }
}


//for clear the board
function clearMycontentGame(){
    board.clearRect(0, 0, galaxyWidth, galaxyHeight)
}


//if keyboard pressed so the player move
function KeyMoveJet(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        // jetKey.image.src = "none";
        jetKey.goingX = -5
    }
    else if(keyPressed == right){
        jetKey.goingX = 5
    }
    else if(keyPressed == up){
        jetKey.goingY = -5
    }
    else if(keyPressed == down){
        jetKey.goingY = 5
    }
}
//JIf keyboard remove so the player stop moving
function KeyStopJet(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        // jetKey.image.src = "TheJet.png";
        jetKey.goingX = 0
    }
    else if(keyPressed == right){
        jetKey.goingX = 0
    }
    else if(keyPressed == up){
        jetKey.goingY = 0
    }
    else if(keyPressed == down){
        jetKey.goingY = 0
    }
}
//if keyboard pressed so the player move
function WASDMoveJet(e){
    const keyPressed = e.keyCode
    if(keyPressed == a){
        jetWasd.goingX = -5
    }
    else if(keyPressed == d){
        jetWasd.goingX = 5
    }
    else if(keyPressed == w){
        jetWasd.goingY = -5
    }
    else if(keyPressed == s){
        jetWasd.goingY = 5
    }
}
//JIf keyboard remove so the player stop moving
function WASDStopJet(e){
    const keyPressed = e.keyCode
    if(keyPressed == a){
        jetWasd.goingX = 0
    }
    else if(keyPressed == d){
        jetWasd.goingX = 0
    }
    else if(keyPressed == w){
        jetWasd.goingY = 0
    }
    else if(keyPressed == s){
        jetWasd.goingY = 0
    }
}
function KeyMoveRocket(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        rocketKey.goingX = -5
    }
    else if(keyPressed == right){
        rocketKey.goingX = 5
    }
    else if(keyPressed == up){
        rocketKey.goingY = -5
    }
    else if(keyPressed == down){
        rocketKey.goingY = 5
    }
}
//JIf keyboard remove so the player stop moving
function KeyStopRocket(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        rocketKey.goingX = 0
    }
    else if(keyPressed == right){
        rocketKey.goingX = 0
    }
    else if(keyPressed == up){
        rocketKey.goingY = 0
    }
    else if(keyPressed == down){
        rocketKey.goingY = 0
    }
}
//if keyboard pressed so the player move
function WASDMoveRocket(e){
    const keyPressed = e.keyCode
    if(keyPressed == a){
        rocketWasd.goingX = -5
    }
    else if(keyPressed == d){
        rocketWasd.goingX = 5
    }
    else if(keyPressed == w){
        rocketWasd.goingY = -5
    }
    else if(keyPressed == s){
        rocketWasd.goingY = 5
    }
}
//JIf keyboard remove so the player stop moving
function WASDStopRocket(e){
    const keyPressed = e.keyCode
    if(keyPressed == a){
        rocketWasd.goingX = 0
    }
    else if(keyPressed == d){
        rocketWasd.goingX = 0
    }
    else if(keyPressed == w){
        rocketWasd.goingY = 0
    }
    else if(keyPressed == s){
        rocketWasd.goingY = 0
    }
}



function LevelOneContent(){
    clearMycontentGame()
    LevelOne.speedHitX = -1
    LevelOne.movementObj()
    LevelOne.update()
    testObstacle.movement()
    testObstacle.update()
    ///pergerakan obstacle
    // jet.goingY = 1
    if(hero.innerHTML == "JET" && control.innerHTML == "KEY"){
        jetKey.movement()
        jetKey.update()
    }
    else if(hero.innerHTML == "JET" && control.innerHTML == "WASD"){
        jetWasd.movement()
        jetWasd.update()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "KEY"){
        rocketKey.movement()
        rocketKey.update()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "WASD"){
        rocketWasd.movement()
        rocketWasd.update()
    }
}
function LevelTwoContent(){
    clearMycontentGame()
    LevelTwo.speedHitX = -1
    LevelTwo.movementObj()
    LevelTwo.update()
    testObstacle.movement()
    testObstacle.update()
    ///pergerakan obstacle
    // jet.goingY = 1
    if(hero.innerHTML == "JET" && control.innerHTML == "KEY"){
        jetKey.movement()
        jetKey.update()
    }
    else if(hero.innerHTML == "JET" && control.innerHTML == "WASD"){
        jetWasd.movement()
        jetWasd.update()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "KEY"){
        rocketKey.movement()
        rocketKey.update()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "WASD"){
        rocketWasd.movement()
        rocketWasd.update()
    }
}
function LevelThreeContent(){
    clearMycontentGame()
    LevelThree.speedHitX = -1
    LevelThree.movementObj()
    LevelThree.update()
    testObstacle.movement()
    testObstacle.update()
    ///pergerakan obstacle
    // jet.goingY = 1
    if(hero.innerHTML == "JET" && control.innerHTML == "KEY"){
        jetKey.movement()
        jetKey.update()
    }
    else if(hero.innerHTML == "JET" && control.innerHTML == "WASD"){
        jetWasd.movement()
        jetWasd.update()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "KEY"){
        rocketKey.movement()
        rocketKey.update()
    }
    else if(hero.innerHTML == "ROCKET" && control.innerHTML == "WASD"){
        rocketWasd.movement()
        rocketWasd.update()
    }
}