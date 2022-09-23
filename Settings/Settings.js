let Detectkey = document.getElementById("keySelect")
let Detectwasd = document.getElementById("wasdSelect")

function volumeMusic(){
    let volMusic = document.getElementById("MusicVolume").value
    document.getElementById("VolumeMusic").innerHTML = volMusic + "%"
}
function volumeSound(){
    let volSound = document.getElementById("SoundVolume").value
    document.getElementById("VolumeSound").innerHTML = volSound + "%"
}

function KeyWasd(){
    document.getElementById("wasdSelect").innerHTML = "Selected"
    document.getElementById("keySelect").innerHTML = "Select"
    document.getElementById("TittleWASD").style.backgroundColor = "blue"
    document.getElementById("TittleKeyArrow").style.backgroundColor = "black"
    document.getElementById("WASDButton").style.border = "10px solid blue"
    document.getElementById("KEYButton").style.border = "10px solid black"
}
function KeyArrow(){
    document.getElementById("keySelect").innerHTML = "Selected"
    document.getElementById("wasdSelect").innerHTML = "Select"
    document.getElementById("TittleKeyArrow").style.backgroundColor = "blue"
    document.getElementById("TittleWASD").style.backgroundColor = "black"
    document.getElementById("KEYButton").style.border = "10px solid blue"
    document.getElementById("WASDButton").style.border = "10px solid black"
}

