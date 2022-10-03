let DetectLevelOne = document.getElementById("DetectLevelOne")
let DetectLevelTwo = document.getElementById("DetectLevelTwo")
let DetectLevelThree = document.getElementById("DetectLevelThree")

let EmptyTroophyLvlOne = document.getElementById("NoThroophyLvlOne")
let TroophyLvlOne = document.getElementById("ThroophyLvlOne")

let LockedLvlTwo = document.getElementById("LockedLvlTwo")
let TroophyLvlTwo = document.getElementById("ThroophyLvlTwo")
let EmptyTroophyLvlTwo = document.getElementById("NoThroophyLvlTwo")

let LockedLvlThree = document.getElementById("LockedLvlThree")
let EmptyTroophyLvlThree = document.getElementById("NoThroophyLvlThree")
let TroophyLvlThree = document.getElementById("ThroophyLvlThree")

// Level Game Completed
let CompletedLvlOne = document.getElementById("CompletedLevelOne")
let CompletedLvlTwo = document.getElementById("CompletedLevelTwo")
let CompletedLvlThree = document.getElementById("CompletedLevelThree")

// Level Game Locked
let LockedLevelTwo = document.getElementById("LockedLevelTwo")
let LockedLevelThree = document.getElementById("LockedLevelThree")

// Level Game Unlocked
let UnlockLvlOne = document.getElementById("UnlockLvlOne")
let UnlockLvlTwo = document.getElementById("UnlockLvlTwo")
let UnlockLvlThree = document.getElementById("UnlockLvlThree")

let ButtonLevelOne = document.getElementById("BtnLvlOne")
let ButtonLevelTwo = document.getElementById("BtnLvlTwo")
let ButtonLevelThree = document.getElementById("BtnLvlThree")

const left = 37
const right = 39
const up = 38
const down = 40
const w = 87
const a = 65
const s = 83
const d = 68

let DisplayPauseMenu = document.getElementById("DisplayPause")
let PauseBtn = document.getElementById("PauseButton")
let BtnResume = document.getElementById("ResumeButton")
let BtnRestart = document.getElementById("RestartButton")
let BtnMainMenu = document.getElementById("MainMenuButton")



