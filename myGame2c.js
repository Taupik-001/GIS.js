let CanvasOneLevelOne = document.querySelector("#CanvasOne")
let DrawCanvasOne = CanvasOneLevelOne.getContext("2d")
let CanvasOneWidth = CanvasOneLevelOne.width
let CanvasOneHeight = CanvasOneLevelOne.height
let IntervalCanvasOne = -1

let CanvasTwoLevelOne = document.querySelector("#CanvasTwo")
let DrawCanvasTwo = CanvasTwoLevelOne.getContext("2d")
let CanvasTwoWidth = CanvasTwoLevelOne.width
let CanvasTwoHeight = CanvasTwoLevelOne.height
let IntervalCanvasTwo

const left = 37
const right = 39
const up = 38
const down = 40

const w = 87
const a = 65
const s = 83
const d = 68
function keyWASD(){
    document.getElementById("just").innerHTML = "wasd"
}
function keyCD(){
    document.getElementById("just").innerHTML = "key"
}
function saveControl(){
    if(document.getElementById("just").innerHTML == "key"){
        window.addEventListener("keydown", MoveRocket)
        window.addEventListener("keyup", StopRocket)
        rocket = new PropertyCanvasOne(200, 0, 80, 120, "TheJet.png", "image")
    }
    else if(document.getElementById("just").innerHTML == "wasd"){
        window.addEventListener("keydown", MoveRocketB)
        window.addEventListener("keyup", StopRocketB)
        rocket = new PropertyCanvasOne(200, 0, 80, 120, "TheRocket.png", "image")
    }
}

window.addEventListener("keydown", MoveJet)
window.addEventListener("keyup", StopJet)

