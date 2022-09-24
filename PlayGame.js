let DetectLevelOne = document.getElementById("DetectLevelOne")
let DetectLevelTwo = document.getElementById("DetectLevelTwo")
let DetectLevelThree = document.getElementById("DetectLevelThree")
function PlayGame(){
    if(DetectLevelOne.innerHTML == "LevelOneCompleted"){
        OneCompleted()
    }
    if(DetectLevelTwo.innerHTML == "LevelTwoCompleted"){
        TwoCompleted()
    }
    if(DetectLevelThree.innerHTML == "LevelThreeCompleted"){
        ThreeCompleted()
    }
}
function LevelOneCompleted(){
    DetectLevelOne.innerHTML = "LevelOneCompleted"
    
}
function LevelTwoCompleted(){
    DetectLevelTwo.innerHTML = "LevelTwoCompleted"
    
}
function LevelThreeCompleted(){
    DetectLevelThree.innerHTML = "LevelThreeCompleted"
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
    document.getElementById("BtnLevelOne").style.backgroundImage = "url('Level One.png')"
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
}

let EmptyTroophyLvlOne = document.getElementById("NoThroophyLvlOne")
function hideEmptyTroophyLvlOne(){
    EmptyTroophyLvlOne.style.visibility = "hidden"
}
function showEmptyTroophyLvlOne(){
    EmptyTroophyLvlOne.style.visibility = "visible"
}

let TroophyLvlOne = document.getElementById("ThroophyLvlOne")
function hideTroophyLvlOne(){
    TroophyLvlOne.style.visibility = "hidden"
}
function showTroophyLvlOne(){
    TroophyLvlOne.style.visibility = "visible"
}

let LockedLvlTwo = document.getElementById("LockedLvlTwo")
function hideLockedLvlTwo(){
    LockedLvlTwo.style.visibility = "hidden"
}
function showLockedLvlTwo(){
    LockedLvlTwo.style.visibility = "visible"
}

let EmptyTroophyLvlTwo = document.getElementById("NoThroophyLvlTwo")
function hideEmptyTroophyLvlTwo(){
    EmptyTroophyLvlTwo.style.visibility = "hidden"
}
function showEmptyTroophyLvlTwo(){
    EmptyTroophyLvlTwo.style.visibility = "visible"
}

let TroophyLvlTwo = document.getElementById("ThroophyLvlTwo")
function hideTroophyLvlTwo(){
    TroophyLvlTwo.style.visibility = "hidden"
}
function showTroophyLvlTwo(){
    TroophyLvlTwo.style.visibility = "visible"
}

let LockedLvlThree = document.getElementById("LockedLvlThree")
function hideLockedLvlThree(){
    LockedLvlThree.style.visibility = "hidden"
}
function showLockedLvlThree(){
    LockedLvlThree.style.visibility = "visible"
}

let EmptyTroophyLvlThree = document.getElementById("NoThroophyLvlThree")
function hideEmptyTroophyLvlThree(){
    EmptyTroophyLvlThree.style.visibility = "hidden"
}
function showEmptyTroophyLvlThree(){
    EmptyTroophyLvlThree.style.visibility = "visible"
}

let TroophyLvlThree = document.getElementById("ThroophyLvlThree")
function hideTroophyLvlThree(){
    TroophyLvlThree.style.visibility = "hidden"
}
function showTroophyLvlThree(){
    TroophyLvlThree.style.visibility = "visible"
}