function LevelOneCompleted(){
    DetectLevelOne.innerHTML = "LevelOneCompleted"
}
function LevelTwoCompleted(){
    DetectLevelTwo.innerHTML = "LevelTwoCompleted"  
}
function LevelThreeCompleted(){
    DetectLevelThree.innerHTML = "LevelThreeCompleted"
}
function PlayGame(){
    if(DetectLevelOne.innerHTML == "LevelOneCompleted"){
        ButtonLevelTwo.innerHTML = "Play"
        OneCompleted()
    }
    if(DetectLevelTwo.innerHTML == "LevelTwoCompleted"){
        ButtonLevelThree.innerHTML = "Play"
        TwoCompleted()
    }
    if(DetectLevelThree.innerHTML == "LevelThreeCompleted"){
        ThreeCompleted()
    }
}
function NolCompleted(){
    showEmptyTroophyLvlOne()
    hideTroophyLvlOne()

    showLockedLvlTwo()
    hideEmptyTroophyLvlTwo()
    hideTroophyLvlTwo()

    showLockedLvlThree()
    hideEmptyTroophyLvlThree()
    hideTroophyLvlThree()

    showLockedLevelTwo()
    showLockedLevelThree()

    showUnlockLvlOne()
    hideUnlockLvlTwo()
    hideUnlockLvlThree()

    hideCompletedLvlOne()
    hideCompletedLvlTwo()
    hideCompletedLvlThree()
}
function OneCompleted(){
    hideEmptyTroophyLvlOne()
    showTroophyLvlOne()

    hideLockedLvlTwo()
    showEmptyTroophyLvlTwo()
    hideTroophyLvlTwo()

    showLockedLvlThree()
    hideEmptyTroophyLvlThree()
    hideTroophyLvlThree()

    showUnlockLvlTwo()
    hideLockedLevelTwo()

    showCompletedLvlOne()
}
function TwoCompleted(){
    hideEmptyTroophyLvlOne()
    showTroophyLvlOne()

    hideLockedLvlTwo()
    hideEmptyTroophyLvlTwo()
    showTroophyLvlTwo()

    hideLockedLvlThree()
    showEmptyTroophyLvlThree()
    hideTroophyLvlThree()

    showUnlockLvlThree()
    hideLockedLevelThree()

    showCompletedLvlOne()
    showCompletedLvlTwo()
}
function ThreeCompleted(){
    hideEmptyTroophyLvlOne()
    showTroophyLvlOne()

    hideLockedLvlTwo()
    hideEmptyTroophyLvlTwo()
    showTroophyLvlTwo()

    hideLockedLvlThree()
    hideEmptyTroophyLvlThree()
    showTroophyLvlThree()

    showCompletedLvlOne()
    showCompletedLvlTwo()
    showCompletedLvlThree()
}
function hideEmptyTroophyLvlOne(){
    EmptyTroophyLvlOne.style.visibility = "hidden"
}
function showEmptyTroophyLvlOne(){
    EmptyTroophyLvlOne.style.visibility = "visible"
}
function hideTroophyLvlOne(){
    TroophyLvlOne.style.visibility = "hidden"
}
function showTroophyLvlOne(){
    TroophyLvlOne.style.visibility = "visible"
}
function hideLockedLvlTwo(){
    LockedLvlTwo.style.visibility = "hidden"
}
function showLockedLvlTwo(){
    LockedLvlTwo.style.visibility = "visible"
}
function hideEmptyTroophyLvlTwo(){
    EmptyTroophyLvlTwo.style.visibility = "hidden"
}
function showEmptyTroophyLvlTwo(){
    EmptyTroophyLvlTwo.style.visibility = "visible"
}
function hideTroophyLvlTwo(){
    TroophyLvlTwo.style.visibility = "hidden"
}
function showTroophyLvlTwo(){
    TroophyLvlTwo.style.visibility = "visible"
}
function hideLockedLvlThree(){
    LockedLvlThree.style.visibility = "hidden"
}
function showLockedLvlThree(){
    LockedLvlThree.style.visibility = "visible"
}
function hideEmptyTroophyLvlThree(){
    EmptyTroophyLvlThree.style.visibility = "hidden"
}
function showEmptyTroophyLvlThree(){
    EmptyTroophyLvlThree.style.visibility = "visible"
}
function hideTroophyLvlThree(){
    TroophyLvlThree.style.visibility = "hidden"
}
function showTroophyLvlThree(){
    TroophyLvlThree.style.visibility = "visible"
}
function hideCompletedLvlOne(){
    CompletedLvlOne.style.visibility = "hidden"
}
function showCompletedLvlOne(){
    CompletedLvlOne.style.visibility = "visible"
}
function hideCompletedLvlTwo(){
    CompletedLvlTwo.style.visibility = "hidden"
}
function showCompletedLvlTwo(){
    CompletedLvlTwo.style.visibility = "visible"
}
function hideCompletedLvlThree(){
    CompletedLvlThree.style.visibility = "hidden"
}
function showCompletedLvlThree(){
    CompletedLvlThree.style.visibility = "visible"
}
function hideLockedLevelTwo(){
    LockedLevelTwo.style.visibility = "hidden"
}
function showLockedLevelTwo(){
    LockedLevelTwo.style.visibility = "visible"
}
function hideLockedLevelThree(){
    LockedLevelThree.style.visibility = "hidden"
}
function showLockedLevelThree(){
    LockedLevelThree.style.visibility = "visible"
}
function hideUnlockLvlOne(){
    UnlockLvlOne.style.visibility = "hidden"
}
function showUnlockLvlOne(){
    UnlockLvlOne.style.visibility = "visible"
}
function hideUnlockLvlTwo(){
    UnlockLvlTwo.style.visibility = "hidden"
}
function showUnlockLvlTwo(){
    UnlockLvlTwo.style.visibility = "visible"
}
function hideUnlockLvlThree(){
    UnlockLvlThree.style.visibility = "hidden"
}
function showUnlockLvlThree(){
    UnlockLvlThree.style.visibility = "visible"
}

