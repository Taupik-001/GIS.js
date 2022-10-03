let CanvasHome = document.getElementById("CanvasHome")
let TittleGame = document.getElementById("TittleGame")
let PlayGameBtn = document.getElementById("PlayGame")
let ChooseCharacterBtn = document.getElementById("ChooseCharacter")
let SettingsBtn = document.getElementById("Settings")
let AboutBtn = document.getElementById("About")
let MoreGameBtn = document.getElementById("MoreGame")
function LoadWindow(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    // Play Game
    NolCompleted()
    LevelOneGame()
    // StartLevelOne()
    //Game Over
    hideTittleGameOver()
    //Paused Game
    hideTittlePausedGame()
    //Finish Level
    hideTittleCompletedLevel()

    // Choose Character
    SelectCharacterOne()
    
}
function MainMenu(){
    window.scrollTo({
        top: 0,
        left: 0,
    })
}
PlayGameBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 646,
        left: 0,
    })
    PlayGame()
})
ChooseCharacterBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 1292,
        left: 0,
    })
})
SettingsBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 1938,
        left: 0,
    })
})
AboutBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 2584,
        left: 0,
    })
})
MoreGameBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 3230,
        left: 0,
    })
})