function RunCanvasOne(){
    saveControl()
    document.getElementById("CanvasOne").style.visibility = "visible";
    document.getElementById("CanvasTwo").style.visibility = "hidden";

    BackgroundCanvasOne = new PropertyCanvasOne(0, 0, 1200, 600, "Level1.png", "background")
    BackgroundTop = new PropertyCanvasOne(0, 0, 1200, 50, "BorderTop.png", "background")
    BackgroundDown = new PropertyCanvasOne(0, 550, 1200, 50, "BorderDown.png", "background")
    
    
    // rocketb = new PropertyCanvasOne(5000, 250, 80, 120, "blue")
    ShowCanvasOne()
}
function ShowCanvasOne(){
    // ClearIntervalCanvasOne = clearInterval(IntervalCanvasOne)
    IntervalCanvasOne = setInterval(ContentCanvasOne, 10)
}
function RunCanvasTwo(){
    document.getElementById("CanvasTwo").style.visibility = "visible";
    document.getElementById("CanvasOne").style.visibility = "hiddden";
    BackgroundCanvasTwo = new PropertyCanvasTwo(0, 0, 1200, 600, "Level1.png", "background")
    jet = new PropertyCanvasTwo(200, 0, 80, 120, "TheJet.png", "image")
    // jet = new PropertyCanvasTwo(200, 0, 80, 120, "red")
    ShowCanvasTwo()
    
}
function ShowCanvasTwo(){
    ClearIntervalCanvasTwo = clearInterval(IntervalCanvasTwo)
    IntervalCanvasTwo = setInterval(ContentCanvasTwo, 10)
}
function PropertyCanvasOne(x, y, width, height, color, type){
    this.x = x
    this.y = y
    this.RocketX = 0
    this.RocketY = 0
    this.BackgroundOneX = 0
    this.BackgroundOneY = 0
    this.width = width
    this.height = height
    this.color = color
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    //to update the property
    this.UpdateCanvasOne = function() {
        ctx = DrawCanvasOne
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
    this.MovementBackgroundCanvasOne = function(){
        this.x += this.BackgroundOneX
        this.y += this.BackgroundOneY
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }
    //to make the all of properti moving
    this.MovementRocket = function(){
        this.x += this.RocketX
        this.y += this.RocketY
        this.hitTop();
        this.hitBottom();
        this.hitRight();
        this.hitLeft();
    }
    this.hitTop = function(){
        var rocktop = this.height - this.height + 50
        if(this.y < rocktop){
            this.y = rocktop
        }
    }
    this.hitBottom = function() {
        var rockbottom = CanvasOneHeight - this.height - 50
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
    }
    this.hitLeft = function(){
        var rockLeft = CanvasOneWidth - this.width
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
}

function PropertyCanvasTwo(x, y, width, height, color, type){
    this.x = x
    this.y = y
    this.JetX = 0
    this.JetY = 0
    this.BackgroundTwoX = 0
    this.BackgroundTwoY = 0
    this.width = width
    this.height = height
    this.color = color
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    //to update the property
    this.UpdateCanvasTwo = function() {
        ctx = DrawCanvasTwo
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
    this.MovementBackgroundCanvasTwo = function(){
        this.x += this.BackgroundTwoX
        this.y += this.BackgroundTwoY
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }
    //to make the all of properti moving
    this.MovementJet = function(){
        this.x += this.JetX
        this.y += this.JetY
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
        var rockbottom = CanvasTwoHeight - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
    }
    this.hitLeft = function(){
        var rockLeft = CanvasTwoWidth - this.width
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
}
function ClearDrawCanvasOne(){
    DrawCanvasOne.clearRect(0, 0, CanvasOneWidth, CanvasOneHeight)
}
function ClearDrawCanvasTwo(){
    DrawCanvasTwo.clearRect(0, 0, CanvasTwoWidth, CanvasTwoHeight)
}

function MoveRocket(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        rocket.RocketX = -5
    }
    else if(keyPressed == right){
        rocket.RocketX = 5
    }
    else if(keyPressed == up){
        rocket.RocketY = -5
    }
    else if(keyPressed == down){
        rocket.RocketY = 5
    }
}
function StopRocket(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        rocket.RocketX = 0
    }
    else if(keyPressed == right){
        rocket.RocketX = 0
    }
    else if(keyPressed == up){
        rocket.RocketY = 0
    }
    else if(keyPressed == down){
        rocket.RocketY = 0
    }
}
function MoveRocketB(event){
    const keyPressed = event.keyCode
    if(keyPressed == a){
        rocket.RocketX = -5
    }
    else if(keyPressed == d){
        rocket.RocketX = 5
    }
    else if(keyPressed == w){
        rocket.RocketY = -5
    }
    else if(keyPressed == s){
        rocket.RocketY = 5
    }
}
function StopRocketB(event){
    const keyPressed = event.keyCode
    if(keyPressed == a){
        rocket.RocketX = 0
    }
    else if(keyPressed == d){
        rocket.RocketX = 0
    }
    else if(keyPressed == w){
        rocket.RocketY = 0
    }
    else if(keyPressed == s){
        rocket.RocketY = 0
    }
}

function MoveJet(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        jet.JetX = -5
    }
    else if(keyPressed == right){
        jet.JetX = 5
    }
    else if(keyPressed == up){
        jet.JetY = -5
    }
    else if(keyPressed == down){
        jet.JetY = 5
    }
}
function StopJet(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        jet.JetX = 0
    }
    else if(keyPressed == right){
        jet.JetX = 0
    }
    else if(keyPressed == up){
        jet.JetY = 0
    }
    else if(keyPressed == down){
        jet.JetY = 0
    }
}

function ContentCanvasOne(){
    ClearDrawCanvasOne()
    BackgroundCanvasOne.BackgroundOneX = -1
    BackgroundCanvasOne.MovementBackgroundCanvasOne()
    BackgroundCanvasOne.UpdateCanvasOne()
    BackgroundTop.BackgroundOneX = -0.5
    BackgroundTop.MovementBackgroundCanvasOne()
    BackgroundTop.UpdateCanvasOne()
    BackgroundDown.BackgroundOneX = -0.5
    BackgroundDown.MovementBackgroundCanvasOne()
    BackgroundDown.UpdateCanvasOne()
    rocket.MovementRocket()
    rocket.UpdateCanvasOne()
    // rocketb.BackgroundOneX = -1
    // rocketb.MovementBackgroundCanvasOne()
    // rocketb.UpdateCanvasOne()
}
function ContentCanvasTwo(){
    ClearDrawCanvasTwo()
    BackgroundCanvasTwo.BackgroundTwoX = -1
    BackgroundCanvasTwo.MovementBackgroundCanvasTwo()
    BackgroundCanvasTwo.UpdateCanvasTwo()
    jet.MovementJet()
    jet.UpdateCanvasTwo()
}