function CanvasGame(){
    window.scrollTo({
        top: 646,
        left: 1366,
    })
}
function CanvasGameLvlOne(){
    if(ButtonLevelOne.innerHTML == "Play"){
        CanvasGame()
        LevelOneGame()
        StartLevelOne()
    }
}
function CanvasGameLvlTwo(){
    if(ButtonLevelTwo.innerHTML == "Play"){
        CanvasGame()
    }
}
function CanvasGameLvlThree(){
    if(ButtonLevelThree.innerHTML == "Play"){
        CanvasGame()
    }
}
//Display Finish Level One
let DisplayFinishLevelMenu = document.getElementById("DisplayFinishLevel")
let NextLevelBtn = document.getElementById("PlayNextLevel")
let MainMenuFinish = document.getElementById("MainMenuFinish")
let TittleCompletedLevel = document.getElementById("TittleCompletedLevel")
function showTittleCompletedLevel(){
    TittleCompletedLevel.style.visibility = "visible"
}
function hideTittleCompletedLevel(){
    TittleCompletedLevel.style.visibility = "hidden"
}
function DisplayFinishLevelOne(){
    showTittleCompletedLevel()
    DisplayFinishLevelMenu.showModal()
    DisplayFinishLevelMenu.classList.toggle("DisplayFinishLevel")
}
NextLevelBtn.onclick = function(){
    hideTittleCompletedLevel()
    DisplayFinishLevelMenu.close()
    DisplayFinishLevelMenu.classList.toggle("DisplayFinishLevel")
    StopLevelOne()
    // Start Function Level Two
}
MainMenuFinish.onclick = function(){
    hideTittleCompletedLevel()
    DisplayFinishLevelMenu.close()
    DisplayFinishLevelMenu.classList.toggle("DisplayFinishLevel")
    StopLevelOne()
    MainMenu()
}

//Display Game Over
let DisplayGameOverMenu = document.getElementById("DisplayGameOver")
let MainMenuBtn = document.getElementById("MainMenuOver")
let PlayAgainBtn = document.getElementById("PlayAgainOver")
let TittleGameOver = document.getElementById("TittleGameOver")
function showTittleGameOver(){
    TittleGameOver.style.visibility = "visible"
}
function hideTittleGameOver(){
    TittleGameOver.style.visibility = "hidden"
}
function DisplayGameOverLevelOne(){
    showTittleGameOver()
    DisplayGameOverMenu.showModal()
    DisplayGameOverMenu.classList.toggle("DisplayGameOver")
    StopLevelOne()
}
MainMenuBtn.onclick = function(){
    hideTittleGameOver()
    DisplayGameOverMenu.close()
    DisplayGameOverMenu.classList.toggle("DisplayGameOver")
    StopLevelOne()
    MainMenu()
}
PlayAgainBtn.onclick = function(){
    hideTittleGameOver()
    DisplayGameOverMenu.close()
    DisplayGameOverMenu.classList.toggle("DisplayGameOver")
    StopLevelOne()
    RestartLevelOne()
}

//DisplayPauseGame
let TittlePausedGame = document.getElementById("TittleGamePause")
function showTittlePausedGame(){
    TittlePausedGame.style.visibility = "visible"
}
function hideTittlePausedGame(){
    TittlePausedGame.style.visibility = "hidden"
}
//Button Pause
PauseBtn.onclick = function(){
    showTittlePausedGame()
    DisplayPauseMenu.showModal()
    DisplayPauseMenu.classList.toggle("DisplayPause")
    PauseLevelOne()
}
//Button Resume
BtnResume.onclick = function(){
    hideTittlePausedGame()
    DisplayPauseMenu.close()
    DisplayPauseMenu.classList.toggle("DisplayPause")
    ResumeLevelOne()
}
// Button Restart
BtnRestart.onclick = function(){
    hideTittlePausedGame()
    DisplayPauseMenu.close()
    DisplayPauseMenu.classList.toggle("DisplayPause")
    StopLevelOne()
    RestartLevelOne()
}
// Button Main Menu
BtnMainMenu.onclick = function(){
    hideTittlePausedGame()
    DisplayPauseMenu.close()
    DisplayPauseMenu.classList.toggle("DisplayPause")
    StopLevelOne()
    MainMenu()
}

let CanvasLevel = document.querySelector("#CanvasLevelGame")
let DrawLevel = CanvasLevel.getContext("2d")
let CanvasLevelWidth = CanvasLevel.width
let CanvasLevelHeight = CanvasLevel.height

let LevelOne
//GameInterval
function GameRunning(){
    LevelOneCanvas()
}
//Play Game
function StartLevelOne(){
    if(LevelOne) clearInterval(LevelOne)
        LevelOne = setInterval(GameRunning, 10)
}
//Pause Game
function PauseLevelOne(){
    clearInterval(LevelOne)
}
//Resume Game
function ResumeLevelOne(){
    if (LevelOne) clearInterval(LevelOne)
        LevelOne = setInterval(GameRunning, 10)
}
//Stop Game
function StopLevelOne(){
    if (LevelOne) clearInterval(LevelOne)
    LevelOneGame()
}
//Restart Game
function RestartLevelOne(){
    if (LevelOne) clearInterval(LevelOne)
    LevelOne = setInterval(GameRunning, 10)
    LevelOneCanvas()
}


function LevelOneGame(){
    BackgroundLevel = new Object(0, 0, 1200, 600, "Backgorund Level.png", "background")
    Moon = new Object(0, 0, 150, 150, "Moon.png", "image")
    
    LightSaber1 = new Object(1200, 260, 120, 340, "LightSaberV.png", "image")
    LightSaber2 = new Object(1500, 0, 120, 340, "LightSaberVM.png", "image")
    LightSaber3 = new Object(1800, 260, 120, 340, "LightSaberV.png", "image")
    LightSaber4 = new Object(2100, 0, 120, 340, "LightSaberVM.png", "image")
    LightSaber5 = new Object(2400, 260, 120, 340, "LightSaberV.png", "image")
    
    LightSaber6 = new Object(2700, 0, 1500, 120, "LightSaberHS.png", "image")
    LightSaber7 = new Object(2700, 240, 1500, 120, "LightSaberHS.png", "image")
    LightSaber8 = new Object(2700, 480, 1500, 120, "LightSaberHS.png", "image")
    // Meteor1 = new Object(4000, 360, 150, 150, "Meteor.png", "image")
    Meteor2 = new Object(4000, 120, 150, 150, "Meteor.png", "image")

    LightSaber11 = new Object(4500, 350, 120, 250, "LightSaberGap1.png", "image")
    LightSaber12 = new Object(4500, 0, 120, 250, "LightSaberGap2.png" , "image")

    LightSaber13 = new Object(4800, 250, 120, 350,  "LightSaberGap3.png", "image")
    LightSaber14 = new Object(4800, 0, 120, 150,  "LightSaberGap4.png", "image")

    LightSaber15 = new Object(5100, 450, 120, 150, "LightSaberGap5.png", "image")
    LightSaber16 = new Object(5100, 0, 120, 350, "LightSaberGap6.png", "image")

    LightSaber17 = new Object(5400, 130, 120, 470, "LightSaberGap7.png", "image")
    LightSaber18 = new Object(5700, 0, 120, 470, "LightSaberGap8.png", "image")
    
    LightSaber9 = new Object(6100, 120, 1500, 120, "LightSaberHS.png", "image")
    LightSaber10 = new Object(6100, 360, 1500, 120, "LightSaberHS.png", "image")
    // Meteor3 = new Object(7450, 20, 150, 150, "Meteor.png", "image")
    Meteor4 = new Object(7450, 240, 150, 150, "Meteor.png", "image")
    Meteor5 = new Object(7450, 450, 150, 150, "Meteor.png", "image")

    

    // FinishLevelOne = new Object(500, 25, 450, 550, "Finish.png", "image")
    FinishLevelOne = new Object(8000, 25, 450, 550, "Finish.png", "image")

    //Detection Character
    if(BtnCharOne.innerHTML == "Selected"){
        //Detection Controller Key Arrow
        if(Detectkey.innerHTML == "Selected"){
            TCharArrow = new Object(0, 250, 150, 75, "T-01 Jet.png", "image")
            // TCharArrow = new Object(0, 250, 150, 75, "red")
        }
        //Detection Controller Wasd
        if(Detectwasd.innerHTML == "Selected"){
            TCharWasd = new Object(0, 250, 150, 75, "T-01 Jet.png", "image")
        }
    }
    //Detection Character
    if(BtnCharTwo.innerHTML == "Selected"){
        if(Detectkey.innerHTML == "Selected"){
            TCharArrow = new Object(0, 250, 150, 75, "T-02 Ufo.png", "image")
        }
        if(Detectwasd.innerHTML == "Selected"){
            TCharWasd = new Object(0, 250, 150, 75, "T-02 Ufo.png", "image")
        }
    }
}

function Object(x, y, width, height, color, type){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.color = color
    this.angle = 0
    this.loopX = 0
    this.loopY = 0
    this.GoX = 0
    this.GoY = 0
    this.speed = 0;
    this.angle = 0;
    this.moveAngle = 0;
    this.type = type
    //Detection Type of object
    if (type == "image" || type == "background"){
        this.image = new Image()
        this.image.src = color
    }
    //To add Object
    this.UpdateObject = function(){
        ctx = DrawLevel
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
    // Background Looping
    this.BackgroundLoop = function(){
        this.x += this.loopX
        this.y += this.loopY
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }
    //Movement Character
    this.Movement = function(){
        this.x += this.GoX
        this.y += this.GoY
        this.LimitTop();
        this.LimitBottom();
        this.LimitRight();
        this.LimitLeft();
    }
    // Limmit Top of Canvas
    this.LimitTop = function(){
        var rocktop = this.height - this.height
        if(this.y < rocktop){
            this.y = rocktop
        }
    }
    // Limmit Bottom of Canvas
    this.LimitBottom = function() {
        var rockbottom = CanvasLevelHeight - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
        }
    }
    // Limmit Left of Canvas
    this.LimitLeft = function(){
        var rockLeft = CanvasLevelWidth - this.width
        // var rockLeft = 600 - this.width
        if(this.x > rockLeft){
            this.x = rockLeft
        }
    }
    // Limmit Right of Canvas
    this.LimitRight = function(){
    	var rockRight = this.width - this.width
        if (this.x < rockRight) {
        	this.x = rockRight
        }
    }
    //To add Object
    //Game Over Function
    this.GameOverLight = function(otherobj){
        var myleft = this.x
        var myright = this.x + (this.width) - 40
        var mytop = this.y
        var mybottom = this.y + (this.height) - 30
        var otherleft = otherobj.x
        var otherright = otherobj.x + (otherobj.width) - 40
        var othertop = otherobj.y
        var otherbottom = otherobj.y + (otherobj.height) - 30
        var LightSaber = true
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            LightSaber = false;
        }
        return LightSaber
    }
    this.FinishedLevel = function(theEnd){
        var leftObj = this.x
        var rightObj = this.x + (this.width) - 40
        var topObj = this.y
        var bottomObj = this.y + (this.height) - 30
        var theleft = theEnd.x
        var theright = theEnd.x + (theEnd.width) - 40
        var thetop = theEnd.y
        var thebottom = theEnd.y + (theEnd.height) - 30
        var Ending = true
        if ((bottomObj < thetop) || (topObj > thebottom) || (rightObj < theleft) || (leftObj > theright)) {
            Ending = false;
        }
        return Ending
    }
}
//Clear Canvas
function ClearDrawLevel(){
    DrawLevel.clearRect(0, 0, CanvasLevelWidth, CanvasLevelHeight)
}

//All Content Level One
function LevelOneCanvas(){
    ClearDrawLevel()
    BackgroundLevel.loopX = -1
    BackgroundLevel.BackgroundLoop()
    BackgroundLevel.UpdateObject()
    Moon.GoX = 0.15
    Moon.Movement()
    Moon.UpdateObject()
    LightSaber1.UpdateObject()
    LightSaber1.x += -1
    LightSaber2.UpdateObject()
    LightSaber2.x += -1
    LightSaber3.UpdateObject()
    LightSaber3.x += -1
    LightSaber4.UpdateObject()
    LightSaber4.x += -1
    LightSaber5.UpdateObject()
    LightSaber5.x += -1

    LightSaber6.UpdateObject()
    LightSaber6.x += -1
    LightSaber7.UpdateObject()
    LightSaber7.x += -1
    LightSaber8.UpdateObject()
    LightSaber8.x += -1
    LightSaber9.UpdateObject()
    LightSaber9.x += -1
    LightSaber10.UpdateObject()
    LightSaber10.x += -1

    LightSaber11.UpdateObject()
    LightSaber11.x += -1
    LightSaber12.UpdateObject()
    LightSaber12.x += -1
    LightSaber13.UpdateObject()
    LightSaber13.x += -1
    LightSaber14.UpdateObject()
    LightSaber14.x += -1
    LightSaber15.UpdateObject()
    LightSaber15.x += -1
    LightSaber16.UpdateObject()
    LightSaber16.x += -1
    LightSaber17.UpdateObject()
    LightSaber17.x += -1
    LightSaber18.UpdateObject()
    LightSaber18.x += -1


    // Meteor1.UpdateObject()
    // Meteor1.x += -1
    Meteor2.UpdateObject()
    Meteor2.x += -1
    // Meteor3.UpdateObject()
    // Meteor3.x += -1
    Meteor4.UpdateObject()
    Meteor4.x += -1
    Meteor5.UpdateObject()
    Meteor5.x += -1


    FinishLevelOne.UpdateObject()
    FinishLevelOne.x += -1
    
    if(BtnCharOne.innerHTML == "Selected"){
        if(Detectkey.innerHTML == "Selected"){
            TCharArrow.Movement()
            TCharArrow.UpdateObject()
            //Detection Game Over
            if (
                TCharArrow.GameOverLight(LightSaber1) || 
                TCharArrow.GameOverLight(LightSaber2) || 
                TCharArrow.GameOverLight(LightSaber3) || 
                TCharArrow.GameOverLight(LightSaber4) || 
                TCharArrow.GameOverLight(LightSaber5) || 
                TCharArrow.GameOverLight(LightSaber6) || 
                TCharArrow.GameOverLight(LightSaber7) || 
                TCharArrow.GameOverLight(LightSaber8) || 
                TCharArrow.GameOverLight(LightSaber9) || 
                TCharArrow.GameOverLight(LightSaber10) ||
                TCharArrow.GameOverLight(LightSaber11) || 
                TCharArrow.GameOverLight(LightSaber12) || 
                TCharArrow.GameOverLight(LightSaber13) || 
                TCharArrow.GameOverLight(LightSaber14) || 
                TCharArrow.GameOverLight(LightSaber15) || 
                TCharArrow.GameOverLight(LightSaber16) || 
                TCharArrow.GameOverLight(LightSaber17) || 
                TCharArrow.GameOverLight(LightSaber18) || 
                // TCharArrow.GameOverLight(Meteor1) ||
                TCharArrow.GameOverLight(Meteor2) ||
                // TCharArrow.GameOverLight(Meteor3) ||
                TCharArrow.GameOverLight(Meteor4) ||
                TCharArrow.GameOverLight(Meteor5) 
            )
            {
                DisplayGameOverLevelOne()
            }
            if (
                TCharArrow.FinishedLevel(FinishLevelOne)
            )
            {
                DisplayFinishLevelOne()
                StopLevelOne()
                DetectLevelOne.innerHTML = "LevelOneCompleted"
                ButtonLevelTwo.innerHTML = "Play"
            }
        }
        if(Detectwasd.innerHTML == "Selected"){
            TCharWasd.Movement()
            TCharWasd.UpdateObject()
            if (
                TCharWasd.GameOverLight(LightSaber1) || 
                TCharWasd.GameOverLight(LightSaber2) || 
                TCharWasd.GameOverLight(LightSaber3) || 
                TCharWasd.GameOverLight(LightSaber4) || 
                TCharWasd.GameOverLight(LightSaber5) || 
                TCharWasd.GameOverLight(LightSaber6) || 
                TCharWasd.GameOverLight(LightSaber7) || 
                TCharWasd.GameOverLight(LightSaber8) || 
                TCharWasd.GameOverLight(LightSaber9) || 
                TCharWasd.GameOverLight(LightSaber10) ||
                TCharWasd.GameOverLight(LightSaber11) || 
                TCharWasd.GameOverLight(LightSaber12) || 
                TCharWasd.GameOverLight(LightSaber13) || 
                TCharWasd.GameOverLight(LightSaber14) || 
                TCharWasd.GameOverLight(LightSaber15) || 
                TCharWasd.GameOverLight(LightSaber16) || 
                TCharWasd.GameOverLight(LightSaber17) || 
                TCharWasd.GameOverLight(LightSaber18) || 
                // TCharWasd.GameOverLight(Meteor1) ||
                TCharWasd.GameOverLight(Meteor2) ||
                // TCharWasd.GameOverLight(Meteor3) ||
                TCharWasd.GameOverLight(Meteor4) ||
                TCharWasd.GameOverLight(Meteor5) 
            )
            {
                DisplayGameOverLevelOne()
            }
            if (
                TCharWasd.FinishedLevel(FinishLevelOne)
            )
            {
                DisplayFinishLevelOne()
                StopLevelOne()
                DetectLevelOne.innerHTML = "LevelOneCompleted"
                ButtonLevelTwo.innerHTML = "Play"
            }
        }
    }

    if(BtnCharTwo.innerHTML == "Selected"){
        if(Detectkey.innerHTML == "Selected"){
            TCharArrow.Movement()
            TCharArrow.UpdateObject()
            if (
                TCharArrow.GameOverLight(LightSaber1) || 
                TCharArrow.GameOverLight(LightSaber2) || 
                TCharArrow.GameOverLight(LightSaber3) || 
                TCharArrow.GameOverLight(LightSaber4) || 
                TCharArrow.GameOverLight(LightSaber5) || 
                TCharArrow.GameOverLight(LightSaber6) || 
                TCharArrow.GameOverLight(LightSaber7) || 
                TCharArrow.GameOverLight(LightSaber8) || 
                TCharArrow.GameOverLight(LightSaber9) || 
                TCharArrow.GameOverLight(LightSaber10) ||
                TCharArrow.GameOverLight(LightSaber11) || 
                TCharArrow.GameOverLight(LightSaber12) || 
                TCharArrow.GameOverLight(LightSaber13) || 
                TCharArrow.GameOverLight(LightSaber14) || 
                TCharArrow.GameOverLight(LightSaber15) || 
                TCharArrow.GameOverLight(LightSaber16) || 
                TCharArrow.GameOverLight(LightSaber17) || 
                TCharArrow.GameOverLight(LightSaber18) || 
                // TCharArrow.GameOverLight(Meteor1) ||
                TCharArrow.GameOverLight(Meteor2) ||
                // TCharArrow.GameOverLight(Meteor3) ||
                TCharArrow.GameOverLight(Meteor4) ||
                TCharArrow.GameOverLight(Meteor5) 
            )
            {
                DisplayGameOverLevelOne()
            }
            if (
                TCharArrow.FinishedLevel(FinishLevelOne)
            )
            {
                DisplayFinishLevelOne()
                StopLevelOne()
                DetectLevelOne.innerHTML = "LevelOneCompleted"
                ButtonLevelTwo.innerHTML = "Play"
            }
        }
        if(Detectwasd.innerHTML == "Selected"){
            TCharWasd.Movement()
            TCharWasd.UpdateObject()
            if (
                TCharWasd.GameOverLight(LightSaber1) || 
                TCharWasd.GameOverLight(LightSaber2) || 
                TCharWasd.GameOverLight(LightSaber3) || 
                TCharWasd.GameOverLight(LightSaber4) || 
                TCharWasd.GameOverLight(LightSaber5) || 
                TCharWasd.GameOverLight(LightSaber6) || 
                TCharWasd.GameOverLight(LightSaber7) || 
                TCharWasd.GameOverLight(LightSaber8) || 
                TCharWasd.GameOverLight(LightSaber9) || 
                TCharWasd.GameOverLight(LightSaber10) ||
                TCharWasd.GameOverLight(LightSaber11) || 
                TCharWasd.GameOverLight(LightSaber12) || 
                TCharWasd.GameOverLight(LightSaber13) || 
                TCharWasd.GameOverLight(LightSaber14) || 
                TCharWasd.GameOverLight(LightSaber15) || 
                TCharWasd.GameOverLight(LightSaber16) || 
                TCharWasd.GameOverLight(LightSaber17) || 
                TCharWasd.GameOverLight(LightSaber18) || 
                // TCharWasd.GameOverLight(Meteor1) ||
                TCharWasd.GameOverLight(Meteor2) ||
                // TCharWasd.GameOverLight(Meteor3) ||
                TCharWasd.GameOverLight(Meteor4) ||
                TCharWasd.GameOverLight(Meteor5) 
            )
            {
                DisplayGameOverLevelOne()
            }
            if (
                TCharWasd.FinishedLevel(FinishLevelOne)
            )
            {
                DisplayFinishLevelOne()
                StopLevelOne()
                DetectLevelOne.innerHTML = "LevelOneCompleted"
                ButtonLevelTwo.innerHTML = "Play"
            }
        }
    }
}


window.addEventListener("keydown", ArrowMoveTchar)
window.addEventListener("keyup", ArrowStopTchar)
window.addEventListener("keydown", WasdMoveTchar)
window.addEventListener("keyup", WasdStopTchar)
//Movement Controller Key Arrow
function ArrowMoveTchar(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        TCharArrow.GoX = -5
    }
    else if(keyPressed == right){
        TCharArrow.GoX = 5
    }
    else if(keyPressed == up){
        TCharArrow.GoY = -5
    }
    else if(keyPressed == down){
        TCharArrow.GoY = 5
    }
}
//Stop Controller Key Arrow
function ArrowStopTchar(event){
    const keyPressed = event.keyCode
    if(keyPressed == left){
        TCharArrow.GoX = 0
    }
    else if(keyPressed == right){
        TCharArrow.GoX = 0
    }
    else if(keyPressed == up){
        TCharArrow.GoY = 0
    }
    else if(keyPressed == down){
        TCharArrow.GoY = 0
    }
}
//Movement Controller Key Wasd
function WasdMoveTchar(e){
    const keyPressed = e.keyCode
    if(keyPressed == a){
        TCharWasd.GoX = -5
    }
    else if(keyPressed == d){
        TCharWasd.GoX = 5
    }
    else if(keyPressed == w){
        TCharWasd.GoY = -5
    }
    else if(keyPressed == s){
        TCharWasd.GoY = 5
    }
}
//Stop Controller Key Wasd
function WasdStopTchar(e){
    const keyPressed = e.keyCode
    if(keyPressed == a){
        TCharWasd.GoX = 0
    }
    else if(keyPressed == d){
        TCharWasd.GoX = 0
    }
    else if(keyPressed == w){
        TCharWasd.GoY = 0
    }
    else if(keyPressed == s){
        TCharWasd.GoY = 0
    }
}